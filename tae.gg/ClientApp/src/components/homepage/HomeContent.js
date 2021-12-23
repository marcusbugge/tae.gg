import React, { useEffect, useState } from "react";
import "./homepage.css";

export default function HomeContent() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    let url = "https://localhost:5001/api/orders";
    //Function to retrieve data from api using defined url
    async function getRooms() {
      const response = await fetch(url);
      const data = await response.json();
      setPlayers(data);
      console.log(players[0] + "testsdfsdf");
      console.log(data);
    }
    getRooms();
  }, []);

  const Games = () => {
    return (
      <div>
        <div className="game-cnt">
          <div className="our-teams-cnt">
            <h1>OUR TEAMS</h1>
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
