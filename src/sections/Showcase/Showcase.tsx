import React, { useMemo, useState } from 'react';
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
  // La lista se duplica para que el bucle sea continuo.
  const loop = [...items, ...items];
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
      <div className="marquee" aria-label={title}>
        <div className={`marquee-track ${reverse ? 'reverse' : ''}`} style={{ ['--count' as string]: items.length }}>
          {loop.map((p, i) => (
            <button
              type="button"
              key={`${p.id}-${i}`}
              className="showcase-card"
              style={{ ['--accent' as string]: accentOf(p.category) }}
              onClick={() => onOpen(p)}
              aria-hidden={i >= items.length}
              tabIndex={i >= items.length ? -1 : 0}
            >
              <span className="showcase-img">
                <img src={p.image} alt={p.name} loading="lazy" />
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
