import React from 'react';
import { NATIONAL_FIGURES } from '../constants';
import { CloseIcon, NationalFigureIcon } from './Icons';

interface NationalFiguresProps {
  onClose: () => void;
}

const NationalFigures: React.FC<NationalFiguresProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <NationalFigureIcon className="w-7 h-7 text-red-700 ml-3"/>
            <h2 className="text-xl font-bold text-gray-800">شخصيات عمانية خلدها التاريخ</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="p-6 bg-gray-50 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NATIONAL_FIGURES.map(figure => (
              <div key={figure.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col transform transition-transform duration-300 hover:scale-105">
                <img src={figure.image} alt={figure.name} className="w-full h-56 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-red-800">{figure.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{figure.title}</p>
                  <p className="text-gray-600 text-sm flex-grow">{figure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default NationalFigures;