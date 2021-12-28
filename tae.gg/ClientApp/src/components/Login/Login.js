import { React, useEffect, useState } from "react";
import axios from "axios";
import user from "../../models/User";

export default function Login() {
  const baseURL = "https://localhost:5001/api/user/logginn";

  useEffect(() => {
    const postTodo = () => {
      const user = {
        Username: "Admin",
        Password: "Test11",
      };
      const headers = { "header-name": "value" };
      const config = { headers };
      axios
        .post(baseURL, user, config)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        })
        .catch((e) => console.log("something went wrong :(", e));
    };
    postTodo();
  }, []);

  return (
    <div>
      <h1>ja yeeet</h1>
    </div>
  );
}
