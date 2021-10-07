package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("properties")
public class PropertyController {

    @Autowired
    private PropertyService service;

    @PostMapping
    public PropertyDTO create(@RequestBody @Valid PropertyDTO propertyDTO) throws UserAlreadyExistsException, UserNotFoundException {
        return service.create(propertyDTO);
    }
}
