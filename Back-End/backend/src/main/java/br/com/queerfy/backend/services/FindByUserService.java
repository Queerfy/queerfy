package br.com.queerfy.backend.services;

import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;

import java.util.Optional;

public class FindByUserService {

    private UserRepository userRepository;

    public FindByUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> execute(String email, String cpf) {
        var userAlreadyExists = this.userRepository.findAll()
                .stream()
                .filter(lesseFiltered -> lesseFiltered.getCpf().equals(cpf)
                        || lesseFiltered.getEmail().equals(email)
                )
                .findFirst();

        return userAlreadyExists;
    }

}
