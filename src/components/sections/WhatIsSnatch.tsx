
import React, { useEffect, useRef, useState } from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatIsSnatch: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
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
      id="what-is-snatch" 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 section-transition bg-gradient-to-b from-partiful-dark to-partiful-dark/95"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-partiful-gradient opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`font-fredoka text-4xl md:text-5xl text-partiful-purple mb-12 md:mb-16 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          What is <span className="text-snatch-pink">Snatch!?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className={`backdrop-blur-sm p-6 rounded-2xl border border-snatch-purple/10 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100 shadow-[0_10px_50px_rgba(91,59,215,0.1)]' : 'translate-y-10 opacity-0'}`}>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Say goodbye to dull launches! Snatch!, born from SUTD's Project Nexus, is the ultimate tool for small businesses to throw unforgettable product launch parties.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              We mix games, prizes, and a dash of urgency to make your brand the talk of the town.
            </p>
            
            <div className="mt-10 flex items-center gap-4 float-animation">
              <div className="bg-snatch-pink/10 p-3 rounded-full">
                <PartyPopper size={30} className="text-snatch-pink" />
              </div>
              <span className="text-white text-xl italic font-light">Let's bring the party to your launch!</span>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.3)] border border-snatch-pink/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.4)] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Snatch! Game Interface"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/90 via-snatch-darkpurple/50 to-transparent flex items-end justify-center p-8">
                <span className="text-white font-fredoka text-2xl">Gamified Launch Experience</span>
              </div>
              <div className="absolute top-4 left-4">
                <div className="bg-snatch-yellow/10 p-2 rounded-full backdrop-blur-md">
                  <Sparkles className="text-snatch-yellow animate-pulse" size={isMobile ? 20 : 24} />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-snatch-yellow text-snatch-darkpurple font-bold py-3 px-6 rounded-full transform rotate-12 shadow-xl animate-bounce-subtle">
              88% More Fun!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSnatch;
