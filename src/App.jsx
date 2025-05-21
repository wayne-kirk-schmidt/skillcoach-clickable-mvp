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
          <Route path="/skillcoach-clickable-mvp/" element={<Home />} />
          <Route path="/skillcoach-clickable-mvp/about" element={<About />} />
          <Route path="/skillcoach-clickable-mvp/contact" element={<Contact />} />
          <Route path="/skillcoach-clickable-mvp/price" element={<Pricing />} />
          <Route path="/skillcoach-clickable-mvp/signinup" element={<SignInUp />} />
          <Route path="/skillcoach-clickable-mvp/yourjourney" element={<YourJourney />} />
          <Route path="/skillcoach-clickable-mvp/yourcourses" element={<YourCourses />} />
          <Route path="/skillcoach-clickable-mvp/yourskills" element={<YourSkills />} />
          <Route path="/skillcoach-clickable-mvp/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;