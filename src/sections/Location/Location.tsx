import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import './Location.css';

export const Location: React.FC = () => {
  const { lat, lng } = COMPANY_INFO.coords;
  return (
    <section id="ubicacion" className="location-section">
      <div className="container location-grid">
        <div className="location-info">
          <span className="location-kicker"><MapPin size={14} /> Nuestra ubicación</span>
          <h2 className="section-title">Visítanos en <span className="text-metallic">nuestro taller</span></h2>
          <p className="section-description">{COMPANY_INFO.address}. {COMPANY_INFO.schedule}</p>
          <a href={COMPANY_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Navigation size={16} /><span>Cómo llegar</span>
          </a>
        </div>
        <div className="location-map">
          <iframe
            title="Ubicación de ARTTMANIA en Google Maps"
            src={`https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
