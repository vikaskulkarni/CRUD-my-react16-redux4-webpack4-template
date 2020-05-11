// THIS FILE CAN BE USED TO DEFINE ALL THE DISPLAY CONTAINERS THAT WRAPS THE COMPONENTS

import * as contactActions from "../actions/contactActions";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";
import ContactFormRdx from "../components/ContactFormRdx";

const getContacts = contactActions.getContacts;
const deleteContact = contactActions.deleteContact;
export const ContactListCtr = connect(
  (state) => ({
    contacts: state.contactsReducer.contacts,
    message: state.contactsReducer.message,
  }),
  { getContacts, deleteContact }
)(ContactList);

const getContact = contactActions.getContact;
const createContact = contactActions.createContact;
const updateContact = contactActions.updateContact;
const resetMsgContact = contactActions.resetMsgContact;
export let ContactFormCtr = connect(
  (state) => ({
    initialValues: state.contactsReducer.contact,
    message: state.contactsReducer.message,
    fields: state.contactsReducer.fields,
    enableReinitialize: true,
  }),
  {
    getContact,
    createContact,
    updateContact,
    resetMsgContact,
  }
)(ContactFormRdx);
