
import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  duration?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ duration = 5000 }) => {
  const confettiRef = useRef<() => void>();
  
  useEffect(() => {
    // Launch confetti
    const launchConfetti = () => {
      const end = Date.now() + duration;
      
      const colors = ['#A855F7', '#EC4899', '#FDE047'];
      
      const confettiInstance = confetti.create();
      
      confettiRef.current = () => {
        confettiInstance({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        
        confettiInstance({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
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
