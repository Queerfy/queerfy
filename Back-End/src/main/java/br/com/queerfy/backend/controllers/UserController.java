package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import javax.validation.constraints.PastOrPresent;
import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Integer id) throws UserNotFoundException {
        return ResponseEntity.status(200).body(userService.getUserById(id));
    }

    @PostMapping("/logoff/{id}")
    public ResponseEntity<String> logoffUser(@PathVariable Integer id) throws UserNotFoundException {
        return ResponseEntity.status(200).body(userService.logoffUser(id));
    }


    @PostMapping("/autenticate")
    public ResponseEntity<UserDTO> autenticateUser(@RequestBody UserDTO userDTO) throws UserNotFoundException{
        return ResponseEntity.status(200).body(userService.autenticateUser(userDTO));
    }

    @PostMapping()
    public ResponseEntity create(@RequestBody UserDTO userDTO) throws UserAlreadyExistsException {
        return ResponseEntity.status(201).body(userService.create(userDTO));
    }

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @PutMapping("/update/{id}")
    public UserDTO updateUsers (@RequestBody UserDTO userDTO, @PathVariable Integer id) throws UserNotFoundException {
        return userService.update(userDTO, id);
    }


}
