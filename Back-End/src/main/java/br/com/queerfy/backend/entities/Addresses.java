package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.AddressesDTO;

import javax.persistence.*;

@Entity
@Table(name = "Adresses")
public class Addresses {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "place")
    private String place;

    @Column(name = "number")
    private String number;

    @Column(name = "cep")
    private String cep;

    @Column(name = "district")
    private String district;

    @Column(name = "city")
    private String city;

    @ManyToOne()
    @JoinColumn(name = "fkUser")
    private User user;

    public Addresses() {

    }

    public Addresses(AddressesDTO addressesDTO) {
        this.id = addressesDTO.getId();
        this.place = addressesDTO.getPlace();
        this.number = addressesDTO.getNumber();
        this.cep = addressesDTO.getCep();
        this.district = addressesDTO.getDistrict();
        this.city = addressesDTO.getCity();
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
