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
}
