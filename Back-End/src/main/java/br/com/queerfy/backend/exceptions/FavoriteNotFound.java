package br.com.queerfy.backend.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class FavoriteNotFound extends Exception{
    public FavoriteNotFound(){super("Favorite ID not found!");}
}