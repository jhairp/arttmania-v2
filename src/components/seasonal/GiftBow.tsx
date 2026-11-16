import React from 'react';

export type GiftBowSize = 'sm' | 'md' | 'lg';

interface GiftBowProps {
  size?: GiftBowSize;
  className?: string;
  position?: 'top-left' | 'top-right' | 'corner-ribbon';
  style?: React.CSSProperties;
}

const SIZE_MAP: Record<GiftBowSize, { width: number; height: number; strokeWidth: number }> = {
  sm: { width: 18, height: 18, strokeWidth: 1.2 }, // Para el botón del carrito
  md: { width: 28, height: 28, strokeWidth: 1.2 }, // Para tarjetas de producto
  lg: { width: 38, height: 38, strokeWidth: 1.3 }  // Para modales
};

/**
 * Componente reutilizable GiftBow: lazo/moño de regalo navideño
 * en línea fina dorada y plata con detalles metálicos.
 * Siempre aria-hidden="true", pointer-events: none y con posición absoluta.
 */
export const GiftBow: React.FC<GiftBowProps> = ({
  size = 'md',
  className = '',
  position = 'top-left',
  style
}) => {
  const { width, height, strokeWidth } = SIZE_MAP[size];

  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 5,
    ...(position === 'top-left' ? { top: '6px', left: '6px' } : {}),
    ...(position === 'top-right' ? { top: '6px', right: '6px' } : {}),
    ...(position === 'corner-ribbon' ? { top: '0', left: '0' } : {}),
    ...style
  };

  return (
    <div
      className={`seasonal-gift-bow seasonal-gift-bow-${size} ${className}`}
      style={positionStyles}
      aria-hidden="true"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}
      >
        {/* Lazos de cinta (orejas del moño en oro #D4AF37) */}
        {/* Oreja izquierda */}
        <path
          d="M16 14C12 9 6 8 5 12C4 16 11 16 16 15"
          stroke="#D4AF37"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(212, 175, 55, 0.12)"
        />
        {/* Oreja derecha */}
        <path
          d="M16 14C20 9 26 8 27 12C28 16 21 16 16 15"
          stroke="#D4AF37"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(212, 175, 55, 0.12)"
        />

        {/* Cintas colgantes inferiores (plata #C6C8CB y oro) */}
        {/* Cinta izquierda */}
        <path
          d="M14 16C12 21 8 24 6 27"
          stroke="#C6C8CB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Cinta derecha */}
        <path
          d="M18 16C20 21 24 24 26 27"
          stroke="#C6C8CB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Nudo central (dorado con brillo) */}
        <circle
          cx="16"
          cy="14.5"
          r="2.6"
          fill="#D4AF37"
          stroke="#F3E5AB"
          strokeWidth="0.8"
        />
        <circle cx="15.3" cy="13.8" r="0.7" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
