import React from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = React.useContext(Context);

  //keep form data in the local state
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData({ ...formData, [id]: value });
  };

  return (<>
    <h5 className="titleAddContact text-center mt-5">Add New Contact</h5>
    <div className="container sm-auto mt-3">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          id="name"
          aria-describedby=""
        />
        
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />

          <label className="phoneNumber form-check-label" htmlFor="phone">
            Phone number
          </label>
          <input
            onChange={handleChange}
            type="number"
            className="form-control"
            id="phone"
            aria-describedby="PhoneNumber"
          />

          <label className="address form-check-label" htmlFor="address">
            Address
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="address"
            aria-describedby="address"
          />
        </div><small id="emailHelp" className="form-text text-muted">
          We'll never share your data with anyone else.
        </small>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn btn-success mt-3 d-flex justify-content-around"
        onClick={() => actions.createContact(formData)}
      >
        Submit
      </button>
      <Link to="/" className="manageContacts btn btn-primary mt-3">
        Go to Contacts page
      </Link>
    </div></>
  );
};


