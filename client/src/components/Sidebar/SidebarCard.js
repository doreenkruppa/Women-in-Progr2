import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarCard({ groupName, pioneerName, keyG, keyP }) {
  return (
    <div className="sidebar-card">
      <ul className="sidebar-ul">
        <NavLink to={`/groups`}>
          <li key={keyG}>{groupName}</li>
        </NavLink>
      </ul>
      <ul className="sidebar-ul">
        <NavLink to={`/pioneers`}>
          <li key={keyP}>{pioneerName}</li>
        </NavLink>
      </ul>
    </div>
  );
}
