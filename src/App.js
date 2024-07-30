import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import NavBarPortfolio from './NavBarPortfolio.jsx';

import Home from './Home.js'
import About from './About.js';
import Photography from './Photography.js';

function App() {
  return (
    <Router>
      <NavBarPortfolio />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}

export default App;
