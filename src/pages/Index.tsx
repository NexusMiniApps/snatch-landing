import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';

const VideoShowcase = lazy(() => {
  const promise = import('@/components/sections/VideoShowcase');
  return promise;
});

const Problem = lazy(() => import('@/components/sections/Problem'));
const Solution = lazy(() => import('@/components/sections/Solution'));
const Features = lazy(() => import('@/components/sections/Features'));
const CommunityAI = lazy(() => import('@/components/sections/CommunityAI'));
const Team = lazy(() => import('@/components/sections/Team'));
const Acknowledgments = lazy(() => import('@/components/sections/Acknowledgments'));
const Footer = lazy(() => import('@/components/Footer'));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-pulse h-12 w-12 rounded-full bg-partiful-purple/20"></div>
  </div>
);

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  const [videoRef, videoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [problemRef, problemInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [solutionRef, solutionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [communityRef, communityInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [acknowledgeRef, acknowledgeInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const ticking = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          
          if ((scrollPosition > 100 && !scrolled) || (scrollPosition <= 100 && scrolled)) {
            setScrolled(scrollPosition > 100);
          }
          
          if (mainRef.current) {
            const starsLayer = mainRef.current?.querySelector('.bg-stars') as HTMLElement;
            if (starsLayer) {
              starsLayer.style.transform = `translate3d(0, ${scrollPosition * 0.03}px, 0)`;
            }
          }
          
          ticking.current = false;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  useEffect(() => {
    if (videoInView) {
      import('@/components/sections/Problem');
    }
  }, [videoInView]);
  
  return (
    <div ref={mainRef} className="min-h-screen bg-partiful-dark text-white relative overflow-hidden">
      <div className="texture-overlay"></div>
      <Sparkles count={30} />
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none transition-transform duration-200 ease-linear will-change-transform"></div>
      <div className="fixed top-0 left-0 w-full h-1/4 bg-gradient-to-b from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed -left-32 top-1/3 w-64 h-64 rounded-full bg-partiful-purple/10 blur-3xl"></div>
      <div className="fixed -right-32 top-2/3 w-64 h-64 rounded-full bg-partiful-blue/10 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-partiful-gradient"></div>
      
      <div className="relative z-10">
        <Hero />
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        <WhatIsSnatch />
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark/80"></div>
        
        <div ref={videoRef}>
          <Suspense fallback={<SectionLoader />}>
            {videoInView && <VideoShowcase />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/80 to-partiful-dark/90"></div>
        
        <div ref={problemRef}>
          <Suspense fallback={<SectionLoader />}>
            {problemInView && <Problem />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <div ref={solutionRef}>
          <Suspense fallback={<SectionLoader />}>
            {solutionInView && <Solution />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div ref={featuresRef}>
          <Suspense fallback={<SectionLoader />}>
            {featuresInView && <Features />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <div ref={communityRef}>
          <Suspense fallback={<SectionLoader />}>
            {communityInView && <CommunityAI />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div ref={teamRef}>
          <Suspense fallback={<SectionLoader />}>
            {teamInView && <Team />}
          </Suspense>
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div ref={acknowledgeRef}>
          <Suspense fallback={<SectionLoader />}>
            {acknowledgeInView && <Acknowledgments />}
          </Suspense>
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
      
      <StickyButton />
    </div>
  );
};

export default React.memo(Index);
