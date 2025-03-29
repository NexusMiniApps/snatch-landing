import React, { useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyButton: React.FC = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <a 
      href="http://snatch.events/"
      target="_blank"
      rel="noopener noreferrer"
      className={`sticky-cta flex items-center gap-2 transition-all duration-500 ease-in-out ${
        isMobile ? 'scale-90' : ''} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`btn-cta relative overflow-hidden ${isHovered ? 'bg-snatch-pink text-white' : ''}`}>
        <span className={`absolute inset-0 bg-gradient-to-r from-snatch-yellow via-snatch-pink to-snatch-purple opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-20' : ''}`}></span>
        <div className="relative z-10 flex items-center gap-2">
          <PartyPopper className={`${isHovered ? 'text-white' : 'text-snatch-darkpurple'}`} size={isMobile ? 16 : 20} />
          <span className="font-bold font-outfit">{isHovered ? 'Let\'s Party!' : 'Try Snatch!'}</span>
        </div>
      </div>
    </a>
  );
};

export default StickyButton;
