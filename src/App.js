import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Solar from "./Components/Solar";
import Electrical from "./Components/Electrical";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer"; // Importing the Footer component
import HeroBanner from "./Components/HeroBanner"; // Importing the HeroBanner component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroBanner /> {/* Adding the HeroBanner component */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </main>
        <Footer /> {/* Adding the Footer component */}
      </div>
    </Router>
  );
}

export default App;
