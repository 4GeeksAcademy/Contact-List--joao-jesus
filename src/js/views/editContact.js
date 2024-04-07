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
    <div className="container">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          id="name"
          aria-describedby=""
          defaultValue={contactToEditData?.name}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your data with anyone else.
        </small>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            type="email"
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
            type="number"
            className="form-control"
            id="phone"
            aria-describedby="PhoneNumber"
            defaultValue={contactToEditData?.phone}
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
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => actions.updateContact(contactToEditData.id, formData)}
      >
        Update contact
      </button>
      <Link to="/" className="manageContacts">
        Go to Contacts page
      </Link>
    </div>
  );
};