import React from 'react';

interface HummingbirdIconProps {
  className?: string;
  size?: number;
  animated?: boolean;
  opacity?: number;
}

export const HummingbirdIcon: React.FC<HummingbirdIconProps> = ({
  className = '',
  size = 32,
  animated = false,
  opacity = 1
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`hummingbird-svg ${animated ? 'hummingbird-animated' : ''} ${className}`}
      style={{ opacity }}
    >
      <defs>
        {/* Subtle glow filter */}
        <filter id="hb-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Gradients based on exact brand colors */}
        <linearGradient id="wing-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C88F" />
          <stop offset="100%" stopColor="#00A878" />
        </linearGradient>
        <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0759E8" />
          <stop offset="100%" stopColor="#043CB0" />
        </linearGradient>
        <linearGradient id="head-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF19C4" />
          <stop offset="100%" stopColor="#E600A9" />
        </linearGradient>
      </defs>

      <g className="hb-container">
        {/* Wing Group with subtle aflutter keyframe animation */}
        <g className="hb-wing">
          {/* Back Wing */}
          <path
            d="M 38 42 C 32 28 42 12 55 14 C 54 26 48 36 38 42 Z"
            fill="#008A62"
            opacity="0.85"
          />
          {/* Main Front Wing */}
          <path
            d="M 42 45 C 32 24 48 6 64 8 C 62 24 54 38 42 45 Z"
            fill="url(#wing-grad)"
            filter="url(#hb-glow)"
          />
        </g>

        {/* Tail Feathers - Blue Flow */}
        <path
          d="M 46 62 C 45 74 38 88 32 94 C 36 84 46 72 49 64 Z"
          fill="#0759E8"
        />
        <path
          d="M 49 64 C 50 76 46 88 42 96 C 44 85 51 74 52 65 Z"
          fill="#043CB0"
        />

        {/* Torso & Breast - Royal Blue */}
        <path
          d="M 44 42 C 52 42 60 48 58 58 C 56 66 48 68 44 62 C 42 56 40 48 44 42 Z"
          fill="url(#body-grad)"
        />

        {/* Head & Neck - Magenta Accent */}
        <path
          d="M 54 38 C 54 32 60 26 66 28 C 72 30 72 38 66 42 C 60 44 56 42 54 38 Z"
          fill="url(#head-grad)"
        />

        {/* Sharp Slender Beak - Yellow Accent */}
        <path
          d="M 68 31 L 92 34 L 68 33 Z"
          stroke="#F5B800"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Eye dot */}
        <circle cx="63" cy="32" r="1.5" fill="#F1F1F1" />
      </g>
    </svg>
  );
};
