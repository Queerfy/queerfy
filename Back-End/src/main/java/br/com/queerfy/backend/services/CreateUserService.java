package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.LesseDTO;
import br.com.queerfy.backend.entities.Lesse;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;

import java.util.Optional;

public class CreateUserService {

    private UserRepository userRepository;

    public CreateUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Lesse execute(LesseDTO lesseDTO) throws Exception {

        var lesse = new Lesse();

        lesse.setName(lesseDTO.getName());
        lesse.setBirthDate(lesseDTO.getBirthDate());
        lesse.setRg(lesseDTO.getRg());
        lesse.setCpf(lesseDTO.getCpf());
        lesse.setEmail(lesseDTO.getEmail());
        lesse.setPassword(lesseDTO.getPassword());
        lesse.setPerfilImg(lesseDTO.getPerfilImg());
        lesse.setGenre(lesseDTO.getGenre());
        lesse.setDescUser(lesseDTO.getDescUser());
        lesse.setLikes(lesseDTO.getLikes());
        lesse.setAdmin(lesseDTO.getAdmin());
        //lesse.setAdresses(null);

        FindByUserService findByUserService = new FindByUserService(userRepository);
        Optional<User> lesseAlreadyExists = findByUserService.execute(lesse.getEmail(), lesse.getCpf());

        if(lesseAlreadyExists.isPresent()) {
            throw new Exception("Lesse already exists!");
        }

        userRepository.save(lesse);

        return lesse;

    }


}
