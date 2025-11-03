// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Compare from "./pages/Compare";
import Suggest from "./pages/Suggest";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;