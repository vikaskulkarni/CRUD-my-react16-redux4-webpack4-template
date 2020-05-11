import React from "react";
import { Field } from "redux-form";

const ColCmp = (props) => (
  <div className="col-md-6">
    <div className="form-group">
      <div className="row">
        <div className="col-md-3">
          <label htmlFor={props.name}>{props.title}</label>
        </div>
        <div className="col-md-9">
          <Field name={props.name} component="input" type={props.type} />
        </div>
      </div>
    </div>
  </div>
);

export default ColCmp;
