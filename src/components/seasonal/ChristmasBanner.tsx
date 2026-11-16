import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { SEASONAL_CONFIG } from '../../config/seasonal';
import { ChristmasSparkleIcon, ChristmasTreeIcon } from './ChristmasSVGs';

interface ChristmasBannerProps {
  onNavigate?: (sectionId: string) => void;
}

export const ChristmasBanner: React.FC<ChristmasBannerProps> = ({ onNavigate }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(SEASONAL_CONFIG.texts.bannerTargetSection);
    } else {
      const el = document.getElementById(SEASONAL_CONFIG.texts.bannerTargetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="seasonal-top-banner" role="region" aria-label="Aviso de temporada navideña">
      <div className="container seasonal-banner-inner">
        <div className="seasonal-banner-content">
          <ChristmasTreeIcon size={16} color="#D4AF37" />
          
          <span className="seasonal-banner-text">
            {SEASONAL_CONFIG.texts.bannerText}
          </span>

          {/* Solo se muestran fechas o promociones si están definidas en la config */}
          {SEASONAL_CONFIG.orderDeadline && (
            <span className="seasonal-banner-pill">
              Pedidos hasta: {SEASONAL_CONFIG.orderDeadline}
            </span>
          )}

          {SEASONAL_CONFIG.promoText && (
            <span className="seasonal-banner-promo">
              {SEASONAL_CONFIG.promoText}
            </span>
          )}

          <a
            href={`#${SEASONAL_CONFIG.texts.bannerTargetSection}`}
            onClick={handleClick}
            className="seasonal-banner-link"
          >
            <span>{SEASONAL_CONFIG.texts.bannerCta}</span>
            <ArrowRight size={13} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="seasonal-banner-close"
          aria-label="Cerrar aviso navideño"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
