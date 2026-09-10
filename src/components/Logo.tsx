import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-11 h-11 shrink-0' }) => {
  return (
    <svg
      id="brand-gy-logo"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gnana Yadeswar GY Logo"
      role="img"
    >
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="61"
        rx="16"
        fill="#1E1B4B"
        stroke="#F59E0B"
        strokeWidth="2.5"
      />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="27"
        fontWeight="900"
        fill="#FBBF24"
        letterSpacing="-0.5"
      >
        GY
      </text>
    </svg>
  );
};
