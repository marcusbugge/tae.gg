import React, { Component } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";
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

        <div className="social-cnt">
          <div className="icons">
            <a href="https://twitter.com/TAEesport">
              <img src={twitch} alt="twitch-logo" className="twitch" />
            </a>
            <a href="https://www.twitch.tv/taeesports">
              <img src={twitter} alt="twitter-logo" className="twitter" />
            </a>
            <a href="https://discord.com/invite/whUGyUygXm">
              <img src={discord} alt="discord-logo" className="discord" />
            </a>
          </div>
        </div>

        <div className="rights-cnt">
          <p>TAE Esports &copy; 2022 All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default Footer;
