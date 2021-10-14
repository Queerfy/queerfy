package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.UserRepository;
import br.com.queerfy.backend.utils.CsvConverter;
import br.com.queerfy.backend.utils.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService {

    CsvConverter csvConverter = new CsvConverter();

    @Autowired
    private UserRepository repository;

    @Transactional
    public List<UserDTO> getUsers() {
        return repository.findAll().stream()
                .map(user -> new UserDTO(user))
                .collect(Collectors.toList());
    }
    @Transactional
    public UserDTO getUserById(Integer id) throws UserNotFoundException {
        try{
            User user = repository.findById(id).get();
            return new UserDTO(user);
        }catch(EntityNotFoundException e){
            throw new UserNotFoundException();
        }
    }
    @Transactional
    public UserDTO create(UserDTO userDTO) throws UserAlreadyExistsException {
        boolean userExists = repository.findAll().stream().anyMatch(user -> user.getCpf().equals(userDTO.getCpf()) || user.getEmail().equals(userDTO.getEmail()));

        if(!userExists) {
            User user = new User(userDTO);
            user = repository.save(user);
            ListaObj<UserDTO> userList = new ListaObj(90);
            userList.adiciona(new UserDTO(userDTO.getId(), userDTO.getName(), userDTO.getCpf(), userDTO.getEmail(), userDTO.getGenre(), userDTO.getRg(), userDTO.getAdmin()));
            csvConverter.gravaArquivoCsv(userList, "userList");
            return new UserDTO(user);

        }

        throw new UserAlreadyExistsException();
    }

    @Transactional
    public UserDTO update(UserDTO userDTO, Integer id) throws UserNotFoundException {
        Optional<User> userSaved = repository.findById(id);
        boolean userExists = userSaved.isPresent();

        if(userExists) {
           User user = userSaved.get();
           user.setName(userDTO.getName());
           user.setName(userDTO.getName());
           user.setBirthDate(userDTO.getBirthDate());
           user.setRg(userDTO.getRg());
           user.setCpf(userDTO.getCpf());
           user.setEmail(userDTO.getEmail());
           user.setPassword(userDTO.getPassword());
           user.setPerfilImg(userDTO.getPerfilImg());
           user.setGenre(userDTO.getGenre());
           user.setDescUser(userDTO.getDescUser());
           user.setLikes(userDTO.getLikes());
           user.setAdmin(userDTO.getAdmin());

           repository.save(user);

           return new UserDTO(user);
        }

        throw new UserNotFoundException();
    }


}
