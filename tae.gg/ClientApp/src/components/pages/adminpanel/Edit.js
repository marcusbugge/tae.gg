import axios from "axios";
import React, { useState } from "react";

export default function Edit(props) {
  const [user, setUser] = useState({
    Id: "2",
    Gamertag: "Test",
    Game: "lol",
    Role: "Testtt",
  });

  const headers = { "header-name": "value" };
  const config = { headers };

  async function postToDB(e) {
    e.preventDefault();

    axios

      .post("/api/player/change", user, config)
      .then((response) => {
        console.log(user);
        console.log(response.status);
        console.log(response.data);
        setUser(response.data);
        localStorage.setItem("user", response.data);
      })
      .catch((e) => console.log("something went wrong :(", e));
  }

  const handleInfoChange = (e) => {
    e.preventDefault();

    console.log(user);
    postToDB(e);
  };
  return (
    <div>
      <div className="playerinfo-extend">
        <form onSubmit={handleInfoChange}>
          <input
            name="role"
            type="text"
            placeholder="Role"
            className="inputextend"
          ></input>
          <input
            name="gamertag"
            type="text"
            placeholder="Gamertag"
            className="inputextend"
          ></input>

          <button type="submit" className="save-btn">
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}
