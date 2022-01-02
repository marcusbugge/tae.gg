import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomeContent() {
  const [show, setShow] = useState(false);

  const animate = (bool) => {
    setShow(bool);
  };

  const Games = () => {
    return (
      <div>
        <div className="game-cnt">
          <div className="our-teams-cnt">
            <h1>OUR GAMES</h1>
            <div className="stripe-thin"></div>
          </div>

          <div className="games-holder">
            <Link to="/games/valorant">
              <div className="cnt">
                <div className="game-holder">
                  <div className="game">
                    <h1 className="game-name">VALORANT</h1>
                  </div>
                  <div className="fade"></div>
                </div>
                <div className="under-game-holder"></div>
              </div>
            </Link>
            <Link to="/games/league-of-legends">
              <div className="cnt">
                <div
                  onMouseEnter={() => animate(true)}
                  onMouseLeave={() => animate(false)}
                  className="game-holder"
                >
                  <div className="game2">
                    <div className="game-name">
                      <h1 className="gamename">LEAGUE OF LEGENDS</h1>
                      {show ? (
                        <div className="our-teams-hover">
                          <div>
                            <p>MAIN</p>
                          </div>
                          <div>
                            <p>TALENT</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="fade"></div>
                </div>
                <div className="under-game-holder"></div>
              </div>
            </Link>
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
