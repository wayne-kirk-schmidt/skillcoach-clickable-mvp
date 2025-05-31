// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../mytailwind.css'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left - App Title */}
          <div className="flex items-center">
            <Link to="/skillcoach-clickable-mvp/" className="text-2xl font-bold text-[#1B638A]">
              SkillCoach
            </Link>
          </div>

          {/* Middle - Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/skillcoach-clickable-mvp/" className="text-gray-600 hover:text-[#1B638A]">Home</Link>
            <Link to="/skillcoach-clickable-mvp/about" className="text-gray-600 hover:text-[#1B638A]">About</Link>
            <Link to="/skillcoach-clickable-mvp/contact" className="text-gray-600 hover:text-[#1B638A]">Contact</Link>
            <Link to="/skillcoach-clickable-mvp/price" className="text-gray-600 hover:text-[#1B638A]">Pricing</Link>
            <a href="https://backofthenapkin.tech/skillcoach-carousel-mvp/" className="text-gray-600 hover:text-[#1B638A]">Carousal</a>

          </div>

          {/* Right - Auth Buttons */}
          <div className="flex items-center space-x-4">

            <Link to="/skillcoach-clickable-mvp/signinup" className="px-4 py-2 bg-[#1B638A] text-white rounded-lg hover:bg-[#5bc5cf] transition">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;