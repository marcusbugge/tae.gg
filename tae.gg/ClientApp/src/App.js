import "./App.css";
import { Navbar } from "./components/navbar/Navbar.js";
import { Footer } from "./components/footer/Footer.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/homepage/Home";
import HomeContent from "./components/homepage/HomeContent";
import NotFound from "./components/pages/404pagenotfound/NotFound.js";
import League from "./components/pages/lol/League.js";
import { Valorant } from "./components/pages/valorant/Valorant.js";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/login/Login";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const result = axios.get("https://localhost:5001/api/user/userstatus");
    if (result) {
      setIsOnline(true);
      localStorage.setItem("user", true);
      console.log("Logged in");
    } else {
      setIsOnline(false);
      localStorage.setItem("user", false);
      console.log("Logged out");
    }
  }, []);

  return (
    <BrowserRouter isOnline={isOnline} onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <div className="application">
          <div className="nav">
            <Navbar />
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/league-of-legends" element={<League />} />
              <Route path="/games/valorant" element={<Valorant />} is />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
