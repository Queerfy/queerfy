package br.com.queerfy.backend.services;

import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;

import java.util.Optional;

public class FindByIdUserService {

    private UserRepository userRepository;

    public FindByIdUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> execute(Long id) throws Exception {
        Optional<User> user = userRepository.findById(id).stream().findFirst();

        if(!user.isPresent()) {
            throw new Exception("User not found!");
        }

        return user;
    }

}
