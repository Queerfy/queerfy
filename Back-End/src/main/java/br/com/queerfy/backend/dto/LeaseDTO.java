package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Lease;
import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

public class LeaseDTO {

    private Integer id;
    private Integer idProperty;
    private Integer idUser;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private Double totalValue;
    private String leaseStatus;

    public LeaseDTO(Lease entity){
        this.id = entity.getId();
        this.idProperty = entity.getProperty().getid();
        this.idUser = entity.getUser().getId();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.totalValue = entity.getTotalValue();
        this.leaseStatus = entity.getLeaseStatus();
    }

    public LeaseDTO() {
    }

    public String getLeaseStatus() {
        return leaseStatus;
    }

    public void setLeaseStatus(String leaseStatus) {
        this.leaseStatus = leaseStatus;
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

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
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
