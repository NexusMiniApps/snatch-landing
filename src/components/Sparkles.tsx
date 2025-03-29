
import React, { useEffect, useState } from 'react';

interface SparkleProps {
  count?: number;
}

const Sparkles: React.FC<SparkleProps> = ({ count = 50 }) => {
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; delay: string; size: string; opacity: string }[]>([]);
  
  useEffect(() => {
    // Create more Partiful-like sparkles with varied sizes and opacities
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${0.5 + Math.random() * 1}px`,
      opacity: `${0.1 + Math.random() * 0.3}`,
    }));
    
    setSparkles(newSparkles);
    
    // Reposition sparkles every 15 seconds for a more subtle effect
    const intervalId = setInterval(() => {
      setSparkles(prevSparkles => 
        prevSparkles.map(sparkle => ({
          ...sparkle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }))
      );
    }, 15000);
    
    return () => clearInterval(intervalId);
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white animate-sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            animationDelay: sparkle.delay,
            animationDuration: '4s',
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
