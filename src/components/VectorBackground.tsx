
import React from 'react';

type VectorBackgroundProps = {
  variant?: 'waves' | 'dots' | 'circles' | 'grid';
  color?: string;
  opacity?: number;
  className?: string;
};

const VectorBackground: React.FC<VectorBackgroundProps> = ({
  variant = 'waves',
  color = 'currentColor',
  opacity = 0.05,
  className = '',
}) => {
  // SVG patterns for different vector backgrounds
  const patterns = {
    waves: (
      <path 
        d="M0 25.6c6.4 0 6.4-12.8 12.8-12.8 6.4 0 6.4 12.8 12.8 12.8 6.4 0 6.4-12.8 12.8-12.8 6.4 0 6.4 12.8 12.8 12.8 6.4 0 6.4-12.8 12.8-12.8"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        stroke={color}
        className="animate-float-slow"
      />
    ),
    dots: (
      <g>
        <circle cx="10" cy="10" r="1" fill={color} />
        <circle cx="25" cy="10" r="1" fill={color} />
        <circle cx="40" cy="10" r="1" fill={color} />
        <circle cx="10" cy="25" r="1" fill={color} />
        <circle cx="25" cy="25" r="1" fill={color} />
        <circle cx="40" cy="25" r="1" fill={color} />
        <circle cx="10" cy="40" r="1" fill={color} />
        <circle cx="25" cy="40" r="1" fill={color} />
        <circle cx="40" cy="40" r="1" fill={color} />
      </g>
    ),
    circles: (
      <g>
        <circle cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth="0.5" />
        <circle cx="25" cy="25" r="15" fill="none" stroke={color} strokeWidth="0.3" />
        <circle cx="25" cy="25" r="10" fill="none" stroke={color} strokeWidth="0.2" />
        <circle cx="25" cy="25" r="5" fill="none" stroke={color} strokeWidth="0.1" />
      </g>
    ),
    grid: (
      <g>
        <line x1="0" y1="10" x2="50" y2="10" stroke={color} strokeWidth="0.2" />
        <line x1="0" y1="20" x2="50" y2="20" stroke={color} strokeWidth="0.2" />
        <line x1="0" y1="30" x2="50" y2="30" stroke={color} strokeWidth="0.2" />
        <line x1="0" y1="40" x2="50" y2="40" stroke={color} strokeWidth="0.2" />
        <line x1="10" y1="0" x2="10" y2="50" stroke={color} strokeWidth="0.2" />
        <line x1="20" y1="0" x2="20" y2="50" stroke={color} strokeWidth="0.2" />
        <line x1="30" y1="0" x2="30" y2="50" stroke={color} strokeWidth="0.2" />
        <line x1="40" y1="0" x2="40" y2="50" stroke={color} strokeWidth="0.2" />
      </g>
    ),
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        style={{ opacity }}
      >
        <defs>
          <pattern id={`pattern-${variant}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            {patterns[variant]}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pattern-${variant})`} />
      </svg>
    </div>
  );
};

export default VectorBackground;
