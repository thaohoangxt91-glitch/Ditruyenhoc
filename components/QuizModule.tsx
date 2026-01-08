
import React, { useState } from 'react';
import { QuizQuestion, QuestionType } from '../types';

interface QuizModuleProps {
  questions: QuizQuestion[];
  onFinish: (score: number) => void;
}

const QuizModule: React.FC<QuizModuleProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [tfAnswer, setTfAnswer] = useState<boolean | null>(null);
  const [shortAnswer, setShortAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleCheck = () => {
    setIsChecked(true);
    let isCorrect = false;

    if (currentQuestion.type === QuestionType.MULTIPLE_CHOICE) {
      isCorrect = selectedOption === currentQuestion.correctIndex;
    } else if (currentQuestion.type === QuestionType.TRUE_FALSE) {
      isCorrect = tfAnswer === currentQuestion.isTrue;
    } else if (currentQuestion.type === QuestionType.SHORT_ANSWER) {
      // Cho phép sai lệch viết hoa/viết thường và khoảng trắng
      const cleanInput = shortAnswer.trim().toLowerCase();
      const cleanCorrect = currentQuestion.correctAnswer?.toLowerCase();
      isCorrect = cleanInput === cleanCorrect;
    }

    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setTfAnswer(null);
      setShortAnswer('');
      setIsChecked(false);
    } else {
      setIsFinished(true);
      onFinish(Math.round((correctCount / questions.length) * 10));
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setTfAnswer(null);
    setShortAnswer('');
    setIsChecked(false);
    setCorrectCount(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const finalScore = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="p-8 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto text-center border-t-8 border-emerald-400">
        <div className="text-6xl mb-4 animate-bounce">🏆</div>
        <h3 className="text-3xl font-bold text-emerald-800 mb-2">Kết quả bài tập!</h3>
        <p className="text-gray-600 mb-6 italic">"Kiến thức là chìa khóa của thành công."</p>
        
        <div className="bg-emerald-50 rounded-2xl p-8 mb-8 border border-emerald-100 shadow-inner inline-block min-w-[280px]">
          <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Điểm số của bạn</div>
          <div className="text-6xl font-extrabold text-emerald-700 mb-2">{finalScore} / 100</div>
          <div className="h-2 w-full bg-emerald-200 rounded-full overflow-hidden mb-4">
             <div className="h-full bg-emerald-500" style={{width: `${finalScore}%`}}></div>
          </div>
          <div className="text-emerald-500 font-bold">Chính xác: {correctCount} / {questions.length} câu</div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handleRetry}
            className="px-10 py-3 bg-white border-2 border-emerald-500 text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-md active:scale-95"
          >
            Làm lại bài
          </button>
        </div>
      </div>
    );
  }

  const isInputValid = () => {
    if (currentQuestion.type === QuestionType.MULTIPLE_CHOICE) return selectedOption !== null;
    if (currentQuestion.type === QuestionType.TRUE_FALSE) return tfAnswer !== null;
    if (currentQuestion.type === QuestionType.SHORT_ANSWER) return shortAnswer.trim() !== '';
    return false;
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto border-t-8 border-emerald-500">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="bg-emerald-100 text-emerald-700 text-[10px] md:text-xs font-bold px-2 py-1 rounded-md mr-3 shadow-sm border border-emerald-200">
            {currentQuestion.type === QuestionType.MULTIPLE_CHOICE ? 'CHỌN ĐÁP ÁN' : 
             currentQuestion.type === QuestionType.TRUE_FALSE ? 'ĐÚNG / SAI' : 'TRẢ LỜI NGẮN'}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-emerald-900">Câu hỏi {currentIndex + 1}</h3>
        </div>
        <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="w-full bg-gray-100 h-2.5 rounded-full mb-8 overflow-hidden shadow-inner">
        <div 
          className="bg-emerald-500 h-full transition-all duration-700 ease-out shadow-sm" 
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed bg-gray-50/50 p-4 rounded-xl border border-dashed border-gray-200">
          {currentQuestion.question}
        </h4>
      </div>

      {/* Multiple Choice Render */}
      {currentQuestion.type === QuestionType.MULTIPLE_CHOICE && (
        <div className="grid grid-cols-1 gap-4 mb-10">
          {currentQuestion.options?.map((option, index) => {
            let optionClasses = "w-full p-4 text-left rounded-xl border-2 transition-all flex items-center group ";
            if (isChecked) {
              if (index === currentQuestion.correctIndex) {
                optionClasses += "bg-green-50 border-green-500 text-green-800 ring-4 ring-green-100";
              } else if (index === selectedOption) {
                optionClasses += "bg-red-50 border-red-500 text-red-800";
              } else {
                optionClasses += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
              }
            } else {
              if (selectedOption === index) {
                optionClasses += "bg-emerald-600 border-emerald-700 text-white shadow-lg transform translate-x-2";
              } else {
                optionClasses += "bg-white border-emerald-50 hover:border-emerald-200 text-gray-700 hover:bg-emerald-50/50";
              }
            }
            return (
              <button key={index} disabled={isChecked} onClick={() => setSelectedOption(index)} className={optionClasses}>
                <span className={`inline-block w-8 h-8 rounded-lg flex items-center justify-center font-bold mr-4 ${selectedOption === index ? 'bg-white/20' : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-grow font-medium">{option}</span>
                {isChecked && index === currentQuestion.correctIndex && <span className="ml-2">✅</span>}
                {isChecked && index === selectedOption && index !== currentQuestion.correctIndex && <span className="ml-2">❌</span>}
              </button>
            );
          })}
        </div>
      )}

      {/* True/False Render */}
      {currentQuestion.type === QuestionType.TRUE_FALSE && (
        <div className="grid grid-cols-2 gap-6 mb-10">
          {[true, false].map((val) => {
            let btnClasses = "p-8 rounded-3xl border-2 font-black text-xl md:text-2xl transition-all shadow-sm flex flex-col items-center justify-center ";
            if (isChecked) {
              if (val === currentQuestion.isTrue) btnClasses += "bg-green-100 border-green-500 text-green-700 ring-4 ring-green-100";
              else if (val === tfAnswer) btnClasses += "bg-red-100 border-red-500 text-red-700";
              else btnClasses += "bg-gray-50 border-gray-200 text-gray-300 opacity-50";
            } else {
              if (tfAnswer === val) {
                btnClasses += val ? "bg-green-600 border-green-700 text-white shadow-xl scale-105" : "bg-red-600 border-red-700 text-white shadow-xl scale-105";
              } else {
                btnClasses += "bg-white border-gray-100 hover:border-emerald-200 text-gray-600 hover:bg-gray-50";
              }
            }
            return (
              <button key={val.toString()} disabled={isChecked} onClick={() => setTfAnswer(val)} className={btnClasses}>
                <span className="mb-2 text-3xl">{val ? '✔️' : '✖️'}</span>
                {val ? 'ĐÚNG' : 'SAI'}
              </button>
            );
          })}
        </div>
      )}

      {/* Short Answer Render */}
      {currentQuestion.type === QuestionType.SHORT_ANSWER && (
        <div className="mb-10">
          <div className="relative">
            <input
              type="text"
              disabled={isChecked}
              value={shortAnswer}
              onChange={(e) => setShortAnswer(e.target.value)}
              onKeyPress={(e) => { if(e.key === 'Enter' && isInputValid()) handleCheck(); }}
              placeholder="Nhập câu trả lời tại đây..."
              className={`w-full p-6 rounded-2xl border-4 text-xl font-bold focus:outline-none transition-all shadow-inner ${
                isChecked 
                ? (shortAnswer.trim().toLowerCase() === currentQuestion.correctAnswer?.toLowerCase() ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800')
                : 'border-emerald-100 focus:border-emerald-400 bg-emerald-50/30'
              }`}
            />
            {!isChecked && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-300 pointer-events-none">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 13.1c0 1-.8 1.9-1.9 1.9H4.9c-1 0-1.9-.8-1.9-1.9V5.9c0-1 .8-1.9 1.9-1.9h14.2c1 0 1.9.8 1.9 1.9v7.2zM21 16h-18v2h18v-2z"></path></svg>
              </div>
            )}
          </div>
          {isChecked && (
            <div className="mt-4 p-4 bg-white rounded-xl border-2 border-green-200 flex items-center justify-between shadow-sm">
              <span className="text-gray-600 font-medium">Đáp án chuẩn:</span>
              <span className="text-xl font-black text-green-600 uppercase tracking-widest">{currentQuestion.correctAnswer}</span>
            </div>
          )}
        </div>
      )}

      {isChecked && (
        <div className="mb-8 p-6 bg-amber-50 border-l-8 border-amber-400 rounded-r-2xl shadow-sm animate-fadeIn">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">💡</span>
            <span className="font-bold text-amber-800 text-lg">Giải thích chi tiết:</span>
          </div>
          <p className="text-amber-900 italic font-medium leading-relaxed">
            {currentQuestion.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
          {isChecked ? 'Hãy xem giải thích trước khi tiếp tục' : 'Chọn đáp án và kiểm tra'}
        </div>
        <div className="flex gap-3">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={!isInputValid()}
              className={`px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95 ${
                !isInputValid() 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700 transform hover:-translate-y-1'
              }`}
            >
              KIỂM TRA
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-10 py-4 bg-emerald-700 text-white rounded-2xl font-black text-lg hover:bg-emerald-800 transition-all transform hover:-translate-y-1 shadow-lg flex items-center active:scale-95 animate-pulse"
            >
              {currentIndex < questions.length - 1 ? 'CÂU TIẾP THEO' : 'XEM KẾT QUẢ'}
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default QuizModule;
