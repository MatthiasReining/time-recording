package com.tech11.tr.users.boundary;

import java.security.Principal;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;

@Path("/api/users")
public class UsersResource {


    @GET
    @Path("/me2")
    public String me2(@Context SecurityContext sec) {
        Principal user = sec.getUserPrincipal(); 
        String name = user != null ? user.getName() : "anonymous";
        return name;
    }

    
}