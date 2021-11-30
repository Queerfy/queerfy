package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.FavoriteDTO;
import br.com.queerfy.backend.dto.PropertyDTO;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Transactional
@Entity
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne
    private Property property;
    @ManyToOne
    private User user;

    public Favorite(){}

    public Favorite(FavoriteDTO entity){
        this.id = entity.getId();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
