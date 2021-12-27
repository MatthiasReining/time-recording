package com.tech11.tr.users.boundary;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

import com.tech11.tr.users.control.AppUserMapper;
import com.tech11.tr.users.entity.AppUser;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/api/users")
public class UsersResource {

    @Inject
    UserService userService;

    @Inject
    AppUserMapper appUserMapper;

    @GET
    @Path("/me")
    public AppUser me(@Context SecurityContext sec) {
        return appUserMapper.toDomain(userService.getLoggedInUserEntity());
    }

}