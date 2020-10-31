// import { NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <div id="home-nav">
        <Link to="/home">HOME</Link>
      </div>
      <div id="nav">
        <div className="nav-item">
          <Link to="/questions">QUESTIONS</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
