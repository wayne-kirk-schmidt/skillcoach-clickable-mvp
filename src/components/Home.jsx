// src/components/Home.jsx
import '../mytailwind.css'
import landingImg from './home.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <img
        src={landingImg}
        alt="SkillCoach Preview"
        className="w-[512px] h-[512px] mx-auto object-cover"
      />
      <h1 className="text-4xl font-bold mt-8 text-gray-800">
          SkillCoach: The Exit Platform Built for Founders
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">

          You’ve invested a lifetime building.
          Now it’s time to step away without watching it all fall apart.
          SkillCoach gets your successor ready, your knowledge transferred and your deal done.
      </p>
        <br />
      <Link to="/skillcoach-clickable-mvp/yourjourney"  className="mt-8 px-8 py-3 bg-[#68DAE4] text-white rounded-lg text-xl hover:bg-[#5bc5cf] transition">
        Start Your Exit
      </Link>

    </div>
  );
}

export default Home;