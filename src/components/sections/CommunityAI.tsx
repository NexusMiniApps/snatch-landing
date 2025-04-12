
import React, { useRef, useState, useEffect } from 'react';
import { Bot, ThumbsUp, Filter, Clock, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CommunityAI: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
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
      id="community-ai" 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-b from-snatch-darkblue/50 to-snatch-darkpurple/50 backdrop-blur-sm"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full"></div>
      
      <div className="container mx-auto max-w-6xl">
        <h2 className={`section-title transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Community X AI Feature
        </h2>
        
        <div className={`text-center mb-10 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Save valuable time and enhance engagement with our AI-powered community features
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="backdrop-blur-card p-6 h-full border border-snatch-pink/20 rounded-xl hover:border-snatch-pink/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-snatch-purple/20 p-4 rounded-lg">
                  <Bot className="text-snatch-yellow h-10 w-10" />
                </div>
                <h3 className="text-snatch-yellow font-bold text-2xl">AI-Powered Community Management</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-white">
                  Let AI do the heavy lifting by automatically identifying the most promising candidates for your prizes based on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Filter className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">Engagement level with your product</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Clock className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">Response speed to challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Users className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">Social media presence and reach</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-snatch-purple/20 p-4 rounded-lg">
                    <ThumbsUp className="text-snatch-yellow h-10 w-10" />
                  </div>
                  <h3 className="text-snatch-yellow font-bold text-2xl">Community Voting</h3>
                </div>
                
                <p className="text-white mb-4">
                  Leverage the wisdom of crowds while keeping full control:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Filter className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">Run popularity contests with built-in anti-fraud measures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Clock className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">Set time-limited voting windows to create urgency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-snatch-pink/20 p-1.5 rounded-full">
                      <Users className="text-snatch-pink h-4 w-4" />
                    </div>
                    <span className="text-white/90">AI-weighted voting balances popularity with quality</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white/70 italic text-sm">
                  "The AI shortlisting feature saved us hours of manual work and helped us identify our most engaged users."
                </p>
                <p className="text-snatch-yellow text-sm mt-2">— Product Launch Manager</p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative mx-auto max-w-[300px] md:max-w-[350px]">
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#383838] shadow-2xl">
                <AspectRatio ratio={9/16} className="bg-black">
                  <img 
                    src="/lovable-uploads/96c2e09c-c6e1-4294-9da2-0796522e47e9.png" 
                    alt="Snatch! Community AI Feature on mobile" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </AspectRatio>
                
                <div className="absolute top-0 left-0 right-0 h-6 bg-[#383838] rounded-t-lg flex justify-center items-center">
                  <div className="w-24 h-4 bg-black rounded-b-xl"></div>
                </div>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-snatch-yellow text-snatch-darkpurple font-bold py-2 px-4 rounded-full transform rotate-12 shadow-xl text-sm">
                Save 75% Time!
              </div>
              
              <div className="absolute -bottom-4 -left-4">
                <div className="bg-snatch-pink/10 p-3 rounded-full backdrop-blur-md border border-snatch-pink/20">
                  <Bot className="text-snatch-pink animate-pulse" size={isMobile ? 20 : 24} />
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-snatch-pink/20">
              <h3 className="text-center text-snatch-pink font-fredoka text-xl mb-6">Time Saved with AI</h3>
              
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(236, 72, 153, 0.2)"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#EC4899"
                        strokeWidth="3"
                        strokeDasharray="75, 100"
                        className="animate-pulse"
                      />
                      <text x="18" y="21" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">75%</text>
                    </svg>
                    <p className="text-white text-sm mt-1">Review Time</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative">
                    <svg className="w-24 h-24" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(236, 72, 153, 0.2)"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#EC4899"
                        strokeWidth="3"
                        strokeDasharray="90, 100"
                        className="animate-pulse"
                      />
                      <text x="18" y="21" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">90%</text>
                    </svg>
                    <p className="text-white text-sm mt-1">Admin Overhead</p>
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

export default CommunityAI;
