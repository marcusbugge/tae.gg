import React, { Component } from "react";
import HomeContent from "./HomeContent";
import "./homepage.css";
export class Home extends Component {
  render() {
    return (
      <div className="homepage-cnt">
        <div className="welcome-cnt">
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
