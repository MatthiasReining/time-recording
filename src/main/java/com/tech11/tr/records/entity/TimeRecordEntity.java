package com.tech11.tr.records.entity;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.tech11.tr.tickets.entity.TicketEntity;
import com.tech11.tr.users.entity.AppUser;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "TimeRecord")
@Table(name = "timerecord")
public class TimeRecordEntity extends PanacheEntity {

    public LocalDate workingDay;

    @ManyToOne(cascade = CascadeType.ALL)
    public AppUser owner;

    public ZonedDateTime startActivity;
    public ZonedDateTime endActivity;
    @NotNull
    public Integer duration;
    /**
     * JIRA Ticket number
     */
    @ManyToOne(cascade = CascadeType.ALL)
    public TicketEntity ticket;
    public String description;

    public String status;
    @ManyToOne(cascade = CascadeType.ALL)
    public AppUser createdBy;

}
