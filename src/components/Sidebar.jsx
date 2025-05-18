// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Menu structure
  const menuItems = [
    {
      section: "User Page",
      items: [
        { name: "Your Journey", icon: "📊", path: "/yourjourney" },
        { name: "Your Courses", icon: "📚", path: "/yourcourses" },
        { name: "Your Skills", icon: "🌟", path: "/your-skills" },
        { name: "Chat", icon: "💬", path: "/chat" },
        { name: "Choose Coach", icon: "👨‍🏫", path: "/choose-coach" },
        { name: "Choose Journey", icon: "🛣️", path: "/choose-journey" }
      ]
    },
    {
      section: "Coach Journey",
      items: [
        { name: "Create Journey", icon: "✨", path: "/create-journey" },
        { name: "Capture Stories", icon: "📝", path: "/capture-stories" }
      ]
    },
    {
      section: "Guide Journey",
      items: [
        { name: "Build Journey", icon: "🔨", path: "/build-journey" },
        { name: "Build Teachings", icon: "📖", path: "/build-teachings" }
      ]
    },
    {
      section: "Settings",
      items: [
        { name: "Preference", icon: "⚙️", path: "/preferences" }
      ]
    }
  ];



  return (
    <div className={`bg-white shadow-lg h-screen ${isCollapsed ? 'w-20' : 'w-64'} fixed left-0 transition-all duration-300 z-10`}>
      <div className="p-4 flex justify-between items-center border-b">
        {!isCollapsed && <h2 className="font-bold text-[#68DAE4] text-xl">Menu</h2>}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-full hover:bg-gray-100 ${isCollapsed ? 'mx-auto' : ''}`}
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#68DAE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#68DAE4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="py-4">
          {menuItems.map((menuSection, sectionIndex) => (
            <li key={sectionIndex} className="mb-4">
              {!isCollapsed && (
                <div className="px-4 mb-2 uppercase text-xs text-gray-500 font-semibold tracking-wider">
                  {menuSection.section}
                </div>
              )}
              <ul>
                {menuSection.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.path}
                      className={`flex items-center py-3 ${isCollapsed ? 'justify-center px-0' : 'px-4'} hover:bg-gray-100 ${
                        window.location.pathname === item.path ? 'text-[#68DAE4] font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span className={`flex items-center justify-center ${isCollapsed ? 'w-full' : 'w-6 h-6 mr-3'}`}>
                        {item.icon}
                      </span>
                      {!isCollapsed && <span>{item.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;