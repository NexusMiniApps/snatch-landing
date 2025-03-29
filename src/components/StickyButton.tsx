
import React from 'react';
import { PartyPopper } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const StickyButton: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <a 
      href="#cta" 
      className={`sticky-cta btn-cta flex items-center gap-2 animate-pulse-scale ${isMobile ? 'scale-90' : ''}`}
    >
      <PartyPopper className="text-snatch-darkpurple" size={isMobile ? 16 : 20} />
      <span>Try Snatch!</span>
    </a>
  );
};

export default StickyButton;
