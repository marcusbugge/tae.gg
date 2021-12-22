import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-cnt"></div>

        <div className="links">
          <Link to="/test">Teams</Link>
          <Link to="/">Shop</Link>
          <Link to="/test">Jan's corner</Link>
          <Link to="/">News</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
