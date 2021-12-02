package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.exceptions.ImageNotFound;
import br.com.queerfy.backend.exceptions.UserAlreadyExistsException;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.repositories.PropertyRepository;
import br.com.queerfy.backend.repositories.UserRepository;
import br.com.queerfy.backend.utils.PilhaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PropertyService {

    PilhaObj<Property> pilhaObj = new PilhaObj<>(5);

    @Autowired
    PropertyRepository propertyRepository;

    @Autowired
    UserRepository userRepository;

    @Transactional
    public PropertyDTO undoProperty(Integer id) throws UserAlreadyExistsException {
        PropertyDTO property =  new PropertyDTO(pilhaObj.pop());
        create(property);
        return property;
    }

    @Transactional
    public List<PropertyDTO> allPropertyFromSpaceType(String spaceType){
        List<PropertyDTO> propertyDTO = propertyRepository.findAllPropertiesWhereSpaceType(spaceType).stream().map(property -> new PropertyDTO(property)).collect(Collectors.toList());
        return propertyDTO;
    }

    @Transactional
    public List<PropertyDTO> allPropertyFromCity(String city){
        List<PropertyDTO> propertyDTO = propertyRepository.findAllPropertiesFromCity(city).stream().map(property -> new PropertyDTO(property)).collect(Collectors.toList());
        return propertyDTO;
    }

    @Transactional
    public PropertyDTO create(PropertyDTO propertyDTO) throws UserAlreadyExistsException {
        Optional<User> userOptional = Optional.of(userRepository.getById(propertyDTO.getIdUser()));
        if (userOptional.isPresent()) {
            propertyDTO.setId(null);
            User user = userOptional.get();
            Property property = new Property(propertyDTO);
            property.setUser(user);
            propertyRepository.save(property);
            return new PropertyDTO(property);
        }
        throw new UserAlreadyExistsException();
    }

    @Transactional
    public List<PropertyDTO> getAllProperties() {
        List<PropertyDTO> list = propertyRepository.findAll().stream()
                .map(property -> new PropertyDTO(property)).collect(Collectors.toList());
        return list;
    }

    @Transactional
    public PropertyDTO getPropertyById(Integer id) throws UserNotFoundException {
        try {
            Property property = propertyRepository.findById(id).get();
            return new PropertyDTO(property);
        } catch (EntityNotFoundException e) {
            throw new UserNotFoundException();
        }
    }

    @Transactional
    public PropertyDTO updateProperty(Integer id, PropertyDTO property) throws UserNotFoundException {
        Optional<Property> entity = propertyRepository.findById(id);
        if (entity.isPresent()) {
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
            pilhaObj.push(property.get());
            propertyRepository.deleteById(id);
            return true;
        }
        throw new UserNotFoundException();
    }

    public byte[] getImage1(Integer propertyId) throws ImageNotFound {
        Property property = propertyRepository.findById(propertyId).get();
        if(propertyRepository.existsById(propertyId)){
            return property.getImage1();
            }
        return null;
    }
    public byte[] getImage2(Integer propertyId) throws ImageNotFound {
        Property property = propertyRepository.findById(propertyId).get();
        if(propertyRepository.existsById(propertyId)){
            return property.getImage2();
        }
        return null;
    }
    public byte[] getImage3(Integer propertyId) throws ImageNotFound {
        Property property = propertyRepository.findById(propertyId).get();
        if(propertyRepository.existsById(propertyId)){
            return property.getImage3();
        }
        return null;
    }
    public byte[] getImage4(Integer propertyId) throws ImageNotFound {
        Property property = propertyRepository.findById(propertyId).get();
        if(propertyRepository.existsById(propertyId)){
            return property.getImage4();
        }
        return null;
    }
    public byte[] getImage5(Integer propertyId) throws ImageNotFound {
        Property property = propertyRepository.findById(propertyId).get();
        if(propertyRepository.existsById(propertyId)){
            return property.getImage5();
        }
        return null;
    }



    public byte[] insertImage1(Integer id, MultipartFile image) throws IOException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            property.get().setImage1(image.getBytes());
            propertyRepository.save(property.get());

            return image.getBytes();
        }
        else{
            throw new IOException();
        }
    }
    public String insertImage2(Integer id, MultipartFile image) throws IOException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            property.get().setImage2(image.getBytes());
            propertyRepository.save(property.get());
            return "Image2 added on property: " + property.get().getid();
        }
        else{
            return "Can`t find property";
        }
    }
    public String insertImage3(Integer id, MultipartFile image) throws IOException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            property.get().setImage3(image.getBytes());
            propertyRepository.save(property.get());
            return "Image3 added on property: " + property.get().getid();
        }
        else{
            return "Can`t find property";
        }
    }
    public String insertImage4(Integer id, MultipartFile image) throws IOException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            property.get().setImage4(image.getBytes());
            propertyRepository.save(property.get());
            return "Image4 added on property: " + property.get().getid();
        }
        else{
            return "Can`t find property";
        }
    }
    public String insertImage5(Integer id, MultipartFile image) throws IOException {
        Optional<Property> property = propertyRepository.findById(id);
        if(property.isPresent()){
            property.get().setImage5(image.getBytes());
            propertyRepository.save(property.get());
            return "Image5 added on property: " + property.get().getid();
        }
        else{
            return "Can`t find property";
        }
    }
}
