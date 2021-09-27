package br.com.queerfy.backend.services;

import java.util.*;

import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;

public class ListAllUsersService {

    private UserRepository userRepository;

    public ListAllUsersService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> execute() {

        List<User> users = userRepository.findAll();

        return users;

    }

}
