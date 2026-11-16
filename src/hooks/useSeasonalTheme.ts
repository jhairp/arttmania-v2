import { useState, useEffect, useMemo } from 'react';
import { SEASONAL_CONFIG, checkIsChristmasActive, SeasonalConfig } from '../config/seasonal';

export interface UseSeasonalThemeResult {
  isChristmas: boolean;
  config: SeasonalConfig;
}

/**
 * Hook para consumir el estado del Modo Navideño / Temporada en cualquier componente.
 * Evalúa URL (?theme=christmas/normal), modo manual y rango de fechas del navegador.
 */
export function useSeasonalTheme(): UseSeasonalThemeResult {
  const [isChristmas, setIsChristmas] = useState<boolean>(() => checkIsChristmasActive());

  useEffect(() => {
    // Re-evaluar en el cliente para garantizar sincronía
    setIsChristmas(checkIsChristmasActive());

    // Escuchar posibles cambios de URL en navegación interna
    const handleLocationChange = () => {
      setIsChristmas(checkIsChristmasActive());
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return useMemo(
    () => ({
      isChristmas,
      config: SEASONAL_CONFIG
    }),
    [isChristmas]
  );
}
