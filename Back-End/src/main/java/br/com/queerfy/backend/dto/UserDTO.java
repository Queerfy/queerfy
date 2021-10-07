package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Addresses;
import br.com.queerfy.backend.entities.User;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.util.*;
import java.util.stream.Collectors;

public class UserDTO {

    private Integer id;
    private String name;
    private Date birthDate;
    private String rg;
    private String cpf;
    private String email;
    private String password;
    private String perfilImg;
    private String descUser;
    private String genre;
    private String likes;
    private Boolean admin;
    private Set<AddressesDTO> addresses = new HashSet<>();
    private Set<PropertyDTO> property = new HashSet<>();

    public UserDTO() {

    }

    public UserDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.birthDate = user.getBirthDate();
        this.rg = user.getRg();
        this.cpf = user.getCpf();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.perfilImg = user.getPerfilImg();
        this.descUser = user.getGenre();
        this.genre = user.getDescUser();
        this.likes = user.getLikes();
        this.admin = user.getAdmin();
        this.addresses = mapAddresses(user);
        this.property = mapProperties(user);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPerfilImg() {
        return perfilImg;
    }

    public void setPerfilImg(String perfilImg) {
        this.perfilImg = perfilImg;
    }

    public String getDescUser() {
        return descUser;
    }

    public void setDescUser(String descUser) {
        this.descUser = descUser;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Set<AddressesDTO> getAdresses() {
        return addresses;
    }

    public void setAdresses(Set<AddressesDTO> adresses) {
        this.addresses = adresses;
    }

    public Set<PropertyDTO> getProperty() {
        return property;
    }

    public void setProperty(Set<PropertyDTO> property) {
        this.property = property;
    }

    public Set<PropertyDTO> mapProperties(User user){
        return  user.getProperties().stream().map(property -> new PropertyDTO(property)).collect(Collectors.toSet());
    }
    public Set<AddressesDTO> mapAddresses(User user) {
        return user.getAdresses().stream().map(address -> new AddressesDTO(address)).collect(Collectors.toSet());
    }


}
