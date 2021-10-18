package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Lease;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;

import javax.persistence.*;
import java.util.Date;

public class LeaseDTO {

    private Integer id;
    private Integer idProperty;
    private Integer idUser;
    private Date checkIn;
    private Date checkOut;
    private Double totalValue;

    public LeaseDTO(Lease entity){
        this.id = entity.getId();
        this.idProperty = entity.getProperty().getid();
        this.idUser = entity.getProperty().getid();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.totalValue = entity.getTotalValue();
    }

    public LeaseDTO() {
    }

    public Integer getIdProperty() {
        return idProperty;
    }

    public void setIdProperty(Integer idProperty) {
        this.idProperty = idProperty;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Date getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Date checkIn) {
        this.checkIn = checkIn;
    }

    public Date getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Date checkOut) {
        this.checkOut = checkOut;
    }

    public Double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(Double totalValue) {
        this.totalValue = totalValue;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getId() {
        return id;
    }


}
