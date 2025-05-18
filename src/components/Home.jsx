// src/components/Home.jsx
import '../mytailwind.css'
import landingImg from './jesushome.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <img
        src={landingImg}
        alt="SkillCoach Preview"
        className="w-[512px] h-[512px] mx-auto object-cover"
      />
      <h1 className="text-5xl font-bold mt-8 text-gray-800">
        Welcome to Skillcoach
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        Skillcoach is your ultimate platform for connecting with expert coaches, finding guidance,
        and achieving your goals through personalized learning experiences.
      </p>
        <br />
      <Link to="/yourjourney"  className="mt-8 px-8 py-3 bg-[#68DAE4] text-white rounded-lg text-xl hover:bg-[#5bc5cf] transition">
        Try it now
      </Link>

    </div>
  );
}

export default Home;