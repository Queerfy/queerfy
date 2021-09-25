package br.com.queerfy.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.*;
import javax.persistence.*;

@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "typeuser")
@Entity
@Table(name = "Users")
public abstract class User {

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

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
    private Set<Adresses> adresses;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Set<Adresses> getAdresses() {
        return adresses;
    }

    public void setAdresses(Set<Adresses> adresses) {
        this.adresses = adresses;
    }
}
