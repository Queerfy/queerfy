package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.PropertyDTO;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String houseImg;
    private Boolean active;
    private Double dailyPrice;
    private String filterDate;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate checkIn;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate checkOut;
    private String latitude;
    private String longitude;
    private Integer likes;
    private String state;
    private String uf;
    private String cep;
    private String street;
    private String houseNumber;
    private String addressComplement;

    private String propertyType;


    @ManyToOne()
    @JoinColumn(name = "fkUser")
    private User user;

    public Property() {
    }

    public Property(PropertyDTO entity) {
        this.id = entity.getId();
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
        this.state = entity.getState();
        this.uf = entity.getUf();
        this.cep = entity.getCep();
        this.street = entity.getStreet();
        this.houseNumber = entity.getHouseNumber();
        this.addressComplement = entity.getAddressComplement();
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

    public Integer getid() {
        return id;
    }

    public void setid(Integer id) {
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

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
