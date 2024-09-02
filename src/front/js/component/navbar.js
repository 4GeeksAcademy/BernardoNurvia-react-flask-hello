import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto d-grid gap-2 d-md-flex justify-content-md-end">
					<Link to="/login">
						<button className="btn btn-success">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>			
				</div>
			</div>
		</nav>
	);
};
