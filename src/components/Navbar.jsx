import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink className="Navbar__link Navbar__link--main" to="/">
        React Many APIs
      </NavLink>
      <NavLink className="Navbar__link" to="/popular-github">
        Popular on GitHub
      </NavLink>
      <NavLink className="Navbar__link" to="/crud-todos">
        CRUD TODOs
      </NavLink>
    </div>
  );
}
