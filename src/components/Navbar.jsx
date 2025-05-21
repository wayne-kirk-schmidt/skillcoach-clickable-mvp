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
            <Link to="/" className="text-2xl font-bold text-[#68DAE4]">
              SkillCoach
            </Link>
          </div>

          {/* Middle - Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#68DAE4]">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#68DAE4]">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#68DAE4]">Contact</Link>
            <Link to="/price" className="text-gray-600 hover:text-[#68DAE4]">Pricing</Link>
            <a href="https://backofthenapkin.tech/skillcoach-carousel-mvp/" className="text-gray-600 hover:text-[#68DAE4]">Carousal</a>

          </div>

          {/* Right - Auth Buttons */}
          <div className="flex items-center space-x-4">

            <Link to="/signinup" className="px-4 py-2 bg-[#68DAE4] text-white rounded-lg hover:bg-[#5bc5cf] transition">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;