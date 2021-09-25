package br.com.queerfy.backend.services;

import br.com.queerfy.backend.dto.AdressesDTO;
import br.com.queerfy.backend.entities.Adresses;
import br.com.queerfy.backend.entities.User;
import br.com.queerfy.backend.repositories.AdressRepository;
import br.com.queerfy.backend.repositories.UserRepository;

import java.util.Optional;

public class CreateAdressesService {

    private AdressRepository adressRepository;
    private UserRepository userRepository;

    public CreateAdressesService(AdressRepository adressRepository) {
        this.adressRepository = adressRepository;
    }

    public Adresses execute(AdressesDTO adressesDTO, Optional<User> userOptional) throws Exception{

        var adresse = new Adresses();

        adresse.setCep(adressesDTO.getCep());
        adresse.setCity(adressesDTO.getCity());
        adresse.setDistrict(adressesDTO.getDistrict());
        adresse.setNumber(adressesDTO.getNumber());
        adresse.setPlace(adressesDTO.getPlace());

        User user = userOptional.get();

        adresse.setUser(user);

        adressRepository.save(adresse);

        return adresse;

    }


}
