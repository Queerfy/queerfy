package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.AddressesDTO;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
    @RequestMapping("/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping()
    public AddressesDTO create(@RequestBody AddressesDTO addressesDTO) throws UserNotFoundException {
        return addressService.create(addressesDTO);
    }

}
