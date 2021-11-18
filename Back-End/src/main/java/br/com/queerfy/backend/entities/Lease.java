package br.com.queerfy.backend.entities;

import br.com.queerfy.backend.dto.LeaseDTO;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Lease
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @OneToOne
    @JoinColumn(name = "property_id", referencedColumnName = "id")
    private Property property;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Date checkIn;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Date checkOut;
    private Double totalValue;
    private String leaseStatus;

    public Lease(LeaseDTO entity){
        this.id = entity.getId();
        this.checkIn = entity.getCheckIn();
        this.checkOut = entity.getCheckOut();
        this.totalValue = entity.getTotalValue();
        this.leaseStatus = entity.getLeaseStatus();
    }

    public Lease() {
    }

    public String getLeaseStatus() {
        return leaseStatus;
    }

    public void setLeaseStatus(String leaseStatus) {
        this.leaseStatus = leaseStatus;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Date checkIn) {
        this.checkIn = checkIn;
    }

    public Date getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Date checkOut) {
        this.checkOut = checkOut;
    }

    public Double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(Double totalValue) {
        this.totalValue = totalValue;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Integer getId() {
        return id;
    }
}
