
import React from 'react';
import { PartyPopper } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 text-center relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-6 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-snatch-pink/50 to-transparent w-full max-w-xs mx-auto"></div>
        </div>
        
        <div className="flex justify-center items-center gap-3 mb-4">
          <PartyPopper size={16} className="text-snatch-pink opacity-70" />
          <p className="text-white/70 text-sm">
            © 2025 Snatch! | SUTD Capstone
          </p>
          <PartyPopper size={16} className="text-snatch-pink opacity-70" />
        </div>
        
        <div className="text-white/40 text-xs italic">
          Making product launches unforgettable, one game at a time
        </div>
        
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-snatch-purple/5 blur-3xl"></div>
        <div className="absolute -bottom-4 -right-16 w-40 h-40 rounded-full bg-snatch-pink/5 blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
