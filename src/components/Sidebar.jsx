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
        { name: "Your Journey", icon: "📊", path: "/skillcoach-clickable-mvp/yourjourney" },
        { name: "Your Courses", icon: "📚", path: "/skillcoach-clickable-mvp/yourcourses" },
        { name: "Your Skills", icon: "🌟", path: "/skillcoach-clickable-mvp/yourskills" },
        { name: "Chat", icon: "💬", path: "/skillcoach-clickable-mvp/chat" },
        { name: "Choose Coach", icon: "👨‍🏫", path: "/skillcoach-clickable-mvp/choose-coach" },
        { name: "Choose Journey", icon: "🛣️", path: "/skillcoach-clickable-mvp/choose-journey" }
      ]
    },
    {
      section: "Coach Journey",
      items: [
        { name: "Create Journey", icon: "✨", path: "/skillcoach-clickable-mvp/create-journey" },
        { name: "Capture Stories", icon: "📝", path: "/skillcoach-clickable-mvp/capture-stories" }
      ]
    },
    {
      section: "Guide Journey",
      items: [
        { name: "Build Journey", icon: "🔨", path: "/skillcoach-clickable-mvp/build-journey" },
        { name: "Build Teachings", icon: "📖", path: "/skillcoach-clickable-mvp/build-teachings" }
      ]
    },
    {
      section: "Settings",
      items: [
        { name: "Preference", icon: "⚙️", path: "/skillcoach-clickable-mvp/preferences" }
      ]
    }
  ];



  return (
    <div className={`bg-[#DEF4E6] shadow-lg h-screen ${isCollapsed ? 'w-20' : 'w-64'} fixed left-0 transition-all duration-300 z-10`}>
      <div className="p-4 flex justify-between items-center border-b">
        {!isCollapsed && <h2 className="font-bold text-[#1B638A] text-xl">Menu</h2>}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-full hover:bg-gray-100 ${isCollapsed ? 'mx-auto' : ''}`}
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1B638A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1B638A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <div className="px-4 mb-2 uppercase text-xs text-gray-500 font-bold tracking-wider">
                  {menuSection.section}
                </div>
              )}
              <ul>
                {menuSection.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.path}
                      className={`flex items-center py-3 ${isCollapsed ? 'justify-center px-0' : 'px-4'} hover:bg-gray-100 ${
                        window.location.pathname === item.path ? 'text-[#1B638A] font-bold' : 'text-gray-700'
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