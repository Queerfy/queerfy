package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public UserDTO create(@RequestBody @Valid UserDTO userDTO) throws UserAlreadyExistsException {
        return userService.create(userDTO);
    }

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }


}
