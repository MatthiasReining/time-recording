package com.tech11.tr.records.boundary;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.tech11.tr.records.control.TimeRecordMapper;
import com.tech11.tr.records.entity.TimeRecord;
import com.tech11.tr.records.entity.TimeRecordEntity;
import com.tech11.tr.tickets.entity.TicketEntity;
import com.tech11.tr.users.control.AppUserController;
import com.tech11.tr.users.entity.AppUser;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/tr")
public class TimeRecordsResources {

    @Inject
    TimeRecordMapper timeRecordMapper;

    @Inject
    AppUserController appUserController;

    @GET
    @Path("/me")
    public String me() {
        return appUserController.getLoggedInUser().userName;
    }

    @GET
    @Path("/me2")
    public AppUser me2() {
        return appUserController.getLoggedInUser();
    }

    @GET
    public List<TimeRecord> loadAll() {
        // inspired by
        // https://stephennimmo.com/building-a-customer-api-using-quarkus-from-the-ground-up/
        Stream<TimeRecordEntity> s = TimeRecordEntity.findAll().stream();
        return s.map(timeRecordMapper::toDomain).collect(Collectors.toList());
    }

    @GET
    @Path("{id}")
    public TimeRecord loadTimeRecord(@PathParam("id") Long id) {
        return timeRecordMapper.toDomain(TimeRecordEntity.findById(id));
    }

    @POST
    @Transactional
    public TimeRecord createOrUpdate(@Valid TimeRecord timeRecord) {

        TimeRecordEntity trEntity = new TimeRecordEntity();
        if (timeRecord.getId() != null) {
            trEntity = TimeRecordEntity.findById(timeRecord.getId());
        }

        trEntity.createdBy = appUserController.getLoggedInUser();
        trEntity.status = "OPEN";
        trEntity.description = timeRecord.getDescription();
        trEntity.workingDay = timeRecord.getWorkingDay();
        trEntity.duration = timeRecord.getDuration();
        // if (timeRecord.ownerName == null) {
        trEntity.owner = appUserController.getLoggedInUser();
        // } else {
        // TODO set entity
        // }

        // create ticket
        List<TicketEntity> ticketEntities = TicketEntity.find("ticketNumber", timeRecord.getTicketNumber()).list();
        final TicketEntity ticketEntity;
        if (ticketEntities.isEmpty()) {
            ticketEntity = new TicketEntity();
            ticketEntity.ticketNumber = timeRecord.getTicketNumber();

        } else {
            ticketEntity = ticketEntities.get(0);
        }
        trEntity.ticket = ticketEntity;

        trEntity.persist();

        return timeRecordMapper.toDomain(trEntity);

    }
}
