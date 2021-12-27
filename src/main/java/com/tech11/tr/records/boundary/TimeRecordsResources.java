package com.tech11.tr.records.boundary;

import java.util.List;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.tech11.tr.records.entity.TimeRecord;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/api/tr")
public class TimeRecordsResources {

    @Inject
    TimeRecordsService trService;

    @GET
    public List<TimeRecord> loadAll() {
        return trService.loadAll();
    }

    @GET
    @Path("{id}")
    public TimeRecord load(@PathParam("id") Long id) {
        return trService.load(id);
    }

    @POST
    public TimeRecord createOrUpdate(@Valid TimeRecord timeRecord) {
        return trService.createOrUpdate(timeRecord);
    }

    @Path("btx/batch-update")
    @POST
    public void createOrUpdateBatch(@Valid List<TimeRecord> timeRecords) {
        trService.createOrUpdateBatch(timeRecords);
    }
}
