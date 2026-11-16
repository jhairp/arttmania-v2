import React, { useState, useRef } from 'react';
import {
  Upload,
  Type,
  Layers,
  Sparkles,
  ShoppingBag,
  MessageSquare,
  Check,
  RotateCcw,
  Plus,
  Minus
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { calculateDiscountedPrice } from '../../data/promotions';
import { buildDirectProductQuoteUrl } from '../../services/whatsapp';
import { PRODUCTS } from '../../data/products';
import { HummingbirdIcon } from '../../components/common/HummingbirdIcon';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { SEASONAL_TEMPLATES } from '../../components/seasonal/seasonalTemplates';
import './Customizer.css';

interface MockupProduct {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  sizes: string[];
  techniques: string[];
  colors: { name: string; hex: string }[];
}

const CUSTOMIZABLE_PRODUCTS: MockupProduct[] = [
  {
    id: 'polera-personalizada',
    name: 'Polera de Algodón Peinado',
    category: 'textiles',
    basePrice: 65,
    image: '/images/products/polera-personalizada.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    techniques: ['DTF Textil', 'Serigrafía', 'Bordado'],
    colors: [
      { name: 'Negro Grafito', hex: '#141517' },
      { name: 'Blanco Suave', hex: '#F1F1F1' },
      { name: 'Azul Marino', hex: '#16233B' },
      { name: 'Verde Bosque', hex: '#0B3323' }
    ]
  },
  {
    id: 'sudadera-hoodie',
    name: 'Hoodie con Capucha Pesado',
    category: 'textiles',
    basePrice: 145,
    image: '/images/products/sudadera-hoodie.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    techniques: ['DTF Textil', 'Bordado Computarizado'],
    colors: [
      { name: 'Negro Profundo', hex: '#0D0E10' },
      { name: 'Gris Jaspe', hex: '#484B52' },
      { name: 'Azul Noche', hex: '#142538' }
    ]
  },
  {
    id: 'gorras',
    name: 'Gorra Snapback 6 Paneles',
    category: 'textiles',
    basePrice: 50,
    image: '/images/products/gorras.jpg',
    sizes: ['Ajustable'],
    techniques: ['Bordado 3D', 'Parche Láser', 'DTF Textil'],
    colors: [
      { name: 'Negro', hex: '#141517' },
      { name: 'Azul Marino', hex: '#0E1E38' },
      { name: 'Verde Esmeralda', hex: '#00A878' }
    ]
  },
  {
    id: 'taza-blanca',
    name: 'Taza Cerámica 11oz',
    category: 'sublimacion',
    basePrice: 25,
    image: '/images/products/taza-blanca.jpg',
    sizes: ['11 Onzas'],
    techniques: ['Sublimación Digital'],
    colors: [
      { name: 'Blanco Cerámico', hex: '#F7F8FA' }
    ]
  },
  {
    id: 'termos',
    name: 'Termo Tumbler de Acero',
    category: 'sublimacion',
    basePrice: 65,
    image: '/images/products/termos.jpg',
    sizes: ['500 ml', '750 ml'],
    techniques: ['Grabado Láser', 'DTF UV'],
    colors: [
      { name: 'Negro Mate', hex: '#141517' },
      { name: 'Plata Acero', hex: '#C6C8CB' },
      { name: 'Azul Noche', hex: '#16233B' }
    ]
  },
  {
    id: 'bolsas-ecologicas',
    name: 'Bolsa Tote Bag de Tocuyo',
    category: 'regalos',
    basePrice: 20,
    image: '/images/products/bolsas-ecologicas.jpg',
    sizes: ['38 x 42 cm'],
    techniques: ['Serigrafía', 'DTF Textil'],
    colors: [
      { name: 'Crudo Natural', hex: '#E2DACE' },
      { name: 'Negro Lona', hex: '#181A1D' }
    ]
  }
];

export const Customizer: React.FC = () => {
  const { isChristmas } = useSeasonalTheme();
  const { addItem } = useCart();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedProduct, setSelectedProduct] = useState<MockupProduct>(CUSTOMIZABLE_PRODUCTS[0]);
  const [selectedColor, setSelectedColor] = useState<string>(CUSTOMIZABLE_PRODUCTS[0].colors[0].name);
  const [selectedSize, setSelectedSize] = useState<string>(CUSTOMIZABLE_PRODUCTS[0].sizes[0]);
  const [selectedTechnique, setSelectedTechnique] = useState<string>(CUSTOMIZABLE_PRODUCTS[0].techniques[0]);
  const [printLocation, setPrintLocation] = useState<'center' | 'chest' | 'back'>('center');
  const [customText, setCustomText] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(12);

  const pricing = calculateDiscountedPrice(selectedProduct.basePrice, quantity);

  const handleProductChange = (prod: MockupProduct) => {
    setSelectedProduct(prod);
    setSelectedColor(prod.colors[0]?.name || '');
    setSelectedSize(prod.sizes[0] || '');
    setSelectedTechnique(prod.techniques[0] || '');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
    setCustomText('');
    setQuantity(12);
  };

  const handleAddToCart = () => {
    const matchedProduct = PRODUCTS.find((p) => p.id === selectedProduct.id) || PRODUCTS[0];
    addItem({
      productId: selectedProduct.id,
      product: matchedProduct,
      quantity,
      selectedColor,
      selectedSize,
      selectedTechnique,
      customText: customText.trim() || undefined,
      customDesignPreview: uploadedImage || undefined,
      unitPrice: pricing.unitPrice
    });
  };

  const handleWhatsAppQuote = () => {
    const details = `Ubicación: ${printLocation}, Color: ${selectedColor}, Talla: ${selectedSize}, Técnica: ${selectedTechnique}${
      customText ? `, Texto: "${customText}"` : ''
    }${uploadedImage ? ', [Diseño/Logo adjunto]' : ''}`;

    const url = buildDirectProductQuoteUrl(
      selectedProduct.name,
      quantity,
      `${selectedTechnique} - ${details}`
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="personalizador" className="section-padding customizer-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Estudio Interactivo</span>
          </div>
          <h2 className="section-title">
            Personalizador en <span className="text-metallic">Tiempo Real</span>
          </h2>
          <p className="section-description">
            Configura tu producto, selecciona color, talla, sube tu logotipo y previsualiza
            la maqueta digital con cálculo instantáneo de precios y descuentos por volumen.
          </p>
        </div>

        <div className="customizer-layout">
          {/* Left Column: Interactive Mockup Stage */}
          <div className="mockup-stage">
            <div className="mockup-viewport">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="mockup-base-image"
              />

              {/* Dynamic Printable Mockup Overlay Area */}
              <div className={`mockup-print-area loc-${printLocation}`}>
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Diseño personalizado cargado"
                    className="uploaded-design-preview"
                  />
                ) : (
                  <div style={{ opacity: 0.4, textAlign: 'center', fontSize: '0.75rem', color: '#FFF' }}>
                    <HummingbirdIcon size={32} animated />
                    <div>Área de Impresión</div>
                  </div>
                )}

                {customText && (
                  <div
                    className="mockup-text-overlay"
                    style={{ color: textColor, fontSize: '0.95rem' }}
                  >
                    {customText}
                  </div>
                )}
              </div>
            </div>

            {/* Mockup Status Bar */}
            <div className="mockup-info-bar">
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>
                  {selectedProduct.name}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F1F1F1' }}>
                  {selectedColor} • {selectedSize} • {selectedTechnique}
                </span>
              </div>

              {(uploadedImage || customText) && (
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={handleReset}
                  title="Restablecer diseño"
                >
                  <RotateCcw size={14} />
                  <span>Limpiar</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Customizer Controls Panel */}
          <div className="customizer-controls">
            {/* 1. Select Product */}
            <div className="ctrl-group">
              <label className="ctrl-label">1. Seleccionar Producto:</label>
              <div className="product-picker-grid">
                {CUSTOMIZABLE_PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    className={`product-picker-btn ${selectedProduct.id === prod.id ? 'active' : ''}`}
                    onClick={() => handleProductChange(prod)}
                  >
                    <span>{prod.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Desde {prod.basePrice} Bs.
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Selection */}
            <div className="ctrl-group">
              <label className="ctrl-label">
                <span>2. Color del Artículo:</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--silver-metallic)' }}>
                  {selectedColor}
                </span>
              </label>
              <div className="color-palette-row">
                {selectedProduct.colors.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`palette-btn ${selectedColor === c.name ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* 3. Size / Dimension */}
            <div className="ctrl-group">
              <label className="ctrl-label">3. Talla o Dimensión:</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedProduct.sizes.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`btn btn-secondary btn-sm ${selectedSize === s ? 'btn-primary' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Print Technique & Location */}
            <div className="ctrl-group">
              <label className="ctrl-label">4. Técnica & Ubicación:</label>
              <div className="customizer-two-selects">
                <select
                  value={selectedTechnique}
                  onChange={(e) => setSelectedTechnique(e.target.value)}
                  className="catalog-sort-select"
                >
                  {selectedProduct.techniques.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <select
                  value={printLocation}
                  onChange={(e) => setPrintLocation(e.target.value as any)}
                  className="catalog-sort-select"
                >
                  <option value="center">Frente / Centro</option>
                  <option value="chest">Pecho Izquierdo</option>
                  <option value="back">Espalda</option>
                </select>
              </div>
            </div>

            {/* Plantillas Navideñas (visibles solo cuando isChristmas es verdadero) */}
            {isChristmas && (
              <div className="ctrl-group">
                <label className="ctrl-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: '#F3E5AB' }}>★ Diseños Navideños Listos:</span>
                  <span style={{ fontSize: '0.72rem', color: '#D4AF37' }}>Edición Fin de Año</span>
                </label>
                <div className="customizer-templates-grid">
                  {SEASONAL_TEMPLATES.map((tmpl) => {
                    const isSelected = uploadedImage === tmpl.svgDataUri;
                    return (
                      <button
                        key={tmpl.id}
                        type="button"
                        className={`btn btn-secondary btn-sm ${isSelected ? 'btn-primary' : ''}`}
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.5rem 0.65rem',
                          borderColor: isSelected ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)',
                          background: isSelected ? undefined : 'rgba(212, 175, 55, 0.06)'
                        }}
                        onClick={() => setUploadedImage(tmpl.svgDataUri)}
                      >
                        <span>{tmpl.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Upload File (Logo/Graphic) */}
            <div className="ctrl-group">
              <label className="ctrl-label">5. Cargar Logo o Arte Vectorial:</label>
              <div
                className="upload-dropzone"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={24} color="#C6C8CB" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#F1F1F1' }}>
                  {uploadedImage ? 'Cambiar archivo de diseño' : 'Haz clic para subir imagen o logotipo'}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Formatos recomendados: PNG transparente, JPG o SVG (Hasta 15MB)
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {/* 6. Custom Text Input */}
            <div className="ctrl-group">
              <label className="ctrl-label">6. Añadir Texto Personalizado (Opcional):</label>
              <div className="custom-text-row">
                <input
                  type="text"
                  placeholder="Ej: Staff 2026, Nombre o Slogan..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  maxLength={40}
                  className="custom-text-input"
                />
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="custom-color-picker"
                  title="Color de la tipografía"
                />
              </div>
            </div>

            {/* 7. Quantity & Pricing Tier */}
            <div className="ctrl-group">
              <label className="ctrl-label">7. Cantidad y Volumen:</label>
              <div className="customizer-qty-row">
                <div className="modal-qty-control" style={{ marginBottom: 0 }}>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="qty-input"
                  />
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="customizer-qty-discount">
                  {pricing.discountPercent > 0 ? (
                    <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>
                      ¡Aplica {pricing.discountPercent}% de descuento!
                    </span>
                  ) : (
                    <span>Añade 12 o más para obtener 10% de descuento</span>
                  )}
                </div>
              </div>
            </div>

            {/* Price Summary Card */}
            <div className="price-summary-card">
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                  Precio Unitario:
                </span>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {pricing.unitPrice} Bs.
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                  Total ({quantity} uds):
                </span>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--silver-highlight)' }}>
                  {pricing.total} Bs.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="customizer-actions-grid">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                <span>Agregar al Carrito</span>
              </button>

              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={handleWhatsAppQuote}
              >
                <MessageSquare size={18} />
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
