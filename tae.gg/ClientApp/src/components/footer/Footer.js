import React, { Component } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-cnt">
        <div className="footer-content">
          <div className="staff-cnt">
            <h1>TAE ESPORTS</h1>
            <div className="stripe-mini"></div>

            <div className="games">
              <Link to="/games/valorant">News</Link>
              <Link to="/games/leagueoflegends">About us</Link>
              <Link to="/games/csgo">Staff</Link>
            </div>
          </div>
          <div className="games-cnt">
            <h1>OUR TEAMS</h1>
            <div className="stripe-mini"></div>

            <div className="games">
              <Link to="/games/valorant">Valorant</Link>
              <Link to="/games/leagueoflegends">League of Legends</Link>
              <Link to="/games/csgo">Animal Crossing</Link>
            </div>
          </div>
        </div>

        <div className="soscial-cnt"></div>
      </div>
    );
  }
}

export default Footer;
