import React, { Component } from "react";
import HomeContent from "./HomeContent";
import "./homepage.css";
import taeesportsstroke from "../../assets/taeesportsstroke.png";
export class Home extends Component {
  render() {
    return (
      <div className="homepage-cnt">
        <div className="welcome-cnt">
          <img className="taestroke" src={taeesportsstroke} alt="taeesports" />
          <div className="welcome-text">
            <h1 className="header">TAE ESPORTS</h1>
            <div className="stripe"></div>
          </div>
        </div>

        <HomeContent />
      </div>
    );
  }
}

export default Home;
