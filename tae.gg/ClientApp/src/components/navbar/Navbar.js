import { render } from "@testing-library/react";
import { React, Component, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import twitch from "../../assets/twitch.png";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const setHoveringLink = (bool) => {
    setShow(bool);
  };

  const Extranav = () => {
    return (
      <div className="extranav">
        <div className="extranav-games">
          <Link to="/games/valorant">Valorant</Link>
          <Link to="/games/league-of-legends">League of Legends</Link>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      <div className="nav-content">
        <Link to="/">
          <div className="logo-cnt"></div>
        </Link>

        <div className="links">
          <Link
            to="/games"
            onMouseEnter={() => setHoveringLink(true)}
            onMouseLeave={() => setHoveringLink(false)}
          >
            Games
            {show && <Extranav />}
          </Link>

          <Link to="/news">News</Link>

          <Link to="/about">About</Link>

          {localStorage.getItem("user") ? (
            <Link to="/admin-dashboard">Dashboard</Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="nav-footer">
        <div className="merch">
          <h1>TAE MERCH</h1>
        </div>
      </div>
    </div>
  );
}
