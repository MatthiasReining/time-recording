package com.tech11.tr.records.entity;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TimeRecord {

    private Long id;
    @NotNull
    private LocalDate workingDay;
    private String ownerName;
    @NotNull
    private Integer duration;
    private ZonedDateTime startActivity;
    private ZonedDateTime endActivity;
    @NotBlank
    private String ticketNumber;
    private String description;
    private String status;
    private String createdByName;
}
