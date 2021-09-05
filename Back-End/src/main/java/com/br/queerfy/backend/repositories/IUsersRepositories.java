package com.br.queerfy.backend.repositories;

import java.util.*;

import com.br.queerfy.backend.entities.User;

public interface IUsersRepositories {
    public User create(User user);
    public Boolean exists(String cpf, String email);
    public List<User> listUsers();
}
