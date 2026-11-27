import React, { useState } from 'react';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow } from '../seasonal/GiftBow';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { isChristmas } = useSeasonalTheme();
  const { addItem, setIsCartOpen } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      product: product,
      quantity: product.minQuantity || 1,
      selectedColor: product.colors[0]?.name,
      selectedSize: product.sizes[0],
      selectedTechnique: product.techniques[0],
      unitPrice: product.price
    });
    setIsCartOpen(true);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenDetails(product);
  };

  return (
    <article className="product-card">
      {isChristmas && <GiftBow size="md" position="top-right" style={{ top: '8px', right: '8px', zIndex: 3 }} />}

      {/* 1. Foto del Producto (al tocar abre modal de detalle) */}
      <div
        className={`product-image-box ${!imageLoaded ? 'skeleton-loading' : ''}`}
        onClick={() => onOpenDetails(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(product);
          }
        }}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`product-image ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {product.badge && (
          <div className="product-badge-pill">
            <span>{product.badge}</span>
          </div>
        )}

        <div className="product-quick-view-overlay">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleDetailsClick}
          >
            <Eye size={15} />
            <span>Ver Detalles</span>
          </button>
        </div>
      </div>

      {/* Cuerpo minimalista: Tipo de trabajo, Precio, botón Comprar + Ver Detalles */}
      <div className="product-card-body">
        {/* 2. Tipo de trabajo (Técnica) */}
        <div className="product-techniques-list">
          <span className="product-tech-tag">
            {product.techniques[0] || product.categoryName}
          </span>
        </div>

        {/* 3. Precio */}
        <div className="product-price-row">
          <div className="product-price-group">
            <span className="product-price-amount">Bs. {product.price}</span>
          </div>
        </div>

        {/* 4. Botón Comprar (principal) + Botón Ver Detalles (un poco más pequeño) */}
        <div className="product-actions-grid">
          <button
            type="button"
            className={`btn-product-add ${isAdded ? 'added' : ''}`}
            onClick={handleBuyClick}
            aria-label={`Comprar ${product.name}`}
          >
            {isAdded ? (
              <>
                <Check size={15} strokeWidth={2.2} />
                <span className="btn-label">¡Listo!</span>
              </>
            ) : (
              <>
                <ShoppingBag size={15} strokeWidth={1.8} />
                <span className="btn-label">Comprar</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="btn-product-details-sm"
            onClick={handleDetailsClick}
            aria-label={`Ver detalles de ${product.name}`}
            title="Ver detalles del producto"
          >
            <Eye size={14} strokeWidth={1.8} />
            <span className="btn-label">Ver Detalles</span>
          </button>
        </div>
      </div>
    </article>
  );
};
