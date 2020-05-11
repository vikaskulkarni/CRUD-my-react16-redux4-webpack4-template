import React, { Fragment } from "react";
import "./alert.scss";

const alertMessage = (title, content) => (
  <Fragment>
    <div style={{ fontSize: "1.2rem" }}>{title}</div>
    <div>{content}</div>
  </Fragment>
);

const AlertMsg = (props) => (
  <div className="container">
    <div className="alert-box">
      <div className="alert alert-dismissable">
        {(props.message.isSuccess || props.message.isError) && (
          <div>
            <button
              type="button"
              data-dismiss="alert"
              aria-label="close"
              className="close"
              onClick={() => props.onClose}
            >
              <span aria-hidden="true" style={{ color: "#f00" }}>
                ×
              </span>
            </button>
          </div>
        )}
        <div className="alert-icon text-center">
          {props.message.isSuccess && (
            <i
              className="fa fa-check-square-o alert-success"
              aria-hidden="true"
            >
              {alertMessage(props.message.title, props.message.content)}
            </i>
          )}
          {props.message.isError && (
            <i
              className="fa fa-exclamation-triangle alert-danger"
              aria-hidden="true"
            >
              {alertMessage(props.message.title, props.message.content)}
            </i>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default AlertMsg;
