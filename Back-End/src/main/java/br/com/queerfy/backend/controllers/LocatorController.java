package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.controllers.dto.LocatorRequest;
import br.com.queerfy.backend.controllers.dto.ResponseHandler;
import br.com.queerfy.backend.entities.LocatorEntity;
import br.com.queerfy.backend.repositories.LocatorRepository;
import br.com.queerfy.backend.services.CreateLocatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locator")
public class LocatorController {

    private final LocatorRepository locatorRepository;

    public LocatorController(LocatorRepository locatorRepository) {
        this.locatorRepository = locatorRepository;
    }

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody LocatorRequest locatorRequest) {

        try {

            CreateLocatorService createLocatorService = new CreateLocatorService();

            LocatorEntity locatorEntity = createLocatorService.execute(locatorRepository, locatorRequest);

            return ResponseHandler.generateResponse("Locator Created Sucessfully", HttpStatus.CREATED, locatorEntity);

        }catch (Exception err) {
            return ResponseHandler.generateResponse(err.getMessage(), HttpStatus.BAD_REQUEST, null);
        }

    }

}
