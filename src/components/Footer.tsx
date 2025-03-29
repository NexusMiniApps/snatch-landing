
import React from 'react';
import { PartyPopper } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 text-center relative">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-2 mb-3">
          <PartyPopper size={16} className="text-snatch-pink opacity-70" />
          <p className="text-white/70 text-sm">
            © 2025 Snatch! | SUTD Capstone
          </p>
          <PartyPopper size={16} className="text-snatch-pink opacity-70" />
        </div>
        <div className="text-white/40 text-xs">
          Making product launches unforgettable, one game at a time
        </div>
      </div>
    </footer>
  );
};

export default Footer;
