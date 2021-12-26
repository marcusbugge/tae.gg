import React, { useState, Component } from "react";
import PlayerIcon from "../../../assets/playericon.png";

export default function Players() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="cards-cnt">
      <div className="cards">
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className="card"
        >
          <img src={PlayerIcon} alt="icon" />
          <div className="playertext">
            <div>
              <h1>NAME</h1>
              <p>Fatdrian</p>
            </div>
            <div>
              <h1>ROLE</h1>
              <p>??????</p>
            </div>
          </div>
          {isShown && (
            <div className="cardnew">
              <img src={PlayerIcon} alt="icon" />
              <div className="playertext">
                <div>
                  <h1>NAME</h1>
                  <p>TESTESTET</p>
                </div>
                <div>
                  <h1>ROLE</h1>
                  <p>Toplane</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <img src={PlayerIcon} alt="icon" />
          <div className="playertext">
            <div>
              <h1>NAME</h1>
              <p>Canute</p>
            </div>
            <div>
              <h1>ROLE</h1>
              <p>?????</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
