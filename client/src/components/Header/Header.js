import React from "react";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Women in Coding</h1>
      <div className="nav-list">
        <NavLink className="nav-link" to="/">
          home
        </NavLink>
        <NavLink className="nav-link" to="/groups">
          activist groups & networks
        </NavLink>
        <NavLink className="nav-link" to="/pioneers">
          pioneers
        </NavLink>
        <NavLink className="nav-link" to="/events">
          events
        </NavLink>
      </div>
    </div>
  );
}
