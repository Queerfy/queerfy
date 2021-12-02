package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.UserDTO;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Transactional
@Entity()
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "Users")
public class User {

    public User() {

    }

    public User(Integer id) {
        this.id = id;
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
        this.notifications = user.getNotifications();
        this.genre = user.getDescUser();
        this.likes = user.getLikes();
        this.admin = user.getAdmin();
        this.autenticated = user.getAutenticated();
    }

    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "birth_date")
    private Date birthDate;

    @Column(name = "notifications")
    private Boolean notifications;

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

    private Boolean autenticated;

    @OneToMany(mappedBy = "user")
    private Set<Favorite> favorites = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Property> properties = new HashSet<>();

    public Set<Favorite> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<Favorite> favorites) {
        this.favorites = favorites;
    }

    public Set<Property> getProperties() {
        return properties;
    }

    public void setProperties(Set<Property> properties) {
        this.properties = properties;
    }


    public Boolean getNotifications() {
        return notifications;
    }

    public void setNotifications(Boolean notifications) {
        this.notifications = notifications;
    }

    public Boolean getAutenticated() {
        return autenticated;
    }

    public void setAutenticated(Boolean autenticated) {
        this.autenticated = autenticated;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name) && Objects.equals(birthDate, user.birthDate) && Objects.equals(notifications, user.notifications) && Objects.equals(rg, user.rg) && Objects.equals(cpf, user.cpf) && Objects.equals(email, user.email) && Objects.equals(password, user.password) && Objects.equals(perfilImg, user.perfilImg) && Objects.equals(descUser, user.descUser) && Objects.equals(genre, user.genre) && Objects.equals(likes, user.likes) && Objects.equals(admin, user.admin) && Objects.equals(autenticated, user.autenticated) && Objects.equals(favorites, user.favorites) && Objects.equals(properties, user.properties);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, birthDate, notifications, rg, cpf, email, password, perfilImg, descUser, genre, likes, admin, autenticated, favorites, properties);
    }
}
