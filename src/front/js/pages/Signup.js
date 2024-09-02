import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Signup = () => {
  
  return (
    <div className="container">
        <h2>Signup</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Username</span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Email</span>
        <input type="text" className="form-control" placeholder="Tu email" aria-label="Tu email" aria-describedby="basic-addon2" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">Password</span>
        <input type="text" className="form-control" placeholder="Tu contraseña" aria-label="Tu contraseña" aria-describedby="basic-addon2" />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-success" type="submit">Submit</button>
        <Link to="/">
          <button className="btn btn-danger" type="submit">Cancel</button>
        </Link>
      </div>
    </div>
  )
}

export default Signup