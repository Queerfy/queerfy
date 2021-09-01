package br.com.queerfy.backend.entities;

import java.util.*;

public class Property {

    private Long id;
    private String place;
    private String number;
    private String cep;
    private String district;
    private String city;
    private String photoHome;
    private Boolean active;
    private Double diary;
    private String filterDate;
    private Date dateEntry;
    private String latitude;
    private String longitude;
    private List<Characteristics> listCharacteristics = new ArrayList<>();

    public Property(Long id, String place, String number, String cep, String district, String city, String photoHome, Boolean active, Double diary, String filterDate, Date dateEntry, String latitude, String longitude) {
        this.id = id;
        this.place = place;
        this.number = number;
        this.cep = cep;
        this.district = district;
        this.city = city;
        this.photoHome = photoHome;
        this.active = active;
        this.diary = diary;
        this.filterDate = filterDate;
        this.dateEntry = dateEntry;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhotoHome() {
        return photoHome;
    }

    public void setPhotoHome(String photoHome) {
        this.photoHome = photoHome;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Double getDiary() {
        return diary;
    }

    public void setDiary(Double diary) {
        this.diary = diary;
    }

    public String getFilterDate() {
        return filterDate;
    }

    public void setFilterDate(String filterDate) {
        this.filterDate = filterDate;
    }

    public Date getDateEntry() {
        return dateEntry;
    }

    public void setDateEntry(Date dateEntry) {
        this.dateEntry = dateEntry;
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
}
