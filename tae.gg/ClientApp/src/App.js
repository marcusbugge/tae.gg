import "./App.css";
import { Navbar } from "./components/navbar/Navbar.js";
import { Footer } from "./components/footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import HomeContent from "./components/homepage/HomeContent";
import { League } from "./components/pages/lol/League.js";

function App() {
  return (
    <BrowserRouter>
      <div className="application">
        <div className="nav">
          <Navbar />
        </div>

        <div className="content">
          <Routes>
            <Route path="/test" element={<Home />} />
            <Route path="/games/leagueoflegends" element={<League />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
