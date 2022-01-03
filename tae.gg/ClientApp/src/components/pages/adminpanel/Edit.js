import axios from "axios";
import React, { useState } from "react";

export default function Edit(props) {
  const [user, setUser] = useState({
    Id: "2",
    Gamertag: "Test",
    Game: "lol",
    Role: "Testtt",
  });

  function postToDB(e) {
    e.preventDefault();
    let url = "/api/player/change/" + user.Id;

    axios
      .put(url, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
