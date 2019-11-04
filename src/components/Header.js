import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => (
  <nav
    className="navbar is-danger"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <img src={logo} style={{ height: "50px" }} alt="custom-hooks-logo" />
      <button
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink to="/usemodal" className="navbar-item">
          useModal
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
