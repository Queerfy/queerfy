package com.br.queerfy.backend.services;

import java.util.*;

import com.br.queerfy.backend.entities.User;
import com.br.queerfy.backend.repositories.UserRepository;

public class ListAllUsersService {

    private UserRepository userRepository;

    public ListAllUsersService (UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> execute() {
        List<User> users = this.userRepository.listUsers();
        return users;
    }

}
