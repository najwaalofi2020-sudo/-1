import React from 'react';
import { RULING_FAMILIES } from '../constants';
import { CloseIcon, HistoryIcon } from './Icons';

interface RulingFamiliesProps {
  onClose: () => void;
}

const RulingFamilies: React.FC<RulingFamiliesProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <HistoryIcon className="w-7 h-7 text-red-700 ml-3"/>
            <h2 className="text-xl font-bold text-gray-800">الأسر الحاكمة في عمان</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="p-6 overflow-y-auto bg-gray-50">
          <div className="space-y-6">
            {RULING_FAMILIES.map(family => (
              <div key={family.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col md:flex-row">
                <img src={family.image} alt={family.name} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-1">{family.name}</h3>
                    <p className="text-sm font-semibold text-gray-500 mb-4">{family.period}</p>
                    <p className="text-gray-700 mb-4">{family.description}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">أبرز الإنجازات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {family.achievements.map((ach, index) => (
                        <li key={index}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RulingFamilies;