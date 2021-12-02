package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.ImageNotFound;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.PropertyService;
import br.com.queerfy.backend.utils.TxtConverter;
import com.microsoft.sqlserver.jdbc.SQLServerException;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import java.io.*;
import java.nio.file.Files;
import java.util.List;

@RestController
@RequestMapping("properties")
public class PropertyController {

    @Autowired
    private PropertyService service;

    @Autowired
    private TxtConverter txtConverter;

    @GetMapping("/undo/{id}")
    public ResponseEntity undoProperty(Integer id) throws UserAlreadyExistsException {
        return ResponseEntity.status(200).body(service.undoProperty(id));
    }

    @PostMapping("/import")
    public ResponseEntity importTxt(@RequestBody MultipartFile file) throws IOException, UserAlreadyExistsException {
        byte[] data = file.getBytes();
        FileOutputStream out = new FileOutputStream("properties.txt");
        out.write(data);
        List<PropertyDTO> listDTO =  txtConverter.leArquivoTxt("properties.txt");
        for (PropertyDTO propertyDTO : listDTO){
            service.create(propertyDTO);
        }
        PrintWriter writer = new PrintWriter("properties.txt");
        writer.print("");
        writer.close();

        return ResponseEntity.status(200).body("Leu");
    }
    @PatchMapping("/image1/{propertyId}")
    public ResponseEntity postImage1(@PathVariable Integer propertyId, @RequestBody MultipartFile image) throws IOException {
        return ResponseEntity.status(200).body(service.insertImage1(propertyId, image));
    }
    @PatchMapping("/image2/{propertyId}")
    public ResponseEntity postImage2(@PathVariable Integer propertyId, @RequestBody MultipartFile image) throws IOException {
        return ResponseEntity.status(200).body(service.insertImage2(propertyId, image));
    }
    @PatchMapping("/image3/{propertyId}")
    public ResponseEntity postImage3(@PathVariable Integer propertyId, @RequestBody MultipartFile image) throws IOException {
        return ResponseEntity.status(200).body(service.insertImage3(propertyId, image));
    }
    @PatchMapping("/image4/{propertyId}")
    public ResponseEntity postImage4(@PathVariable Integer propertyId, @RequestBody MultipartFile image) throws IOException {
        return ResponseEntity.status(200).body(service.insertImage4(propertyId, image));
    }
    @PatchMapping("/image5/{propertyId}")
    public ResponseEntity postImage5(@PathVariable Integer propertyId, @RequestBody MultipartFile image) throws IOException {
        return ResponseEntity.status(200).body(service.insertImage5(propertyId, image));
    }


    @GetMapping("/image1/{id}")
    public ResponseEntity getImage1(@PathVariable Integer id) throws ImageNotFound {
        return ResponseEntity.status(200).header("content-type", "image/jpeg")
                .body(service.getImage1(id));
    }
    @GetMapping("/image2/{id}")
    public ResponseEntity getImage2(@PathVariable Integer id) throws ImageNotFound {
        return ResponseEntity.status(200).header("content-type", "image/jpeg")
                .body(service.getImage2(id));
    }
    @GetMapping("/image3/{id}")
    public ResponseEntity getImage3(@PathVariable Integer id) throws ImageNotFound {
        return ResponseEntity.status(200).header("content-type", "image/jpeg")
                .body(service.getImage3(id));
    }
    @GetMapping("/image4/{id}")
    public ResponseEntity getImage4(@PathVariable Integer id) throws ImageNotFound {
        return ResponseEntity.status(200).header("content-type", "image/jpeg")
                .body(service.getImage4(id));
    }
    @GetMapping("/image5/{id}")
    public ResponseEntity getImage5(@PathVariable Integer id) throws ImageNotFound {
        return ResponseEntity.status(200).header("content-type", "image/jpeg")
                .body(service.getImage5(id));
    }

    @GetMapping("/space/{spaceType}")
    public ResponseEntity<List<PropertyDTO>> getAllPropertiesFromCertainSpace(@PathVariable String spaceType){
        List<PropertyDTO> propertyDTOList = service.allPropertyFromSpaceType(spaceType);
        if(!propertyDTOList.isEmpty()){
            return ResponseEntity.status(200).body(propertyDTOList);
        }else{
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping("/city/{city}")
    public ResponseEntity<List<PropertyDTO>> getAllPropertiesFromCertainCity(@PathVariable String city){
        List<PropertyDTO> propertyDTOList = service.allPropertyFromCity(city);
        if(!propertyDTOList.isEmpty()){
            return ResponseEntity.status(200).body(propertyDTOList);
        }else{
            return ResponseEntity.status(404).build();
        }
    }

    @PostMapping
    public PropertyDTO create(@RequestBody @Valid PropertyDTO propertyDTO) throws UserAlreadyExistsException, UserNotFoundException {
        return service.create(propertyDTO);
    }
    @PutMapping("/{id}")
    public ResponseEntity<PropertyDTO> update(@PathVariable Integer id, @RequestBody PropertyDTO dto) throws UserNotFoundException {
        dto = service.updateProperty(id, dto);
        return ResponseEntity.status(200).body(dto);
    }

    @GetMapping
    public ResponseEntity<List<PropertyDTO>> getAllProperties(){
        return ResponseEntity.status(200).body(service.getAllProperties());
    }
    @GetMapping("/{id}")
    public ResponseEntity<PropertyDTO> getPropertyById(@PathVariable Integer id) throws UserNotFoundException {
        return ResponseEntity.status(200).body(service.getPropertyById(id));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deletePropertyById(@PathVariable Integer id) throws UserNotFoundException {
        service.deleteProperty(id);
        return ResponseEntity.status(201).build();

    }

    @GetMapping("/txt")
    public ResponseEntity<Resource> getPropertyTxt() throws FileNotFoundException {

        List<PropertyDTO> lista = service.getAllProperties();
        txtConverter.gravaArquivoTxt(lista, "propriedades");
        File file = new File("propriedades");

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=propriedades.txt");
        headers.add(HttpHeaders.CACHE_CONTROL, "no-cache, no-store, must-revalidate");
        headers.add(HttpHeaders.PRAGMA, "no-cache");
        headers.add(HttpHeaders.EXPIRES, "0");
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(resource);
    }
}
