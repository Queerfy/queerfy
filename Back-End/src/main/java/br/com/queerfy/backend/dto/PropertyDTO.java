package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

public class PropertyDTO {

    private Integer id;
    private String name;
    private String houseImg;
    private Boolean active;
    private Double dailyPrice;
    private String filterDate;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String latitude;
    private String longitude;
    private Integer idUser;
    private String description;
    private Integer likes;
    private String state;
    private String uf;
    private String cep;
    private String street;
    private String houseNumber;
    private String addressComplement;

    public PropertyDTO(){}

    public PropertyDTO(Property entity){
        this.id = entity.getid();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.likes = entity.getLikes();
        this.houseImg = entity.getHouseImg();
        this.active = entity.getActive();
        this.dailyPrice = entity.getDailyPrice();
        this.filterDate = entity.getFilterDate();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.latitude = entity.getLatitude();
        this.longitude = entity.getLongitude();
        this.idUser = entity.getUser().getId();
        this.state = entity.getState();
        this.uf = entity.getUf();
        this.cep = entity.getCep();
        this.street = entity.getStreet();
        this.houseNumber = entity.getHouseNumber();
        this.addressComplement = entity.getHouseNumber();

    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getAddressComplement() {
        return addressComplement;
    }

    public void setAddressComplement(String addressComplement) {
        this.addressComplement = addressComplement;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
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
