
import React, { useRef, useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';

const mentors = [
  "Dr. Kan Ee May",
  "Dr. Cyrille Jegourel",
  "Dr. Susan Wong",
  "Mr. Jason Lee",
];

const Acknowledgments: React.FC = () => {
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
      id="acknowledgments" 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-snatch-darkpurple/50 to-snatch-darkblue/50 backdrop-blur-sm"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Shoutouts
        </h2>
        
        <div className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-white text-lg">
            Big love to our mentors for helping us throw the best launch party ever! 🎈
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div 
              key={mentor}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-snatch-pink/20 text-center transition-all duration-700 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <PartyPopper size={30} className="text-snatch-yellow" />
              </div>
              <h3 className="text-white font-bold text-xl">{mentor}</h3>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="#cta"
            className="btn-cta inline-flex items-center gap-2"
          >
            <PartyPopper className="text-snatch-darkpurple" size={20} />
            <span>Join the Party Now!</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgments;
