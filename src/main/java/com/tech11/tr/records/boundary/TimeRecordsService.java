package com.tech11.tr.records.boundary;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.validation.Valid;

import com.tech11.tr.records.control.TimeRecordMapper;
import com.tech11.tr.records.entity.TimeRecord;
import com.tech11.tr.records.entity.TimeRecordEntity;
import com.tech11.tr.tickets.entity.TicketEntity;
import com.tech11.tr.users.control.AppUserController;

import io.quarkus.panache.common.Parameters;

public class TimeRecordsService {

    @Inject
    TimeRecordMapper timeRecordMapper;

    @Inject
    AppUserController appUserController;

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

}
