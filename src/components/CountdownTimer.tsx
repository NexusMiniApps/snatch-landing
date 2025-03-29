
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [count, setCount] = useState(3);
  const [isActive, setIsActive] = useState(true);
  
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
      <div className="inline-block animate-countdown text-snatch-yellow font-fredoka text-4xl md:text-6xl">
        Launch!
      </div>
    );
  }
  
  return (
    <div className="inline-block animate-countdown text-snatch-yellow font-fredoka text-4xl md:text-6xl">
      Next Launch in {count}...
    </div>
  );
};

export default CountdownTimer;
