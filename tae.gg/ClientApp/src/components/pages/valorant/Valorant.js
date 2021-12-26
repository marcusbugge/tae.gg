import React, { Component } from "react";
import Header from "./Header";
import "./valorant.css";
import Players from "./Players";

export class Valorant extends Component {
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

export default Valorant;
