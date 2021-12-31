import React from "react";
import "./admin.css";
import { useEffect, useState } from "react";
import Edit from "./Edit";

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch("/api/player/getplayersbygame?game=lol");
      const data = await response.json();

      console.log(data);
      setPlayers(data);
    }
  }, []);

  const [valplayers, setValplayers] = useState([]);
  useEffect(() => {
    getAllValPlayers();

    async function getAllValPlayers() {
      const response = await fetch(
        "/api/player/getplayersbygame?game=valorant"
      );
      const data = await response.json();

      console.log(data);
      setValplayers(data);
    }
  }, []);

  const [show, setShow] = useState(-1);

  const extendCards = (index) => {
    setShow(index);
  };

  const hideCards = () => {
    setShow(-1);
  };

  return (
    <div className="dashboard-cnt">
      <div className="dashboard-header">
        <h1>DASHBOARD</h1>
      </div>
      <div className="dashboard">
        <div className="players">
          <div className="player-cnt">
            <h1>LEAGUE OF LEGENDS</h1>
            {players.map((player, index) => (
              <div key={index}>
                <div className="playerinfo">
                  <div className="player-data-cnt">
                    <p className="role">{player.role}</p>
                    <p className="player">{player.gamertag}</p>
                  </div>
                  <div className="player-edit-btn">
                    <button
                      onClick={() => extendCards(index)}
                      className="edit-btn"
                    >
                      EDIT
                    </button>
                  </div>
                </div>
                {show === index ? <Edit player={player} /> : ""}
              </div>
            ))}
          </div>
          <div className="player-cnt">
            <h1>VALORANT</h1>
            {valplayers.map((player, index) => (
              <div key={index}>
                <div className="playerinfo">
                  <div className="player-data-cnt">
                    <p className="role">{player.role}</p>
                    <p className="player">{player.gamertag}</p>
                  </div>
                  <div className="player-edit-btn">
                    <button className="edit-btn">EDIT</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="player-cnt">
            <h1>STAFF</h1>
            {valplayers.map((player, index) => (
              <div key={index}>
                <div className="playerinfo">
                  <div className="player-data-cnt">
                    <p className="role">{player.role}</p>
                    <p className="player">{player.gamertag}</p>
                  </div>
                  <div className="player-edit-btn">
                    <button className="edit-btn">EDIT</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="player-cnt">
            <h1>CONTENT CREATORS</h1>
            {valplayers.map((player, index) => (
              <div key={index}>
                <div className="playerinfo">
                  <div className="player-data-cnt">
                    <p className="role">{player.role}</p>
                    <p className="player">{player.gamertag}</p>
                  </div>
                  <div className="player-edit-btn">
                    <button className="edit-btn">EDIT</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
