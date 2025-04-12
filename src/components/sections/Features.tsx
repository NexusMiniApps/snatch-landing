import React, { useRef, useState, useEffect } from 'react';
import { Gamepad2, Trophy, Clock, Bot, PartyPopper, Medal, Ticket, UserRound } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className={`space-y-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex gap-6 items-start">
              <div className="bg-snatch-purple/20 p-4 rounded-lg">
                <Gamepad2 className="text-snatch-yellow h-10 w-10" />
              </div>
              <div>
                <h3 className="text-snatch-yellow font-bold text-xl mb-2">Pick Your Game</h3>
                <p className="text-white">Tapping challenges, quizzes, and more to keep the crowd hyped.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="bg-snatch-purple/20 p-4 rounded-lg">
                <Trophy className="text-snatch-yellow h-10 w-10" />
              </div>
              <div>
                <h3 className="text-snatch-yellow font-bold text-xl mb-2">Live Leaderboards</h3>
                <p className="text-white">Watch the competition heat up in real-time.</p>
              </div>
            </div>
          </div>
          
          <div className={`space-y-8 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex gap-6 items-start">
              <div className="bg-snatch-purple/20 p-4 rounded-lg">
                <Clock className="text-snatch-yellow h-10 w-10" />
              </div>
              <div>
                <h3 className="text-snatch-yellow font-bold text-xl mb-2">Countdown Chaos</h3>
                <p className="text-white">Time limits add that "gotta win now" thrill.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="bg-snatch-purple/20 p-4 rounded-lg">
                <Bot className="text-snatch-yellow h-10 w-10" />
              </div>
              <div>
                <h3 className="text-snatch-yellow font-bold text-xl mb-2">Auto-Everything</h3>
                <p className="text-white">From sign-ups to winners, we've got it covered.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 mb-16 transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-center text-snatch-pink font-fredoka text-3xl mb-10">Game Modes</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-snatch-pink/20 overflow-hidden group hover:border-snatch-pink/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://imgur.com/8oIdKxm.gif" 
                  alt="Skill Based Games" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/90 via-snatch-darkpurple/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-snatch-yellow/90 p-2 rounded-lg">
                      <Medal className="text-snatch-darkpurple h-6 w-6" />
                    </div>
                    <h4 className="text-white font-fredoka text-xl">Skill Based</h4>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/90">Test your reflexes and knowledge with fast-paced gaming challenges that reward the quickest and smartest players.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-snatch-yellow text-sm font-medium">Most competitive</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">High Engagement</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-snatch-pink/20 overflow-hidden group hover:border-snatch-pink/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://imgur.com/OvIO2ik.gif" 
                  alt="Raffle Mode" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/90 via-snatch-darkpurple/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-snatch-yellow/90 p-2 rounded-lg">
                      <Ticket className="text-snatch-darkpurple h-6 w-6" />
                    </div>
                    <h4 className="text-white font-fredoka text-xl">Raffle</h4>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/90">Everyone gets a fair chance to win with our digital raffle system. More participation means more chances!</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-snatch-yellow text-sm font-medium">Luck based</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">Inclusive</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-snatch-pink/20 overflow-hidden group hover:border-snatch-pink/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="https://imgur.com/TVDFpl3.gif" 
                  alt="Host Chosen Mode" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/90 via-snatch-darkpurple/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-snatch-yellow/90 p-2 rounded-lg">
                      <UserRound className="text-snatch-darkpurple h-6 w-6" />
                    </div>
                    <h4 className="text-white font-fredoka text-xl">Host Chosen</h4>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-white/90">Put the power in the host's hands to select winners based on creativity, enthusiasm, or any criteria they choose.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-snatch-yellow text-sm font-medium">Personalized</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">Interactive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-snatch-pink/20 transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-center text-snatch-pink font-fredoka text-2xl mb-6">Powered By</h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
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
              </div>
              <span className="text-white text-sm">For speed</span>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                <PartyPopper className="text-white h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-white text-sm">For live action</span>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-2 relative overflow-hidden group transition-all duration-300 hover:bg-white/20">
                <svg className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54.5 0C24.4 0 0 24.4 0 54.5C0 84.6 24.4 109 54.5 109C84.6 109 109 84.6 109 54.5C109 24.4 84.6 0 54.5 0ZM54.5 106.1C26 106.1 2.9 83 2.9 54.5C2.9 26 26 2.9 54.5 2.9C83 2.9 106.1 26 106.1 54.5C106.1 83 83 106.1 54.5 106.1Z" fill="white" />
                  <path d="M42.8 41.4C42.8 44.5 40.3 47 37.2 47C34.1 47 31.6 44.5 31.6 41.4C31.6 38.3 34.1 35.8 37.2 35.8C40.3 35.8 42.8 38.3 42.8 41.4Z" fill="white" />
                  <path d="M86.8 39.8C86.2 39.7 85.5 39.7 84.9 39.7C75.8 39.8 69.9 45.5 69.9 54.5V77.3H73V54.5C73 47 77.6 42.7 84.9 42.7C85.5 42.7 86.1 42.7 86.7 42.8V39.8H86.8Z" fill="white" />
                  <path d="M59.5 57.9C59.5 65.4 53.1 71.5 45.5 71.5C37.9 71.5 31.6 65.4 31.6 57.9V35.7H28.5V57.9C28.5 67.2 36.1 74.5 45.5 74.5C54.9 74.5 62.5 67.1 62.5 57.9V35.7H59.5V57.9Z" fill="white" />
                </svg>
              </div>
              <span className="text-white text-sm">For smooth data</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-white/70">
            Ready for any crowd!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
