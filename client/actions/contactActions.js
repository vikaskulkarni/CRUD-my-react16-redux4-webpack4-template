import { call, put } from "redux-saga/effects";
import request from "../utils/request";

export const GET_CONTACT = "GET_CONTACT";
export const GET_CONTACT_SUCCESS = "GET_CONTACT_SUCCESS";
export const GET_CONTACT_FAIL = "GET_CONTACT_FAIL";

export const GET_CONTACTS = "GET_CONTACTS";
export const GET_CONTACTS_SUCCESS = "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_FAIL = "GET_CONTACTS_FAIL";

export const CREATE_CONTACT = "CREATE_CONTACT";
export const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
export const CREATE_CONTACT_FAIL = "CREATE_CONTACT_FAIL";

export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_FAIL = "UPDATE_CONTACT_FAIL";

export const DELETE_CONTACT = "DELETE_CONTACT";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const DELETE_CONTACT_FAIL = "DELETE_CONTACT_FAIL";

export const RESET_CONTACT_MSG = "RESET_CONTACT_MSG";

const CONTACTS_LOOKUP = "http://localhost:3030/contacts";

export const getContact = (contactId) => ({
  type: GET_CONTACT,
  contactId,
});

const getContactSuccess = (contact) => ({
  type: GET_CONTACT_SUCCESS,
  contact,
});

const getContactFail = (error) => ({
  type: GET_CONTACT_FAIL,
  error,
});

export const getContacts = (contacts) => ({
  type: GET_CONTACTS,
  contacts,
});

const getContactsSuccess = (contacts) => ({
  type: GET_CONTACTS_SUCCESS,
  contacts,
});

const getContactsFail = (error) => ({
  type: GET_CONTACTS_FAIL,
  error,
});

export const createContact = (contact) => ({
  type: CREATE_CONTACT,
  contact,
});

const createContactSuccess = (contact) => ({
  type: CREATE_CONTACT_SUCCESS,
  contact,
});

const createContactFail = (error) => ({
  type: CREATE_CONTACT_FAIL,
  error,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  contact,
});

const updateContactSuccess = (contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  contact,
});

const updateContactFail = (error) => ({
  type: UPDATE_CONTACT_FAIL,
  error,
});

export const deleteContact = (contactId) => ({
  type: DELETE_CONTACT,
  contactId,
});

const deleteContactSuccess = (contact) => ({
  type: DELETE_CONTACT_SUCCESS,
  contact,
});

const deleteContactFail = (error) => ({
  type: DELETE_CONTACT_FAIL,
  error,
});

const resetMsgContactAction = (msg) => ({
  type: RESET_CONTACT_MSG,
  msg,
});

export function* resetMsgContact(action) {
  console.log();
  yield put(resetMsgContactAction({}));
}

export function* genContactGet(action) {
  try {
    const contactsResponse = yield call(
      request,
      `${CONTACTS_LOOKUP}/${action.contactId}`
    );
    console.log();
    yield put(getContactSuccess(contactsResponse || {}));
  } catch (err) {
    yield put(getContactFail(err));
  }
}

export function* genContactsGet() {
  try {
    const contactsResponse = yield call(request, CONTACTS_LOOKUP);
    yield put(getContactsSuccess(contactsResponse.data || {}));
  } catch (err) {
    yield put(getContactsFail(err));
  }
}

export function* genContactCreate(action) {
  try {
    const contactsResponse = yield call(request, CONTACTS_LOOKUP, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(action.contact),
    });
    yield put(createContactSuccess(contactsResponse || {}));
  } catch (err) {
    yield put(createContactFail(err));
  }
}

export function* genContactUpdate(action) {
  try {
    const contactsResponse = yield call(
      request,
      `${CONTACTS_LOOKUP}/${action.contact._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(action.contact),
      }
    );
    yield put(updateContactSuccess(contactsResponse || {}));
  } catch (err) {
    yield put(updateContactFail(err));
  }
}

export function* genContactDelete(action) {
  try {
    const contactsResponse = yield call(
      request,
      `${CONTACTS_LOOKUP}/${action.contactId}`,
      {
        method: "DELETE",
      }
    );
    yield put(deleteContactSuccess(contactsResponse || {}));
  } catch (err) {
    yield put(deleteContactFail(err));
  }
}
