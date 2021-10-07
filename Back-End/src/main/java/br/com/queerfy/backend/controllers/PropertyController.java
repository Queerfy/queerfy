package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.PropertyService;
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

    @GetMapping
    public ResponseEntity<List<PropertyDTO>> getAllProperties(){
        return ResponseEntity.status(200).body(service.getAllProperties());
    }
}
