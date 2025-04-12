
import React, { useEffect, useState, useRef } from 'react';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';
import VideoShowcase from '@/components/sections/VideoShowcase';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import CommunityAI from '@/components/sections/CommunityAI';
import Team from '@/components/sections/Team';
import Acknowledgments from '@/components/sections/Acknowledgments';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Track scroll position for parallax effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);
      
      // Apply subtle parallax to background layers
      if (mainRef.current) {
        const starsLayer = mainRef.current.querySelector('.bg-stars') as HTMLElement;
        if (starsLayer) {
          starsLayer.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={mainRef} className="min-h-screen bg-partiful-dark text-white relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Background sparkles with reduced density */}
      <Sparkles count={100} />
      
      {/* Background stars with parallax effect */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none transition-transform duration-200 ease-linear"></div>
      
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
        <VideoShowcase />
        <div className="section-divider bg-gradient-to-b from-partiful-dark/80 to-partiful-dark/90"></div>
        <Problem />
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        <Solution />
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        <Features />
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        <CommunityAI />
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        <Team />
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        <Acknowledgments />
        <Footer />
      </div>
      
      {/* Sticky CTA button with improved appearance */}
      <StickyButton />
    </div>
  );
};

export default Index;
