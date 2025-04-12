
import React from 'react';
import { PartyPopper } from 'lucide-react';

interface PoweredByProps {
  isVisible: boolean;
}

const PoweredBy: React.FC<PoweredByProps> = ({ isVisible }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-snatch-pink/20 transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h3 className="text-center text-snatch-pink font-fredoka text-2xl mb-6">Powered By</h3>
      
      <div className="flex flex-wrap justify-center gap-8 items-center">
        <TechItem label="For speed">
          <svg className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_408_134)">
              <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
              <path d="M149.508 157.259L69.6578 54H54V125.593H65.7333V69.3741L138.119 162.481C142.439 160.858 146.577 158.855 150.492 156.511L149.508 157.259Z" fill="url(#paint0_linear_408_134)" />
              <path d="M127.275 54H115.509V126H127.275V54Z" fill="url(#paint1_linear_408_134)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_408_134" x1="102.246" y1="108.246" x2="145.246" y2="159.746" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_408_134" x1="121.387" y1="54" x2="121.198" y2="106.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </TechItem>
        
        <TechItem label="For live action">
          <PartyPopper className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
        </TechItem>
        
        <TechItem label="For smooth data">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48">
            <g id="Слой_1">
              <linearGradient id="SVGID_1" x1="14.073" x2="14.073" y1="8.468" y2="36.033" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7dffce"></stop>
                <stop offset="1" stopColor="#50c08d"></stop>
              </linearGradient>
              <path fill="url(#SVGID_1)" d="M24.2,30V6.3c0-1.8-2.3-2.6-3.4-1.2L4.5,25.9c-1.3,1.7-0.1,4.1,2,4.1H24.2z"></path>
              <linearGradient id="SVGID_2" x1="34.249" x2="34.249" y1="48.404" y2="19.425" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7dffce"></stop>
                <stop offset="1" stopColor="#50c08d"></stop>
              </linearGradient>
              <path fill="url(#SVGID_2)" d="M24,18.4v23.7c0,1.8,2.4,2.6,3.5,1.2 l16.4-20.7c1.3-1.7,0.1-4.1-2.1-4.1H24z"></path>
            </g>
          </svg>
        </TechItem>
      </div>
      
      <div className="text-center mt-6 text-white/70">
        Ready for any crowd!
      </div>
    </div>
  );
};

interface TechItemProps {
  label: string;
  children: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ label, children }) => {
  return (
    <div className="text-center">
      <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
        {children}
      </div>
      <span className="text-white text-sm">{label}</span>
    </div>
  );
};

export default PoweredBy;

