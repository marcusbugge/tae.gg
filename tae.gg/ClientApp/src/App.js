import "./App.css";
import { Navbar } from "./components/navbar/Navbar.js";
import { Footer } from "./components/footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import HomeContent from "./components/homepage/HomeContent";
import League from "./components/pages/lol/League.js";
import { Valorant } from "./components/pages/valorant/Valorant.js";
import ScrollToTop from "./ScrollToTop";

function App() {
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
              <Route path="/games/leagueoflegends" element={<League />} />
              <Route path="/games/valorant" element={<Valorant />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
