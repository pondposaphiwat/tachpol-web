import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css';

import NavBarPortfolio from './components/NavBarPortfolio.jsx';

import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Photography from './pages/Photography.jsx';

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
