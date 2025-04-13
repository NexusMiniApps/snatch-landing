
import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';

interface SparkleProps {
  count?: number;
}

const Sparkles: React.FC<SparkleProps> = ({ count = 30 }) => {
  // Reduce default count from 50 to 30 for better performance
  
  // Use a ref to avoid recreating the interval on every render
  const intervalRef = useRef<number | null>(null);
  
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
  
  // Memoize the update function to prevent recreation on each render
  const updateSparkles = useCallback(() => {
    setSparkles(prevSparkles => 
      prevSparkles.map(sparkle => ({
        ...sparkle,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);
  
  useEffect(() => {
    // Use a longer interval (30 seconds) to reduce CPU usage
    intervalRef.current = window.setInterval(updateSparkles, 30000);
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [updateSparkles]);
  
  // Optimize rendering by rendering fewer sparkles at once
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
            contain: 'layout paint style', // Add CSS containment for rendering optimization
          }}
        />
      ))}
    </div>
  );
};

// Memoize the Sparkles component to prevent unnecessary re-renders
export default React.memo(Sparkles);
