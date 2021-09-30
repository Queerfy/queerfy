package br.com.queerfy.backend.services;

import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;

import java.util.Optional;

public class AuthenticateUserService {

    private UserRepository userRepository;

    public AuthenticateUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> execute(String email, String password) throws Exception {
        Optional<User> user = userRepository
                .findAll()
                .stream()
                .filter(userFind -> userFind.getEmail().equals(email) && userFind.getPassword().equals(password))
                .findFirst();

        if(!user.isPresent()) {
            throw new Exception("Email/Password incorrect!");
        }

        return user;
    }

}
