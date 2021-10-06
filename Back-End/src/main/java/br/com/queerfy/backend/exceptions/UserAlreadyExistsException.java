package br.com.queerfy.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class UserAlreadyExistsException extends Exception {

    public UserAlreadyExistsException() {
        super("Esse usuário já existe!");
    }
}
