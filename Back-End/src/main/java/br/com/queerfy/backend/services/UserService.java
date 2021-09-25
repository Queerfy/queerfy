package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.LesseDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.Lesse;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional
    public List<UserDTO> getUsers() {
        return repository.findAll().stream()
                .map(user -> new LesseDTO(user))
                .collect(Collectors.toList());
    }

    @Transactional
    public UserDTO create(UserDTO userDTO) throws UserAlreadyExistsException {
        boolean userExists = repository.findAll().stream().anyMatch(user -> user.getCpf().equals(userDTO.getCpf()));

        if(!userExists) {
            Lesse user = new Lesse(userDTO);
            user = repository.save(user);
            return new LesseDTO(user);
        }

        throw new UserAlreadyExistsException();
    }


}
