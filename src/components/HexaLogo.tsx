
import React from 'react';

export const HexaLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <filter id="glow-logo" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="hexaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8c52ff" />
          <stop offset="100%" stopColor="#98f3ff" />
        </linearGradient>
      </defs>
      
      {/* Abstract Hexagon Container */}
      <path 
        d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" 
        stroke="url(#hexaGradient)" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="rgba(140,82,255,0.1)"
      />
      
      {/* Internal "Circuit/Arm" Abstraction */}
      {/* Central Node */}
      <circle cx="50" cy="55" r="8" fill="#8c52ff" filter="url(#glow-logo)" />
      
      {/* Connection Lines representing kinematics */}
      <path d="M50 55 L50 25" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 25 L75 40" stroke="#e0e0e0" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 55 L25 70" stroke="#98f3ff" strokeWidth="3" strokeLinecap="round" />
      
      {/* Joints */}
      <circle cx="50" cy="25" r="4" fill="white" />
      <circle cx="75" cy="40" r="3" fill="#98f3ff" />
      <circle cx="25" cy="70" r="3" fill="#98f3ff" />

    </svg>
  );
};
