/**
 * CONFIGURACIÓN CENTRAL DE TEMPORADAS - ART MANIA
 * 
 * Permite activar/desactivar el modo temático de forma:
 * - 'auto': Se activa por calendario (ej. 1 de Noviembre al 6 de Enero)
 * - 'on':   Forzado siempre encendido
 * - 'off':  Forzado siempre apagado
 * 
 * También soporta previsualización por parámetro de URL:
 * - ?theme=christmas (fuerza encendido)
 * - ?theme=normal    (fuerza apagado)
 */

export type SeasonalMode = 'auto' | 'on' | 'off';

export interface SeasonalDateRange {
  // Meses en base 1-12 para facilitar lectura humana (11 = Noviembre, 1 = Enero)
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
}

export interface SeasonalConfig {
  seasonId: string;
  seasonName: string;
  mode: SeasonalMode;
  dateRange: SeasonalDateRange;
  
  // Campos configurables de temporada (sin valores inventados)
  orderDeadline: string | null;
  promoText: string | null;
  
  // Textos y enlaces centralizados
  texts: {
    greeting: string;
    bannerText: string;
    bannerCta: string;
    bannerTargetSection: string;
    whatsappGreeting: string;
    customizerTemplateTitle: string;
  };
  
  // Assets temáticos
  assets: {
    logoHeader: string;
  };
}

export const SEASONAL_CONFIG: SeasonalConfig = {
  seasonId: 'navidad',
  seasonName: 'Navidad & Fin de Año',
  
  // Modo por defecto: 'auto' (se activa y apaga según calendario)
  mode: 'auto',
  
  // Rango: del 1 de Noviembre (11/1) al 6 de Enero (1/6)
  dateRange: {
    startMonth: 11, // Noviembre
    startDay: 1,
    endMonth: 1,    // Enero
    endDay: 6
  },
  
  // Fechas y promociones opcionales (null mientras no estén definidas)
  orderDeadline: null,
  promoText: null,
  
  // Textos formales y cálidos de ART MANIA
  texts: {
    greeting: 'Felices Fiestas les desea ART MANIA',
    bannerText: 'Regalos corporativos y personalizados para esta Navidad',
    bannerCta: 'Ver Catálogo Navideño',
    bannerTargetSection: 'temporadas',
    whatsappGreeting: '¡Felices Fiestas! ',
    customizerTemplateTitle: 'Diseños Navideños'
  },
  
  // Logo navideño del Header (en public/logo/art_mania_navideño.png)
  assets: {
    logoHeader: '/logo/art_mania_navideño.png'
  }
};

/**
 * Evalúa si una fecha dada cae dentro del rango de temporada configurado.
 * Maneja rangos que cruzan fin de año (ej. de Noviembre a Enero).
 */
export function isDateWithinSeasonRange(date: Date, range = SEASONAL_CONFIG.dateRange): boolean {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  const { startMonth, startDay, endMonth, endDay } = range;

  // Rango que cruza fin de año (ej. Noviembre a Enero: startMonth > endMonth)
  if (startMonth > endMonth) {
    // Si estamos en o después de la fecha de inicio en el año actual (Nov 1 a Dic 31)
    if (month > startMonth || (month === startMonth && day >= startDay)) {
      return true;
    }
    // O si estamos antes o en la fecha de fin en el año siguiente (Ene 1 a Ene 6)
    if (month < endMonth || (month === endMonth && day <= endDay)) {
      return true;
    }
    return false;
  }

  // Rango dentro del mismo año natural (ej. Oct 1 a Oct 31)
  const isAfterStart = month > startMonth || (month === startMonth && day >= startDay);
  const isBeforeEnd = month < endMonth || (month === endMonth && day <= endDay);
  return isAfterStart && isBeforeEnd;
}

/**
 * Determina si el modo navideño debe estar activo.
 * Prioridad de resolución:
 * 1. Parámetro de URL (?theme=christmas o ?theme=normal)
 * 2. Modo manual ('on' o 'off')
 * 3. Modo 'auto' basado en la fecha del navegador
 */
export function checkIsChristmasActive(currentDate = new Date()): boolean {
  // 1. Detección por URL si estamos en un entorno con window
  if (typeof window !== 'undefined') {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const themeParam = searchParams.get('theme');
      if (themeParam === 'christmas') return true;
      if (themeParam === 'normal') return false;
    } catch {
      // Si falla lectura de URL, continuar con la configuración normal
    }
  }

  // 2. Modos manuales 'on' y 'off'
  if (SEASONAL_CONFIG.mode === 'on') return true;
  if (SEASONAL_CONFIG.mode === 'off') return false;

  // 3. Modo 'auto': evaluar fecha del navegador
  return isDateWithinSeasonRange(currentDate);
}
