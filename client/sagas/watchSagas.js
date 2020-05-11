import { takeLatest } from "redux-saga/effects";
import * as contactActions from "../actions/contactActions";

export function* watchSagas() {
  yield takeLatest(contactActions.GET_CONTACTS, contactActions.genContactsGet);
  yield takeLatest(contactActions.GET_CONTACT, contactActions.genContactGet);
  yield takeLatest(
    contactActions.CREATE_CONTACT,
    contactActions.genContactCreate
  );
  yield takeLatest(
    contactActions.UPDATE_CONTACT,
    contactActions.genContactUpdate
  );
  yield takeLatest(
    contactActions.DELETE_CONTACT,
    contactActions.genContactDelete
  );
}
