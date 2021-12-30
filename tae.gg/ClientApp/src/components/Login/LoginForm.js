import React, { useState } from "react";
import Login from "./Login";
import axios from "axios";
import { createBrowserHistory } from "history";
import isOnline from "../../App";

export const history = createBrowserHistory();

export default function LoginForm() {
  const [user, setUser] = useState();
  let username;
  let password;

  const headers = { "header-name": "value" };
  const config = { headers };

  const handleLogout = () => {
    setUser({});
    username = "";
    password = "";

    let url = "/api/user/logout";
    axios
      .post(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  async function handleLogin(e) {
    e.preventDefault();
    username = e.target.email.value;
    password = e.target.password.value;

    const user = {
      Username: username,
      Password: password,
    };

    axios
      .post("https://localhost:5001/api/user/login", user, config)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        setUser(response.data);
        localStorage.setItem("user", response.data);
      })
      .catch((e) => console.log("something went wrong :(", e));
  }

  return (
    <div className="loginform">
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <div className="label-cnt">
          <label>
            <p>Username</p>
            <input className="input" name="email" type="text" />
          </label>
          <label>
            <p>Password</p>
            <input className="input" name="password" type="password" />
          </label>
        </div>

        <div className="buttons">
          <button onClick={handleLogout}>
            <p>Logout</p>
          </button>

          <button type="submit">
            <p>Login</p>
          </button>
        </div>
      </form>
    </div>
  );
}
