
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
        <div className={`space-y-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Text Content - Matches the image */}
          <div className="text-white max-w-5xl mx-auto space-y-8">
            <p className="text-white text-xl md:text-2xl leading-relaxed">
              Traditional launches are snooze-fests—buy, leave, forget. Our research shows 88% of people crave more fun, but brands miss the mark on building real connections.
            </p>
            <p className="text-white text-xl md:text-2xl leading-relaxed">
              It's like hosting a party where everyone leaves early. Let's change that!
            </p>
          </div>
          
          {/* Stats Card - Closely matching the image */}
          <div className="bg-snatch-darkpurple/80 backdrop-blur-md rounded-3xl overflow-hidden border border-snatch-purple/20 shadow-[0_0_30px_rgba(91,59,215,0.1)]">
            <div className="p-8 md:p-12">
              {/* Stats Headers */}
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div>
                  <h3 className="text-white text-lg md:text-2xl font-medium">Engagement</h3>
                </div>
                <div>
                  <h3 className="text-white text-lg md:text-2xl font-medium">Customer Loyalty</h3>
                </div>
                <div>
                  <h3 className="text-white text-lg md:text-2xl font-medium">Brand Memory</h3>
                </div>
              </div>
              
              {/* Stats Values and Bars */}
              <div className="grid grid-cols-3 gap-8 items-end">
                <div className="flex flex-col items-center">
                  <div className="mb-4 font-bold text-3xl md:text-5xl text-white">23%</div>
                  <div className="h-32 md:h-40 w-full bg-snatch-purple/60 rounded-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 font-bold text-3xl md:text-5xl text-white">35%</div>
                  <div className="h-48 md:h-64 w-full bg-snatch-purple/60 rounded-md"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 font-bold text-3xl md:text-5xl text-white">18%</div>
                  <div className="h-24 md:h-32 w-full bg-snatch-purple/60 rounded-md"></div>
                </div>
              </div>
              
              {/* Bottom Label */}
              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <span className="text-white/70 text-lg">Traditional Product Launches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
