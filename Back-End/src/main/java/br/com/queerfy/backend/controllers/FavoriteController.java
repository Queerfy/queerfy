package br.com.queerfy.backend.controllers;

import br.com.queerfy.backend.dto.FavoriteDTO;
import br.com.queerfy.backend.exceptions.FavoriteNotFound;
import br.com.queerfy.backend.exceptions.FkNotFound;
import br.com.queerfy.backend.services.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService service;

    @GetMapping
    public ResponseEntity getAllFavorites(){
        return ResponseEntity.status(200).body(service.getAllFavorites());
    }

    @PostMapping
    public ResponseEntity createFavorite(@RequestBody FavoriteDTO entity) throws FkNotFound {
        service.create(entity);
        return ResponseEntity.status(201).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFavorite(@PathVariable Integer id) throws FavoriteNotFound {
        service.delete(id);
        return ResponseEntity.status(200).build();
    }
}
