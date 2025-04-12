
import React, { useRef, useState, useEffect } from 'react';
import GameFeatures from './features/GameFeatures';
import GameModes from './features/GameModes';
import PoweredBy from './features/PoweredBy';

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
        
        <GameFeatures isVisible={isVisible} />
        <GameModes isVisible={isVisible} />
        <PoweredBy isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Features;
