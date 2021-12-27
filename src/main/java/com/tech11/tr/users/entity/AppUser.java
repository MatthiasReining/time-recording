package com.tech11.tr.users.entity;

import java.time.ZonedDateTime;

import javax.json.bind.annotation.JsonbDateFormat;

import com.tech11.jaxrs.DateFormats;

public class AppUser {
    
    public String userName;
    
    @JsonbDateFormat(DateFormats.ZONED_DATE_TIME_FORMAT)
    public ZonedDateTime lastLogin;
    @JsonbDateFormat(DateFormats.ZONED_DATE_TIME_FORMAT)
    public ZonedDateTime lastUpdate;
    @JsonbDateFormat(DateFormats.ZONED_DATE_TIME_FORMAT)
    public ZonedDateTime createdAt;

}
