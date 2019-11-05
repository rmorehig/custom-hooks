import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => (
  <nav
    className="navbar is-link"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <img src={logo} style={{ height: "50px" }} alt="custom-hooks-logo" />
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink to="/usemodal" className="navbar-item">
          useModal
        </NavLink>
        <NavLink to="/usemodalwithdata" className="navbar-item">
          useModalWithData
        </NavLink>
        <NavLink to="/usesubmit" className="navbar-item">
          useSubmit
        </NavLink>
        <NavLink to="/usefetch" className="navbar-item">
          useFetch
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
