import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ShoppingBag, MessageSquare, Plus, Minus, Sparkles } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { calculateDiscountedPrice } from '../../data/promotions';
import { buildDirectProductQuoteUrl } from '../../services/whatsapp';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow } from '../seasonal/GiftBow';
import './ProductDetailModal.css';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { isChristmas } = useSeasonalTheme();
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedTechnique, setSelectedTechnique] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Sincronizar estado cuando se abre un nuevo producto
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.sizes[0] || '');
      setSelectedTechnique(product.techniques[0] || '');
      setQuantity(product.minQuantity || 1);

      // Bloquear scroll del fondo para que el modal quede estático y centrado
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [product]);

  if (!product) return null;

  const pricing = calculateDiscountedPrice(product.price, quantity);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      product: product,
      quantity,
      selectedColor,
      selectedSize,
      selectedTechnique,
      unitPrice: pricing.unitPrice
    });
    onClose();
  };

  const handleWhatsAppQuote = () => {
    const quoteNote = `Talla/Medida: ${selectedSize}, Técnica: ${selectedTechnique}${selectedColor ? `, Color: ${selectedColor}` : ''}`;
    const url = buildDirectProductQuoteUrl(product.name, quantity, `${selectedTechnique} (${quoteNote})`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const modalNode = (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        {/* Moño navideño formal */}
        {isChristmas && <GiftBow size="lg" position="top-left" style={{ top: '12px', left: '16px' }} />}

        {/* Mobile handle indicator */}
        <div className="modal-mobile-handle" />

        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          <X size={20} />
        </button>

        <div className="modal-scrollable-body">
          <div className="modal-grid">
            {/* Gallery Column: Escenario de estudio fotográfico con halo y sombra */}
            <div className="modal-gallery-box">
              <div className="modal-gallery-halo" aria-hidden="true" />
              <img
                src={product.image}
                alt={product.name}
                className="modal-main-img"
              />
              <div className="modal-gallery-badge">
                <Sparkles size={12} color="#F5B800" />
                <span>Acabado Profesional</span>
              </div>
            </div>

            {/* Info & Configurations Column */}
            <div className="modal-info-col">
              <span className="product-category-label">{product.categoryName}</span>
              <h2 className="modal-product-title">{product.name}</h2>
              <p className="modal-product-desc">
                {product.fullDescription}
              </p>

              {/* Price Box with volume discount indication */}
              <div className="modal-price-box">
                <div>
                  <span className="modal-price-val">{pricing.unitPrice} Bs.</span>
                  <span className="product-price-unit">/ {product.unit}</span>
                  {pricing.discountPercent > 0 && (
                    <span className="modal-discount-tag">
                      ¡{pricing.discountPercent}% descuento! (Ahorras {pricing.savings} Bs.)
                    </span>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                    Total Estimado:
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F1F1F1' }}>
                    {pricing.total} Bs.
                  </span>
                </div>
              </div>

              {/* Color Selection - Ocultado temporalmente por solicitud del usuario */}
              {/*
              {product.colors && product.colors.length > 0 && (
                <div className="modal-config-group">
                  <div className="modal-section-label">Color: <span style={{ color: '#F1F1F1' }}>{selectedColor}</span></div>
                  <div className="modal-options-row">
                    {product.colors.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`modal-option-btn ${selectedColor === c.name ? 'selected' : ''}`}
                        onClick={() => setSelectedColor(c.name)}
                      >
                        <span
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: c.hex,
                            display: 'inline-block'
                          }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              */}

              {/* Size / Dimension Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="modal-config-group">
                  <div className="modal-section-label">Talla o Medida:</div>
                  <div className="modal-options-row">
                    {product.sizes.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`modal-option-btn ${selectedSize === s ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technique Selection */}
              {product.techniques && product.techniques.length > 0 && (
                <div className="modal-config-group">
                  <div className="modal-section-label">Técnica de Personalización:</div>
                  <div className="modal-options-row">
                    {product.techniques.map((t, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`modal-option-btn ${selectedTechnique === t ? 'selected' : ''}`}
                        onClick={() => setSelectedTechnique(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="modal-config-group">
                <div className="modal-section-label">
                  Cantidad (Mínimo {product.minQuantity}):
                </div>
                <div className="modal-qty-control">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(product.minQuantity || 1, quantity - 1))}
                    aria-label="Disminuir cantidad"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min={product.minQuantity || 1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(product.minQuantity || 1, parseInt(e.target.value) || 1))}
                    className="qty-input"
                    aria-label="Cantidad de productos"
                  />
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Aumentar cantidad"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Actions Bar */}
        <div className="modal-sticky-actions">
          <button
            type="button"
            className="btn btn-primary btn-modal-add"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} />
            <span>Agregar al Carrito ({pricing.total} Bs.)</span>
          </button>

          <button
            type="button"
            className="btn btn-whatsapp btn-modal-quote"
            onClick={handleWhatsAppQuote}
          >
            <MessageSquare size={18} />
            <span>Cotizar WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalNode, document.body)
    : null;
};
