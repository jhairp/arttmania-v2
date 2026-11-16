import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../../data/portfolio';
import { X, MessageSquare } from 'lucide-react';
import { buildDirectProductQuoteUrl } from '../../services/whatsapp';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow } from '../../components/seasonal/GiftBow';
import './Portfolio.css';

export const Portfolio: React.FC = () => {
  const { isChristmas } = useSeasonalTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="portafolio" className="section-padding portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Casos de Éxito & Trabajos Reales</span>
          </div>
          <h2 className="section-title">
            Galería de Proyectos <span className="text-metallic">Ejecutados</span>
          </h2>
          <p className="section-description">
            Explora producciones recientes para marcas de moda, corporaciones multinacionales,
            gastronomía y eventos de gran escala en Bolivia.
          </p>
        </div>

        {/* Filter Tabs (Horizontal Scroll on Mobile) */}
        <div className="portfolio-filter-container">
          <div className="portfolio-filter-row" role="tablist" aria-label="Filtrar proyectos">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              className={`cat-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Todos ({PORTFOLIO_ITEMS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'textiles'}
              className={`cat-tab-btn ${selectedCategory === 'textiles' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('textiles')}
            >
              Textiles & DTF
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'sublimacion'}
              className={`cat-tab-btn ${selectedCategory === 'sublimacion' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('sublimacion')}
            >
              Sublimación & Termos
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'merchandising'}
              className={`cat-tab-btn ${selectedCategory === 'merchandising' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('merchandising')}
            >
              Merchandising B2B
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'regalos'}
              className={`cat-tab-btn ${selectedCategory === 'regalos' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('regalos')}
            >
              Corte Láser & Souvenirs
            </button>
          </div>
        </div>

        {/* Portfolio Grid: 2 Columns on Mobile */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="portfolio-card"
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Ver proyecto ${item.title}`}
            >
              <div className="portfolio-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-badge-pill">{item.technique}</span>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <span className="portfolio-client-tag">{item.clientType}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal / Mobile Bottom Sheet */}
      {activeItem && (
        <div className="lightbox-modal" onClick={() => setActiveItem(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            {/* Moño navideño */}
            {isChristmas && <GiftBow size="lg" position="top-left" style={{ top: '12px', left: '16px' }} />}

            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveItem(null)}
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>

            <div className="lightbox-img-box">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-info">
              <span className="portfolio-badge-pill" style={{ marginBottom: '0.5rem' }}>
                {activeItem.technique}
              </span>
              <h2 className="lightbox-title">
                {activeItem.title}
              </h2>
              <div className="lightbox-client">
                <strong>Cliente / Rubro:</strong> {activeItem.clientType}
              </div>

              <p className="lightbox-desc">
                {activeItem.description}
              </p>

              <div className="lightbox-volume-box">
                <div className="lightbox-volume-label">
                  Volumen Producido:
                </div>
                <div className="lightbox-volume-val">
                  {activeItem.piecesProduced}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary lightbox-cta-btn"
                onClick={() => {
                  const url = buildDirectProductQuoteUrl(activeItem.title, 50, activeItem.technique);
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
              >
                <MessageSquare size={16} />
                <span>Cotizar Proyecto Similar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
