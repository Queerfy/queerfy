package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.PropertyDTO;
import com.fasterxml.jackson.databind.annotation.JsonAppend;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String houseImg;
    private Boolean active;
    private Double dailyPrice;
    private String filterDate;
    private Date checkIn;
    private Date checkOut;
    private String latitude;
    private String longitude;

    @ManyToOne()
    @JoinColumn(name = "fkUser")
    private User user;

    public Property(){}

    public Property(PropertyDTO entity){
        this.id = entity.getId();
        this.houseImg = entity.getHouseImg();
        this.active = entity.getActive();
        this.dailyPrice = entity.getDailyPrice();
        this.filterDate = entity.getFilterDate();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.latitude = entity.getLatitude();
        this.longitude = entity.getLongitude();
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}