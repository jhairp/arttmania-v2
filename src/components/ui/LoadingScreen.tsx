import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onFinish?: () => void;
  minDuration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onFinish,
  minDuration = 1800
}) => {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Progress increment animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 200);

    // Timeout to finish loading
    const timer = setTimeout(() => {
      setProgress(100);
      setFading(true);
      setTimeout(() => {
        setRemoved(true);
        if (onFinish) onFinish();
      }, 700);
    }, minDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDuration, onFinish]);

  if (removed) return null;

  return (
    <div className={`loading-overlay ${fading ? 'fade-out' : ''}`} aria-hidden={fading}>
      {/* Ambient background glow */}
      <div className="loading-ambient-glow" />

      <div className="loading-content">
        {/* Hummingbird animated showcase */}
        <div className="colibri-stage">
          {/* Circular luminous orbits */}
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />

          {/* Floating & Glowing Hummingbird */}
          <div className="colibri-avatar-wrap">
            <img
              src="/favicon/colibri-vuelo.webp"
              alt="Arttmania Colibrí"
              className="colibri-flying-img"
            />
          </div>

          {/* Sparkles / Aura */}
          <div className="colibri-aura" />
        </div>

        {/* Brand Name & Tagline */}
        <div className="loading-brand">
          <h2 className="loading-brand-title">
            ARTT<span className="brand-accent">MANIA</span>
          </h2>
          <p className="loading-brand-tagline">
            Personalizamos tus ideas. Producimos calidad.
          </p>
        </div>

        {/* Sleek Progress Bar */}
        <div className="loading-bar-track">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tech Badges */}
        <div className="loading-badges">
          <span>DTF TEXTIL</span>
          <span className="dot">•</span>
          <span>SUBLIMACIÓN</span>
          <span className="dot">•</span>
          <span>DTF UV</span>
          <span className="dot">•</span>
          <span>LÁSER</span>
        </div>
      </div>
    </div>
  );
};
