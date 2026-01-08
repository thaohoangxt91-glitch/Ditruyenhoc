
import React, { useState, useCallback } from 'react';
import { Lesson } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LessonDetail from './components/LessonDetail';

const App: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleSelectLesson = useCallback((lesson: Lesson) => {
    setSelectedLesson(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-emerald-50/30">
      <Navbar 
        onGoHome={handleGoHome} 
        currentLessonTitle={selectedLesson?.title}
      />
      
      <main className="flex-grow pb-20">
        {!selectedLesson ? (
          <Home onSelectLesson={handleSelectLesson} />
        ) : (
          <LessonDetail 
            lesson={selectedLesson} 
            onBack={handleGoHome} 
          />
        )}
      </main>

      <footer className="bg-emerald-800 text-emerald-100 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white p-2 rounded-xl mr-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-xl font-bold tracking-tight">KHTN 9 - Cánh Diều</h4>
          </div>
          <p className="text-sm opacity-80 mb-2">Hỗ trợ chương trình GDPT 2018 - Mạch kiến thức Vật sống</p>
          <p className="text-xs opacity-60">© 2024 • Ứng dụng giáo dục thông minh • Made with Passion</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default App;
