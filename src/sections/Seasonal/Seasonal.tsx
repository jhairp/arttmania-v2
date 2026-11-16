import React, { useState, useEffect } from 'react';
import {
  Clock,
  ShoppingBag,
  MessageCircle,
  CheckCircle2,
  FileDown,
  Check,
  ChevronDown,
  ChevronUp,
  TreePine,
  Ghost,
  Heart,
  Flower2,
  Flag,
  Sparkles,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Product } from '../../data/products';
import { ProductDetailModal } from '../../components/products/ProductDetailModal';
import {
  SEASONS,
  SEASONAL_ITEMS,
  SeasonCategory,
  SeasonalItem,
  seasonalItemToProduct,
  buildSeasonalWhatsAppUrl,
  buildSeasonalCatalogPdfUrl
} from '../../data/seasonal';
import { useCart } from '../../context/CartContext';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { ChristmasTreeIcon, ChristmasSparkleIcon } from '../../components/seasonal/ChristmasSVGs';
import { GiftBow } from '../../components/seasonal/GiftBow';
import './Seasonal.css';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

// Icon mapping per season
const SEASON_ICONS: Record<SeasonCategory['iconName'], React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  TreePine,
  Ghost,
  Heart,
  Flower2,
  Flag
};

export const Seasonal: React.FC<{ seasonId?: SeasonCategory['id']; hideTabs?: boolean }> = ({ seasonId, hideTabs }) => {
  const { isChristmas, config } = useSeasonalTheme();
  const [activeSeasonId, setActiveSeasonId] = useState<SeasonCategory['id']>(seasonId ?? 'navidad');
  useEffect(() => { if (seasonId) setActiveSeasonId(seasonId); }, [seasonId]);
  const [xmasCategoryFilter, setXmasCategoryFilter] = useState<'all' | 'destacados' | 'divertida' | 'elegante' | 'urbana' | 'packs'>('all');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [addedItems, setAddedItems] = useState<{ [id: string]: boolean }>({});
  const [expandedIncludes, setExpandedIncludes] = useState<{ [id: string]: boolean }>({});
  const { addItem } = useCart();

  const currentSeason = SEASONS.find((s) => s.id === activeSeasonId) || SEASONS[0];

  const itemsInActiveSeason = SEASONAL_ITEMS.filter((item) => {
    if (item.seasonId !== activeSeasonId) return false;
    if (activeSeasonId === 'navidad') {
      if (xmasCategoryFilter === 'destacados') {
        return item.id.includes('mockup') || !!item.featured;
      }
      if (xmasCategoryFilter === 'divertida') {
        return /modelo-n(0[1-9]|10)/.test(item.id);
      }
      if (xmasCategoryFilter === 'elegante') {
        return /modelo-n(1[1-9]|20)/.test(item.id) || item.id === 'navidad-mockup-arbol-dorado' || item.id === 'navidad-mockup-nacimiento-sagrado';
      }
      if (xmasCategoryFilter === 'urbana') {
        return /modelo-n(2[1-9]|30)/.test(item.id);
      }
      if (xmasCategoryFilter === 'packs') {
        return item.id.includes('pack') || item.id.includes('combo') || item.id.includes('mickey') || item.id.includes('familia') || item.id.includes('set') || item.id === 'navidad-modelo-n18';
      }
    }
    return true;
  });

  // Live Countdown logic
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(currentSeason.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds, isExpired: false });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [currentSeason]);

  const toggleIncludes = (itemId: string) => {
    setExpandedIncludes((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleAddToCart = (item: SeasonalItem) => {
    const product = seasonalItemToProduct(item);
    addItem({
      productId: product.id,
      product: product,
      quantity: 1,
      selectedColor: 'Edición Temporada',
      selectedSize: 'Estándar',
      selectedTechnique: item.techniques[0],
      unitPrice: item.promoPrice
    });

    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <section
      id="temporadas"
      className="seasonal-section section-padding"
      style={
        {
          '--season-accent': currentSeason.accent,
          '--season-accent-soft': currentSeason.accentSoft,
          '--season-tint': currentSeason.surfaceTint,
          '--season-gradient': currentSeason.gradient
        } as React.CSSProperties
      }
    >
      {/* Dynamic ambient glow behind section */}
      <div className="seasonal-glow" aria-hidden="true" />

      {/* Subtle geometric pattern overlay */}
      <div className="seasonal-pattern-bg" aria-hidden="true" />

      <div className="container seasonal-container">
        {/* Section Header */}
        <div className="section-header">
          {isChristmas && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4AF37', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <ChristmasSparkleIcon size={14} color="#D4AF37" />
              <span>{config.texts.greeting}</span>
              <ChristmasSparkleIcon size={14} color="#D4AF37" />
            </div>
          )}
          <div className="section-tag seasonal-tag">
            <span className="dot" />
            <span>Edición Limitada & Campañas</span>
          </div>
          <h2 className="section-title">
            Ofertas por <span className="seasonal-text-highlight">Temporada</span>
          </h2>
          <p className="section-description seasonal-header-desc">
            Colecciones temáticas y packs con precio promocional por fechas clave.
            Producción en serie con cupos limitados y acabados certificados.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="season-tabs-wrapper" style={hideTabs ? { display: 'none' } : undefined}>
          <div className="season-tabs-row" role="tablist" aria-label="Seleccionar temporada">
            {SEASONS.map((season) => {
              const isActive = season.id === activeSeasonId;
              const SeasonIcon = SEASON_ICONS[season.iconName];
              return (
                <button
                  key={season.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`season-panel-${season.id}`}
                  className={`season-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveSeasonId(season.id)}
                >
                  <SeasonIcon size={18} strokeWidth={1.8} className="season-tab-icon" />
                  <span className="season-tab-label">{season.shortName}</span>
                  {isActive && <span className="season-tab-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Countdown Banner */}
        <div className="seasonal-countdown-banner" role="region" aria-label="Cuenta regresiva de la campaña">
          <div className="countdown-info">
            <div className="countdown-badge">
              <Clock size={14} strokeWidth={2} />
              <span>{currentSeason.badgeText}</span>
            </div>
            <p className="countdown-deadline-text">
              <strong>Cierre de pedidos:</strong> {currentSeason.deadlineLabel.replace('Cierre de pedidos ', '')}
            </p>
          </div>

          {countdown.isExpired ? (
            <div className="countdown-expired-state">
              <span className="countdown-expired-tag">Campaña finalizada</span>
            </div>
          ) : (
            <div className="countdown-right-group">
              <div className="countdown-timer-group" aria-label="Tiempo restante">
                <div className="countdown-box">
                  <span className="countdown-num">{String(countdown.days).padStart(2, '0')}</span>
                  <span className="countdown-unit">Días</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-box">
                  <span className="countdown-num">{String(countdown.hours).padStart(2, '0')}</span>
                  <span className="countdown-unit">Hrs</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-box">
                  <span className="countdown-num">{String(countdown.minutes).padStart(2, '0')}</span>
                  <span className="countdown-unit">Min</span>
                </div>
                <span className="countdown-colon">:</span>
                <div className="countdown-box">
                  <span className="countdown-num">{String(countdown.seconds).padStart(2, '0')}</span>
                  <span className="countdown-unit">Seg</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sub-filtro de Colección Navideña 2026 */}
        {activeSeasonId === 'navidad' && (
          <div className="xmas-filter-bar" role="tablist" aria-label="Filtrar colección navideña">
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('all')}
            >
              Todos los Modelos ({SEASONAL_ITEMS.filter((i) => i.seasonId === 'navidad').length})
            </button>
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'destacados' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('destacados')}
            >
              ★ Mockups & Destacados
            </button>
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'divertida' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('divertida')}
            >
              Navidad Divertida (N01–N10)
            </button>
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'elegante' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('elegante')}
            >
              Navidad Elegante (N11–N20)
            </button>
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'urbana' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('urbana')}
            >
              Navidad Urbana (N21–N30)
            </button>
            <button
              type="button"
              className={`xmas-pill-btn ${xmasCategoryFilter === 'packs' ? 'active' : ''}`}
              onClick={() => setXmasCategoryFilter('packs')}
            >
              Packs & Parejas
            </button>
          </div>
        )}

        {/* Cards Grid / Carousel */}
        <div
          id={`season-panel-${currentSeason.id}`}
          role="tabpanel"
          className="seasonal-cards-grid"
          key={activeSeasonId}
        >
          {itemsInActiveSeason.map((item, index) => {
            const savings = item.originalPrice - item.promoPrice;
            const discountPercent = Math.round((savings / item.originalPrice) * 100);
            const isAdded = addedItems[item.id];

            return (
              <article
                key={item.id}
                className={`seasonal-card ${item.featured ? 'featured-card' : ''}`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Moño navideño sutil */}
                {isChristmas && <GiftBow size="md" position="top-right" style={{ top: '8px', right: '8px', zIndex: 3 }} />}

                {/* Image Box Grande & Protagónica */}
                <div
                  className="seasonal-card-image-wrapper"
                  onClick={() => setDetailProduct(seasonalItemToProduct(item))}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalles de ${item.name}`}
                >
                  <span className="seasonal-badge-pill">{item.badge}</span>
                  {savings > 0 && (
                    <span className="seasonal-savings-pill">
                      -{discountPercent}%
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="seasonal-card-img"
                    loading="lazy"
                  />
                  <div className="seasonal-card-image-overlay">
                    <button
                      type="button"
                      className="btn-quick-view"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDetailProduct(seasonalItemToProduct(item));
                      }}
                    >
                      <Eye size={15} />
                      <span>Ver Detalles</span>
                    </button>
                  </div>
                </div>

                {/* Contenido Limpio: Técnica, Nombre, Precio y Botón Detalles */}
                <div className="seasonal-card-content">
                  {/* Técnica de Personalización */}
                  <div className="seasonal-techniques-list">
                    <span className="seasonal-tech-tag">
                      {item.techniques[0]}
                    </span>
                  </div>

                  {/* Nombre */}
                  <h3
                    className="seasonal-card-title"
                    onClick={() => setDetailProduct(seasonalItemToProduct(item))}
                    title={item.name}
                  >
                    {item.name}
                  </h3>

                  {/* Pricing */}
                  <div className="seasonal-price-row">
                    <div className="seasonal-price-main">
                      <span className="seasonal-promo-price">Bs. {item.promoPrice}</span>
                      {savings > 0 && (
                        <span className="seasonal-original-price">Bs. {item.originalPrice}</span>
                      )}
                    </div>
                    <span className="seasonal-unit-label">por menor / mayor</span>
                  </div>

                  {/* Actions: Botón Ver Detalles y Compra Rápida */}
                  <div className="seasonal-actions-grid">
                    <button
                      type="button"
                      className="btn-seasonal-details"
                      onClick={() => setDetailProduct(seasonalItemToProduct(item))}
                    >
                      <Eye size={15} />
                      <span>Ver Detalles</span>
                    </button>

                    <button
                      type="button"
                      className={`btn-seasonal-cart-quick ${isAdded ? 'added' : ''}`}
                      onClick={() => handleAddToCart(item)}
                      aria-label={`Añadir ${item.name} al carrito`}
                      title="Añadir al carrito"
                    >
                      {isAdded ? (
                        <Check size={16} strokeWidth={2.2} />
                      ) : (
                        <ShoppingBag size={16} strokeWidth={1.8} />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Modal de Detalle Completo para Productos de Temporada */}
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      </div>
    </section>
  );
};
