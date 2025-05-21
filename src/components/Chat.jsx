// src/components/Chat.jsx
import '../mytailwind.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaMicrophone, FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import coach01 from './coach01.jpg';
import coach02 from './coach02.jpg';
import coach03 from './coach03.jpg';

function Chat() {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [messageText, setMessageText] = useState('');

  // Sample coaches data
  const coaches = [
    { id: 1, name: "Dr. John Doe", role: "Data Science Coach", available: true, avatar: coach01},
    { id: 2, name: "Sarah Kennedy", role: "Business Coach", available: false, avatar: coach02 },
    { id: 3, name: "Martha Smith", role: "Career Coach", available: true, avatar: coach03 },
  ];

  // Sample messages data
  const messages = {
    1: [
      { id: 1, sender: 'coach', text: 'Hello! How can I help you with data science today?', timestamp: '10:30 AM' },
      { id: 2, sender: 'user', text: 'I\'m struggling with a machine learning model for my project.', timestamp: '10:32 AM' },
      { id: 3, sender: 'coach', text: 'What specific issues are you encountering with your model?', timestamp: '10:33 AM' },
      { id: 4, sender: 'user', text: 'My model is overfitting. I\'ve tried regularization but still having issues.', timestamp: '10:35 AM' },
      { id: 5, sender: 'coach', text: 'Let\'s try a few approaches. Have you considered adjusting your feature set or using cross-validation?', timestamp: '10:38 AM' }
    ],
    2: [
      { id: 1, sender: 'coach', text: 'Hi there! Ready to discuss business strategy?', timestamp: '9:15 AM' },
      { id: 2, sender: 'user', text: 'Yes, I need help with my business plan.', timestamp: '9:17 AM' }
    ],
    3: [
      { id: 1, sender: 'coach', text: 'Hello! Looking forward to helping with your career development.', timestamp: '2:00 PM' }
    ]
  };

  // Handle coach selection
  const handleSelectCoach = (coachId) => {
    setSelectedCoach(coachId);
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim() === '') return;

    // Here you would typically send the message to an API
    console.log(`Sending message to coach ${selectedCoach}: ${messageText}`);

    // Clear the input field
    setMessageText('');
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full h-screen flex">
        {/* Coaches list - 30% of the page width */}
        <div className="w-3/10 border-r border-gray-300 bg-gray-50">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-2xl font-bold text-[#68DAE4]">Coaches</h2>
          </div>

          {/* Coaches list */}
          <div className="overflow-y-auto h-[calc(100vh-64px-64px)]">
            {coaches.map((coach) => (
              <div
                key={coach.id}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-center ${selectedCoach === coach.id ? 'bg-gray-100' : ''}`}
                onClick={() => handleSelectCoach(coach.id)}
              >
                <div className="relative">
                  <img
                    src={coach.avatar}
                    alt={coach.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${coach.available ? 'bg-green-500' : 'bg-gray-400'}`}
                  ></span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">{coach.name}</h3>
                  <p className="text-sm text-gray-600">{coach.role}</p>
                  <p className="text-xs text-gray-500">
                    {coach.available ? 'Available' : 'Unavailable'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area - 70% of the page width */}
        <div className="w-7/10 flex flex-col h-full">
          {selectedCoach ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-gray-300 flex items-center">
                <div className="relative">
                  <img
                    src={coaches.find(c => c.id === selectedCoach)?.avatar}
                    alt={coaches.find(c => c.id === selectedCoach)?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${coaches.find(c => c.id === selectedCoach)?.available ? 'bg-green-500' : 'bg-gray-400'}`}
                  ></span>
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">{coaches.find(c => c.id === selectedCoach)?.name}</h3>
                  <p className="text-sm text-gray-600">{coaches.find(c => c.id === selectedCoach)?.role}</p>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                {messages[selectedCoach]?.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'user' 
                          ? 'bg-[#68DAE4] text-white' 
                          : 'bg-white text-black border border-gray-200'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="p-4 border-t border-gray-300">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                    <FaMicrophone />
                  </button>
                  <button type="button" className="p-2 text-gray-500 hover:text-gray-700">
                    <FaPaperclip />
                  </button>
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-grow mx-2 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#68DAE4]"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#68DAE4] text-white rounded-full hover:bg-[#5bc5cf]"
                  >
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </>
          ) : (
            // Display when no coach is selected
            <div className="flex-grow flex items-center justify-center bg-gray-50">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-gray-400 mb-2">Select a Coach</h3>
                <p className="text-gray-500">Choose a coach from the list to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;