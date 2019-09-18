import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <NavLink
              className="page-link border-0 font-montserrat-semi-bold text-white"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="page-link border-0 font-montserrat-semi-bold text-white"
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className="page-link border-0 font-montserrat-semi-bold text-white"
              to="/QandA"
            >
              Q&A
            </NavLink>
            <NavLink
              className="page-link border-0 font-montserrat-semi-bold text-white"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
