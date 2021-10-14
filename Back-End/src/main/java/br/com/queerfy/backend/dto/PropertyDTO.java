package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;

import javax.persistence.*;
import java.util.Date;

public class PropertyDTO {

    private Integer id;
    private String houseImg;
    private Boolean active;
    private Double dailyPrice;
    private String filterDate;
    private Date checkIn;
    private Date checkOut;
    private String latitude;
    private String longitude;
    private Integer idUser;


    public PropertyDTO(){}

    public PropertyDTO(Property entity){
        this.id = entity.getid();
        this.houseImg = entity.getHouseImg();
        this.active = entity.getActive();
        this.dailyPrice = entity.getDailyPrice();
        this.filterDate = entity.getFilterDate();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.latitude = entity.getLatitude();
        this.longitude = entity.getLongitude();
        this.idUser = entity.getUser().getId();

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        id = id;
    }

    public String getHouseImg() {
        return houseImg;
    }

    public void setHouseImg(String houseImg) {
        this.houseImg = houseImg;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Double getDailyPrice() {
        return dailyPrice;
    }

    public void setDailyPrice(Double dailyPrice) {
        this.dailyPrice = dailyPrice;
    }

    public String getFilterDate() {
        return filterDate;
    }

    public void setFilterDate(String filterDate) {
        this.filterDate = filterDate;
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

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }
}