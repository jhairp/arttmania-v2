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
  Award,
  Flower2,
  Coffee,
  Shirt,
  Crown,
  Gift,
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
  Award,
  Flower2,
  Coffee,
  Shirt,
  Crown,
  Gift,
  Flag
};

export const Seasonal: React.FC<{ seasonId?: SeasonCategory['id']; hideTabs?: boolean }> = ({ seasonId, hideTabs }) => {
  const { isChristmas, config } = useSeasonalTheme();
  const [activeSeasonId, setActiveSeasonId] = useState<SeasonCategory['id']>(seasonId ?? 'navidad');
  useEffect(() => { if (seasonId) setActiveSeasonId(seasonId); }, [seasonId]);
  const [xmasCategoryFilter, setXmasCategoryFilter] = useState<'all' | 'destacados' | 'divertida' | 'elegante' | 'urbana' | 'packs'>('all');
  const [halloweenCategoryFilter, setHalloweenCategoryFilter] = useState<'all' | 'destacados' | 'terror' | 'mistico' | 'gamer'>('all');
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [addedItems, setAddedItems] = useState<{ [id: string]: boolean }>({});
  const { addItem, setIsCartOpen } = useCart();

  // Mismo formato de paginación progresiva que el Catálogo Oficial (8 móvil, 12 desktop)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const PAGE_SIZE = isMobile ? 8 : 12;
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeSeasonId, xmasCategoryFilter, halloweenCategoryFilter, PAGE_SIZE]);

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
        return /modelo-n(1[1-8])/.test(item.id) || item.id === 'navidad-mockup-arbol-dorado' || item.id === 'navidad-mockup-nacimiento-sagrado';
      }
      if (xmasCategoryFilter === 'packs') {
        return item.id.includes('pack') || item.id.includes('combo') || item.id.includes('mickey') || item.id.includes('familia') || item.id.includes('set') || item.id === 'navidad-modelo-n18';
      }
    }
    if (activeSeasonId === 'halloween') {
      if (halloweenCategoryFilter === 'destacados') {
        return !!item.featured;
      }
      if (halloweenCategoryFilter === 'terror') {
        return /modelo-h(03|04|05|07|08|09|10|11)$/.test(item.id);
      }
      if (halloweenCategoryFilter === 'mistico') {
        return /modelo-h(01|02|06|13|15)$/.test(item.id);
      }
      if (halloweenCategoryFilter === 'gamer') {
        return /modelo-h(12|14)$/.test(item.id);
      }
    }
    return true;
  });

  const visibleItems = itemsInActiveSeason.slice(0, visibleCount);
  const remainingCount = itemsInActiveSeason.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

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

  const handleAddToCart = (item: SeasonalItem) => {
    const product = seasonalItemToProduct(item);
    addItem({
      productId: product.id,
      product: product,
      quantity: product.minQuantity || 1,
      selectedColor: product.colors[0]?.name || 'Edición Temporada',
      selectedSize: product.sizes[0] || 'Estándar',
      selectedTechnique: item.techniques[0],
      unitPrice: item.promoPrice
    });
    setIsCartOpen(true);

    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
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
          {isChristmas && activeSeasonId === 'navidad' && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#D4AF37', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <ChristmasSparkleIcon size={14} color="#D4AF37" />
              <span>{config.texts.greeting}</span>
              <ChristmasSparkleIcon size={14} color="#D4AF37" />
            </div>
          )}
          <div className="section-tag seasonal-tag">
            <span className="dot" />
            <span>{currentSeason.badgeText}</span>
          </div>
          <h2 className="section-title">
            Catálogo <span className="seasonal-text-highlight">{currentSeason.shortName}</span>
          </h2>
          <p className="section-description seasonal-header-desc">
            {currentSeason.description}
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

        {/* Countdown Banner (Solo para temporadas con fecha específica; oculto en las últimas 5 colecciones) */}
        {currentSeason.hasCountdown !== false && (
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
        )}

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
              Navidad Elegante (N11–N18)
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

        {/* Sub-filtro de Colección Halloween · Umbría de Arttmania */}
        {activeSeasonId === 'halloween' && (
          <div className="xmas-filter-bar halloween-filter-bar" role="tablist" aria-label="Filtrar colección de Halloween">
            <button
              type="button"
              className={`xmas-pill-btn halloween-pill-btn ${halloweenCategoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setHalloweenCategoryFilter('all')}
            >
              Todos los Modelos ({SEASONAL_ITEMS.filter((i) => i.seasonId === 'halloween').length})
            </button>
            <button
              type="button"
              className={`xmas-pill-btn halloween-pill-btn ${halloweenCategoryFilter === 'destacados' ? 'active' : ''}`}
              onClick={() => setHalloweenCategoryFilter('destacados')}
            >
              ★ Destacados Umbría
            </button>
            <button
              type="button"
              className={`xmas-pill-btn halloween-pill-btn ${halloweenCategoryFilter === 'terror' ? 'active' : ''}`}
              onClick={() => setHalloweenCategoryFilter('terror')}
            >
              Iconos del Terror (Slashers)
            </button>
            <button
              type="button"
              className={`xmas-pill-btn halloween-pill-btn ${halloweenCategoryFilter === 'mistico' ? 'active' : ''}`}
              onClick={() => setHalloweenCategoryFilter('mistico')}
            >
              Oscuridad & Misticismo
            </button>
            <button
              type="button"
              className={`xmas-pill-btn halloween-pill-btn ${halloweenCategoryFilter === 'gamer' ? 'active' : ''}`}
              onClick={() => setHalloweenCategoryFilter('gamer')}
            >
              Gamer & Anime Dark
            </button>
          </div>
        )}

        {/* Cards Grid (mismo tamaño y formato de scroll vertical que Catálogo Oficial) */}
        <div
          id={`season-panel-${currentSeason.id}`}
          role="tabpanel"
          className="seasonal-cards-grid"
          key={activeSeasonId}
        >
          {visibleItems.map((item, index) => {
            const savings = item.originalPrice - item.promoPrice;
            const discountPercent = Math.round((savings / item.originalPrice) * 100);
            const isAdded = addedItems[item.id];

            return (
              <article
                key={item.id}
                className="seasonal-card"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {/* Moño navideño sutil */}
                {isChristmas && activeSeasonId === 'navidad' && (
                  <GiftBow size="md" position="top-right" style={{ top: '8px', right: '8px', zIndex: 3 }} />
                )}

                {/* 1. Foto del Producto (al tocar abre modal de detalle) */}
                <div
                  className="seasonal-card-image-wrapper"
                  onClick={() => setDetailProduct(seasonalItemToProduct(item))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setDetailProduct(seasonalItemToProduct(item));
                    }
                  }}
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

                {/* Cuerpo minimalista: Tipo de trabajo, Precio, botón Comprar + Ver Detalles */}
                <div className="seasonal-card-content">
                  {/* 2. Tipo de trabajo (Técnica) */}
                  <div className="seasonal-techniques-list">
                    <span className="seasonal-tech-tag">
                      {item.techniques[0]}
                    </span>
                  </div>

                  {/* 3. Precio */}
                  <div className="seasonal-price-row">
                    <div className="seasonal-price-main">
                      <span className="seasonal-promo-price">Bs. {item.promoPrice}</span>
                      {savings > 0 && (
                        <span className="seasonal-original-price">Bs. {item.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* 4. Botón Comprar (principal) + Botón Ver Detalles (un poco más pequeño) */}
                  <div className="seasonal-actions-row-dual">
                    <button
                      type="button"
                      className={`btn-seasonal-buy ${isAdded ? 'added' : ''}`}
                      onClick={() => handleAddToCart(item)}
                      aria-label={`Comprar ${item.name}`}
                    >
                      {isAdded ? (
                        <>
                          <Check size={15} strokeWidth={2.2} />
                          <span>¡Listo!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} strokeWidth={1.8} />
                          <span>Comprar</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      className="btn-seasonal-details-sm"
                      onClick={() => setDetailProduct(seasonalItemToProduct(item))}
                      aria-label={`Ver detalles de ${item.name}`}
                      title="Ver detalles del producto"
                    >
                      <Eye size={14} strokeWidth={1.8} />
                      <span>Ver Detalles</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Botón de paginación progresiva igual al Catálogo Oficial */}
        {remainingCount > 0 && (
          <div className="catalog-load-more-row" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '2.5rem' }}>
            <button
              type="button"
              className="btn btn-secondary btn-load-more"
              onClick={handleLoadMore}
            >
              <span>Ver más productos ({remainingCount} restantes)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}

        {/* Modal de Detalle Completo para Productos de Temporada */}
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      </div>
    </section>
  );
};
