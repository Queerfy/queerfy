package br.com.queerfy.backend.dto;

import br.com.queerfy.backend.entities.Property;
import br.com.queerfy.backend.entities.User;

import java.util.Date;

public class LeaseAssociativeDTO {

    private Integer id;
    private PropertyDTO property;
    private UserDTO user;
    private Date checkIn;
    private Date checkOut;
    private Double totalValue;
    private String leaseStatus;

    public LeaseAssociativeDTO() {
    }
    public LeaseAssociativeDTO(LeaseDTO entityDTO, PropertyDTO propertyDTO, UserDTO userDTO) {
        this.id = entityDTO.getId();
        this.checkIn = entityDTO.getCheckIn();
        this.checkOut = entityDTO.getCheckOut();
        this.totalValue = entityDTO.getTotalValue();
        this.property = propertyDTO;
        this.user = userDTO;
        this.leaseStatus = entityDTO.getLeaseStatus();
    }

    public String getLeaseStatus() {
        return leaseStatus;
    }

    public void setLeaseStatus(String leaseStatus) {
        this.leaseStatus = leaseStatus;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PropertyDTO getProperty() {
        return property;
    }

    public void setProperty(PropertyDTO property) {
        this.property = property;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
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
}

