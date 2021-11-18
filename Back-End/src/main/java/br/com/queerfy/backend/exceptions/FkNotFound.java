package br.com.queerfy.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class FkNotFound extends Exception{
    public FkNotFound() {
        super("Can't find fk constraint");
    }
}
