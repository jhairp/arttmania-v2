import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, PackageOpen, X, ChevronDown, Check } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { CATEGORIES } from '../../data/categories';
import { ProductCard } from '../../components/products/ProductCard';
import { ProductDetailModal } from '../../components/products/ProductDetailModal';
import './Products.css';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Progressive pagination: 8 for mobile, 12 for desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const PAGE_SIZE = isMobile ? 8 : 12;
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  // Reset pagination when category, search, or sort changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [selectedCategory, searchQuery, sortBy]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.techniques.some((t) => t.toLowerCase().includes(q)) ||
        product.categoryName.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const remainingCount = filteredProducts.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('featured');
    setMobileFiltersOpen(false);
  };

  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0) +
    (sortBy !== 'featured' ? 1 : 0);

  return (
    <section id="productos" className="section-padding catalog-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Tienda de Productos</span>
          </div>
          <h2 className="section-title">
            Catálogo Oficial de <span className="text-metallic">Personalización</span>
          </h2>
          <p className="section-description">
            Artículos textiles, sublimación, merchandising corporativo y regalos
            con precios en Bolivianos (Bs.) y descuentos por volumen.
          </p>
        </div>

        {/* Sticky Toolbar: Search, Filters & Categories */}
        <div className="catalog-toolbar-sticky">
          <div className="catalog-search-row">
            {/* Search Input Box */}
            <div className="search-input-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar por producto, técnica o material..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Buscar productos"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Borrar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Desktop Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="catalog-sort-select desktop-only"
              aria-label="Ordenar productos"
            >
              <option value="featured">Destacados y Más Vendidos</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="rating">Mejor Calificación</option>
            </select>

            {/* Mobile Filter & Sort Button Trigger */}
            <button
              type="button"
              className={`mobile-filter-trigger ${activeFiltersCount > 0 ? 'has-active' : ''}`}
              onClick={() => setMobileFiltersOpen(true)}
              aria-label="Abrir filtros y ordenamiento"
            >
              <SlidersHorizontal size={18} />
              {activeFiltersCount > 0 && (
                <span className="filter-badge-dot" />
              )}
            </button>
          </div>

          {/* Horizontal Scrollable Categories */}
          <div className="category-tabs-container">
            <div className="category-tabs-row" role="tablist" aria-label="Filtrar por categoría">
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'all'}
                className={`cat-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                <span>Todos</span>
                <span className="cat-count">({PRODUCTS.length})</span>
              </button>
              {CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat.slug}
                    className={`cat-tab-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.slug)}
                  >
                    <span>{cat.name}</span>
                    <span className="cat-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Count & Active Filter Indicator */}
        <div className="catalog-status-bar">
          <span className="catalog-status-text">
            Mostrando {Math.min(visibleProducts.length, filteredProducts.length)} de {filteredProducts.length} productos
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="catalog-clear-link"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* 2-Column Mobile & Multi-Column Desktop Grid */}
        <div className="catalog-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProduct(p)}
            />
          ))}

          {filteredProducts.length === 0 && (
            <div className="no-results-box">
              <PackageOpen size={44} color="#8E9297" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.4rem', color: '#F1F1F1' }}>
                No encontramos productos que coincidan
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.88rem' }}>
                Prueba con otro término de búsqueda o selecciona otra categoría.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleResetFilters}
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>

        {/* Progressive Pagination Load More Button */}
        {remainingCount > 0 && (
          <div className="catalog-load-more-row">
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
      </div>

      {/* Mobile Filter & Sort Bottom Sheet */}
      {mobileFiltersOpen && (
        <div
          className="mobile-filters-backdrop"
          onClick={() => setMobileFiltersOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Filtros y ordenamiento"
        >
          <div
            className="mobile-filters-sheet"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sheet-header">
              <div className="sheet-handle" />
              <div className="sheet-title-row">
                <h3 className="sheet-title">Filtros y Ordenamiento</h3>
                <button
                  type="button"
                  className="sheet-close-btn"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Cerrar filtros"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="sheet-body">
              {/* Sort By Section */}
              <div className="sheet-section">
                <label className="sheet-label">Ordenar por:</label>
                <div className="sheet-options-list">
                  {[
                    { id: 'featured', label: 'Destacados y Más Vendidos' },
                    { id: 'price-asc', label: 'Precio: Menor a Mayor' },
                    { id: 'price-desc', label: 'Precio: Mayor a Menor' },
                    { id: 'rating', label: 'Mejor Calificación' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`sheet-option-item ${sortBy === opt.id ? 'active' : ''}`}
                      onClick={() => setSortBy(opt.id)}
                    >
                      <span>{opt.label}</span>
                      {sortBy === opt.id && <Check size={16} className="text-accent" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Category Section */}
              <div className="sheet-section">
                <label className="sheet-label">Categoría:</label>
                <div className="sheet-chips-grid">
                  <button
                    type="button"
                    className={`sheet-chip ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    Todos ({PRODUCTS.length})
                  </button>
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`sheet-chip ${selectedCategory === c.slug ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(c.slug)}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sheet-footer">
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleResetFilters}
                style={{ flex: 1 }}
              >
                Restablecer
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setMobileFiltersOpen(false)}
                style={{ flex: 1.5 }}
              >
                Ver {filteredProducts.length} Productos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
