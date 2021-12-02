package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Favorite;
import br.com.queerfy.backend.entities.User;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

public class UserDTO {

    private Integer id;
    private String name;
    private Date birthDate;
    private Boolean notifications;
    private String rg;
    private String cpf;
    private String email;
    private String password;
    private String perfilImg;
    private String descUser;
    private String genre;
    private String likes;
    private Boolean admin;
    private Boolean autenticated;
    private Set<PropertyDTO> property = new HashSet<>();
    private Set<FavoriteDTO> favorite = new HashSet<>();

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
        this.notifications = user.getNotifications();
        this.admin = user.getAdmin();
        this.property = mapProperties(user);
        this.favorite = mapFavorites(user);
    }

    public UserDTO(Integer id, String name, String cpf, String email, String genre, String rg, Boolean admin, Boolean autenticated, Boolean notifications) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.genre = genre;
        this.rg = rg;
        this.admin = admin;
        this.notifications = notifications;
        this.autenticated = autenticated;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDTO userDTO = (UserDTO) o;
        return Objects.equals(id, userDTO.id) && Objects.equals(name, userDTO.name) && Objects.equals(birthDate, userDTO.birthDate) && Objects.equals(notifications, userDTO.notifications) && Objects.equals(rg, userDTO.rg) && Objects.equals(cpf, userDTO.cpf) && Objects.equals(email, userDTO.email) && Objects.equals(password, userDTO.password) && Objects.equals(perfilImg, userDTO.perfilImg) && Objects.equals(descUser, userDTO.descUser) && Objects.equals(genre, userDTO.genre) && Objects.equals(likes, userDTO.likes) && Objects.equals(admin, userDTO.admin) && Objects.equals(autenticated, userDTO.autenticated) && Objects.equals(property, userDTO.property) && Objects.equals(favorite, userDTO.favorite);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, birthDate, notifications, rg, cpf, email, password, perfilImg, descUser, genre, likes, admin, autenticated, property, favorite);
    }

    public Boolean getNotifications() {
        return notifications;
    }

    public void setNotifications(Boolean notifications) {
        this.notifications = notifications;
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

    public Boolean getAutenticated() {
        return autenticated;
    }

    public void setAutenticated(Boolean autenticated) {
        this.autenticated = autenticated;
    }

    public Set<PropertyDTO> getProperty() {
        return property;
    }

    public void setProperty(Set<PropertyDTO> property) {
        this.property = property;
    }

    public Set<FavoriteDTO> getFavorite() {
        return favorite;
    }

    public void setFavorite(Set<FavoriteDTO> favorite) {
        this.favorite = favorite;
    }

    public Set<FavoriteDTO> mapFavorites(User user){
        return user.getFavorites().stream().map(favorite -> new FavoriteDTO(favorite)).collect(Collectors.toSet());
    }

    public Set<PropertyDTO> mapProperties(User user){
        return  user.getProperties().stream().map(property -> new PropertyDTO(property)).collect(Collectors.toSet());
    }
}
