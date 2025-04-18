import React, { useRef, useState, useEffect } from 'react';
import { Zap, Award, Heart, Star, Sparkles } from 'lucide-react';

const Problem: React.FC = () => {
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
      id="problem" 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-snatch-darkpurple/50 to-snatch-darkblue/50 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-partiful-purple/10 blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 rounded-full bg-snatch-pink/10 blur-3xl animate-float-slow animation-delay-1000"></div>
        
        <div className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-snatch-yellow/40 animate-pulse-scale"></div>
        <div className="absolute top-40 left-3/4 w-3 h-3 rounded-full bg-partiful-purple/30 animate-pulse-scale animation-delay-700"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 rounded-full bg-snatch-pink/40 animate-pulse-scale animation-delay-1500"></div>
      </div>
      
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="section-title mb-6">Why Launches Need a Party Vibe</h2>
          <p className="text-white text-lg md:text-xl leading-relaxed text-center">
            Traditional launches are snooze-fests—buy, leave, forget. Our research shows 88% of people crave more fun, but brands miss the mark on building real connections.
          </p>
          <p className="text-white text-lg md:text-xl leading-relaxed text-center mt-4">
            It's like hosting a party where everyone leaves early. Let's change that!
          </p>
        </div>
        
        <div className={`bg-white/5 backdrop-blur-md p-8 rounded-xl border border-snatch-pink/20 shadow-glow-pink transition-all duration-500 relative overflow-hidden group ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-partiful-purple/5 via-snatch-pink/5 to-partiful-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
          
          <div className="flex justify-center gap-16 lg:gap-24 text-white mb-12 relative z-10">
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-r from-partiful-purple/20 to-snatch-pink/20 rounded-full mb-3">
                <Zap className="text-snatch-yellow" size={24} />
              </div>
              <span className="font-medium text-lg">Engagement</span>
            </div>
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-r from-partiful-purple/20 to-snatch-pink/20 rounded-full mb-3">
                <Award className="text-snatch-yellow" size={24} />
              </div>
              <span className="font-medium text-lg">Customer Loyalty</span>
            </div>
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
              <div className="p-3 bg-gradient-to-r from-partiful-purple/20 to-snatch-pink/20 rounded-full mb-3">
                <Heart className="text-snatch-yellow" size={24} />
              </div>
              <span className="font-medium text-lg">Brand Memory</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 items-end relative z-10">
            <div className="flex-1 max-w-[200px] flex flex-col items-center">
              <div className="mb-3 font-bold text-xl text-white flex items-center gap-1">
                <span>23%</span>
                <Star className="h-4 w-4 text-snatch-yellow" />
              </div>
              <div className="h-20 w-full bg-snatch-pink/20 relative rounded-t-md overflow-hidden group-hover:h-24 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-pink/30 to-partiful-purple/30 opacity-70"></div>
                <div className="absolute inset-0 animate-bottom-up bg-white/20 -translate-y-full"></div>
              </div>
            </div>
            <div className="flex-1 max-w-[200px] flex flex-col items-center">
              <div className="mb-3 font-bold text-xl text-white flex items-center gap-1">
                <span>35%</span>
                <Star className="h-4 w-4 text-snatch-yellow" />
              </div>
              <div className="h-32 w-full bg-snatch-pink/20 relative rounded-t-md overflow-hidden group-hover:h-36 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-pink/30 to-partiful-purple/30 opacity-70"></div>
                <div className="absolute inset-0 animate-bottom-up bg-white/20 -translate-y-full"></div>
              </div>
            </div>
            <div className="flex-1 max-w-[200px] flex flex-col items-center">
              <div className="mb-3 font-bold text-xl text-white flex items-center gap-1">
                <span>18%</span>
                <Star className="h-4 w-4 text-snatch-yellow" />
              </div>
              <div className="h-16 w-full bg-snatch-pink/20 relative rounded-t-md overflow-hidden group-hover:h-20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-snatch-pink/30 to-partiful-purple/30 opacity-70"></div>
                <div className="absolute inset-0 animate-bottom-up bg-white/20 -translate-y-full"></div>
              </div>
            </div>
          </div>
          <div className="text-center text-white/70 text-sm mt-4 pt-2 border-t border-white/10">
            Traditional Product Launches
          </div>
          
          <div className="mt-10 max-w-lg mx-auto">
            <h3 className="text-snatch-yellow font-fredoka text-xl mb-6 flex items-center">
              <span className="text-gradient">The Launch Problem</span>
              <div className="ml-2 h-1 flex-1 bg-gradient-to-r from-snatch-yellow to-transparent rounded-full"></div>
            </h3>
            
            <ul className="space-y-5">
              {[
                "Low engagement that drops quickly",
                "Minimal brand memory after the event",
                "No real connection with customers",
                "Boring, forgettable experiences"
              ].map((problem, index) => (
                <li key={index} className="flex items-start gap-3 hover:translate-x-1 transition-transform group">
                  <div className="text-snatch-pink font-bold text-xl w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                    <span className="absolute">✘</span>
                    <Sparkles className="absolute text-snatch-pink/20 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                  </div>
                  <span className="text-white group-hover:text-snatch-pink transition-colors">{problem}</span>
                </li>
              ))}
              
              <li className="flex items-start gap-3 mt-8 bg-gradient-to-r from-white/5 via-snatch-yellow/5 to-white/5 p-3 rounded-lg border border-snatch-yellow/20 transition-all duration-300 hover:bg-white/10 hover:border-snatch-yellow/50 hover:shadow-[0_0_15px_rgba(253,224,71,0.2)]">
                <span className="text-snatch-yellow font-bold text-xl animate-pulse-scale">✓</span>
                <span className="text-snatch-yellow font-bold">Snatch! solves all of these!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
