
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
    
    // Create falling leaves effect
    const createLeaves = () => {
      const container = document.querySelector('.falling-leaves');
      if (!container) return;
      
      for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDuration = `${Math.random() * 10 + 10}s, ${Math.random() * 5 + 5}s`;
        leaf.style.animationDelay = `${Math.random() * 10}s`;
        leaf.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        leaf.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        container.appendChild(leaf);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    createLeaves();
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={mainRef} className="min-h-screen text-[#1a3c2b] relative overflow-hidden ghibli-mountains">
      {/* Subtle texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Falling leaves animation */}
      <div className="falling-leaves"></div>
      
      {/* Confetti animation */}
      {showConfetti && <Confetti duration={3000} />}
      
      {/* Background sparkles with reduced density */}
      <Sparkles count={50} />
      
      {/* Background stars with parallax effect */}
      <div className="absolute inset-0 bg-stars opacity-10 pointer-events-none transition-transform duration-200 ease-linear"></div>
      
      {/* Ambient gradient accents */}
      <div className="fixed top-0 left-0 w-full h-1/4 bg-gradient-to-b from-[#f2fce2]/30 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#d3e4fd]/30 to-transparent pointer-events-none"></div>
      <div className="fixed -left-32 top-1/3 w-64 h-64 rounded-full bg-[#f2fce2]/20 blur-3xl"></div>
      <div className="fixed -right-32 top-2/3 w-64 h-64 rounded-full bg-[#d3e4fd]/20 blur-3xl"></div>
      
      {/* Ghibli-inspired gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f2fce2] via-[#d96a4f] to-[#d3e4fd]"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <div className="section-divider"></div>
        <WhatIsSnatch />
        <div className="section-divider"></div>
        <VideoShowcase />
        <div className="section-divider"></div>
        <Problem />
        <div className="section-divider"></div>
        <Solution />
        <div className="section-divider"></div>
        <Features />
        <div className="section-divider"></div>
        <Team />
        <div className="section-divider"></div>
        <Acknowledgments />
        <Footer />
      </div>
      
      {/* Sticky CTA button with improved appearance */}
      <StickyButton />
    </div>
  );
};

export default Index;
