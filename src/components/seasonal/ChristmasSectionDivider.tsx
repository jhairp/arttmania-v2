import React from 'react';
import { ChristmasTreeIcon, ChristmasSparkleIcon, ChristmasFlakeIcon } from './ChristmasSVGs';

interface DividerProps {
  className?: string;
}

export const ChristmasSectionDivider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={`seasonal-divider-wrap ${className}`} aria-hidden="true">
      <div className="seasonal-divider-line" />
      <div className="seasonal-divider-emblem">
        <ChristmasSparkleIcon size={12} color="#D4AF37" />
        <ChristmasTreeIcon size={20} color="#D4AF37" secondaryColor="#C6C8CB" />
        <ChristmasFlakeIcon size={14} color="#C6C8CB" />
        <ChristmasSparkleIcon size={12} color="#D4AF37" />
      </div>
      <div className="seasonal-divider-line" />
    </div>
  );
};
