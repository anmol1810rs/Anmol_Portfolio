import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const MLGame = ({ onClose }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targets, setTargets] = useState([]);
  const gameAreaRef = useRef(null);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameStarted(false);
    }
  }, [gameStarted, timeLeft]);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const interval = setInterval(createTarget, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, timeLeft]);

  const createTarget = () => {
    if (!gameAreaRef.current) return;
    
    const { width, height } = gameAreaRef.current.getBoundingClientRect();
    const x = Math.random() * (width - 50);
    const y = Math.random() * (height - 50);
    const type = Math.random() > 0.7 ? 'bonus' : 'normal';
    
    setTargets(prev => [...prev, { id: Date.now(), x, y, type }]);
    
    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== Date.now()));
    }, 2000);
  };

  const handleTargetClick = (target) => {
    setScore(s => s + (target.type === 'bonus' ? 2 : 1));
    setTargets(prev => prev.filter(t => t.id !== target.id));
  };

  return (
    <div className="relative min-h-[80vh] bg-gray-900 rounded-xl p-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-800"
      >
        <X />
      </button>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">ML Target Practice</h2>
        <p className="text-gray-400 mb-4">
          Test your reflexes! Click on the targets as they appear. 
          Bonus targets (purple) are worth 2 points!
        </p>
        
        <div className="flex justify-center space-x-8 mb-4">
          <div className="text-xl">Score: {score}</div>
          <div className="text-xl">Time: {timeLeft}s</div>
        </div>

        {!gameStarted && (
          <button
            onClick={() => {
              setGameStarted(true);
              setScore(0);
              setTimeLeft(30);
              setTargets([]);
            }}
            className="px-6 py-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
          >
            {timeLeft === 30 ? 'Start Game' : 'Play Again'}
          </button>
        )}
      </div>

      <div
        ref={gameAreaRef}
        className="relative h-[50vh] bg-gray-800 rounded-lg overflow-hidden"
      >
        {targets.map(target => (
          <div
            key={target.id}
            onClick={() => handleTargetClick(target)}
            className={`absolute w-12 h-12 rounded-full cursor-pointer transform transition-transform hover:scale-110 ${
              target.type === 'bonus' ? 'bg-violet-500' : 'bg-pink-500'
            }`}
            style={{
              left: target.x + 'px',
              top: target.y + 'px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MLGame;