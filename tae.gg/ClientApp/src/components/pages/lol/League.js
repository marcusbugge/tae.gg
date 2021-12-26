import React, { Component, useEffect, useState } from "react";
import Countdown from "./Countdown";
import Header from "./Header";
import "./lol.css";
import Players from "./Players";

export default function League() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getAllPlayers();

    async function getAllPlayers() {
      const response = await fetch("https://localhost:5001/api/player/getall");
      const data = await response.json();

      console.log(data);
      setPlayers(data);
    }
  }, []);

  return (
    <div className="content-lol">
      <Header />

      <div className="data">
        <Players playerss={players} />
      </div>
    </div>
  );
}
