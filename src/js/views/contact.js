import React, { useState, useEffect, useContext } from 'react';
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <form className='cardContact'>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
            </div>
            <div className="form-group form-check">
            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /><Link to="/Home" className="manageContacts">Go to Home page</Link>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
    );
};

Contact.propTypes = {
    params: PropTypes.object
};
