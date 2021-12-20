package com.tech11.tr.users.entity;

import java.time.ZonedDateTime;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class AppUser extends PanacheEntity {

    public String userName;
    public ZonedDateTime lastLogin;
    public ZonedDateTime lastUpdate;
    public ZonedDateTime createdAt;

}
