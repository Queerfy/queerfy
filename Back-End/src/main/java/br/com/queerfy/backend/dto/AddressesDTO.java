package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Addresses;
import br.com.queerfy.backend.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class AddressesDTO {

    private Integer id;
    private String place;
    private String number;
    private String cep;
    private String district;
    private String city;
    private Integer idUser;

    public AddressesDTO() {

    }

    public AddressesDTO(Addresses addresses) {
        this.id = addresses.getId();
        this.place = addresses.getPlace();
        this.number = addresses.getNumber();
        this.cep = addresses.getCep();
        this.district = addresses.getDistrict();
        this.city = addresses.getCity();
        this.idUser = addresses.getUser().getId();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }
}
