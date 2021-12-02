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

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
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

    @Transactional
    public List<PropertyDTO> getAllPropertiesFromDateAndCity(String date1, String date2, String city){
        List<Integer> getDto = leaseRepository.getAllPropertiesFromDateAndCity(date1, date2, city);
        List<PropertyDTO> propertyDTO = new ArrayList<>();
        getDto.forEach(property -> {
            propertyDTO.add(new PropertyDTO(propertyRepository.getById(property)));
        });
        return propertyDTO;
    }

    @Transactional
    public List<LeaseAssociativeDTO> getAllLeaseDateFromId(Integer id){
        List<LeaseDTO> dtoList = leaseRepository.getAllLeaseDatesFromId(id).stream().map(lease -> new LeaseDTO(lease)).collect(Collectors.toList());
        List<LeaseAssociativeDTO> associativeDto = new ArrayList<>();
        dtoList.forEach(leaseDTO -> associativeDto.add(convertToLeaseAssossiative(leaseDTO)));
        return associativeDto;
    }

    @Transactional
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
    @Transactional
    public List<LeaseAssociativeDTO> findLeaseByUserId(Integer id){
        List<Lease> leaseList = leaseRepository.findLeaseByUserId(id);
        List<LeaseDTO> leaseDTOS = leaseList.stream().map(lease -> new LeaseDTO(lease)).collect(Collectors.toList());
        List<LeaseAssociativeDTO> leaseDtoSupport = leaseDTOS.stream().map(leaseDTO -> convertToLeaseAssossiative(leaseDTO)).collect(Collectors.toList());
        return leaseDtoSupport;
    }

    public LeaseAssociativeDTO convertToLeaseAssossiative(LeaseDTO dto){
        User user1 = userRepository.getById(dto.getIdUser());
        UserDTO user = new UserDTO(user1);
        PropertyDTO property = new PropertyDTO(propertyRepository.findById(dto.getIdProperty()).get());
        LeaseAssociativeDTO leaseAssociativeDTO = new LeaseAssociativeDTO(dto, property, user);
        return leaseAssociativeDTO;
    }

}
