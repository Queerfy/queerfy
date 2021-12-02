package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.LeaseAssociativeDTO;
import br.com.queerfy.backend.dto.LeaseDTO;
import br.com.queerfy.backend.dto.PropertyDTO;
import br.com.queerfy.backend.entities.Lease;
import br.com.queerfy.backend.exceptions.UserNotFoundException;
import br.com.queerfy.backend.services.LeaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/leases")
public class LeaseController {

    @Autowired
    private LeaseService service;

    @GetMapping("/available")
    public ResponseEntity getAllAvailableProperties(@RequestParam String dataInicio, @RequestParam String dataFim, @RequestParam String city){
        List<PropertyDTO> lease = service.getAllPropertiesFromDateAndCity(dataInicio, dataFim, city);
        if(!lease.isEmpty()){
            return ResponseEntity.status(200).body(lease);
        }else{
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping("/dates/{id}")
    public ResponseEntity<List<LeaseAssociativeDTO>> getAllLeaseDatesFromId(@PathVariable Integer id){
        List<LeaseAssociativeDTO> listDTO = service.getAllLeaseDateFromId(id);
        if(!listDTO.isEmpty()){
            return ResponseEntity.status(200).body(listDTO);
        }else{
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<LeaseAssociativeDTO>> getLeaseByUserId(@PathVariable Integer id) throws UserNotFoundException {
        List<LeaseAssociativeDTO> userLeases = service.findLeaseByUserId(id);
        System.out.println(userLeases);
        return ResponseEntity.status(200).body(userLeases);
    }

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
