import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { Footer } from "./components/footer/Footer.js";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/homepage/Home";
import HomeContent from "./components/homepage/HomeContent";
import NotFound from "./components/pages/404pagenotfound/NotFound.js";
import League from "./components/pages/lol/League.js";
import Valorant from "./components/pages/valorant/Valorant.js";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/login/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "./components/pages/adminpanel/Dashboard";
import ProtectedRoute from "./components/navbar/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Function to validate if user is logged in
  async function validateIfIserIsLoggedIn() {
    const result = await axios.get("/api/user/userstatus");
    console.log("User is logged in: ", result.data);
    if (result.data) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  useEffect(() => {
    validateIfIserIsLoggedIn();
  }, []);

  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
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
              {isLoggedIn ? (
                <Route path="/admin-dashboard" element={<Dashboard />} />
              ) : (
                ""
              )}

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
