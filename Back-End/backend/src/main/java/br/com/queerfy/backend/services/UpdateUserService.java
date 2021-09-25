package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.UserRepository;


public class UpdateUserService {

    private UserRepository userRepository;

    public UpdateUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User execute(long id, UserDTO userDTO) throws Exception {

        var user = userRepository.findById(id);

        if(!user.isPresent()) {
            throw new Exception("User not found");
        }

        var userUpdated = user.get();
        userUpdated.setName(userDTO.getName());
        userUpdated.setBirthDate(userDTO.getBirthDate());
        userUpdated.setRg(userDTO.getRg());
        userUpdated.setCpf(userDTO.getCpf());
        userUpdated.setEmail(userDTO.getEmail());
        userUpdated.setPassword(userDTO.getPassword());
        userUpdated.setPerfilImg(userDTO.getPerfilImg());
        userUpdated.setGenre(userDTO.getGenre());
        userUpdated.setDescUser(userDTO.getDescUser());
        userUpdated.setLikes(userDTO.getLikes());
        userUpdated.setAdmin(userDTO.getAdmin());

        userRepository.save(userUpdated);

        return userUpdated;

    }

}
