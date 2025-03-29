
import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  duration?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ duration = 3000 }) => {
  const confettiRef = useRef<() => void>();
  
  useEffect(() => {
    // Launch confetti with a more subtle configuration
    const launchConfetti = () => {
      const end = Date.now() + duration;
      
      // Partiful-inspired color palette
      const colors = ['#5b3bd7', '#b14f8c', '#4bb6e7', '#a4d4dc'];
      
      const confettiInstance = confetti.create();
      
      confettiRef.current = () => {
        confettiInstance({
          particleCount: 2,
          angle: 60,
          spread: 40,
          origin: { x: 0.1, y: 0.3 },
          colors: colors,
          shapes: ['circle'],
          scalar: 0.8,
          disableForReducedMotion: true,
        });
        
        confettiInstance({
          particleCount: 2,
          angle: 120,
          spread: 40,
          origin: { x: 0.9, y: 0.3 },
          colors: colors,
          shapes: ['circle'],
          scalar: 0.8,
          disableForReducedMotion: true,
        });
        
        if (Date.now() < end) {
          requestAnimationFrame(confettiRef.current!);
        }
      };
      
      confettiRef.current();
    };
    
    launchConfetti();
    
    return () => {
      // Clean up
      if (confettiRef.current) {
        cancelAnimationFrame(0);
      }
    };
  }, [duration]);
  
  return null;
};

export default Confetti;
