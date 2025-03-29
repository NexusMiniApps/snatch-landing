
import React, { useEffect, useRef, useState } from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';

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
      className="relative py-20 md:py-24 px-4 section-transition"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          What is Snatch!?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card className="glass-morphism p-6 md:p-8">
              <p className="text-white/90 text-lg mb-6">
                Say goodbye to dull launches! Snatch!, born from SUTD's Project Nexus, is the ultimate tool for small businesses to throw unforgettable product launch parties.
              </p>
              <p className="text-white/90 text-lg">
                We mix games, prizes, and a dash of urgency to make your brand the talk of the town.
              </p>
              
              <div className="mt-8 flex items-center gap-3 float-animation">
                <PartyPopper size={30} className="text-snatch-pink" />
                <span className="text-white text-xl italic">Let's bring the party to your launch!</span>
              </div>
            </Card>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.3)] border border-snatch-pink/30 glow-effect">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Snatch! Game Interface"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/80 to-transparent flex items-end justify-center p-6">
                <span className="text-white font-fredoka text-xl">Gamified Launch Experience</span>
              </div>
              <div className="absolute top-2 left-2">
                <Sparkles className="text-snatch-yellow animate-pulse" size={isMobile ? 16 : 20} />
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-snatch-yellow text-snatch-darkpurple font-bold py-2 px-4 rounded-full transform rotate-12 shadow-lg">
              88% More Fun!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSnatch;
