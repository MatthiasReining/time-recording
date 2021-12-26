package com.tech11.tr.tickets.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.NamedQueries;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity(name = "Ticket")
@Table(name = "ticket")
@NamedQueries({
        @NamedQuery(name = TicketEntity.QUERY_BY_TICKETNUMBER, query = "from Ticket where ticketNumber = :"
                + TicketEntity.PARAM_TICKETNUMBER),
})
public class TicketEntity extends PanacheEntity {

    public static final String QUERY_BY_TICKETNUMBER = "Ticket.byTicketNumber";
    public static final String PARAM_TICKETNUMBER = "ticketNumber";

    @NotBlank
    public String ticketNumber;

    public String description;
    public String ticketType;
    @ManyToOne
    public TicketEntity epic;

    /**
     * If <code>false</code> the ticket is still not synced with the ticket system.
     * The ticket was created by a time record with a non existing ticket number.
     */
    public boolean synced = false;

}
