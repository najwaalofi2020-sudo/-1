
import React from 'react';
import { Message } from '../types';
import { LogoIcon } from './Icons';

interface ChatMessageProps {
  message: Message;
}

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 space-x-reverse">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
  </div>
);

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
      <div className="text-center my-2">
        <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-3 py-1">{message.text}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
            <LogoIcon className="w-6 h-6 text-white" />
        </div>
      )}
      <div
        className={`max-w-xl p-4 rounded-2xl animate-fade-in-up ${
          isUser
            ? 'bg-red-700 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {message.text === '...' ? <TypingIndicator /> : <p className="whitespace-pre-wrap">{message.text}</p>}
      </div>
    </div>
  );
};

export default ChatMessage;
