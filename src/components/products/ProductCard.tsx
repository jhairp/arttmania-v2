import React, { useState } from 'react';
import { ShoppingBag, Eye, MessageSquare, Check } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { buildDirectProductQuoteUrl } from '../../services/whatsapp';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow } from '../seasonal/GiftBow';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { isChristmas } = useSeasonalTheme();
  const { addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
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

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = buildDirectProductQuoteUrl(product.name, product.minQuantity, product.techniques[0]);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="product-card">
      {isChristmas && <GiftBow size="md" position="top-right" style={{ top: '8px', right: '8px' }} />}

      {/* Product Image Box */}
      <div
        className={`product-image-box ${!imageLoaded ? 'skeleton-loading' : ''}`}
        onClick={() => onOpenDetails(product)}
        role="button"
        tabIndex={0}
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
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails(product);
            }}
          >
            <Eye size={15} />
            <span>Ver Detalles</span>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="product-card-body">
        <span className="product-category-label">{product.categoryName}</span>

        <h3
          className="product-card-title"
          onClick={() => onOpenDetails(product)}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Short description - hidden on mobile via CSS */}
        <p className="product-card-desc">{product.shortDescription}</p>

        {/* Color Swatches - Ocultado temporalmente por solicitud */}
        {/*
        {product.colors && product.colors.length > 0 && (
          <div className="product-swatches" title="Colores disponibles">
            {product.colors.slice(0, 3).map((color, i) => (
              <span
                key={i}
                className="color-dot"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="swatches-more">
                +{product.colors.length - 3}
              </span>
            )}
          </div>
        )}
        */}

        {/* Price & Availability */}
        <div className="product-price-row">
          <div className="product-price-group">
            <span className="product-price-amount">{product.price} Bs.</span>
            <span className="product-price-unit">/ {product.unit}</span>
          </div>

          <div className="product-stock-status">
            <Check size={12} strokeWidth={2.5} />
            <span>{product.inStock ? 'Disponible' : 'Bajo Pedido'}</span>
          </div>
        </div>

        {/* Actions Grid */}
        <div className="product-actions-grid">
          <button
            type="button"
            className={`btn-product-add ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
            aria-label={`Añadir ${product.name} al carrito`}
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
            className="btn-product-quote"
            onClick={handleQuoteClick}
            aria-label={`Cotizar ${product.name} por WhatsApp`}
            title="Consultar por WhatsApp"
          >
            <MessageSquare size={15} strokeWidth={1.8} />
            <span className="btn-label">Cotizar</span>
          </button>
        </div>
      </div>
    </article>
  );
};
