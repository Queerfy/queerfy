package com.br.queerfy.backend.services;

import com.br.queerfy.backend.dto.LesseRequest;
import com.br.queerfy.backend.entities.Less;
import com.br.queerfy.backend.entities.User;
import com.br.queerfy.backend.repositories.UserRepository;

public class CreateLesseService {

    private UserRepository userRepository;

    public CreateLesseService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User execute(LesseRequest lesseRequest) throws Exception {
        var less = new Less();

        less.setName(lesseRequest.getName());
        less.setBirthDate(lesseRequest.getBirthDate());
        less.setRg(lesseRequest.getRg());
        less.setCpf(lesseRequest.getCpf());
        less.setEmail(lesseRequest.getEmail());
        less.setPassword(lesseRequest.getPassword());
        less.setPerfilImg(lesseRequest.getPerfilImg());
        less.setGenre(lesseRequest.getGenre());
        less.setDescUser(lesseRequest.getDescUser());
        less.setLikes(lesseRequest.getLikes());
        less.setAdmin(lesseRequest.getAdmin());

        var userExists = this.userRepository.exists(less.getCpf(), less.getEmail());

        if(userExists) {
            throw new Exception("Less Exists!");
        }

        var lessCreated = this.userRepository.create(less);

        return lessCreated;
    }

}
