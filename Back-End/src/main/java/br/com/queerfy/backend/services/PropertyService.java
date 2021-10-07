package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.AddressesRepository;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    PropertyRepository propertyRepository;

    @Autowired
    UserRepository userRepository;

    @Transactional
    public PropertyDTO create(PropertyDTO propertyDTO) throws UserNotFoundException {
        Optional<User> userOptional = Optional.of(userRepository.getById(propertyDTO.getIdUser()));

        if(userOptional.isPresent()) {
            User user = userOptional.get();
            Property property = new Property(propertyDTO);
            property.setUser(user);
            propertyRepository.save(property);
            return new PropertyDTO(property);
        }
        throw new UserNotFoundException();
    }


}
