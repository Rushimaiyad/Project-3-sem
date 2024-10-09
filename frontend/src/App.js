import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import HotelsPage from './HotelsPage';
import AboutPage from './AboutPage';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

export default App;