
import React, { useEffect, useState } from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';
import CountdownTimer from '../CountdownTimer';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-24">
      <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex justify-center items-center gap-3 mb-4">
          <PartyPopper size={40} className="text-snatch-yellow" />
          <h1 className="font-fredoka text-4xl md:text-6xl text-white tracking-tight">
            Snatch!
          </h1>
          <PartyPopper size={40} className="text-snatch-yellow" />
        </div>
        
        <h2 className="text-2xl md:text-3xl text-white mb-8">
          Your Launch Party Game Changer
        </h2>
        
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          Turn boring product launches into epic, gamified events! 🎉
        </p>
        
        <div className="mb-12">
          <CountdownTimer />
        </div>
        
        <a 
          id="cta"
          href="#what-is-snatch" 
          className="btn-cta inline-flex items-center gap-2"
        >
          <Sparkles className="text-snatch-darkpurple" size={20} />
          <span>Try Snatch! Now</span>
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#what-is-snatch" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
