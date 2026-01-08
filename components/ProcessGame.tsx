
import React, { useState, useEffect } from 'react';
import { SequenceStep } from '../types';

interface ProcessGameProps {
  title: string;
  description: string;
  steps: SequenceStep[];
  onComplete: (score: number) => void;
}

const ProcessGame: React.FC<ProcessGameProps> = ({ title, description, steps, onComplete }) => {
  const [currentOrder, setCurrentOrder] = useState<SequenceStep[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Randomize initial order
    setCurrentOrder([...steps].sort(() => Math.random() - 0.5));
    setIsCorrect(null);
  }, [steps]);

  const moveStep = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...currentOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    
    [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
    setCurrentOrder(newOrder);
    setIsCorrect(null);
  };

  const checkOrder = () => {
    const isAllCorrect = currentOrder.every((step, index) => step.order === index + 1);
    setIsCorrect(isAllCorrect);
    if (isAllCorrect) {
      onComplete(10);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto border-t-8 border-indigo-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 opacity-50"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-indigo-900 mb-2 flex items-center">
          <span className="bg-indigo-600 text-white p-2 rounded-xl mr-4 shadow-md">🔄</span>
          {title}
        </h3>

        {/* Game Objective and Instructions */}
        <div className="mb-8 mt-4 p-5 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 shadow-sm">
          <div className="flex items-center mb-3">
            <span className="text-xl mr-2">🎯</span>
            <h4 className="text-indigo-900 font-bold uppercase text-sm tracking-wider">Mục tiêu & Hướng dẫn</h4>
          </div>
          <div className="space-y-2">
            <p className="text-indigo-800 font-semibold text-lg leading-snug">
              {description}
            </p>
            <div className="pt-2 flex items-start text-indigo-600 text-sm">
              <span className="inline-block w-5 h-5 bg-indigo-200 text-indigo-700 rounded-full text-center leading-5 font-bold mr-2 flex-shrink-0">?</span>
              <p>
                <span className="font-bold">Cách chơi:</span> Quan sát kỹ các giai đoạn bên dưới. Sử dụng các nút <span className="font-bold">mũi tên lên/xuống</span> ở mỗi thẻ để thay đổi vị trí của chúng cho đến khi tạo thành một quy trình khoa học chính xác theo trình tự thời gian. Nhấn <span className="font-bold">"Kiểm tra"</span> để xác nhận kết quả.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {currentOrder.map((step, index) => {
            const isPlacedCorrectly = isCorrect === true || (isCorrect !== null && step.order === index + 1);
            
            return (
              <div 
                key={step.id} 
                className={`flex items-center p-5 bg-white border-2 rounded-2xl shadow-sm transition-all transform hover:shadow-md ${
                  isCorrect === true 
                    ? 'border-green-500 bg-green-50' 
                    : isCorrect === false && step.order !== index + 1 
                      ? 'border-red-200 bg-red-50/30' 
                      : 'border-gray-100'
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xl mr-5 shadow-inner">
                  {index + 1}
                </div>
                <div className={`flex-grow font-bold text-gray-700 md:text-lg leading-tight ${isPlacedCorrectly && isCorrect !== null ? 'text-green-700' : ''}`}>
                  {step.text}
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button 
                    onClick={() => moveStep(index, 'up')}
                    disabled={index === 0 || isCorrect === true}
                    className="p-2 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg text-indigo-600 disabled:opacity-20 transition-all shadow-sm active:scale-90"
                    title="Di chuyển lên"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
                  </button>
                  <button 
                    onClick={() => moveStep(index, 'down')}
                    disabled={index === currentOrder.length - 1 || isCorrect === true}
                    className="p-2 bg-indigo-50 hover:bg-indigo-600 hover:text-white rounded-lg text-indigo-600 disabled:opacity-20 transition-all shadow-sm active:scale-90"
                    title="Di chuyển xuống"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center">
          {isCorrect !== true ? (
            <button 
              onClick={checkOrder}
              className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 shadow-xl transform hover:-translate-y-1 transition-all active:scale-95"
            >
              KIỂM TRA THỨ TỰ
            </button>
          ) : (
            <div className="bg-green-600 text-white px-10 py-4 rounded-2xl font-black text-xl animate-bounce shadow-xl flex items-center">
              <span className="mr-3 text-3xl">🎉</span> 
              XUẤT SẮC! QUY TRÌNH CHÍNH XÁC!
            </div>
          )}
          
          {isCorrect === false && (
            <div className="mt-6 flex items-center text-red-600 font-black animate-shake p-3 bg-red-50 rounded-xl border border-red-100">
              <span className="mr-2">❌</span> Trình tự chưa đúng, hãy kiểm tra lại các bước!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcessGame;
