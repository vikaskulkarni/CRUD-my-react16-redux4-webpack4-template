import React from "react";
import { NavLink } from "react-router-dom";

import "./sideNavigation.scss";

const SideNavigation = () => (
  <div className="sidebar-nav">
    <div className="navbar navbar-expand-lg navbar-default" role="navigation">
      <div className="navbar-collapse collapse sidebar-navbar-collapse">
        <ul
          className="nav navbar-nav"
          style={{ width: "100vh", textAlign: "center" }}
        >
          <li className="nav-item">
            <NavLink className="" exact to="/">
              Contacts List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="" exact to="/">
              Orders List
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SideNavigation;
