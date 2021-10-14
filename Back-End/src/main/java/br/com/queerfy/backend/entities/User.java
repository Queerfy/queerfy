package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.UserDTO;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity()
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "Users")
public class User {

    public User() {

    }

    public User(UserDTO user) {
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
    }

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "birth_date")
    private Date birthDate;

    @Column(name = "rg")
    private String rg;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "perfil_img")
    private String perfilImg;

    @Column(name = "desc_user")
    private String descUser;

    @Column(name = "genre")
    private String genre;

    @Column(name = "likes")
    private String likes;

    @Column(name = "admin")
    private Boolean admin;

    @OneToMany(mappedBy = "user")
    private Set<Addresses> adresses = new HashSet<>();
    @OneToMany(mappedBy = "user")
    private Set<Property> properties = new HashSet<>();

    public Set<Property> getProperties() {
        return properties;
    }

    public void setProperties(Set<Property> properties) {
        this.properties = properties;
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

    public Set<Addresses> getAdresses() {
        return adresses;
    }

    public void setAdresses(Set<Addresses> adresses) {
        this.adresses = adresses;
    }

}
