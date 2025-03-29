
import React, { useEffect, useState } from 'react';
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
  
  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-party text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="texture-overlay"></div>
      
      {/* Confetti animation */}
      {showConfetti && <Confetti duration={5000} />}
      
      {/* Background sparkles */}
      <Sparkles count={100} />
      
      {/* Background stars */}
      <div className="absolute inset-0 bg-stars opacity-20 pointer-events-none"></div>
      
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
      
      {/* Sticky CTA button */}
      <StickyButton />
    </div>
  );
};

export default Index;
