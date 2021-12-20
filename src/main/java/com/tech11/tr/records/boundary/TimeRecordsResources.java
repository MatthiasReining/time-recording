package com.tech11.tr.records.boundary;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.tech11.tr.records.entity.TimeRecord;
import com.tech11.tr.users.control.AppUserController;
import com.tech11.tr.users.entity.AppUser;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/tr")
public class TimeRecordsResources {

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
        return TimeRecord.listAll();
    }

    @GET
    @Path("{id}")
    public TimeRecord loadTimeRecord(@PathParam("id") Long id) {
        return TimeRecord.findById(id);
    }

    @POST
    @Transactional
    public TimeRecord create(TimeRecord timeRecord) {
       
        timeRecord.createdBy = appUserController.getLoggedInUser();
        timeRecord.persist();
        System.out.println("timeRecord " + timeRecord);
        return timeRecord;
    }
}
