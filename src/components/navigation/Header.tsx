import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { HummingbirdIcon } from '../common/HummingbirdIcon';
import { COMPANY_INFO } from '../../data/company';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GiftBow, ChristmasHeaderLights } from '../seasonal';
import { LiveButton } from './LiveButton';
import './Header.css';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const { isChristmas, config } = useSeasonalTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'personalizar', label: 'Personalizador' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Nosotros' }
  ];

  return (
    <header className={`header-wrapper ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="brand-link"
          aria-label="ART MANIA Inicio"
        >
          <img
            src={isChristmas ? config.assets.logoHeader : COMPANY_INFO.logo}
            alt="ART MANIA - Impresión y Personalización"
            className="brand-logo-img"
            onError={(e) => {
              if (isChristmas && !e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = 'true';
                e.currentTarget.src = '/logo/art_mania_navideno.png';
              }
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navegación principal">
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions: Cart + WhatsApp CTA + Mobile Menu Button */}
        <div className="nav-actions">
          <LiveButton />
          {/* Cart Button */}
          <button
            type="button"
            className="cart-toggle-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Ver carrito de compras (${cartCount} productos)`}
          >
            {isChristmas && <GiftBow size="sm" position="top-left" style={{ top: '-4px', left: '-4px' }} />}
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Quick WhatsApp CTA (Desktop) */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20ART%20MANIA,%20deseo%20hacer%20una%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ display: 'none' }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="mobile-link-item"
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={18} opacity={0.6} />
              </button>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
          >
            <ShoppingBag size={18} />
            <span>Ver Cotización ({cartCount} artículos)</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20ART%20MANIA,%20deseo%20hacer%20una%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageCircle size={18} />
            <span>Contactar por WhatsApp</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem' }}>
            <HummingbirdIcon size={20} animated />
            <span>ART MANIA • Impresión & Merchandising</span>
          </div>
        </div>
      </div>

      {/* Guirnalda sutil navideña */}
      {isChristmas && <ChristmasHeaderLights />}
    </header>
  );
};
