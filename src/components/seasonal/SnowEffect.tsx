import React, { useEffect, useState, useMemo } from 'react';
import './SnowEffect.css';

interface SnowParticle {
  id: number;
  type: 'sparkle' | 'flake' | 'dot';
  left: number; // Porcentaje 0 a 100
  size: number; // Pixeles
  duration: number; // Segundos (2.4 a 3.0)
  delay: number; // Segundos (0 a 0.6)
  drift: number; // Pixeles de deriva horizontal (-30 a 30)
  opacity: number;
}

interface SnowEffectProps {
  active?: boolean;
}

export const SnowEffect: React.FC<SnowEffectProps> = ({ active = true }) => {
  const [mounted, setMounted] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  // Comprobar preferencia de reducción de movimiento
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Generar partículas optimizadas según el ancho de pantalla
  const particles = useMemo<SnowParticle[]>(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return [];

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 22 : 48; // Rendimiento móvil estricto
    const list: SnowParticle[] = [];

    for (let i = 0; i < count; i++) {
      // Predominio de destellos blancos (60% destellos, 25% puntos, 15% copos)
      const rand = Math.random();
      const type: SnowParticle['type'] = rand < 0.6 ? 'sparkle' : rand < 0.85 ? 'dot' : 'flake';

      list.push({
        id: i,
        type,
        left: Math.random() * 100,
        size: type === 'sparkle' ? 7 + Math.random() * 7 : type === 'flake' ? 12 + Math.random() * 6 : 3 + Math.random() * 3,
        duration: 2.2 + Math.random() * 0.8, // Caída en torno a 2.5s
        delay: Math.random() * 0.4,
        drift: (Math.random() - 0.5) * 50,
        opacity: 0.6 + Math.random() * 0.4
      });
    }

    return list;
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    setMounted(true);

    // Iniciar desvanecimiento gradual a los 2.3s
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 2300);

    // Desmontar completamente a los 3.05 segundos
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 3050);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [active, prefersReducedMotion]);

  if (!mounted || prefersReducedMotion || particles.length === 0) {
    return null;
  }

  return (
    <div
      className={`seasonal-snow-container ${fadingOut ? 'seasonal-snow-fading' : ''}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`seasonal-particle seasonal-particle-${p.type}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift-x': `${p.drift}px`
          } as React.CSSProperties}
        >
          {p.type === 'sparkle' ? (
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z"
                fill="#FFFFFF"
              />
              <circle cx="8" cy="8" r="1.5" fill="#D4AF37" />
            </svg>
          ) : p.type === 'flake' ? (
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1V15M1 8H15M3 3L13 13M3 13L13 3" stroke="#F1F1F1" strokeWidth="1" strokeLinecap="round" />
            </svg>
          ) : (
            <div className="particle-glow-dot" />
          )}
        </div>
      ))}
    </div>
  );
};
