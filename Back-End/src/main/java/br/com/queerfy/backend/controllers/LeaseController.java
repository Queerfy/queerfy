package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.LeaseAssociativeDTO;
import br.com.queerfy.backend.dto.LeaseDTO;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.LeaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lease")
public class LeaseController {

    @Autowired
    private LeaseService service;

    @GetMapping
    public ResponseEntity<List<LeaseAssociativeDTO>> getAllLeases() throws UserNotFoundException {
        return ResponseEntity.status(200).body(service.getAllLeases());
    }

    @PostMapping
    public ResponseEntity<LeaseDTO> createLease(@RequestBody LeaseDTO leaseDTO) throws UserNotFoundException {
        service.createLease(leaseDTO);
        return ResponseEntity.status(201).build();
    }

}
