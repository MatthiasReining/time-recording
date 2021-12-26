package com.tech11.tr.records.control;

import com.tech11.tr.records.entity.TimeRecordEntity;
import com.tech11.tr.records.entity.TimeRecord;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "cdi")
public interface TimeRecordMapper {
    
    TimeRecordEntity toEntity(TimeRecord domain);

    @Mapping(source = "owner.userName", target = "ownerName")
    @Mapping(source = "createdBy.userName", target = "createdByName")
    @Mapping(source = "ticket.ticketNumber", target = "ticketNumber")
    TimeRecord toDomain(TimeRecordEntity entity);

}
