
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
  
  if (count === 0) {
    return (
      <div className="inline-block animate-countdown text-snatch-yellow font-fredoka text-3xl md:text-5xl lg:text-6xl glow-effect">
        Launch!
      </div>
    );
  }
  
  return (
    <div className="inline-block animate-countdown text-snatch-yellow font-fredoka text-3xl md:text-5xl lg:text-6xl">
      {isMobile ? `Launch in ${count}...` : `Next Launch in ${count}...`}
    </div>
  );
};

export default CountdownTimer;
