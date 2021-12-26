import React, { useEffect, useState } from "react";
import "./homepage.css";

export default function HomeContent() {
  const Games = () => {
    return (
      <div>
        <div className="game-cnt">
          <div className="our-teams-cnt">
            <h1>OUR GAMES</h1>
            <div className="stripe-thin"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="homecontent-cnt">
      <div className="homecontent-content">
        <Games />
      </div>
    </div>
  );
}
