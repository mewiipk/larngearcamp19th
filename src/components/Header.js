import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <div className="header container">
        <div className="d-flex justify-content-between">
          <NavLink className="page-link" to="/">
            Home
          </NavLink>
          <NavLink className="page-link" to="/project">
            Project
          </NavLink>
          <NavLink className="page-link" to="/knowledge">
            Knowledge
          </NavLink>
          <NavLink className="page-link" to="/question">
            Question
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
