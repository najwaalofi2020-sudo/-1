import React from 'react';
import { CloseIcon, LogoIcon, CertificateIcon, PrintIcon } from './Icons';

interface CertificateProps {
  studentName: string;
  onClose: () => void;
}

const Certificate: React.FC<CertificateProps> = ({ studentName, onClose }) => {
    const handlePrint = () => {
        window.print();
    }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col relative print:shadow-none print:m-0 print:rounded-none">
        
        <div className="p-4 border-b flex justify-between items-center print:hidden">
          <div className="flex items-center">
            <CertificateIcon className="w-7 h-7 text-green-700 ml-3"/>
            <h2 className="text-xl font-bold text-gray-800">شهادة إنجاز</h2>
          </div>
          <div>
            <button onClick={handlePrint} className="text-gray-600 hover:text-gray-900 ml-4 p-2 rounded-full hover:bg-gray-200">
                <PrintIcon className="w-6 h-6"/>
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-200">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <main id="certificate-content" className="p-8 md:p-12 bg-gray-50">
            <div className="border-4 border-red-700 p-8 bg-white relative">
                <div className="absolute top-4 right-4 opacity-5">
                    <LogoIcon className="w-48 h-48 text-red-800"/>
                </div>
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <LogoIcon className="w-16 h-16 text-red-700" />
                    </div>
                    <p className="text-lg text-gray-600">وزارة التربية والتعليم - سلطنة عمان</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 my-2">مبادرة قيم وولاء</h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-6">شهادة إنجاز</h2>
                    <p className="text-lg text-gray-700 mb-4">تُمنح هذه الشهادة إلى الطالبة</p>
                    <p className="text-3xl font-bold text-red-800 border-b-2 border-red-200 pb-2 inline-block px-8">{studentName}</p>
                    <p className="text-lg text-gray-700 mt-6 max-w-xl mx-auto">
                        تقديراً لمشاركتها الفعالة في اختبار "قيم وولاء" وإظهارها وعياً متميزاً بقيم المواطنة والهوية الوطنية.
                    </p>
                    <div className="flex justify-between items-center mt-12 pt-4 border-t">
                        <div className="text-center">
                             <p className="font-bold">إدارة المبادرة</p>
                             <p className="text-sm text-gray-500">توقيع</p>
                        </div>
                         <div className="text-center">
                             <p className="font-bold">{new Date().toLocaleDateString('ar-OM')}</p>
                             <p className="text-sm text-gray-500">التاريخ</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
      <style>{`
        @media print {
            body * {
                visibility: hidden;
            }
            #certificate-content, #certificate-content * {
                visibility: visible;
            }
            #certificate-content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
