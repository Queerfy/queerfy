package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.PropertyService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("properties")
public class PropertyController {

    @Autowired
    private PropertyService service;

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
    public ResponseEntity deletePropertyById(@PathVariable Integer id) throws UserNotFoundException{
        service.deleteProperty(id);
        return ResponseEntity.status(201).build();
    }
}
