
import React from 'react';
import { LESSONS } from '../data/lessons';
import { Lesson } from '../types';

interface HomeProps {
  onSelectLesson: (lesson: Lesson) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectLesson }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="bg-emerald-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Khám phá thế giới <br/><span className="text-yellow-300">Vật Sống</span> lớp 9
          </h1>
          <p className="text-emerald-50 text-lg mb-8 opacity-90 leading-relaxed">
            Học tập và ôn tập mạch kiến thức Vật sống (Di truyền và Biến dị, Hệ sinh thái...) 
            theo bộ sách Cánh Diều thông qua các trò chơi tương tác thú vị.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-emerald-500/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              <span className="mr-2">📚</span> Sách Cánh Diều
            </div>
            <div className="bg-emerald-500/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              <span className="mr-2">🎮</span> Trò chơi học tập
            </div>
            <div className="bg-emerald-500/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              <span className="mr-2">📝</span> Trắc nghiệm ôn luyện
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/30 rounded-full blur-3xl"></div>
        <div className="absolute right-10 bottom-0 hidden lg:block float-animation">
          <svg className="w-64 h-64 text-emerald-400 opacity-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <span className="bg-emerald-100 p-2 rounded-lg mr-3">📖</span>
            Danh sách bài học
          </h2>
          <span className="text-emerald-600 font-semibold bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100">
            {LESSONS.length} bài đã cập nhật
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LESSONS.map((lesson) => (
            <div 
              key={lesson.id}
              className="bg-white rounded-2xl overflow-hidden custom-shadow border border-gray-100 hover:border-emerald-300 transition-all hover:-translate-y-2 cursor-pointer group flex flex-col"
              onClick={() => onSelectLesson(lesson)}
            >
              <div className="h-40 bg-gradient-to-br from-emerald-100 to-green-200 p-6 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {lesson.id.includes('mendel') ? '🧬' : lesson.id.includes('nhiem-sac') ? '🔬' : '🧪'}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3">
                  {lesson.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex space-x-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold" title="Có trò chơi">🎮</span>
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold" title="Có trắc nghiệm">📝</span>
                  </div>
                  <button 
                    className="text-emerald-600 font-bold text-sm flex items-center hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLesson(lesson);
                    }}
                  >
                    Bắt đầu học 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
