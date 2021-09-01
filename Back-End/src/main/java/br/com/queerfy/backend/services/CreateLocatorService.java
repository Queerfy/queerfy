package br.com.queerfy.backend.services;

import br.com.queerfy.backend.controllers.dto.LocatorRequest;
import br.com.queerfy.backend.entities.LocatorEntity;
import br.com.queerfy.backend.repositories.LocatorRepository;

public class CreateLocatorService {

    public LocatorEntity execute(LocatorRepository locatorRepository, LocatorRequest locatorRequest) throws Exception{

        var locator = new LocatorEntity();

        locator.setName(locatorRequest.getName());
        locator.setBirthDate(locatorRequest.getBirthDate());
        locator.setRg(locatorRequest.getRg());
        locator.setCpf(locatorRequest.getCpf());
        locator.setEmail(locatorRequest.getEmail());
        locator.setPassword(locatorRequest.getPassword());
        locator.setPerfilImg(locatorRequest.getPerfilImg());
        locator.setGenre(locatorRequest.getGenre());
        locator.setDescUser(locatorRequest.getDescUser());
        locator.setLikes(locatorRequest.getLikes());
        locator.setAdmin(locatorRequest.getAdmin());

        var locatorExists =
                locatorRepository.findAll()
                    .stream()
                    .filter(
                            locatorFiltered -> locatorFiltered.getCpf().equals(locator.getCpf())
                            || locatorFiltered.getEmail().equals(locator.getEmail()
                            ))
                .findFirst();
        if(locatorExists.isPresent()){
            throw  new Exception("Locator Exists");
        }

        locatorRepository.save(locator);

        return locator;

    }

}
