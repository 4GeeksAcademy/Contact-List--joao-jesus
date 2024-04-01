import React, { useState, useEffect, useContext } from 'react';
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
       <div className='container'>
            <div className="form-group">
                <label htmlFor="exampleInputName">Full Name</label>
                <input type="text" className="form-control" id="InputFullName" aria-describedby="" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
                <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label> 
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
             
             <label className="phoneNumber form-check-label" htmlFor="adress">Phone number</label>
             <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="PhoneNumber" />
             
             <label className="address form-check-label" htmlFor="adress">Adress</label>
             <input type="text" className="form-control" id="adress" aria-describedby="address" />
             </div>
           
    
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/Home" className="manageContacts">Go to Home page</Link>
        </div>
    );
};


