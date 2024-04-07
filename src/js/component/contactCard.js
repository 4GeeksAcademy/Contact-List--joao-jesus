import React from "react";
import { Context } from "../store/appContext"; // Import your Context object
import { useNavigate } from "react-router-dom";

export default function contactCard({ id, name, email, phone, address }) {
  const context = React.useContext(Context);

  const { store, actions } = context;

  let navigate = useNavigate();

  return (
    <div className="card m-2 ml-2">
      <div className="card-body bg-light position-relative d-flex justify-content-between">
        <div className="d-inline-flex align-items-center">
          <img
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1711655427~exp=1711656027~hmac=07d9a09345f1239e2c931a2751ad001fe484ded8f928e5b8314b0652ff7ee4f3/"
            style={{ height: "64px", width: "64px" }}
            className="float-left rounded-circle m-3"
            alt="User Avatar"
          />
          <div className="message">
            <div className="cardName">
              <h2 className="card-title">{name}</h2>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
              <i className="fa fa-envelope m-2"></i>
              {email}
            </h6>
            <p className="card-text">
              <i className="fa fa-phone m-2"></i>
              {phone}
            </p>
            <h6 className="card-subtitle mb-2 text-muted">
              <i className="fa fa-location-arrow m-2"></i>
              {address}
            </h6>
          </div>
        </div>
        <div className="trashEdit">
          <i
            className="fa fa-pen m-2"
            onClick={() => navigate(`/editContact/${id}`)}
          ></i>
          <i
            className="fa fa-trash m-2"
            onClick={() => actions.deleteContact(id)}
          ></i>
        </div>
      </div>
    </div>
  );
}
