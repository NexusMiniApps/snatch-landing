
import React from 'react';
import { Gamepad2, Trophy, Clock, Bot } from 'lucide-react';

interface GameFeatureProps {
  isVisible: boolean;
}

const GameFeatures: React.FC<GameFeatureProps> = ({ isVisible }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className={`space-y-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex gap-6 items-start">
          <div className="bg-snatch-purple/20 p-4 rounded-lg">
            <Gamepad2 className="text-snatch-yellow h-10 w-10" />
          </div>
          <div>
            <h3 className="text-snatch-yellow font-bold text-xl mb-2">Pick Your Game</h3>
            <p className="text-white">Tapping challenges, quizzes, and more to keep the crowd hyped.</p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="bg-snatch-purple/20 p-4 rounded-lg">
            <Trophy className="text-snatch-yellow h-10 w-10" />
          </div>
          <div>
            <h3 className="text-snatch-yellow font-bold text-xl mb-2">Live Leaderboards</h3>
            <p className="text-white">Watch the competition heat up in real-time.</p>
          </div>
        </div>
      </div>
      
      <div className={`space-y-8 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex gap-6 items-start">
          <div className="bg-snatch-purple/20 p-4 rounded-lg">
            <Clock className="text-snatch-yellow h-10 w-10" />
          </div>
          <div>
            <h3 className="text-snatch-yellow font-bold text-xl mb-2">Countdown Chaos</h3>
            <p className="text-white">Time limits add that "gotta win now" thrill.</p>
          </div>
        </div>
        
        <div className="flex gap-6 items-start">
          <div className="bg-snatch-purple/20 p-4 rounded-lg">
            <Bot className="text-snatch-yellow h-10 w-10" />
          </div>
          <div>
            <h3 className="text-snatch-yellow font-bold text-xl mb-2">Auto-Everything</h3>
            <p className="text-white">From sign-ups to winners, we've got it covered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameFeatures;
