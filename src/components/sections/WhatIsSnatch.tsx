
import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Wind } from 'lucide-react';
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
      className="relative py-24 md:py-32 px-4 section-transition bg-gradient-to-b from-[#f2fce2] to-[#d3e4fd] dark:from-[#1a3c2b] dark:to-[#0f2b4d]"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-[#a4d4dc]/50"></div>
      
      {/* Floating Ghibli elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 opacity-40 animate-float-slow">
        <Leaf className="text-[#4d774e]" />
      </div>
      <div className="absolute top-1/3 right-10 w-8 h-8 opacity-40 animate-float-slow" style={{ animationDelay: '2s' }}>
        <Wind className="text-[#4d774e]" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 opacity-40 animate-float-slow" style={{ animationDelay: '1s' }}>
        <Leaf className="text-[#4d774e]" />
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`font-fredoka text-4xl md:text-5xl text-[#4d774e] mb-12 md:mb-16 text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          What is <span className="text-[#d96a4f]">Snatch!?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#d3e4fd] shadow-[0_15px_35px_rgba(77,119,78,0.1)] transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-[#1a3c2b] text-lg mb-8 leading-relaxed">
              Say goodbye to dull launches! Snatch!, born from SUTD's Project Nexus, is the ultimate tool for small businesses to throw unforgettable product launch parties.
            </p>
            <p className="text-[#1a3c2b] text-lg leading-relaxed">
              We mix games, prizes, and a dash of urgency to make your brand the talk of the town.
            </p>
            
            <div className="mt-10 flex items-center gap-4 float-animation">
              <div className="bg-[#fef7cd]/30 p-3 rounded-full">
                <svg className="w-8 h-8 text-[#d96a4f]" viewBox="0 0 24 24" fill="none">
                  <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#1a3c2b] text-xl italic font-light">Let's bring the party to your launch!</span>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(77,119,78,0.2)] border border-[#a4d4dc]/30 hover:shadow-[0_15px_45px_rgba(77,119,78,0.4)] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Ghibli-inspired landscape"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c2b]/90 via-[#1a3c2b]/50 to-transparent flex items-end justify-center p-8">
                <span className="text-white font-fredoka text-2xl">Gamified Launch Experience</span>
              </div>
              <div className="absolute top-4 left-4">
                <div className="bg-[#fef7cd]/30 p-2 rounded-full backdrop-blur-md">
                  <Wind className="text-[#fef7cd] animate-pulse" size={isMobile ? 20 : 24} />
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-[#fde1d3] text-[#d96a4f] font-bold py-3 px-6 rounded-full transform rotate-12 shadow-xl animate-bounce-subtle">
              88% More Fun!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSnatch;
