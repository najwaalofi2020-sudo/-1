
import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';

type Screen = 'welcome' | 'chat';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  const startChat = () => {
    setCurrentScreen('chat');
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 flex flex-col items-center justify-center p-4" style={{ background: 'linear-gradient(to bottom right, #fdf4f4, #f4f6fd)' }}>
        {currentScreen === 'welcome' && <WelcomeScreen onStart={startChat} />}
        {currentScreen === 'chat' && (
          <div className="w-full max-w-4xl h-[95vh] flex flex-col">
            <ChatInterface />
          </div>
        )}
    </div>
  );
};

export default App;
