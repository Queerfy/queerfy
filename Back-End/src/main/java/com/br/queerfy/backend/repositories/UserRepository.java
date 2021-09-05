package com.br.queerfy.backend.repositories;

import com.br.queerfy.backend.entities.User;

import java.util.*;

public class UserRepository implements IUsersRepositories{

    private List<User> users = new ArrayList<>();

    @Override
    public User create(User user) {
        users.add(user);
        return user;
    }

    @Override
    public Boolean exists(String cpf, String email) {
        var userExists = users.stream()
                .filter(user -> user.getCpf().equals(cpf) || user.getEmail().equals(email))
                .findFirst();

        if(userExists.isPresent()){
            return true;
        }

        return false;
    }

    @Override
    public List<User> listUsers() {
        return users;
    }

    @Override
    public User authenticate(String email, String password) {
        var userExists =  users.stream()
                .filter(user -> user.getEmail().equals(email) && user.getPassword().equals(password))
                .findFirst().get();

        if(userExists != null){
            userExists.setAuthenticated(true);
            return userExists;
        }

        return null;
    }

    @Override
    public User logoff(String email, String password) {
        var userExists =  users.stream()
                .filter(user -> user.getEmail().equals(email) && user.getPassword().equals(password))
                .findFirst().get();

        if(userExists.getAuthenticated()){
            userExists.setAuthenticated(null);
            return userExists;
        }

        return null;
    }
}
