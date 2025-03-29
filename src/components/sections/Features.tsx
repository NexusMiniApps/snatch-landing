
import React, { useRef, useState, useEffect } from 'react';
import { Gamepad2, Trophy, Clock, Bot, Code, PartyPopper, Database } from 'lucide-react';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-snatch-darkpurple/50 to-snatch-darkblue/50 backdrop-blur-sm"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          What Makes Snatch! Pop
        </h2>
        
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
        
        <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-snatch-pink/20 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-center text-snatch-pink font-fredoka text-2xl mb-6">Powered By</h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                <Code className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white text-sm">For speed</span>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                <PartyPopper className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white text-sm">For live action</span>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                <Database className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white text-sm">For smooth data</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-white/70">
            Ready for any crowd!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
