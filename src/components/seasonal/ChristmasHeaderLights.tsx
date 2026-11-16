import React from 'react';

/**
 * Guirnalda sutil de línea dorada y plata para el borde del Header.
 * Puntos de luz minimalistas con brillo suave que respeta prefers-reduced-motion.
 * Sin esferas colgantes ni bastones de caramelo.
 */
export const ChristmasHeaderLights: React.FC = () => {
  return (
    <div className="seasonal-header-garland" aria-hidden="true">
      <svg
        className="seasonal-garland-svg"
        viewBox="0 0 1200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Cable festivo ondulado muy fino */}
        <path
          d="M0 2 Q 100 8, 200 2 Q 300 8, 400 2 Q 500 8, 600 2 Q 700 8, 800 2 Q 900 8, 1000 2 Q 1100 8, 1200 2"
          stroke="rgba(198, 200, 203, 0.28)"
          strokeWidth="0.8"
        />

        {/* Puntos de luz dorados, plateados y rojo pino tenues */}
        <circle cx="100" cy="8" r="1.8" className="seasonal-bulb bulb-gold" />
        <circle cx="200" cy="2" r="1.4" className="seasonal-bulb bulb-silver" />
        <circle cx="300" cy="8" r="1.8" className="seasonal-bulb bulb-red" />
        <circle cx="400" cy="2" r="1.4" className="seasonal-bulb bulb-gold" />
        <circle cx="500" cy="8" r="1.8" className="seasonal-bulb bulb-silver" />
        <circle cx="600" cy="2" r="1.4" className="seasonal-bulb bulb-gold" />
        <circle cx="700" cy="8" r="1.8" className="seasonal-bulb bulb-red" />
        <circle cx="800" cy="2" r="1.4" className="seasonal-bulb bulb-silver" />
        <circle cx="900" cy="8" r="1.8" className="seasonal-bulb bulb-gold" />
        <circle cx="1000" cy="2" r="1.4" className="seasonal-bulb bulb-silver" />
        <circle cx="1100" cy="8" r="1.8" className="seasonal-bulb bulb-gold" />
      </svg>
    </div>
  );
};
