import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Import your Context object
import "../../styles/home.css";
import ContactCard from "../component/contactCard";

export const Contact = () => {
  const context = React.useContext(Context);

  const { store, actions } = context;

  React.useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container">
      <Link className="btn btn-success m-2" to="/addContact">
        Add Contact
      </Link>
      {store?.contactList?.length > 0 &&
        store.contactList.map((contact) => {
          const { id, name, phone, address, email } = contact;
          return (
            <ContactCard
              key={`card-${id}`}
              id={id}
              name={name}
              email={email}
              phone={phone}
              address={address}
            ></ContactCard>
          );
        })}
    </div>
  );
};

