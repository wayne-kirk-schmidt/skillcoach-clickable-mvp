// src/components/YourCourses.jsx
import '../mytailwind.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';

function YourCourses() {
  const [searchQuery, setSearchQuery] = useState('');

  // Data for courses with different statuses
  const courses = [
    {
      title: "AI Prompts",
      status: "enrolled",
      action: "Resume",
      actionColor: "bg-[#68DAE4]"
    },
    {
      title: "Data Analytics",
      status: "completed",
      action: "Show Certificate",
      actionColor: "bg-green-500"
    },
    {
      title: "Business Requirements",
      status: "pending",
      action: "Enroll",
      actionColor: "bg-yellow-500"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  // Function to get the appropriate status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'enrolled':
        return 'text-[#68DAE4]';
      case 'completed':
        return 'text-green-500';
      case 'pending':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-center text-[#68DAE4] mb-12">Your Courses</h2>

          {/* Search Section */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by title, topic, or instructor ..."
                  className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#68DAE4]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#68DAE4] text-white py-3 px-6 rounded-lg hover:bg-[#5bc5cf] font-bold transition whitespace-nowrap"
                >
                  Search Courses
                </button>
              </form>
            </div>
          </div>

          {/* Course Status Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Your Course Status</h2>
            <div className="grid grid-cols-1 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold">{course.title}</h3>
                      <span className={`font-medium capitalize ${getStatusColor(course.status)}`}>
                        Status: {course.status}
                      </span>
                    </div>
                    <button
                      className={`${course.actionColor} text-white py-2 px-6 rounded-lg hover:opacity-90 font-bold transition`}
                    >
                      {course.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Resources or Recommendations Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Recommended For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example recommended course cards */}
              {['Advanced Analytics', 'Leadership Skills', 'Project Management'].map((title, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-600 mb-6">Learn essential skills to advance your career with our comprehensive course.</p>
                  <button className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-bold transition">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCourses;