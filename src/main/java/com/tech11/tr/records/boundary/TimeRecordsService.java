package com.tech11.tr.records.boundary;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.NotAuthorizedException;

import com.tech11.tr.records.control.TimeRecordMapper;
import com.tech11.tr.records.entity.TimeRecord;
import com.tech11.tr.records.entity.TimeRecordEntity;
import com.tech11.tr.records.entity.TimeRecordsQueryParam;
import com.tech11.tr.tickets.entity.TicketEntity;
import com.tech11.tr.users.boundary.UserService;

import io.quarkus.panache.common.Parameters;

@RequestScoped
public class TimeRecordsService {

    @Inject
    TimeRecordMapper timeRecordMapper;

    @Inject
    UserService userService;

    public List<TimeRecord> loadAll() {
        // inspired by
        // https://stephennimmo.com/building-a-customer-api-using-quarkus-from-the-ground-up/
        Stream<TimeRecordEntity> s = TimeRecordEntity.findAll().stream();
        return s.map(timeRecordMapper::toDomain).collect(Collectors.toList());
    }

    public TimeRecord load(Long id) {
        return timeRecordMapper.toDomain(TimeRecordEntity.findById(id));
    }

    @Transactional
    public TimeRecord createOrUpdate(@Valid TimeRecord timeRecord) {

        TimeRecordEntity trEntity = new TimeRecordEntity();
        if (timeRecord.getId() != null) {
            trEntity = TimeRecordEntity.findById(timeRecord.getId());
        }

        trEntity.createdBy = userService.getLoggedInUserEntity();
        trEntity.status = "OPEN";
        trEntity.description = timeRecord.getDescription();
        trEntity.workingDay = timeRecord.getWorkingDay();
        trEntity.duration = timeRecord.getDuration();
        // if (timeRecord.ownerName == null) {
        trEntity.owner = userService.getLoggedInUserEntity();
        // } else {
        // TODO set entity
        // }

        // create ticket

        List<TicketEntity> ticketEntities = TicketEntity.find("#" + TicketEntity.QUERY_BY_TICKETNUMBER,
                Parameters.with(TicketEntity.PARAM_TICKETNUMBER, timeRecord.getTicketNumber()))
                .list();
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

    @Transactional
    public void createOrUpdateBatch(@Valid List<TimeRecord> timeRecords) {
        timeRecords.forEach(timeRecord -> this.createOrUpdate(timeRecord));
    }

    public List<TimeRecord> load(TimeRecordsQueryParam params) {

        if (params.getUserName() != null) {
            if (!params.getUserName().equals(userService.getLoggedInUserEntity().userName)) {
                throw new NotAuthorizedException(
                        "You (" + userService.getLoggedInUserEntity() + " cannot get the data from "
                                + params.getUserName());
            }

            Stream<TimeRecordEntity> stream = TimeRecordEntity.stream("#" + TimeRecordEntity.QUERY_BY_OWNER,
                    Parameters.with(TimeRecordEntity.PARAM_OWNER, params.getUserName()));
            return stream.map(timeRecordMapper::toDomain).collect(Collectors.toList());
        }

        return loadAll();

    }

}
