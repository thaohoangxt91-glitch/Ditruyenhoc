
import React, { useState, useEffect } from 'react';
import { MatchingPair } from '../types';

interface MatchingGameProps {
  pairs: MatchingPair[];
  onComplete: (score: number) => void;
}

const MatchingGame: React.FC<MatchingGameProps> = ({ pairs, onComplete }) => {
  const [leftItems, setLeftItems] = useState<{id: string, text: string}[]>([]);
  const [rightItems, setRightItems] = useState<{id: string, text: string}[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matches, setMatches] = useState<string[]>([]); // Array of pair IDs
  const [wrongEffect, setWrongEffect] = useState<boolean>(false);

  useEffect(() => {
    // Shuffle items
    setLeftItems([...pairs].map(p => ({ id: p.id, text: p.left })).sort(() => Math.random() - 0.5));
    setRightItems([...pairs].map(p => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5));
  }, [pairs]);

  const handleLeftClick = (id: string) => {
    if (matches.includes(id)) return;
    setSelectedLeft(id);
    checkMatch(id, selectedRight);
  };

  const handleRightClick = (id: string) => {
    if (matches.includes(id)) return;
    setSelectedRight(id);
    checkMatch(selectedLeft, id);
  };

  const checkMatch = (lId: string | null, rId: string | null) => {
    if (lId && rId) {
      if (lId === rId) {
        setMatches(prev => [...prev, lId]);
        setSelectedLeft(null);
        setSelectedRight(null);
        if (matches.length + 1 === pairs.length) {
          onComplete(10);
        }
      } else {
        setWrongEffect(true);
        setTimeout(() => {
          setWrongEffect(false);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto border-t-8 border-blue-400">
      <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
        <span className="bg-blue-100 p-2 rounded-lg mr-3">🧩</span>
        Trò chơi: Ghép cặp kiến thức
      </h3>
      <p className="text-gray-600 mb-8 bg-blue-50 p-3 rounded-lg border border-blue-100">
        Hãy chọn một khái niệm ở cột bên trái và phần mô tả tương ứng ở cột bên phải.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="text-center font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Khái niệm</div>
          {leftItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleLeftClick(item.id)}
              disabled={matches.includes(item.id)}
              className={`w-full p-4 rounded-xl text-left transition-all transform hover:scale-[1.02] border-2 shadow-sm ${
                matches.includes(item.id) 
                  ? 'bg-green-100 border-green-500 text-green-700 opacity-60 cursor-not-allowed' 
                  : selectedLeft === item.id 
                    ? 'bg-blue-600 border-blue-700 text-white shadow-lg' 
                    : 'bg-white border-blue-100 hover:border-blue-400 text-blue-800'
              } ${wrongEffect && selectedLeft === item.id ? 'animate-shake bg-red-500 border-red-700 text-white' : ''}`}
            >
              {item.text}
              {matches.includes(item.id) && <span className="float-right text-green-600 font-bold">✓</span>}
            </button>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <div className="text-center font-bold text-gray-500 uppercase tracking-widest text-xs mb-2">Mô tả / Ý nghĩa</div>
          {rightItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleRightClick(item.id)}
              disabled={matches.includes(item.id)}
              className={`w-full p-4 rounded-xl text-left transition-all transform hover:scale-[1.02] border-2 shadow-sm ${
                matches.includes(item.id) 
                  ? 'bg-green-100 border-green-500 text-green-700 opacity-60 cursor-not-allowed' 
                  : selectedRight === item.id 
                    ? 'bg-blue-600 border-blue-700 text-white shadow-lg' 
                    : 'bg-white border-blue-100 hover:border-blue-400 text-blue-800'
              } ${wrongEffect && selectedRight === item.id ? 'animate-shake bg-red-500 border-red-700 text-white' : ''}`}
            >
              {item.text}
              {matches.includes(item.id) && <span className="float-right text-green-600 font-bold">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-600">
          Tiến trình: <span className="text-blue-600 font-bold">{matches.length} / {pairs.length}</span> cặp
        </div>
        {matches.length === pairs.length && (
          <div className="bg-green-100 text-green-700 px-6 py-2 rounded-full font-bold animate-bounce shadow-md">
            🎉 Tuyệt vời! Bạn đã hoàn thành!
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchingGame;
