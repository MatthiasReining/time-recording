package com.tech11.tr.users.boundary;

import java.security.Principal;
import java.time.ZonedDateTime;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.SecurityContext;

import com.tech11.tr.users.entity.AppUserEntity;

import io.quarkus.security.UnauthorizedException;
import io.quarkus.security.identity.SecurityIdentity;

@RequestScoped
public class UserService {

    @Inject
    SecurityIdentity identity;

    @PersistenceContext
    EntityManager em;

    @RequestScoped
    @Context
    SecurityContext sec;

    
    @Transactional
    public AppUserEntity getLoggedInUserEntity() {
        final Principal user = identity.getPrincipal();
        // final Principal user = sec.getUserPrincipal();
        if (user == null)
            throw new UnauthorizedException();
        final String name = user.getName();
        System.out.println("loggedin user " + name);
        AppUserEntity u = AppUserEntity.find("userName", name).firstResult();
        if (u == null) {
            u = new AppUserEntity();
            u.userName = name;
            u.lastLogin = ZonedDateTime.now();
            u.lastUpdate = ZonedDateTime.now();
            u.createdAt = ZonedDateTime.now();
            u = em.merge(u);
            // u.persist();
            // u.flush();
            // AppUser.flush();
        }
        return u;
    }
}
