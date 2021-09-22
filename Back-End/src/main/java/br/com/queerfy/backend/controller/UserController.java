package br.com.queerfy.backend.controller;

import br.com.queerfy.backend.dto.LesseDTO;
import br.com.queerfy.backend.dto.ResponseHandler;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.Lesse;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;
import br.com.queerfy.backend.services.AuthenticateUserService;
import br.com.queerfy.backend.services.CreateUserService;
import br.com.queerfy.backend.services.UpdateUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<Object> create(@RequestBody LesseDTO lesseDTO) {
        try {

            CreateUserService createUserService = new CreateUserService(userRepository);

            User lesse = createUserService.execute(lesseDTO);

            return ResponseHandler.generateResponse("Lesse Created Sucessfully!", HttpStatus.CREATED, lesse);

        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }

    @GetMapping
    public ResponseEntity<Object> getUsers() {

        List<User> users = userRepository.findAll();

        try {
            return ResponseHandler.generateResponse("List Users", HttpStatus.OK, users);
        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }

    }

    @PostMapping("/authenticate")
    public ResponseEntity<Object> authenticate(@RequestBody Map<String, String> payload) {

        try {

            String email = payload.get("email");

            String password = payload.get("password");

            AuthenticateUserService authenticateUserService = new AuthenticateUserService(userRepository);

            Optional<User> user = authenticateUserService.execute(email, password);

            return ResponseHandler.generateResponse("List Users", HttpStatus.OK, user);

        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }

    }

}
