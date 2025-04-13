import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const VideoShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
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

  // Background images for decorative purposes
  const bgImage1 = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?q=80&w=1470&auto=format&fit=crop"; // Celebratory image

  return (
    <section 
      id="video-showcase" 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 section-transition"
    >
      <div className="wavy-divider absolute top-0 left-0 w-full opacity-70"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-10 overflow-hidden">
        <img src={bgImage1} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto max-w-5xl">
        <h2 className={`section-title text-center md:text-left transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          See Snatch! in Action
        </h2>
        
        <div className={`relative z-10 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="aspect-ratio-container relative w-full rounded-2xl overflow-hidden shadow-[0_5px_30px_rgba(168,85,247,0.3)] border border-partiful-purple/30">
            <div className="absolute inset-0 bg-gradient-to-r from-partiful-purple/20 via-transparent to-partiful-pink/20 z-0"></div>
            
            <div className="relative aspect-w-16 aspect-h-9 w-full">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/89rwLgGyVb0?enablejsapi=1&controls=0&rel=0&showinfo=0"
                title="Snatch! Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full rounded-xl"
                loading="lazy"
              ></iframe>
              
              {/* Floating decorative elements */}
              <div className="absolute top-4 left-4 z-10 text-white font-nunito">
                <div className="flex items-center gap-2 bg-partiful-purple/80 backdrop-blur-sm py-1 px-3 rounded-full text-sm">
                  <span className="animate-pulse h-2 w-2 bg-red-500 rounded-full"></span>
                  <span>Demo Video</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 z-10 flex gap-3">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-partiful-dark/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-partiful-purple/80 transition-all duration-300"
                >
                  {isMuted ? <VolumeX size={isMobile ? 16 : 20} /> : <Volume2 size={isMobile ? 16 : 20} />}
                </button>
                
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-partiful-dark/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-partiful-purple/80 transition-all duration-300"
                >
                  {isPlaying ? <Pause size={isMobile ? 16 : 20} /> : <Play size={isMobile ? 16 : 20} />}
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 mx-auto max-w-2xl">
            <div className="text-center">
              <p className="text-white/90 font-nunito text-lg">
                Watch this quick demo to see how Snatch! transforms product launches into unforgettable experiences
              </p>
              <div className="mt-4 inline-block bg-gradient-to-r from-partiful-lightblue via-partiful-pink to-partiful-purple p-[1px] rounded-full">
                <a 
                  href="https://www.youtube.com/watch?v=3ec1vSmtLKA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-snatch-darkpurple hover:bg-snatch-darkpurple/80 text-white py-2 px-5 rounded-full block transition-colors duration-300"
                >
                  Watch Full Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Updated background decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-partiful-purple/10 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-partiful-pink/10 blur-3xl"></div>
    </section>
  );
};

export default VideoShowcase;
