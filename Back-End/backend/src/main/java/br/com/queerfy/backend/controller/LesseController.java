package br.com.queerfy.backend.controller;

import br.com.queerfy.backend.dto.AdressesDTO;
import br.com.queerfy.backend.dto.LesseDTO;
import br.com.queerfy.backend.dto.ResponseHandler;
import br.com.queerfy.backend.entities.Adresses;
import br.com.queerfy.backend.entities.Lesse;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.AdressRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import br.com.queerfy.backend.services.CreateAdressesService;
import br.com.queerfy.backend.services.CreateUserService;
import br.com.queerfy.backend.services.FindByIdUserService;
import br.com.queerfy.backend.services.UpdateUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/lesse")
public class LesseController {

    private final UserRepository userRepository;
    private final AdressRepository adressRepository;

    public LesseController(UserRepository userRepository, AdressRepository adressRepository) {
        this.userRepository = userRepository;
        this.adressRepository = adressRepository;
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody LesseDTO lesseDTO) {
        try {

            CreateUserService createUserService = new CreateUserService(userRepository);

            Lesse lesse = createUserService.execute(lesseDTO);

            return ResponseHandler.generateResponse("Lesse Created Sucessfully!", HttpStatus.CREATED, lesse);

        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @PostMapping("/adresses")
    public ResponseEntity<Object> createAdressUser(@RequestBody Map<String, String> payload) {
        try {

            Long id = Long.valueOf(payload.get("idUser"));

            FindByIdUserService findByIdUserService = new FindByIdUserService(userRepository);

            Optional<User> user = findByIdUserService.execute(id);

            AdressesDTO adressesDTO = new AdressesDTO();

            adressesDTO.setCep(payload.get("cep"));
            adressesDTO.setCity(payload.get("city"));
            adressesDTO.setDistrict(payload.get("district"));
            adressesDTO.setNumber(payload.get("number"));
            adressesDTO.setPlace(payload.get("place"));

            CreateAdressesService createAdressesService = new CreateAdressesService(adressRepository);

            Adresses adresses = createAdressesService.execute(adressesDTO, user);

            return ResponseHandler.generateResponse("Adresse Created Sucessfully!", HttpStatus.CREATED, adresses);
        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody LesseDTO lesseDTO) {

        try {

            UpdateUserService updateUserService = new UpdateUserService(userRepository);

            User user = updateUserService.execute(id, lesseDTO);

            return ResponseHandler.generateResponse(null, HttpStatus.OK, user);

        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }

    }



}
