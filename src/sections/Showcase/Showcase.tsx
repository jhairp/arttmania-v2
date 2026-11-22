import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductDetailModal } from '../../components/products/ProductDetailModal';
import './Showcase.css';

const accentOf = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.accentColor ?? '#0759E8';

interface RowProps {
  title: string;
  kicker: string;
  items: Product[];
  reverse?: boolean;
  onOpen: (p: Product) => void;
}

const MarqueeRow: React.FC<RowProps> = ({ title, kicker, items, reverse, onOpen }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const dragDistance = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Cuadruplicamos los ítems para garantizar un ciclo infinito continuo y fluido en ambas direcciones
  const loop = useMemo(() => [...items, ...items, ...items, ...items], [items]);

  // Centramos la posición inicial en el conjunto central para permitir arrastre infinito en ambas direcciones
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;
    const singleSetWidth = trackRef.current.scrollWidth / 4;
    if (singleSetWidth > 0) {
      containerRef.current.scrollLeft = reverse ? singleSetWidth * 2 : singleSetWidth;
    }
  }, [items, reverse]);

  useEffect(() => {
    let animId: number;
    // Velocidad constante en px/seg (positiva hacia la izquierda, negativa hacia la derecha)
    // No se detiene con mouse encima ni en celulares
    const speed = reverse ? -42 : 42;

    const tick = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const container = containerRef.current;
      const track = trackRef.current;

      if (container && track && !isDragging.current) {
        const safeDt = Math.min(dt, 0.1);
        container.scrollLeft += speed * safeDt;

        const singleSetWidth = track.scrollWidth / 4;
        if (singleSetWidth > 50) {
          if (container.scrollLeft >= singleSetWidth * 2.5) {
            container.scrollLeft -= singleSetWidth;
          } else if (container.scrollLeft <= singleSetWidth * 0.5) {
            container.scrollLeft += singleSetWidth;
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    lastTimeRef.current = performance.now();
    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, [reverse]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    isDragging.current = true;
    startX.current = e.clientX;
    dragDistance.current = 0;
    if (containerRef.current) {
      startScrollLeft.current = containerRef.current.scrollLeft;
      containerRef.current.classList.add('is-dragging');
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current || !trackRef.current) return;
    const deltaX = e.clientX - startX.current;
    dragDistance.current = Math.abs(deltaX);
    containerRef.current.scrollLeft = startScrollLeft.current - deltaX;

    const singleSetWidth = trackRef.current.scrollWidth / 4;
    if (singleSetWidth > 50) {
      if (containerRef.current.scrollLeft >= singleSetWidth * 2.5) {
        containerRef.current.scrollLeft -= singleSetWidth;
        startScrollLeft.current -= singleSetWidth;
      } else if (containerRef.current.scrollLeft <= singleSetWidth * 0.5) {
        containerRef.current.scrollLeft += singleSetWidth;
        startScrollLeft.current += singleSetWidth;
      }
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    lastTimeRef.current = performance.now();
    if (containerRef.current) {
      containerRef.current.classList.remove('is-dragging');
    }
  };

  const handleCardClick = (p: Product) => {
    // Si fue arrastre (movimiento > 6px), ignorar el clic para no abrir el modal involuntariamente
    if (dragDistance.current > 6) return;
    onOpen(p);
  };

  return (
    <div className="showcase-row">
      <div className="container showcase-row-head">
        <div>
          <span className="showcase-kicker">{kicker}</span>
          <h3>{title}</h3>
        </div>
        <a href="#/catalogo?col=normal" className="btn btn-secondary showcase-more">
          <span>Ver catálogo</span><ArrowRight size={16} />
        </a>
      </div>
      <div
        ref={containerRef}
        className="marquee"
        aria-label={title}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div ref={trackRef} className="marquee-track">
          {loop.map((p, i) => (
            <button
              type="button"
              key={`${p.id}-${i}`}
              className="showcase-card"
              style={{ ['--accent' as string]: accentOf(p.category) }}
              onClick={() => handleCardClick(p)}
              aria-hidden={i >= items.length}
              tabIndex={i < items.length ? 0 : -1}
            >
              <span className="showcase-img">
                <img src={p.image} alt={p.name} loading="lazy" draggable={false} />
                {p.badge && <em className="showcase-badge">{p.badge}</em>}
              </span>
              <span className="showcase-info">
                <span className="showcase-cat">{p.categoryName}</span>
                <strong>{p.name}</strong>
                <span className="showcase-price">Bs. {p.price}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Showcase: React.FC = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const best = useMemo(() => PRODUCTS.filter((p) => p.featured).slice(0, 10), []);
  const gifts = useMemo(
    () => PRODUCTS.filter((p) => p.category === 'regalos' || p.category === 'sublimacion').slice(0, 10),
    []
  );

  return (
    <section id="destacados" className="showcase-section">
      <MarqueeRow kicker="Lo que más se pide" title="Los favoritos de nuestros clientes" items={best} onOpen={setSelected} />
      <MarqueeRow kicker="Ideas para regalar" title="Personalizados que sorprenden" items={gifts} reverse onOpen={setSelected} />
      {selected && <ProductDetailModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};
