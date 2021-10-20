package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.LeaseAssociativeDTO;
import br.com.queerfy.backend.dto.LeaseDTO;
import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.dto.UserDTO;
import br.com.queerfy.backend.entities.Lease;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.LeaseRepository;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LeaseService {
    @Autowired
    PropertyRepository propertyRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    LeaseRepository leaseRepository;

    public List<LeaseAssociativeDTO> getAllLeases() throws UserNotFoundException {
        List<LeaseDTO> dtoList = leaseRepository.findAll().stream().map(lease -> new LeaseDTO(lease)).collect(Collectors.toList());
        List<LeaseAssociativeDTO> associativeDTO = new ArrayList<>();
        dtoList.forEach(leaseDTO -> associativeDTO.add(convertToLeaseAssossiative(leaseDTO)));
        return associativeDTO;
    }



    public LeaseAssociativeDTO getLeaseById(Integer id){
        Lease lease = leaseRepository.findById(id).get();
        LeaseDTO leaseDTO = new LeaseDTO(lease);
        LeaseAssociativeDTO leaseAssociativeDTO = convertToLeaseAssossiative(leaseDTO);
        return leaseAssociativeDTO;
    }
    public LeaseDTO createLease(LeaseDTO leaseDTO) throws UserNotFoundException {
        Optional<User> userOptional = Optional.of(userRepository.getById(leaseDTO.getIdUser()));
        Optional<Property> propertyOptional = Optional.of(propertyRepository.getById(leaseDTO.getIdProperty()));

        if (userOptional.isPresent() && propertyOptional.isPresent()) {
            User user = userOptional.get();
            Property property = propertyOptional.get();
            Lease lease = new Lease(leaseDTO);
            lease.setUser(user);
            lease.setProperty(property);

            lease = leaseRepository.save(lease);
            return new LeaseDTO(lease);
        }
        throw new UserNotFoundException();
    }

    public LeaseAssociativeDTO convertToLeaseAssossiativeAndUserDTO(LeaseDTO dto){
        UserDTO user = new UserDTO(userRepository.findById(dto.getIdUser()).get());
        PropertyDTO property = new PropertyDTO(propertyRepository.findById(dto.getIdProperty()).get());
        LeaseAssociativeDTO leaseAssociativeDTO = new LeaseAssociativeDTO(dto, property, user);
        return leaseAssociativeDTO;
    }

    public LeaseAssociativeDTO convertToLeaseAssossiative(LeaseDTO dto){
        UserDTO user = new UserDTO(userRepository.findById(dto.getIdUser()).get());
        PropertyDTO property = new PropertyDTO(propertyRepository.findById(dto.getIdProperty()).get());
        LeaseAssociativeDTO leaseAssociativeDTO = new LeaseAssociativeDTO(dto, property, user);
        return leaseAssociativeDTO;
    }

}
