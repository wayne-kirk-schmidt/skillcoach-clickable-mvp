// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import SignInUp from "./components/SignInUp";
import YourJourney from "./components/YourJourney";
import YourCourses from "./components/YourCourses";
import YourSkills from './components/YourSkills';
import Chat from './components/Chat';

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
          <Route path="/yourcourses" element={<YourCourses />} />
          <Route path="/yourskills" element={<YourSkills />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;