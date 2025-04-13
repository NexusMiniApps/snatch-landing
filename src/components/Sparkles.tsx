
import React, { useEffect, useState, useMemo } from 'react';

interface SparkleProps {
  count?: number;
}

const Sparkles: React.FC<SparkleProps> = ({ count = 50 }) => {
  // Generate sparkles once using useMemo to avoid recreating on every render
  const initialSparkles = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${0.5 + Math.random() * 1}px`,
      opacity: `${0.1 + Math.random() * 0.3}`,
    })), [count]);
  
  const [sparkles, setSparkles] = useState(initialSparkles);
  
  useEffect(() => {
    // Reposition sparkles every 15 seconds for a more subtle effect
    // Use a longer interval for better performance
    const intervalId = setInterval(() => {
      setSparkles(prevSparkles => 
        prevSparkles.map(sparkle => ({
          ...sparkle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }))
      );
    }, 20000); // Increased to 20 seconds for better performance
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full bg-white animate-sparkle will-change-transform"
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

// Memoize the Sparkles component to prevent unnecessary re-renders
export default React.memo(Sparkles);
