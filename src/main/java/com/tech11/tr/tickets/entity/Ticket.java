package com.tech11.tr.tickets.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Ticket extends PanacheEntity {

    public String ticketNumber;
    public String description;
    public String ticketType;
    @ManyToOne
    public Ticket epic;
    
}
