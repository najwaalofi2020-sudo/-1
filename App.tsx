import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  }

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 flex flex-col items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom right, #fdf4f4, #f4f6fd)' }}>
      <div className={isChatOpen ? 'blur-sm transition-all duration-300' : 'transition-all duration-300'}>
        <WelcomeScreen onStart={openChat} />
      </div>

      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-4xl h-[95vh] flex flex-col animate-slide-in-up">
            <ChatInterface onClose={closeChat} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;