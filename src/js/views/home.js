import React from "react";
import { Link } from "react-router-dom"; // Import Link to navigate between routes
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="container">
	<Link className="btn btn-success m-2" component={Link} to="/contact">Add Contact</Link>
  <div className="card m-2 ">
    <div className="card-body">
		<div className="d-inline-flex ">
      <img src="http://placehold.it/64x64" className="float-left rounded-circle ml-2" />
      <div className="message" style={{ marginLeft: '20px' }}>
        <h5 className="card-title"><i className="fa fa-skull"></i>Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-heart"></i>Card subtitle</h6>
        <p className="card-text"> <i className="fa fa-skull"></i>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      
	  </div>
    </div>
  </div>
</div>
	
	</>
); 
