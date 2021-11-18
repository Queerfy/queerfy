package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public PropertyDTO create(PropertyDTO propertyDTO) throws UserAlreadyExistsException {
        Optional<User> userOptional = Optional.of(userRepository.getById(propertyDTO.getIdUser()));

        if(userOptional.isPresent()) {
            User user = userOptional.get();
            Property property = new Property(propertyDTO);
            property.setUser(user);
            propertyRepository.save(property);
            return new PropertyDTO(property);
        }
        throw new UserAlreadyExistsException();
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
            prop.setState(property.getState());
            prop.setUf(property.getUf());
            prop.setCep(property.getCep());
            prop.setStreet(property.getStreet());
            prop.setHouseNumber(property.getHouseNumber());
            prop.setAddressComplement(property.getAddressComplement());
            prop.setName(property.getName());
            prop.setDescription(property.getDescription());
            prop.setLikes(property.getLikes());
            prop.setActive(property.getActive());
            prop.setDailyPrice(property.getDailyPrice());
            prop.setFilterDate(property.getFilterDate());
            prop.setHouseImg(property.getHouseImg());
            prop.setLatitude(property.getLatitude());
            prop.setLongitude(property.getLongitude());
            prop.setReferencePoint(property.getReferencePoint());
            prop.setPropertyType(property.getPropertyType());
            prop.setSpaceType(property.getSpaceType());
            prop.setGuestsQuantity(property.getGuestsQuantity());
            prop.setBedsQuantity(property.getBedsQuantity());
            prop.setRoomQuantity(property.getRoomQuantity());
            prop.setBathroomQuantity(property.getBathroomQuantity());
            prop.setHaveWifi(property.getHaveWifi());
            prop.setHaveKitchen(property.getHaveKitchen());
            prop.setHaveSuite(property.getHaveSuite());
            prop.setHaveGarage(property.getHaveGarage());
            prop.setHaveAnimals(property.getHaveAnimals());


            propertyRepository.save(prop);

            return new PropertyDTO(prop);
        }
        throw new UserNotFoundException();
    }
    public Boolean deleteProperty(Integer id) throws UserNotFoundException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            propertyRepository.deleteById(id);
            return true;
        }
        throw new UserNotFoundException();
    }
}
