
import React, { useEffect, useState } from 'react';

interface SparkleProps {
  count?: number;
}

const Sparkles: React.FC<SparkleProps> = ({ count = 50 }) => {
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; delay: string }[]>([]);
  
  useEffect(() => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    
    setSparkles(newSparkles);
    
    // Reposition sparkles every 10 seconds for a dynamic effect
    const intervalId = setInterval(() => {
      setSparkles(prevSparkles => 
        prevSparkles.map(sparkle => ({
          ...sparkle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${Math.random() * 3}s`,
        }))
      );
    }, 10000);
    
    return () => clearInterval(intervalId);
  }, [count]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle absolute"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
