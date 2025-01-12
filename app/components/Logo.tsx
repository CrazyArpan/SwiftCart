import React from 'react';

interface LogoProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, color = '#FFFFFF' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="#4A90E2" />
      <path
        d="M20 70 L40 30 L60 70 M60 30 L80 70"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 50 L55 50"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M50 35 L60 55"
        stroke="#FFD700"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;

