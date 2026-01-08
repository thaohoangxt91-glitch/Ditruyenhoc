
import React from 'react';

interface NavbarProps {
  onGoHome: () => void;
  currentLessonTitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onGoHome, currentLessonTitle }) => {
  return (
    <nav className="bg-emerald-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onGoHome}
          >
            <div className="bg-white p-1.5 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">KHTN 9 - Vật Sống</span>
          </div>
          <div className="flex-1 text-center px-4 truncate font-medium text-emerald-50 italic">
            {currentLessonTitle || 'Học tập tương tác'}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onGoHome}
              className="bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Trang chủ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
