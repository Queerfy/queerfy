package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Favorite;
import br.com.queerfy.backend.repositories.FavoriteRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.HashSet;
import java.util.Set;

public class FavoriteDTO {

    private Integer id;
    private Integer propertyId;
    private Integer userId;

    public FavoriteDTO(){}

    public FavoriteDTO(Favorite entity){
        this.id = entity.getId();
        this.propertyId = entity.getProperty().getid();
        this.userId = entity.getUser().getId();
    }

    public Integer getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
