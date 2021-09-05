package com.br.queerfy.backend.dto;

import java.util.Date;

public abstract class UserRequest {

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

}
