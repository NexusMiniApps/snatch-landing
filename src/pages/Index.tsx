
import React, { useEffect, useState, useRef } from 'react';
import Confetti from '@/components/Confetti';
import Sparkles from '@/components/Sparkles';
import StickyButton from '@/components/StickyButton';
import Hero from '@/components/sections/Hero';
import WhatIsSnatch from '@/components/sections/WhatIsSnatch';
import VideoShowcase from '@/components/sections/VideoShowcase';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Acknowledgments from '@/components/sections/Acknowledgments';
import Footer from '@/components/Footer';
import VectorBackground from '@/components/VectorBackground';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
    
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
    <div ref={mainRef} className="min-h-screen bg-partiful-dark text-white relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Confetti animation */}
      {showConfetti && <Confetti duration={3000} />}
      
      {/* Background sparkles with reduced density */}
      <Sparkles count={100} />
      
      {/* Vector translucent backgrounds */}
      <VectorBackground variant="waves" color="#5b3bd7" opacity={0.03} className="fixed top-0 left-0" />
      <VectorBackground variant="circles" color="#EC4899" opacity={0.02} className="fixed bottom-0 right-0" />
      
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
        <div className="relative">
          <VectorBackground variant="dots" color="#FDE047" opacity={0.03} className="absolute inset-0" />
          <Hero />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div className="relative">
          <VectorBackground variant="grid" color="#ffffff" opacity={0.02} className="absolute inset-0" />
          <WhatIsSnatch />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark/80"></div>
        
        <div className="relative">
          <VectorBackground variant="circles" color="#4bb6e7" opacity={0.02} className="absolute inset-0" />
          <VideoShowcase />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/80 to-partiful-dark/90"></div>
        
        <div className="relative">
          <VectorBackground variant="waves" color="#b14f8c" opacity={0.03} className="absolute inset-0" />
          <Problem />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <div className="relative">
          <VectorBackground variant="grid" color="#a4d4dc" opacity={0.02} className="absolute inset-0" />
          <Solution />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div className="relative">
          <VectorBackground variant="dots" color="#efce99" opacity={0.03} className="absolute inset-0" />
          <Features />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark/90 to-partiful-dark"></div>
        
        <div className="relative">
          <VectorBackground variant="circles" color="#FDE047" opacity={0.02} className="absolute inset-0" />
          <Team />
        </div>
        
        <div className="section-divider bg-gradient-to-b from-partiful-dark to-partiful-dark/90"></div>
        
        <div className="relative">
          <VectorBackground variant="waves" color="#EC4899" opacity={0.02} className="absolute inset-0" />
          <Acknowledgments />
        </div>
        
        <Footer />
      </div>
      
      {/* Sticky CTA button with improved appearance */}
      <StickyButton />
    </div>
  );
};

export default Index;
