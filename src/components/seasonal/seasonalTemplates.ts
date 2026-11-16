/**
 * Plantillas vectoriales (SVG) de temporada para el Personalizador en tiempo real.
 * Se definen de forma aislada sin tocar src/data/products.ts.
 */

export interface SeasonalTemplate {
  id: string;
  name: string;
  badge: string;
  svgDataUri: string;
}

// Convertir SVG inline a Data URI seguro
const createSvgDataUri = (svgContent: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

export const SEASONAL_TEMPLATES: SeasonalTemplate[] = [
  {
    id: 'arbol-dorado',
    name: 'Árbol Minimalista Dorado',
    badge: 'Navidad 2026',
    svgDataUri: createSvgDataUri(`
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 20L128 38L147 41L133 54L137 73L120 64L103 73L107 54L93 41L112 38L120 20Z" fill="#D4AF37"/>
        <path d="M120 75L85 120H105L70 165H110L60 205H180L130 165H170L135 120H155L120 75Z" stroke="#D4AF37" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="rgba(212,175,55,0.06)"/>
        <path d="M110 205V225H130V205" stroke="#C6C8CB" stroke-width="4" stroke-linecap="round"/>
        <circle cx="120" cy="110" r="4" fill="#FFFFFF"/>
        <circle cx="100" cy="150" r="4" fill="#D4AF37"/>
        <circle cx="140" cy="150" r="4" fill="#D4AF37"/>
        <circle cx="120" cy="185" r="4" fill="#C6C8CB"/>
      </svg>
    `)
  },
  {
    id: 'gorro-navideno',
    name: 'Gorro Navideño & Estrella',
    badge: 'Edición Fiesta',
    svgDataUri: createSvgDataUri(`
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 170C60 110 100 55 170 40C190 60 205 80 200 105C195 118 180 120 170 120" stroke="#B3121F" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="rgba(179,18,31,0.18)"/>
        <circle cx="205" cy="115" r="18" stroke="#F1F1F1" stroke-width="4" fill="#FFFFFF"/>
        <path d="M35 175C35 164 44 155 55 155H185C196 155 205 164 205 175C205 186 196 195 185 195H55C44 195 35 186 35 175Z" stroke="#D4AF37" stroke-width="4" fill="#141517"/>
        <path d="M120 70L123 78L132 80L125 86L127 95L120 90L113 95L115 86L108 80L117 78L120 70Z" fill="#D4AF37"/>
      </svg>
    `)
  },
  {
    id: 'marco-felices-fiestas',
    name: 'Marco Felices Fiestas',
    badge: 'Corporativo',
    svgDataUri: createSvgDataUri(`
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="200" height="200" rx="16" stroke="#D4AF37" stroke-width="3" fill="none"/>
        <rect x="28" y="28" width="184" height="184" rx="12" stroke="#C6C8CB" stroke-width="1.2" stroke-dasharray="4 4" fill="none"/>
        <path d="M120 40L124 50L135 52L127 59L129 70L120 64L111 70L113 59L105 52L116 50L120 40Z" fill="#D4AF37"/>
        <text x="120" y="115" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-size="18" font-weight="bold" letter-spacing="2">FELICES</text>
        <text x="120" y="140" text-anchor="middle" fill="#D4AF37" font-family="sans-serif" font-size="20" font-weight="900" letter-spacing="3">FIESTAS</text>
        <text x="120" y="165" text-anchor="middle" fill="#C6C8CB" font-family="sans-serif" font-size="11" letter-spacing="4">ART MANIA</text>
        <circle cx="120" cy="185" r="3" fill="#D4AF37"/>
      </svg>
    `)
  }
];
