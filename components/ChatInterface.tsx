import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Message } from '../types';
import { sendMessage, startChatSession } from '../services/geminiService';
import ChatMessage from './ChatMessage';
import ThemeSelector from './ThemeSelector';
import Activities from './Activities'; 
import Landmarks from './Landmarks';
import Quiz from './Quiz';
import Certificate from './Certificate';
import RulingFamilies from './RulingFamilies';
import NationalFigures from './NationalFigures';
import { THEMES } from '../constants';
import { SendIcon, CloseIcon } from './Icons';

type Modal = 'landmarks' | 'quiz' | 'certificate' | 'families' | 'national-figures' | null;

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showThemes, setShowThemes] = useState(true);
  const [activeModal, setActiveModal] = useState<Modal>(null);
  const [studentName, setStudentName] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startChatSession();
    setMessages([
        { id: 'intro', text: 'أهلاً بكِ! أنا مساعدكِ في مبادرة "قيم وولاء". لاكتشاف المزيد، اختاري أحد المحاور الرئيسية أو الأنشطة التفاعلية أدناه.', sender: 'ai' }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (messageText: string, isThemeSelection: boolean = false) => {
    if (!messageText.trim() && !isThemeSelection) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
    };
    
    if(isThemeSelection) {
        setMessages(prev => [...prev, {id: Date.now().toString(), text: `تم اختيار محور: ${messageText}`, sender: 'system'}]);
    } else {
        setMessages(prev => [...prev, userMessage]);
    }
    
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await sendMessage(messageText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'عذرًا، واجهتني مشكلة. لنجرب مرة أخرى.',
        sender: 'ai',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const selectTheme = useCallback((themeTitle: string) => {
    setShowThemes(false);
    handleSend(themeTitle, true);
  }, []);
  
  const resetConversation = () => {
    startChatSession();
    setMessages([
      { id: 'reset', text: 'لنبدأ من جديد! اختاري محورًا أو نشاطًا آخر لاستكشافِه.', sender: 'ai' }
    ]);
    setShowThemes(true);
  }

  const handleQuizComplete = (name: string) => {
    setStudentName(name);
    setActiveModal('certificate');
  }

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 relative">
      <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center z-10 flex-shrink-0">
        <h1 className="text-xl font-bold text-red-800">مساعد قيم وولاء</h1>
        <div className="flex items-center gap-2">
            <button 
              onClick={resetConversation}
              className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              البداية
            </button>
            <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="إغلاق"
            >
                <CloseIcon className="w-6 h-6" />
            </button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map(msg => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {showThemes && (
          <>
            <ThemeSelector onSelectTheme={selectTheme} themes={THEMES} />
            <div className="my-4 border-t border-gray-200"></div>
            <Activities onSelectActivity={(activity) => setActiveModal(activity as Modal)} />
          </>
        )}
        {isLoading && <ChatMessage message={{ id: 'loading', text: '...', sender: 'ai' }} />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-200 z-10 flex-shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="flex items-center space-x-2 space-x-reverse"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={showThemes ? "الرجاء اختيار محور من الأعلى أولاً" : "اسألي عن أي شيء يخص المحور..."}
            disabled={isLoading || showThemes}
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          />
          <button
            type="submit"
            disabled={isLoading || showThemes}
            className="bg-red-700 text-white p-3 rounded-full hover:bg-red-800 disabled:bg-red-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-110"
          >
            <SendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Modals */}
      {activeModal === 'landmarks' && <Landmarks onClose={() => setActiveModal(null)} />}
      {activeModal === 'families' && <RulingFamilies onClose={() => setActiveModal(null)} />}
      {activeModal === 'national-figures' && <NationalFigures onClose={() => setActiveModal(null)} />}
      {activeModal === 'quiz' && <Quiz onClose={() => setActiveModal(null)} onQuizComplete={handleQuizComplete} />}
      {activeModal === 'certificate' && <Certificate studentName={studentName} onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default ChatInterface;
