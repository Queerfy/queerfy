package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.AddressesRepository;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Transactional
    public List<PropertyDTO> getAllProperties(){
        List<PropertyDTO> list = propertyRepository.findAll().stream()
                .map(property -> new PropertyDTO(property)).collect(Collectors.toList());
        return list;
    }
    @Transactional
    public PropertyDTO getPropertyById(Integer id) throws UserNotFoundException {
        try{
            Property property = propertyRepository.findById(id).get();
            return new PropertyDTO(property);
        }catch(EntityNotFoundException e){
            throw new UserNotFoundException();
        }
    }
    @Transactional
    public PropertyDTO updateProperty(Integer id, PropertyDTO property) throws UserNotFoundException {
        Optional<Property> entity = propertyRepository.findById(id);
        if (entity.isPresent()){
            Property prop = entity.get();
            prop.setActive(property.getActive());
            prop.setCheckIn(property.getCheckIn());
            prop.setCheckOut(property.getCheckOut());
            prop.setDailyPrice(property.getDailyPrice());
            prop.setFilterDate(property.getFilterDate());
            prop.setHouseImg(property.getHouseImg());
            prop.setLatitude(property.getLatitude());
            prop.setLongitude(property.getLongitude());

            propertyRepository.save(prop);

            return new PropertyDTO(prop);
        }
        throw new UserNotFoundException();
    }

}