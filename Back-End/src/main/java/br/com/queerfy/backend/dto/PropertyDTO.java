package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Property;

import javax.transaction.Transactional;

public class PropertyDTO {

    private Integer id;
    private String name;
    private Boolean active;
    private Double dailyPrice;
    private String filterDate;

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
    private String city;
    private String referencePoint;
    private String propertyType;
    private String spaceType;
    private String guestsQuantity;
    private String bedsQuantity;
    private String roomQuantity;
    private String bathroomQuantity;
    private Boolean haveWifi;
    private Boolean haveKitchen;
    private Boolean haveSuite;
    private Boolean haveGarage;
    private Boolean haveAnimals;


    public PropertyDTO(){}

    public PropertyDTO(Property entity){
        this.id = entity.getid();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.likes = entity.getLikes();
        this.active = entity.getActive();
        this.dailyPrice = entity.getDailyPrice();
        this.filterDate = entity.getFilterDate();
        this.latitude = entity.getLatitude();
        this.longitude = entity.getLongitude();
        this.idUser = entity.getUser().getId();
        this.state = entity.getState();
        this.uf = entity.getUf();
        this.city = entity.getCity();
        this.cep = entity.getCep();
        this.street = entity.getStreet();
        this.houseNumber = entity.getHouseNumber();
        this.addressComplement = entity.getAddressComplement();
        this.referencePoint = entity.getReferencePoint();
        this.propertyType = entity.getPropertyType();
        this.spaceType = entity.getSpaceType();
        this.guestsQuantity = entity.getGuestsQuantity();
        this.bedsQuantity = entity.getBedsQuantity();
        this.roomQuantity = entity.getRoomQuantity();
        this.bathroomQuantity = entity.getBathroomQuantity();
        this.haveWifi = entity.getHaveWifi();
        this.haveKitchen = entity.getHaveKitchen();
        this.haveSuite = entity.getHaveSuite();
        this.haveGarage = entity.getHaveGarage();
        this.haveAnimals  = entity.getHaveAnimals();


    }

    public PropertyDTO(Integer id, String name, String description, Boolean active, Double dailyPrice, String filterDate, String latitude,
                       String longitude,   Integer likes, String state, String uf, String cep, String street, String houseNumber, String addressComplement, String city, String referencePoint, String propertyType,
                       String spaceType, String guestsQuantity, String bedsQuantity, String roomQuantity, String bathroomQuantity, Boolean haveWifi, Boolean haveKitchen, Boolean haveSuite, Boolean haveGarage, Boolean haveAnimals,Integer idUser) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.dailyPrice = dailyPrice;
        this.filterDate = filterDate;
        this.latitude = latitude;
        this.longitude = longitude;
        this.idUser = idUser;
        this.description = description;
        this.likes = likes;
        this.state = state;
        this.uf = uf;
        this.cep = cep;
        this.street = street;
        this.houseNumber = houseNumber;
        this.addressComplement = addressComplement;
        this.city = city;
        this.referencePoint = referencePoint;
        this.propertyType = propertyType;
        this.spaceType = spaceType;
        this.guestsQuantity = guestsQuantity;
        this.bedsQuantity = bedsQuantity;
        this.roomQuantity = roomQuantity;
        this.bathroomQuantity = bathroomQuantity;
        this.haveWifi = haveWifi;
        this.haveKitchen = haveKitchen;
        this.haveSuite = haveSuite;
        this.haveGarage = haveGarage;
        this.haveAnimals = haveAnimals;
    }

    public Boolean getHaveWifi() {
        return haveWifi;
    }

    public void setHaveWifi(Boolean haveWifi) {
        this.haveWifi = haveWifi;
    }

    public Boolean getHaveKitchen() {
        return haveKitchen;
    }

    public void setHaveKitchen(Boolean haveKitchen) {
        this.haveKitchen = haveKitchen;
    }

    public Boolean getHaveSuite() {
        return haveSuite;
    }

    public void setHaveSuite(Boolean haveSuite) {
        this.haveSuite = haveSuite;
    }

    public Boolean getHaveGarage() {
        return haveGarage;
    }

    public void setHaveGarage(Boolean haveGarage) {
        this.haveGarage = haveGarage;
    }

    public Boolean getHaveAnimals() {
        return haveAnimals;
    }

    public void setHaveAnimals(Boolean haveAnimals) {
        this.haveAnimals = haveAnimals;
    }

    public String getBathroomQuantity() {
        return bathroomQuantity;
    }

    public void setBathroomQuantity(String bathroomQuantity) {
        this.bathroomQuantity = bathroomQuantity;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getReferencePoint() {
        return referencePoint;
    }

    public void setReferencePoint(String referencePoint) {
        this.referencePoint = referencePoint;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getSpaceType() {
        return spaceType;
    }

    public void setSpaceType(String spaceType) {
        this.spaceType = spaceType;
    }

    public String getGuestsQuantity() {
        return guestsQuantity;
    }

    public void setGuestsQuantity(String guestsQuantity) {
        this.guestsQuantity = guestsQuantity;
    }

    public String getBedsQuantity() {
        return bedsQuantity;
    }

    public void setBedsQuantity(String bedsQuantity) {
        this.bedsQuantity = bedsQuantity;
    }

    public String getRoomQuantity() {
        return roomQuantity;
    }

    public void setRoomQuantity(String roomQuantity) {
        this.roomQuantity = roomQuantity;
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
        this.id = id;
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
