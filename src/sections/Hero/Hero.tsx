import React, { useEffect, useState } from 'react';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { SantaHatIcon } from '../../components/seasonal/ChristmasSVGs';
import './Hero.css';
import './HeroXmas.css';

const SLIDES = [
  { img: 'santa-cool', name: 'Santa Cool' },
  { img: 'grinch', name: 'Modo Grinch Navideño' },
  { img: 'reno-gafas', name: 'Reno con Gafas' },
  { img: 'muneco-negra', name: 'Muñeco de Nieve' },
  { img: 'santa-rockero', name: 'Santa Rockero' },
  { img: 'reno-elegante', name: 'Reno Elegante' },
  { img: 'grinch-verde', name: 'Grinch Verde' },
  { img: 'muneco-roja', name: 'Muñeco de Nieve Festivo' },
  { img: 'reno-verde', name: 'Reno Navideño' }
];

interface HeroProps { onOpenCollection: (col: string) => void; }

export const Hero: React.FC<HeroProps> = ({ onOpenCollection }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 3800);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section id="hero" className="hero-section hero-xmas">
      <div className="xmas-snow xmas-snow--a" aria-hidden="true" />
      <div className="xmas-snow xmas-snow--b" aria-hidden="true" />

      <div className="container xmas-grid">
        <div className="hero-content">
          <div className="hero-badge-container">
            <SantaHatIcon size={18} color="#D4AF37" />
            <span className="hero-badge-text" style={{ color: '#F3E5AB' }}>Edición Especial Fin de Año • 2026</span>
          </div>
          <h1 className="hero-title">
            Personalizamos tus ideas.{' '}
            <span className="text-metallic">Producimos calidad.</span>
          </h1>
          <p className="hero-description">
            Poleras navideñas DTF, sublimación, grabado láser y regalos corporativos
            con garantía de acabado profesional en Bolivia.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary btn-hero-primary" onClick={() => onOpenCollection('navidad')}>
              <span>Catálogo navideño</span><ArrowRight size={16} />
            </button>
            <button type="button" className="btn btn-secondary btn-hero-secondary" onClick={() => onOpenCollection('normal')}>
              <LayoutGrid size={16} /><span>Catálogo general</span>
            </button>
          </div>
        </div>

        <div className="xmas-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="xmas-halo" aria-hidden="true" />
          <div className="xmas-stage">
            {SLIDES.map((s, i) => {
              const offset = (i - index + n) % n;
              const state = offset === 0 ? 'is-active' : offset === n - 1 ? 'is-prev' : '';
              return (
                <button
                  key={s.img}
                  type="button"
                  className={`xmas-slide ${state}`}
                  onClick={() => onOpenCollection('navidad')}
                  aria-hidden={offset !== 0}
                  tabIndex={offset === 0 ? 0 : -1}
                  aria-label={`${s.name}: ver catálogo navideño`}
                >
                  <img src={`/images/hero-carousel/${s.img}.webp`} alt={s.name} loading={i < 2 ? 'eager' : 'lazy'} />
                </button>
              );
            })}
          </div>
          <div className="xmas-caption">
            <strong key={index}>{SLIDES[index].name}</strong>
            <span>Toca la polera para ver la colección</span>
          </div>
          <div className="xmas-dots" role="tablist" aria-label="Poleras">
            {SLIDES.map((s, i) => (
              <button key={s.img} type="button" role="tab" aria-selected={i === index}
                className={i === index ? 'on' : ''} onClick={() => setIndex(i)} aria-label={s.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
