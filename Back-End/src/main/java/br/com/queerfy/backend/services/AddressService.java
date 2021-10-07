package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.AddressesDTO;
import br.com.queerfy.backend.entities.Addresses;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.AddressesRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class AddressService {

    @Autowired
    AddressesRepository addressesRepository;

    @Autowired
    UserRepository userRepository;

    @Transactional
    public AddressesDTO create(AddressesDTO addressesDTO) throws UserNotFoundException {

        Optional<User> userOptional = Optional.of(userRepository.getById(addressesDTO.getIdUser()));

        if(userOptional.isPresent()) {

            User user = userOptional.get();

            Addresses address = new Addresses(addressesDTO);

            address.setUser(user);

            address = addressesRepository.save(address);

            return new AddressesDTO(address);
        }

        throw new UserNotFoundException();
    }

}
