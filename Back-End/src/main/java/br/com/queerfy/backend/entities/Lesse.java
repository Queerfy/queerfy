package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.UserDTO;

import javax.persistence.Entity;

@Entity
public class Lesse extends User {

    public Lesse(){
    }

    public Lesse(UserDTO user) {
        super(user);
    }
}
