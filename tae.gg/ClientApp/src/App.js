import "./App.css";
import { Navbar } from "./components/navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";

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
  
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
