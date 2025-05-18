// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import SignInUp from "./components/SignInUp.jsx";
import YourJourney from "./components/YourJourney.jsx";

import './mytailwind.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/signinup" element={<SignInUp />} />
          <Route path="/yourjourney" element={<YourJourney />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;