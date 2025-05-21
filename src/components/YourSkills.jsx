// src/components/YourSkills.jsx
import '../mytailwind.css'
import React from 'react';
import Sidebar from './Sidebar';

function YourSkills() {
  // Data for skills with progress percentages
  const skills = [
    { name: "Python", progress: 75 },
    { name: "Excel", progress: 50 },
    { name: "ROI Calculation", progress: 90 },
    { name: "Strategy", progress: 50 }
  ];

  // Function to determine color based on skill progress
  const getProgressColor = (progress) => {
    if (progress >= 80) return "#68DAE4"; // Main theme color for high skills
    if (progress >= 60) return "#4CAF50"; // Green for good skills
    if (progress >= 40) return "#FFC107"; // Yellow for intermediate skills
    return "#FF5722"; // Orange for beginner skills
  };

  // CircularProgressBar component
  const CircularProgressBar = ({ progress, name }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const color = getProgressColor(progress);

    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="relative">
          {/* Background circle */}
          <svg height="120" width="120" className="transform -rotate-90">
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#e6e6e6"
              strokeWidth="8"
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={color}
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage text in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color }}>
              {progress}%
            </span>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    );
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center text-[#68DAE4] mb-12">Your Skills</h2>

          {/* Skills Progress Section */}
          <div className="mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                  <CircularProgressBar
                    key={index}
                    progress={skill.progress}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Skill Details Section - Optional */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Skill Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="border-l-4 pl-4" style={{ borderColor: getProgressColor(skill.progress) }}>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-gray-600 mb-2">
                      {skill.progress >= 80 && "Expert level"}
                      {skill.progress >= 60 && skill.progress < 80 && "Advanced level"}
                      {skill.progress >= 40 && skill.progress < 60 && "Intermediate level"}
                      {skill.progress < 40 && "Beginner level"}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="h-2.5 rounded-full"
                        style={{ width: `${skill.progress}%`, backgroundColor: getProgressColor(skill.progress) }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer with Action Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-[#68DAE4] text-white py-3 px-6 rounded-lg hover:bg-[#5bc5cf] font-bold transition">
                Search by Skill
              </button>
              <button className="bg-[#4CAF50] text-white py-3 px-6 rounded-lg hover:opacity-90 font-bold transition">
                Visualize Progress
              </button>
              <button className="bg-[#FFC107] text-white py-3 px-6 rounded-lg hover:opacity-90 font-bold transition">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourSkills;