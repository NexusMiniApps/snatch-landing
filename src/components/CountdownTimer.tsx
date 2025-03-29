
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const CountdownTimer: React.FC = () => {
  const [count, setCount] = useState(3);
  const [isActive, setIsActive] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!isActive) return;
    
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(intervalId);
          setIsActive(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [isActive]);
  
  // Restart countdown every 6 seconds
  useEffect(() => {
    if (isActive) return;
    
    const timeoutId = setTimeout(() => {
      setCount(3);
      setIsActive(true);
    }, 3000);
    
    return () => clearTimeout(timeoutId);
  }, [isActive]);
  
  const renderNumberWithAfterImage = (num: number | string) => {
    return (
      <span className="relative inline-block px-2">
        {typeof num === 'number' && num > 0 && (
          <span className="absolute inset-0 flex justify-center text-snatch-pink/30 animate-ping-slow">
            {num}
          </span>
        )}
        <span className="relative z-10">{num}</span>
      </span>
    );
  };
  
  if (count === 0) {
    return (
      <div className="inline-block text-snatch-yellow font-fredoka text-3xl md:text-5xl lg:text-6xl">
        <span className="glow-text">Launch!</span>
        <span className="absolute inset-0 animate-ping-slow opacity-30 text-snatch-pink blur-sm">Launch!</span>
      </div>
    );
  }
  
  return (
    <div className="inline-block text-snatch-yellow font-fredoka text-3xl md:text-5xl lg:text-6xl relative">
      {isMobile ? (
        <>Launch in {renderNumberWithAfterImage(count)}...</>
      ) : (
        <>Next Launch in {renderNumberWithAfterImage(count)}...</>
      )}
    </div>
  );
};

export default CountdownTimer;
