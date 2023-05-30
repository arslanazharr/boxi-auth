import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const active = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
  };
};

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navDiv">
          <div>
            <NavLink style={active} className="navLink" to="/login">
              Log in
            </NavLink>
          </div>
          <div>
            <NavLink style={active} className="navLink" to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
