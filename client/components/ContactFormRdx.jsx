import React, { useEffect } from "react";
import { Field, reduxForm, getFormInitialValues } from "redux-form";
import AlertMsg from "./AlertMsg";
import ColCmp from "./ColCmp";

const ContactFormFunc = (props) => {
  const {
    handleSubmit,
    match,
    getContact,
    createContact,
    updateContact,
    resetMsgContact,
    message,
    fields,
  } = props;

  const { _id } = match.params;

  useEffect(() => {
    if (_id) {
      getContact(_id);
    } else {
    }
  }, []);

  const submit = (values, createContact, updateContact) => {
    if (_id) updateContact(values);
    else createContact(values);
  };

  return (
    <form
      onSubmit={handleSubmit((values) =>
        submit(values, createContact, updateContact)
      )}
    >
      <div className="box-header">
        {!_id && <h2 className="text-center">Create New Contact</h2>}
        {_id && <h2 className="text-center">Edit Contact</h2>}
      </div>
      {!_id && (
        <button type="submit" className="btn btn-outline-info mt-2">
          Create
        </button>
      )}
      {_id && (
        <button type="submit" className="btn btn-outline-info mt-2">
          Update
        </button>
      )}
      <div className="box-border">
        {fields.map((field) => (
          <div key={`${field.col1.name}_${field.col2.name}`} className="row">
            <ColCmp {...field.col1} />
            <ColCmp {...field.col2} />
          </div>
        ))}
      </div>
      {/* <AlertMsg message={message} onClose={resetMsgContact} /> */}
    </form>
  );
};

const ContactFormRdx = reduxForm({
  form: "contact",
})(ContactFormFunc);

export default ContactFormRdx;
