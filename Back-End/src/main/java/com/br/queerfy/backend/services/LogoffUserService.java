package com.br.queerfy.backend.services;

import com.br.queerfy.backend.entities.User;
import com.br.queerfy.backend.repositories.UserRepository;

public class LogoffUserService {

    private UserRepository userRepository;

    public LogoffUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User execute(String email, String password) throws Exception {
        var userExists = this.userRepository.logoff(email, password);

        if(userExists == null) {
            throw new Exception("Email or Password is incorrect!");
        }

        return userExists;
    }

}
