import React, { Fragment, useEffect } from "react";
import ContactCard from "./ContactCard";
import { NavLink } from "react-router-dom";
import AlertMsg from "./AlertMsg";

const ContactList = (props) => {
  useEffect(() => {
    props.getContacts();
  }, []);
  return (
    <Fragment>
      <div className="box-header">
        <h2>List of Contacts</h2>
      </div>
      <NavLink
        className="btn btn-outline-info"
        exact
        to="/contacts/new"
        style={{ marginTop: "10px" }}
      >
        Add Contact
      </NavLink>
      <div className="box-border">
        <div className="row">
          {props.contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} {...props} />
          ))}
        </div>
        {/* <AlertMsg message={props.message} /> */}
      </div>
    </Fragment>
  );
};

export default ContactList;
