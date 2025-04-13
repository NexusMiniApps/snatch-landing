
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';

// Lazy load components that are not immediately visible
const VideoShowcase = lazy(() => import('@/components/sections/VideoShowcase'));
const Problem = lazy(() => import('@/components/sections/Problem'));
const Solution = lazy(() => import('@/components/sections/Solution'));
const Features = lazy(() => import('@/components/sections/Features'));
const CommunityAI = lazy(() => import('@/components/sections/CommunityAI'));
const Team = lazy(() => import('@/components/sections/Team'));
const Acknowledgments = lazy(() => import('@/components/sections/Acknowledgments'));
const Footer = lazy(() => import('@/components/Footer'));

// Simple loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-24">
    <div className="animate-pulse h-16 w-16 rounded-full bg-partiful-purple/30"></div>
  </div>
);

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optimization: Use passive event listener for better scroll performance
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Limit state updates - only update when crossing threshold
      if ((scrollPosition > 100 && !scrolled) || (scrollPosition <= 100 && scrolled)) {
        setScrolled(scrollPosition > 100);
      }
      
      // Apply subtle parallax to background layers with requestAnimationFrame for better performance
      if (mainRef.current) {
        window.requestAnimationFrame(() => {
          const starsLayer = mainRef.current?.querySelector('.bg-stars') as HTMLElement;
          if (starsLayer) {
            starsLayer.style.transform = `translateY(${scrollPosition * 0.05}px)`;
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <div ref={mainRef} className="min-h-screen bg-partiful-dark text-white relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Background sparkles with reduced density */}
      <Sparkles count={50} /> {/* Reduced count for better performance */}
      
      {/* Background stars with parallax effect */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none transition-transform duration-200 ease-linear will-change-transform"></div>
      
      {/* Ambient gradient accents inspired by Partiful */}
      <div className="fixed top-0 left-0 w-full h-1/4 bg-gradient-to-b from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-partiful-purple/10 to-transparent pointer-events-none"></div>
      <div className="fixed -left-32 top-1/3 w-64 h-64 rounded-full bg-partiful-purple/10 blur-3xl"></div>
      <div className="fixed -right-32 top-2/3 w-64 h-64 rounded-full bg-partiful-blue/10 blur-3xl"></div>
      
      {/* Partiful-inspired gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-partiful-gradient"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        <WhatIsSnatch />
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark/80"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <VideoShowcase />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/80 to-partiful-dark/90"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <Problem />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <Solution />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <CommunityAI />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <Team />
        </Suspense>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <Suspense fallback={<SectionLoader />}>
          <Acknowledgments />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
      
      {/* Sticky CTA button with improved appearance */}
      <StickyButton />
    </div>
  );
};

// Memoize the Index component as it doesn't need to re-render based on props
export default React.memo(Index);
