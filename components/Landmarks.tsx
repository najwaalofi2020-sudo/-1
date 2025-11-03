import React from 'react';
import { LANDMARKS } from '../constants';
import { CloseIcon, LandmarkIcon } from './Icons';

interface LandmarksProps {
  onClose: () => void;
}

const Landmarks: React.FC<LandmarksProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <LandmarkIcon className="w-7 h-7 text-red-700 ml-3"/>
            <h2 className="text-xl font-bold text-gray-800">معالم عمانية خالدة</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LANDMARKS.map(landmark => (
              <div key={landmark.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                <img src={landmark.image} alt={landmark.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-red-800 mb-2">{landmark.name}</h3>
                  <p className="text-gray-600 text-sm">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Landmarks;
