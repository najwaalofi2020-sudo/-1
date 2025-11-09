import React from 'react';
import { LogoIcon, ChatIcon } from './Icons';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg transform transition-all hover:scale-[1.02] duration-500 overflow-hidden">
      <div className="p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <LogoIcon className="h-24 w-24 text-red-700" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          مبادرة قِيم وولاء
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          مساعدك الذكي لاستكشاف قيم المواطنة والانتماء الوطني
        </p>

        <div className="space-y-6 text-right">
          <div>
            <h2 className="text-xl font-bold text-red-800 mb-2 border-r-4 border-red-700 pr-4">رؤيتنا</h2>
            <p className="text-gray-700">
              بناء جيل واعٍ بهويته الوطنية، مدرك لحقوقه وملتزم بواجباته، يساهم في نهضة وطنه ويمثل عمان بقيمها الأصيلة.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-800 mb-2 border-r-4 border-green-700 pr-4">رسالتنا</h2>
            <p className="text-gray-700">
              نشر ثقافة المواطنة الواعية وتعزيز الانتماء من خلال برامج تعليمية وتفاعلية تسلط الضوء على الهوية والحقوق والواجبات وفق النظام الأساسي للدولة.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={onStart}
            className="bg-red-700 text-white font-bold py-3 px-10 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform transform hover:scale-110 duration-300"
          >
            ابدأ رحلتك
          </button>
        </div>
      </div>
      
      {/* Interactive Panel */}
      <div className="bg-gray-50/70 p-5 border-t border-gray-200/80 flex justify-between items-center">
          <p className="font-semibold text-gray-800 text-lg">
            هل لديكِ سؤال؟
          </p>
          <button
            onClick={onStart}
            className="bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all transform hover:scale-105 duration-300 flex items-center space-x-2 space-x-reverse"
            aria-label="اسأل حكمة"
          >
            <ChatIcon className="w-6 h-6" />
            <span className="text-md">اسأل حكمة</span>
          </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;