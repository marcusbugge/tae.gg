import { render } from "@testing-library/react";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

export class Navbar extends Component {
  render() {
    const extraNav = () => {
      return (
        <div className="extranav">
          <h1>HAHAHAHAHAH</h1>
        </div>
      );
    };

    function setHoveringLink(bool) {
      console.log("hahahahh");
      if (bool === true) {
        return { extraNav };
      }
    }

    return (
      <div className="navbar">
        <Link to="/">
          <div className="logo-cnt"></div>
        </Link>

        <div className="links">
          <Link to="/about" onMouseEnter={() => setHoveringLink(true)}>
            About
          </Link>
          <Link to="/games" onMouseEnter={() => setHoveringLink(true)}>
            Games
          </Link>
          <Link to="/news" onMouseEnter={() => setHoveringLink(true)}>
            News
          </Link>
          <Link to="/merch" onMouseEnter={() => setHoveringLink(true)}>
            Merch
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
