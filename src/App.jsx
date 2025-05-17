// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import './mytailwind.css';
import SignInUp from "./components/SignInUp.jsx";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;