
import React, { useRef, useState, useEffect } from 'react';
import { Trophy, Users, Sparkles, Rocket } from 'lucide-react';

const Solution: React.FC = () => {
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
      id="solution" 
      ref={sectionRef}
      className="relative py-20 px-4"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          How Snatch! Brings the Fun
        </h2>
        
        <div className="mb-10 max-w-3xl mx-auto">
          <p className={`text-center text-white text-lg mb-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Snatch! turns launches into treasure hunts with timed games and exclusive rewards. Here's the party plan:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`feature-card transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-snatch-purple/20 p-3 rounded-lg">
                  <Trophy className="text-snatch-yellow h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-snatch-yellow font-bold text-lg mb-2">More Fun</h3>
                  <p className="text-white">88% of users loved the vibe, with an 8.2/10 return score.</p>
                </div>
              </div>
            </div>
            
            <div className={`feature-card transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-snatch-purple/20 p-3 rounded-lg">
                  <Users className="text-snatch-yellow h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-snatch-yellow font-bold text-lg mb-2">Real Connections</h3>
                  <p className="text-white">Build loyal fans through live games and chats.</p>
                </div>
              </div>
            </div>
            
            <div className={`feature-card transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-snatch-purple/20 p-3 rounded-lg">
                  <Sparkles className="text-snatch-yellow h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-snatch-yellow font-bold text-lg mb-2">Easy Hosting</h3>
                  <p className="text-white">We handle the setup—140 sign-ups in one event, no sweat!</p>
                </div>
              </div>
            </div>
            
            <div className={`feature-card transition-all duration-700 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-start gap-4">
                <div className="bg-snatch-purple/20 p-3 rounded-lg">
                  <Rocket className="text-snatch-yellow h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-snatch-yellow font-bold text-lg mb-2">Big Impact</h3>
                  <p className="text-white">Make your launch the one they can't stop talking about.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-md border border-snatch-purple/20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="flex flex-col h-full justify-center">
                  <h3 className="text-snatch-purple font-fredoka text-2xl mb-4">Snatch! Results</h3>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-center gap-3">
                      <span className="text-snatch-yellow text-2xl">➡</span>
                      <span><span className="font-bold">3.5X</span> higher engagement than traditional launches</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-snatch-yellow text-2xl">➡</span>
                      <span><span className="font-bold">140+</span> active participants per event on average</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-snatch-yellow text-2xl">➡</span>
                      <span><span className="font-bold">72%</span> return rate for future launches by the same brand</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-snatch-yellow text-2xl">➡</span>
                      <span><span className="font-bold">88%</span> of users reported having "a lot of fun"</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 bg-snatch-purple/20 p-4">
                <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Snatch! Leaderboard" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-snatch-darkpurple/80 to-transparent flex items-end justify-center p-6">
                    <span className="text-white font-fredoka text-xl">Live Leaderboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
