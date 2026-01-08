
import React, { useState } from 'react';
import { ScenarioGame as ScenarioType } from '../types';

interface ScenarioGameProps {
  game: ScenarioType;
  onComplete: (score: number) => void;
}

const ScenarioGame: React.FC<ScenarioGameProps> = ({ game, onComplete }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setShowFeedback(true);
    const choice = game.choices.find(c => c.id === id);
    if (choice?.isCorrect) {
      onComplete(10);
    }
  };

  const selectedChoice = game.choices.find(c => c.id === selectedId);

  return (
    <div className="p-4 md:p-8 bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto border-t-8 border-amber-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-bl-full -z-0 opacity-40"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-amber-900 mb-2 flex items-center">
          <span className="bg-amber-500 text-white p-2 rounded-xl mr-4 shadow-md text-xl">💡</span>
          {game.title}
        </h3>
        
        <div className="bg-amber-50/80 p-6 rounded-2xl border border-amber-100 mb-8 shadow-inner">
          <h4 className="text-amber-800 font-bold mb-2 flex items-center uppercase text-sm tracking-wider">
            <span className="mr-2">📝</span> Tình huống:
          </h4>
          <p className="text-gray-700 leading-relaxed text-lg">
            {game.description}
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-gray-800 font-black text-xl mb-6">
            {game.question}
          </h4>
          
          <div className="space-y-4">
            {game.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => !showFeedback && handleSelect(choice.id)}
                disabled={showFeedback}
                className={`w-full p-5 text-left rounded-2xl border-2 transition-all transform flex items-center ${
                  showFeedback && choice.id === selectedId
                    ? choice.isCorrect 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-red-500 bg-red-50'
                    : showFeedback && choice.isCorrect
                      ? 'border-green-300 bg-green-50/30'
                      : 'border-gray-100 bg-white hover:border-amber-400 hover:shadow-md active:scale-[0.98]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 ${
                  showFeedback && choice.id === selectedId
                    ? choice.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {showFeedback && choice.id === selectedId ? (choice.isCorrect ? '✓' : '✗') : '•'}
                </div>
                <span className="font-bold text-gray-700 text-lg">{choice.text}</span>
              </button>
            ))}
          </div>
        </div>

        {showFeedback && selectedChoice && (
          <div className={`p-6 rounded-2xl border-l-8 animate-fadeIn ${
            selectedChoice.isCorrect ? 'bg-green-50 border-green-500 text-green-900' : 'bg-red-50 border-red-500 text-red-900'
          }`}>
            <h5 className="font-black text-lg mb-1">
              {selectedChoice.isCorrect ? 'Tuyệt vời!' : 'Ồ, chưa chính xác!'}
            </h5>
            <p className="font-medium italic leading-snug">
              {selectedChoice.feedback}
            </p>
            {selectedChoice.isCorrect && (
              <div className="mt-4 flex justify-center">
                 <span className="px-6 py-2 bg-green-500 text-white rounded-full font-black animate-bounce shadow-lg">
                   🌟 HOÀN THÀNH NHIỆM VỤ!
                 </span>
              </div>
            )}
            {!selectedChoice.isCorrect && (
               <button 
                 onClick={() => { setShowFeedback(false); setSelectedId(null); }}
                 className="mt-4 text-red-700 font-bold underline hover:text-red-900"
               >
                 Thử phương án khác
               </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioGame;
