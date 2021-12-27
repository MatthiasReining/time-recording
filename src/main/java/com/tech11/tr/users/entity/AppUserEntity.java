package com.tech11.tr.users.entity;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;


@Entity(name = "AppUser")
@Table(name = "appuser")
public class AppUserEntity extends PanacheEntity {

    public String userName;
    public ZonedDateTime lastLogin;
    public ZonedDateTime lastUpdate;
    public ZonedDateTime createdAt;

}
