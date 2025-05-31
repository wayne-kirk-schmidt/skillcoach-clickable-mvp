// src/components/SelectCoach.jsx
import '../mytailwind.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import coach01 from './coach01.jpg';
import coach02 from './coach02.jpg';
import coach03 from './coach03.jpg';
import coach04 from './coach04.jpg';
import coach05 from './coach05.jpg';
import coach06 from './coach06.jpg';

function SelectCoach() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for coaches
  const coaches = [
    {
      id: 1,
      name: "Dr. John Doe",
      title: "Senior Data Scientist at Acme Corp",
      avatar: coach01,
      tags: ["AI", "Data Science", "Machine Learning"],
      selectStat: "Selected"
    },
    {
      id: 2,
      name: "Sarah Kennedy",
      title: "FinTech Consultant & Entrepreneur",
      avatar: coach02,
      tags: ["FinTech", "Entrepreneurship", "Blockchain"],
      selectStat: "Selected"
    },
    {
      id: 3,
      name: "Dr. Emily Wong",
      title: "Research Lead at BioGen",
      avatar: coach04,
      tags: ["Biochemistry", "Genetics", "Research Methods"],
      selectStat: "Select Coach"
    },
    {
      id: 4,
      name: "Martha Smith",
      title: "Executive Communication & Career Coach",
      avatar: coach03,
      tags: ["Communication", "Leadership", "Public Speaking"],
      selectStat: "Selected"
    },
    {
      id: 5,
      name: "Dr. Robert Smith",
      title: "Professor of Theology",
      avatar: coach05,
      tags: ["Theology", "Philosophy", "Ethics"],
      selectStat: "Select Coach"
    },
    {
      id: 6,
      name: "Alicia Johnson",
      title: "AI Ethics Researcher",
      avatar: coach06,
      tags: ["AI", "Ethics", "Technology Policy"],
      selectStat: "Select Coach"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for coach:", searchQuery);
  };

  // Function to generate random pastel colors for tags
  const getTagColor = (tag) => {
    // Map common subjects to consistent colors
    const colorMap = {
      'AI': 'bg-blue-100 text-blue-800',
      'Data Science': 'bg-green-100 text-green-800',
      'Machine Learning': 'bg-indigo-100 text-indigo-800',
      'FinTech': 'bg-purple-100 text-purple-800',
      'Entrepreneurship': 'bg-yellow-100 text-yellow-800',
      'Blockchain': 'bg-orange-100 text-orange-800',
      'Biochemistry': 'bg-red-100 text-red-800',
      'Genetics': 'bg-pink-100 text-pink-800',
      'Research Methods': 'bg-green-100 text-green-800',
      'Communication': 'bg-teal-100 text-teal-800',
      'Leadership': 'bg-cyan-100 text-cyan-800',
      'Public Speaking': 'bg-blue-100 text-blue-800',
      'Theology': 'bg-amber-100 text-amber-800',
      'Philosophy': 'bg-slate-100 text-slate-800',
      'Ethics': 'bg-lime-100 text-lime-800',
      'Technology Policy': 'bg-emerald-100 text-emerald-800'
    };

    return colorMap[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center text-[#1B638A] mb-12">Select Coach</h2>

          {/* Search Section */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by name, expertise, or field..."
                  className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B638A]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#1B638A] text-white py-3 px-6 rounded-lg hover:bg-[#5bc5cf] font-bold transition whitespace-nowrap"
                >
                  Find Coaches
                </button>
              </form>
            </div>
          </div>

          {/* Search Results Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Available Coaches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coaches.map((coach) => (
                <div key={coach.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <img
                    src={coach.avatar}
                    alt={coach.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#1B638A]"
                  />
                  <h3 className="text-xl font-bold text-center mb-1">{coach.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{coach.title}</p>

                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {coach.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className={`mt-6 ${ coach.selectStat === 'Selected' ? 'bg-gray-500': 'bg-[#1B638A] hover:bg-[#5bc5cf]'  } text-white py-2 px-6 rounded-lg  font-bold transition w-full`}>
                      {coach.selectStat}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Find by Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["AI", "FinTech", "Communication", "Biochemistry", "Leadership", "Theology"].map((category, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-50">
                  <span className={`inline-block w-full py-2 rounded ${getTagColor(category)}`}>
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectCoach;