package com.br.queerfy.backend.controllers;

import com.br.queerfy.backend.dto.LesseRequest;
import com.br.queerfy.backend.dto.ResponseHandler;
import com.br.queerfy.backend.repositories.UserRepository;
import com.br.queerfy.backend.services.CreateLesseService;
import com.br.queerfy.backend.services.ListAllUsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserControllers {

    private UserRepository userRepository = new UserRepository();

    @PostMapping("/lesse")
    public ResponseEntity<Object> create(@RequestBody LesseRequest lesseRequest) {

        try {

            CreateLesseService createLesseService = new CreateLesseService(userRepository);

            var lesse = createLesseService.execute(lesseRequest);

            return ResponseHandler.generateResponse("Less Created Sucessfully", HttpStatus.CREATED, lesse);


        }catch (Exception err){
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST,  null);
        }

    }

    @GetMapping()
    public ResponseEntity<Object> listAllUsers() {

        try {

            ListAllUsersService listAllUsersService = new ListAllUsersService(userRepository);

            var users = listAllUsersService.execute();

            return ResponseHandler.generateResponse("List All Users", HttpStatus.CREATED, users);

        }catch (Exception err){
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST,  null);
        }

    }

}
