import React, { useState } from 'react';
import {
  ShoppingBag,
  X,
  Trash2,
  Plus,
  Minus,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { buildWhatsAppQuoteUrl } from '../../services/whatsapp';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow } from '../seasonal/GiftBow';
import './CartDrawer.css';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [showCustomerFields, setShowCustomerFields] = useState(true);
  const [nameError, setNameError] = useState('');
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const { isChristmas } = useSeasonalTheme();

  const handleSendWhatsAppQuote = () => {
    if (items.length === 0) return;

    const trimmedName = customerName.trim();
    if (trimmedName.length < 2) {
      setShowCustomerFields(true);
      setNameError('Por favor, ingresa tu nombre (obligatorio) para enviar el pedido.');
      setTimeout(() => nameInputRef.current?.focus(), 60);
      return;
    }

    setNameError('');

    const url = buildWhatsAppQuoteUrl({
      items: items.map((i) => ({
        name: i.product.name,
        quantity: i.quantity,
        price: i.unitPrice,
        color: i.selectedColor,
        size: i.selectedSize,
        technique: i.selectedTechnique,
        customText: i.customText,
        customNote: i.customDesignPreview ? 'Adjunta archivo gráfico en el chat' : undefined
      })),
      total: cartTotal,
      customerName: trimmedName,
      customerCity: customerCity.trim() || undefined,
      notes: customerNotes.trim() || undefined
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`cart-backdrop ${isCartOpen ? 'open' : ''}`}
      onClick={() => setIsCartOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Carrito de cotizaciones"
    >
      <div
        className="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">
            {isChristmas && (
              <GiftBow
                size="sm"
                position="top-left"
                style={{ position: 'relative', top: 'auto', left: 'auto', display: 'inline-flex' }}
              />
            )}
            <ShoppingBag size={18} />
            <span>Cotización ({cartCount})</span>
          </div>

          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Cerrar carrito"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="cart-empty-view">
            <ShoppingBag size={48} color="#8E9297" opacity={0.4} />
            <h3 style={{ color: '#F1F1F1', fontSize: '1.15rem' }}>
              Tu lista de cotización está vacía
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '260px' }}>
              Agrega productos del catálogo o personaliza tus prendas interactivamente.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setIsCartOpen(false)}
            >
              Explorar Catálogo
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-scroll">
              {items.map((item) => (
                <div key={item.id} className="cart-item-row-compact">
                  {/* Miniature Thumbnail */}
                  <div className="cart-item-thumb-mini">
                    <img
                      src={item.customDesignPreview || item.product.image}
                      alt={item.product.name}
                      className="cart-item-img"
                    />
                  </div>

                  {/* Info Column */}
                  <div className="cart-item-info-mini">
                    <div className="cart-item-name-mini" title={item.product.name}>
                      {item.product.name}
                    </div>

                    <div className="cart-item-meta-mini">
                      {item.selectedColor && <span>{item.selectedColor} • </span>}
                      {item.selectedSize && <span>{item.selectedSize}</span>}
                    </div>

                    {/* Qty & Subtotal Controls */}
                    <div className="cart-item-bottom-row">
                      <div className="cart-qty-mini">
                        <button
                          type="button"
                          className="qty-btn-mini"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Disminuir"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-num-mini">{item.quantity}</span>
                        <button
                          type="button"
                          className="qty-btn-mini"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Aumentar"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="cart-item-subtotal">
                        {item.totalPrice} Bs.
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    className="cart-remove-btn-compact"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Eliminar ${item.product.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}

              {/* Datos del Cliente (Nombre obligatorio) */}
              <div className="cart-customer-box">
                <button
                  type="button"
                  className="cart-customer-toggle"
                  onClick={() => setShowCustomerFields(!showCustomerFields)}
                  aria-expanded={showCustomerFields}
                >
                  <span>Datos del cliente (Nombre obligatorio *)</span>
                  {showCustomerFields ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {showCustomerFields && (
                  <div className="cart-customer-inputs">
                    <div>
                      <input
                        ref={nameInputRef}
                        type="text"
                        required
                        maxLength={80}
                        placeholder="Tu Nombre o Empresa *"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          if (nameError && e.target.value.trim().length >= 2) {
                            setNameError('');
                          }
                        }}
                        className="search-input cart-input"
                        style={nameError ? { borderColor: '#FF4D4F', boxShadow: '0 0 0 2px rgba(255, 77, 79, 0.2)' } : undefined}
                        aria-invalid={!!nameError}
                      />
                      {nameError && (
                        <p style={{ color: '#FF6B6B', fontSize: '0.76rem', marginTop: '0.35rem', marginBottom: 0, fontWeight: 600 }}>
                          {nameError}
                        </p>
                      )}
                    </div>
                    <input
                      type="text"
                      maxLength={80}
                      placeholder="Ciudad / Destino (Opcional)"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="search-input cart-input"
                    />
                    <input
                      type="text"
                      maxLength={200}
                      placeholder="Nota u observación adicional (Opcional)"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="search-input cart-input"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Fixed Bottom Summary & WhatsApp CTA */}
            <div className="cart-footer-sticky">
              <div className="cart-total-line">
                <span className="cart-total-label">Total ({cartCount} uds):</span>
                <span className="cart-total-amount">{cartTotal} Bs.</span>
              </div>

              <button
                type="button"
                className="btn btn-whatsapp btn-cart-submit"
                onClick={handleSendWhatsAppQuote}
              >
                <MessageSquare size={17} />
                <span>Enviar Cotización a WhatsApp</span>
              </button>

              <div className="cart-footer-sub">
                <button
                  type="button"
                  onClick={clearCart}
                  className="btn-clear-cart"
                >
                  Vaciar
                </button>
                <span>Precios en Bolivianos (Bs.)</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
