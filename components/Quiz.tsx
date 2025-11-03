import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { CloseIcon, QuizIcon } from './Icons';

interface QuizProps {
  onClose: () => void;
  onQuizComplete: (name: string) => void;
}

type QuizStep = 'start' | 'playing' | 'finished';

const Quiz: React.FC<QuizProps> = ({ onClose, onQuizComplete }) => {
  const [step, setStep] = useState<QuizStep>('start');
  const [name, setName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(new Array(QUIZ_QUESTIONS.length).fill(null));
  const [score, setScore] = useState(0);

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setStep('playing');
    }
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(newAnswers);

    if (answer === QUIZ_QUESTIONS[currentQuestionIndex].answer) {
        // You might want to calculate score at the end
    }

    setTimeout(() => {
        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore(newAnswers);
            setStep('finished');
        }
    }, 500);
  };
    
  const calculateScore = (finalAnswers: (string|null)[]) => {
      let finalScore = 0;
      finalAnswers.forEach((answer, index) => {
          if (answer === QUIZ_QUESTIONS[index].answer) {
              finalScore++;
          }
      });
      setScore(finalScore);
  }

  const StartScreen = () => (
    <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">اختبار "قيم وولاء"</h3>
        <p className="text-gray-600 mb-8">هل أنتِ مستعدة لاختبار معلوماتكِ حول المبادرة وقيم المواطنة؟</p>
        <form onSubmit={handleStartQuiz} className="flex flex-col items-center">
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="الرجاء إدخال اسمكِ هنا"
                className="w-full max-w-sm p-3 border border-gray-300 rounded-lg mb-4 text-center focus:outline-none focus:ring-2 focus:ring-red-500"
                required
            />
            <button type="submit" className="bg-red-700 text-white font-bold py-3 px-10 rounded-full hover:bg-red-800 transition-transform transform hover:scale-105">
                ابدئي الاختبار
            </button>
        </form>
    </div>
  );

  const PlayingScreen = () => {
    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    return (
        <div>
            <div className="mb-4 text-center">
                <p className="text-sm text-gray-500">السؤال {currentQuestionIndex + 1} من {QUIZ_QUESTIONS.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}></div>
                </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6">{question.question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswerSelect(option)}
                        className="p-4 border-2 border-gray-300 rounded-lg text-right hover:bg-red-100 hover:border-red-500 transition-colors duration-300"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
  };

  const FinishedScreen = () => (
      <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">أحسنتِ، {name}!</h3>
          <p className="text-gray-600 mb-2">لقد أكملتِ الاختبار بنجاح.</p>
          <p className="text-4xl font-bold text-green-600 my-4">{score} / {QUIZ_QUESTIONS.length}</p>
          <p className="text-gray-700 mb-8">معرفتك بقيم المواطنة رائعة وتساهم في بناء مستقبل مشرق لوطننا.</p>
          <button 
            onClick={() => onQuizComplete(name)}
            className="bg-green-700 text-white font-bold py-3 px-10 rounded-full hover:bg-green-800 transition-transform transform hover:scale-105"
           >
            عرض الشهادة
          </button>
      </div>
  );


  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col">
        <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
          <div className="flex items-center">
            <QuizIcon className="w-7 h-7 text-red-700 ml-3"/>
            <h2 className="text-xl font-bold text-gray-800">اختبر معلوماتك</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        <main className="p-8">
            {step === 'start' && <StartScreen />}
            {step === 'playing' && <PlayingScreen />}
            {step === 'finished' && <FinishedScreen />}
        </main>
      </div>
    </div>
  );
};

export default Quiz;
