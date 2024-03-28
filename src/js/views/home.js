import React from "react";
import { Link } from "react-router-dom"; // Import Link to navigate between routes
import "../../styles/home.css";

export const Home = () => (
	<>
	<p>Hello</p>
	<Link to="/contact" className="addContact">Go to Contact</Link>
	</>
); 
