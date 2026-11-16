import React from 'react';

interface SvgProps {
  size?: number;
  className?: string;
  color?: string;
  secondaryColor?: string;
}

/**
 * Arbolito de Navidad estilizado en línea fina minimalista (Dorado & Plata).
 */
export const ChristmasTreeIcon: React.FC<SvgProps> = ({
  size = 24,
  className = '',
  color = '#D4AF37',
  secondaryColor = '#C6C8CB'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Estrella superior */}
    <path
      d="M12 2L12.8 3.8L14.7 4.1L13.3 5.4L13.7 7.3L12 6.4L10.3 7.3L10.7 5.4L9.3 4.1L11.2 3.8L12 2Z"
      fill={color}
    />
    {/* Capas del árbol de línea fina */}
    <path
      d="M12 7.5L8.5 12H10.5L7 16.5H11L6 20.5H18L13 16.5H17L13.5 12H15.5L12 7.5Z"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Tronco */}
    <path
      d="M11 20.5V22.5H13V20.5"
      stroke={secondaryColor}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Detalles sutiles interiores */}
    <circle cx="12" cy="11" r="0.7" fill={secondaryColor} />
    <circle cx="10" cy="15" r="0.7" fill={color} />
    <circle cx="14" cy="15" r="0.7" fill={color} />
    <circle cx="12" cy="18.5" r="0.7" fill={secondaryColor} />
  </svg>
);

/**
 * Galleta de jengibre (Gingerbread man) en línea fina elegante.
 */
export const GingerbreadManIcon: React.FC<SvgProps> = ({
  size = 24,
  className = '',
  color = '#D4AF37',
  secondaryColor = '#C6C8CB'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Contorno del muñeco de jengibre */}
    <path
      d="M12 2.5C13.6569 2.5 15 3.84315 15 5.5C15 6.4 14.6 7.2 13.9 7.7C15.8 8.1 19.5 9.8 20 11.2C20.4 12.3 19.5 13.5 18 13.5C17.3 13.5 16.5 12.7 15.5 11.5L15 14C15 14.5 15.3 15 15.7 15.5L17.5 19.8C18 21 16.9 22 15.7 21.8C14.7 21.6 13.8 20 13 18.2L12 16L11 18.2C10.2 20 9.3 21.6 8.3 21.8C7.1 22 6 21 6.5 19.8L8.3 15.5C8.7 15 9 14.5 9 14L8.5 11.5C7.5 12.7 6.7 13.5 6 13.5C4.5 13.5 3.6 12.3 4 11.2C4.5 9.8 8.2 8.1 10.1 7.7C9.4 7.2 9 6.4 9 5.5C9 3.84315 10.3431 2.5 12 2.5Z"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ojos y sonrisa minimalistas */}
    <circle cx="10.8" cy="5" r="0.6" fill={secondaryColor} />
    <circle cx="13.2" cy="5" r="0.6" fill={secondaryColor} />
    <path
      d="M11 6.2C11.3 6.6 12.7 6.6 13 6.2"
      stroke={secondaryColor}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    {/* Botones / Moño */}
    <circle cx="12" cy="9.8" r="0.8" fill={color} />
    <circle cx="12" cy="12.5" r="0.8" fill={color} />
  </svg>
);

/**
 * Gorrito de Papá Noel sutil en trazo fino.
 */
export const SantaHatIcon: React.FC<SvgProps> = ({
  size = 24,
  className = '',
  color = '#D4AF37',
  secondaryColor = '#E2E4E7'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Cuerpo curvado del gorro */}
    <path
      d="M5 17C6 11 10 5.5 17 4C19 6 20.5 8 20 10.5C19.5 11.8 18 12 17 12"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pompón sutil en la punta */}
    <circle
      cx="20.5"
      cy="11.5"
      r="1.8"
      stroke={secondaryColor}
      strokeWidth="1.1"
      fill="#080909"
    />
    {/* Base acolchada de línea fina */}
    <path
      d="M3.5 17.5C3.5 16.4 4.4 15.5 5.5 15.5H18.5C19.6 15.5 20.5 16.4 20.5 17.5C20.5 18.6 19.6 19.5 18.5 19.5H5.5C4.4 19.5 3.5 18.6 3.5 17.5Z"
      stroke={secondaryColor}
      strokeWidth="1.1"
      fill="#141517"
    />
  </svg>
);

/**
 * Estrella brillante de 4/8 puntas en trazo dorado.
 */
export const ChristmasSparkleIcon: React.FC<SvgProps> = ({
  size = 18,
  className = '',
  color = '#D4AF37'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
      fill={color}
      fillOpacity="0.85"
    />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
);

/**
 * Copo de nieve geométrico de trazo fino plateado/dorado.
 */
export const ChristmasFlakeIcon: React.FC<SvgProps> = ({
  size = 20,
  className = '',
  color = '#C6C8CB'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Ejes principales */}
    <path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93" stroke={color} strokeWidth="1.1" strokeLinecap="round" />
    {/* Ramificaciones sutiles */}
    <path d="M10 5L12 3L14 5M10 19L12 21L14 19M5 10L3 12L5 14M19 10L21 12L19 14" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
