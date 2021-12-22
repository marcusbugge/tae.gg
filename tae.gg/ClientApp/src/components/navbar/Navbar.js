import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";



export class Navbar extends Component {

  


  render() {

    function setHoveringLink(bool){


    };

    return (
      <div className="navbar">
        <div className="logo-cnt"></div>

        <div className="links">
          <Link to="/test"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Teams
          </Link>
          <Link to="/"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            About
          </Link>
          <Link to="/test"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Corner of Jan
          </Link>
          <Link to="/"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Ttobusa
          </Link>
        </div>
      </div>
    );
  }
}


export default Navbar;
