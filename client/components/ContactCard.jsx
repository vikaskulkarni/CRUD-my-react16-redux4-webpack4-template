import React from "react";
import { NavLink } from "react-router-dom";
import "./card.scss";

const ContactCard = ({ contact, deleteContact }) => (
  <div className="card">
    <div className="card-body">
      {Object.keys(contact).map((key, index) => (
        <div key={key}>
          <span className="card-text">{key.toUpperCase()}: </span>
          <span className="card-title">
            <strong>{contact[key]}</strong>
          </span>
        </div>
      ))}

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
