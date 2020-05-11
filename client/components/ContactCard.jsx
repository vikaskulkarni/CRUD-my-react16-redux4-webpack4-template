import React from "react";
import { NavLink } from "react-router-dom";
import "./card.scss";

const ContactCard = ({ contact, deleteContact }) => (
  <div className="card">
    <div className="card-header">
      {contact.firstName} {contact.lastName}
    </div>
    <div className="card-body">
      <h5 className="card-title">{contact.email}</h5>
      <p className="card-text">{contact.phone}</p>
      <div style={{ float: "right" }}>
        <NavLink
          className="fa fa-edit fa-lg mr-3"
          exact
          to={`/contacts/edit/${contact._id}`}
          style={{ textDecoration: "none" }}
        ></NavLink>
        <i
          className="fa fa-trash fa-lg"
          onClick={() => deleteContact(contact._id)}
        ></i>
      </div>
    </div>
  </div>
);

export default ContactCard;
