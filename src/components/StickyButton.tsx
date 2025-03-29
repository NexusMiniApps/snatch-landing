
import React from 'react';
import { PartyPopper } from 'lucide-react';

const StickyButton: React.FC = () => {
  return (
    <a 
      href="#cta" 
      className="sticky-cta btn-cta flex items-center gap-2 animate-pulse-scale"
    >
      <PartyPopper className="text-snatch-darkpurple" size={20} />
      <span>Try Snatch!</span>
    </a>
  );
};

export default StickyButton;
