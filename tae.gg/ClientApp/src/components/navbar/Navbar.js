import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";



export class Navbar extends Component {

  


  render() {

    function setHoveringLink(bool){


    };

    return (
      <div className="navbar">
        <Link to="/"><div className="logo-cnt"></div></Link>

        <div className="links">
          <Link to="/test"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            About
          </Link>
          <Link to="/"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Players
          </Link>
          <Link to="/test"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Contact
          </Link>
          <Link to="/"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseExit={() => setHoveringLink(false)}>
            Test
          </Link>
        </div>
      </div>
    );
  }
}


export default Navbar;
