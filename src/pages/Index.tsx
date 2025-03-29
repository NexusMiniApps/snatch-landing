
import React, { useEffect, useState, useRef } from 'react';
import Confetti from '@/components/Confetti';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Acknowledgments from '@/components/sections/Acknowledgments';
import Footer from '@/components/Footer';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
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
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={mainRef} className="min-h-screen bg-gradient-party text-white relative overflow-hidden">
      {/* Texture overlay with improved pattern */}
      <div className="texture-overlay"></div>
      
      {/* Confetti animation */}
      {showConfetti && <Confetti duration={5000} />}
      
      {/* Background sparkles with improved density */}
      <Sparkles count={150} />
      
      {/* Background stars with parallax effect */}
      <div className="absolute inset-0 bg-stars opacity-20 pointer-events-none transition-transform duration-200 ease-linear"></div>
      
      {/* Ambient glow effects */}
      <div className="fixed top-1/4 -left-20 w-40 h-40 rounded-full bg-snatch-purple/20 blur-3xl"></div>
      <div className="fixed bottom-1/4 -right-20 w-60 h-60 rounded-full bg-snatch-pink/20 blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <WhatIsSnatch />
        <Problem />
        <Solution />
        <Features />
        <Team />
        <Acknowledgments />
        <Footer />
      </div>
      
      {/* Sticky CTA button with improved appearance */}
      <StickyButton />
    </div>
  );
};

export default Index;
