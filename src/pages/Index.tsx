
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';

// Lazy load components that are not immediately visible with prefetching
const VideoShowcase = lazy(() => {
  // Add artificial delay to prevent all sections loading at once
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

// Simple loading component with reduced animation intensity
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="animate-pulse h-12 w-12 rounded-full bg-partiful-purple/20"></div>
  </div>
);

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  // Set up intersection observers for each major section
  const [videoRef, videoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [problemRef, problemInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [solutionRef, solutionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [communityRef, communityInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [acknowledgeRef, acknowledgeInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const ticking = useRef(false);
  
  useEffect(() => {
    // Performance optimized scroll handler with requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          
          // Limit state updates - only update when crossing threshold
          if ((scrollPosition > 100 && !scrolled) || (scrollPosition <= 100 && scrolled)) {
            setScrolled(scrollPosition > 100);
          }
          
          // Apply subtle parallax to background layers with improved performance
          if (mainRef.current) {
            const starsLayer = mainRef.current?.querySelector('.bg-stars') as HTMLElement;
            if (starsLayer) {
              // Use transform3d for hardware acceleration
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
  
  // Preload next section when current one is in view
  useEffect(() => {
    if (videoInView) {
      // Preload the next section when the current one is visible
      import('@/components/sections/Problem');
    }
  }, [videoInView]);
  
  return (
    <div ref={mainRef} className="min-h-screen bg-partiful-dark text-white relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Background sparkles with reduced density */}
      <Sparkles count={30} /> {/* Further reduced count for better performance */}
      
      {/* Background stars with optimized parallax effect */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none transition-transform duration-200 ease-linear will-change-transform"></div>
      
      {/* Ambient gradient accents inspired by Partiful */}
      <div className="fixed top-0 left-0 w-full h-1/4 bg-gradient-to-b from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed -left-32 top-1/3 w-64 h-64 rounded-full bg-partiful-purple/10 blur-3xl"></div>
      <div className="fixed -right-32 top-2/3 w-64 h-64 rounded-full bg-partiful-blue/10 blur-3xl"></div>
      
      {/* Partiful-inspired gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-partiful-gradient"></div>
      
      {/* Main content with lazy loading based on viewport */}
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
      
      {/* Sticky CTA button */}
      <StickyButton />
    </div>
  );
};

// Memoize the Index component
export default React.memo(Index);
