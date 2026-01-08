
import React, { useState } from 'react';
import { Lesson, LessonPart, GameType } from '../types';
import MatchingGame from './MatchingGame';
import ProcessGame from './ProcessGame';
import ScenarioGame from './ScenarioGame';
import QuizModule from './QuizModule';

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lesson, onBack }) => {
  const [activePartIndex, setActivePartIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'EXPLORE' | 'QUIZ'>('EXPLORE');
  const activePart = lesson.parts[activePartIndex];

  const renderGame = (part: LessonPart) => {
    switch (part.game.type) {
      case GameType.MATCHING:
        return <MatchingGame pairs={part.game.data} onComplete={() => {}} />;
      case GameType.SEQUENCING:
        return (
          <ProcessGame
            title={part.title}
            description={part.description}
            steps={part.game.data}
            onComplete={() => {}}
          />
        );
      case GameType.SCENARIO:
        return <ScenarioGame game={part.game.data} onComplete={() => {}} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Lesson Header Card */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-100 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <button 
              onClick={onBack}
              className="mr-6 p-3 hover:bg-emerald-50 rounded-2xl transition-all text-emerald-600 border border-emerald-100 shadow-sm group"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div>
              <h2 className="text-3xl font-black text-gray-800 leading-tight">{lesson.title}</h2>
              <div className="flex items-center mt-1 space-x-2">
                <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Bài học chuẩn</span>
                <p className="text-emerald-600 text-sm font-bold opacity-80">{lesson.description}</p>
              </div>
            </div>
          </div>
          
          {/* Section Selector (I, II, III) */}
          <div className="flex bg-emerald-50 p-1.5 rounded-2xl border border-emerald-100 self-center md:self-auto">
            {lesson.parts.map((part, index) => (
              <button
                key={part.id}
                onClick={() => { setActivePartIndex(index); setActiveTab('EXPLORE'); }}
                className={`px-6 py-2.5 rounded-xl font-black transition-all flex items-center space-x-2 ${
                  index === activePartIndex 
                  ? 'bg-emerald-600 text-white shadow-lg scale-105' 
                  : 'text-emerald-600 hover:bg-emerald-100'
                }`}
              >
                <span>{index === 0 ? 'I' : index === 1 ? 'II' : 'III'}</span>
                <span className="hidden sm:inline text-xs opacity-70">Mục</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest px-2 mb-4">Cấu trúc mục này</h3>
            <div className="space-y-3">
              <button
                onClick={() => setActiveTab('EXPLORE')}
                className={`w-full p-4 rounded-2xl text-left transition-all border-2 flex items-center ${
                  activeTab === 'EXPLORE' ? 'bg-blue-50 border-blue-500 shadow-sm' : 'bg-white border-transparent hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 text-xl ${
                  activeTab === 'EXPLORE' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                }`}>🎮</div>
                <div>
                  <div className={`font-black text-sm ${activeTab === 'EXPLORE' ? 'text-blue-900' : 'text-gray-600'}`}>1. Khám phá</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Trò chơi kiến thức</div>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('QUIZ')}
                className={`w-full p-4 rounded-2xl text-left transition-all border-2 flex items-center ${
                  activeTab === 'QUIZ' ? 'bg-emerald-50 border-emerald-500 shadow-sm' : 'bg-white border-transparent hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 text-xl ${
                  activeTab === 'QUIZ' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-600'
                }`}>📝</div>
                <div>
                  <div className={`font-black text-sm ${activeTab === 'QUIZ' ? 'text-emerald-900' : 'text-gray-600'}`}>2. Luyện tập</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">10 câu trắc nghiệm</div>
                </div>
              </button>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border-2 border-dashed border-yellow-200 shadow-sm">
             <h4 className="text-yellow-700 font-black text-sm mb-2 flex items-center uppercase tracking-wider">
               <span className="mr-2">💡</span> Ghi nhớ:
             </h4>
             <p className="text-yellow-800 text-xs leading-relaxed font-medium">
               Hãy hoàn thành trò chơi khám phá trước khi thử thách bản thân với bài luyện tập 10 câu nhé!
             </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="mb-6 bg-white/50 p-4 rounded-2xl backdrop-blur-sm border border-white/50 shadow-sm">
            <h1 className="text-3xl font-black text-emerald-900 mb-1">
              {activePart.title}
            </h1>
            <p className="text-gray-500 font-bold flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
              {activeTab === 'EXPLORE' ? 'Phần 1: Trò chơi mô phỏng khám phá kiến thức' : 'Phần 2: Bài tập trắc nghiệm củng cố (10 câu)'}
            </p>
          </div>
          
          <div className="animate-fadeIn">
            {activeTab === 'EXPLORE' ? (
              renderGame(activePart)
            ) : (
              <QuizModule 
                questions={activePart.assessment} 
                onFinish={() => {}} 
              />
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default LessonDetail;
