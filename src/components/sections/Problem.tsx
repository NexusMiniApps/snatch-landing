
import React, { useRef, useState, useEffect } from 'react';

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
      className="relative py-20 px-4 bg-gradient-to-b from-snatch-darkpurple/50 to-snatch-darkblue/50 backdrop-blur-sm"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Why Launches Need a Party Vibe
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className={`md:col-span-3 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-white text-lg mb-6">
              Traditional launches are snooze-fests—buy, leave, forget. Our research shows 88% of people crave more fun, but brands miss the mark on building real connections.
            </p>
            <p className="text-white text-lg mb-6">
              It's like hosting a party where everyone leaves early. Let's change that!
            </p>
            
            <div className="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-snatch-pink/20">
              <div className="flex justify-between text-white mb-3">
                <span>Engagement</span>
                <span>Customer Loyalty</span>
                <span>Brand Memory</span>
              </div>
              
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <div className="h-12 bg-snatch-pink/30 relative rounded-t-md">
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-white text-sm">23%</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-16 bg-snatch-pink/30 relative rounded-t-md">
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-white text-sm">35%</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-10 bg-snatch-pink/30 relative rounded-t-md">
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-white text-sm">18%</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-white/70 text-sm mt-4">Traditional Product Launches</div>
            </div>
          </div>
          
          <div className={`md:col-span-2 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_20px_rgba(236,72,153,0.2)] border border-snatch-pink/20 animate-bounce-subtle animation-delay-200">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-snatch-yellow font-fredoka text-xl mb-4">The Launch Problem</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="text-snatch-pink font-bold text-xl">✘</span>
                    <span className="text-white">Low engagement that drops quickly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-snatch-pink font-bold text-xl">✘</span>
                    <span className="text-white">Minimal brand memory after the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-snatch-pink font-bold text-xl">✘</span>
                    <span className="text-white">No real connection with customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-snatch-pink font-bold text-xl">✘</span>
                    <span className="text-white">Boring, forgettable experiences</span>
                  </li>
                  <li className="flex items-start gap-2 mt-6">
                    <span className="text-snatch-yellow font-bold text-xl">✓</span>
                    <span className="text-snatch-yellow font-bold">Snatch! solves all of these!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
