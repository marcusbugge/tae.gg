import React, { Component } from "react";
import Header from "./Header";
import "./lol.css";
import Players from "./Players";

export class League extends Component {
  render() {
    return (
      <div className="content-lol">
        <Header />
        <div className="data">
          <Players />
        </div>
      </div>
    );
  }
}

export default League;
