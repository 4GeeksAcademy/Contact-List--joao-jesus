import React from "react";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const context = React.useContext(Context);

  const { store, actions } = context;

  const [contactToEditData, setContactToEditData] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    if (id && store.contactList.length > 0) {
      setContactToEditData(
        store?.contactList?.filter((item) => item.id == id)[0]
      );
    }
  }, [store.contactList.length, id]);


  const [formData, setFormData] = React.useState({
    name: contactToEditData?.name,
    email: contactToEditData?.email,
    phone: contactToEditData?.phone,
    address: contactToEditData?.address,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="container sm-auto mt-3">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          id="name"
          aria-describedby=""
          defaultValue={contactToEditData?.name}
          maxLength= "70"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your data with anyone else.
        </small>
        <div className="form-group ">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            type="email"
            maxLength= "100"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            defaultValue={contactToEditData?.email}
            
          />

          <label className="phoneNumber form-check-label" htmlFor="phone">
            Phone number
          </label>
          <input
            onChange={handleChange}
            type="tel"
            className="form-control"
            id="phone"
            aria-describedby="PhoneNumber"
            defaultValue={contactToEditData?.phone}
            maxLength= "15"
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
            defaultValue={contactToEditData?.address}
            maxLength= "100"
          />
        </div>
      </div>

      <button
        type="submit"
        className="updatedContacts btn btn-success mt-3 d-flex justify-content-around"
        onClick={() => actions.updateContact(contactToEditData.id, formData)}
      >
        Update contact
      </button>
      <Link to="/" className="manageContacts btn btn-primary mt-3 " >
        Go to Contacts page
      </Link>
    </div>
  );
};