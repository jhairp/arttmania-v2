import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);
  const n = SLIDES.length;

  // Movimiento automático continuo (no se detiene al pasar el mouse por encima ni en celulares)
  // Solo se suspende temporalmente en los milisegundos en que el usuario mantiene presionado y arrastra
  useEffect(() => {
    if (isDragging) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, 3800);
    return () => clearInterval(t);
  }, [isDragging, index, n]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    setIsDragging(true);
    startX.current = e.clientX;
    dragDistance.current = 0;
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    dragDistance.current = Math.abs(delta);
    setDragOffset(delta);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);

    if (dragOffset < -40) {
      // Deslizar a la izquierda -> siguiente polera
      setIndex((i) => (i + 1) % n);
    } else if (dragOffset > 40) {
      // Deslizar a la derecha -> polera anterior
      setIndex((i) => (i - 1 + n) % n);
    }
    setDragOffset(0);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleSlideClick = (e: React.MouseEvent) => {
    // Si fue arrastre/swipe (> 8px), ignorar el clic de redirección
    if (dragDistance.current > 8) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onOpenCollection('navidad');
  };

  const prevSlide = () => setIndex((i) => (i - 1 + n) % n);
  const nextSlide = () => setIndex((i) => (i + 1) % n);

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

        <div className="xmas-carousel">
          <div className="xmas-halo" aria-hidden="true" />
          <div
            className={`xmas-stage ${isDragging ? 'is-dragging' : ''}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {SLIDES.map((s, i) => {
              const offset = (i - index + n) % n;
              const state = offset === 0 ? 'is-active' : offset === n - 1 ? 'is-prev' : '';

              let style: React.CSSProperties | undefined = undefined;
              if (isDragging && dragOffset !== 0) {
                if (offset === 0) {
                  style = { transform: `translateX(${dragOffset}px)`, transition: 'none' };
                } else if (offset === 1 && dragOffset < 0) {
                  style = {
                    transform: `translateX(calc(75% + ${dragOffset}px))`,
                    opacity: Math.min(1, Math.abs(dragOffset) / 120),
                    transition: 'none'
                  };
                } else if (offset === n - 1 && dragOffset > 0) {
                  style = {
                    transform: `translateX(calc(-75% + ${dragOffset}px))`,
                    opacity: Math.min(1, Math.abs(dragOffset) / 120),
                    transition: 'none'
                  };
                }
              }

              return (
                <button
                  key={s.img}
                  type="button"
                  className={`xmas-slide ${state}`}
                  style={style}
                  onClick={handleSlideClick}
                  aria-hidden={offset !== 0}
                  tabIndex={offset === 0 ? 0 : -1}
                  aria-label={`${s.name}: ver catálogo navideño`}
                >
                  <img
                    src={`/images/hero-carousel/${s.img}.webp`}
                    alt={s.name}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </button>
              );
            })}

            <button
              type="button"
              className="xmas-arrow xmas-arrow--prev"
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              aria-label="Polera anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="xmas-arrow xmas-arrow--next"
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              aria-label="Siguiente polera"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="xmas-caption">
            <strong key={index}>{SLIDES[index].name}</strong>
            <span>Toca o arrastra la polera para ver la colección</span>
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
