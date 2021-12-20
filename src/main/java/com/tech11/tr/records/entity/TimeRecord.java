package com.tech11.tr.records.entity;

import static org.hibernate.annotations.CascadeType.ALL;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.tech11.tr.tickets.entity.Ticket;
import com.tech11.tr.users.entity.AppUser;

import org.hibernate.annotations.Cascade;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class TimeRecord extends PanacheEntity {

    public LocalDate recordDate;
    public String recordOwner;
    /**
     * JIRA Ticket number
     */
    @ManyToOne
    public Ticket ticket;
    public String description;

    public String status;
    @ManyToOne 
    @Cascade(ALL)
    public AppUser createdBy;

}
