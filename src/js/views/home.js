import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Import your Context object
import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <Link className="btn btn-success m-2" to="/contact">Add Contact</Link>
      <div className="card m-2">
        <div className="card-body">
          <div className="d-inline-flex">
            <img
              src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1711655427~exp=1711656027~hmac=07d9a09345f1239e2c931a2751ad001fe484ded8f928e5b8314b0652ff7ee4f3/"
              style={{ height: '64px', width: '64px' }}
              className="float-left rounded-circle ml-2"
              alt="User Avatar"
            />
            <div className="message" style={{ marginLeft: '20px' }}>
              <h5 className="cardName">
                <i className="fa fa-pen"></i> 
                <i className="fa fa-trash"></i> 
              </h5>
              <h5 className="card-title">
                <i className="fa fa-skull"></i>{store.contact.name}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                <i className="fa fa-heart"></i>{store.contact.email}
              </h6>
              <p className="card-text">
                <i className="fa fa-skull"></i>{store.contact.phone}
              </p>
              <h6 className="card-subtitle mb-2 text-muted">
                <i className="fa fa-heart"></i>{store.contact.address}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

