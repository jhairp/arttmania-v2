import React, { useState } from 'react';
import { SERVICES, Service } from '../../data/services';
import { MessageSquare, Clock, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { buildDirectProductQuoteUrl } from '../../services/whatsapp';
import './Services.css';

interface ServicesProps {
  onSelectServiceForQuote?: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [expandedSpecs, setExpandedSpecs] = useState<{ [id: string]: boolean }>({});

  const toggleSpecs = (id: string) => {
    setExpandedSpecs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleQuoteClick = (service: Service) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(service);
    } else {
      const url = buildDirectProductQuoteUrl(service.name, 12, service.name);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="servicios" className="section-padding services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Capacidad Productiva</span>
          </div>
          <h2 className="section-title">
            Técnicas de Impresión y <span className="text-metallic">Personalización</span>
          </h2>
          <p className="section-description">
            Equipamiento industrial propio y procesos estandarizados para garantizar durabilidad,
            definición fotográfica y fidelidad de color en cada material.
          </p>
        </div>

        {/* Services Grid / Mobile Horizontal Snap Carousel */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const isSpecsExpanded = !!expandedSpecs[service.id];

            return (
              <article key={service.id} className="service-card">
                {/* Image & Accent */}
                <div className="service-image-container">
                  <div
                    className="service-accent-bar"
                    style={{ backgroundColor: service.accentColor }}
                  />
                  <img
                    src={service.image}
                    alt={`Técnica de ${service.name} en ART MANIA`}
                    className="service-card-img"
                    loading="lazy"
                  />
                  <div className="service-turnaround-badge">
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {service.turnaround}
                  </div>
                </div>

                {/* Body */}
                <div className="service-body">
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-desc">{service.shortDescription}</p>

                  {/* Accordion Toggle for Mobile / Dense View */}
                  <button
                    type="button"
                    className="service-accordion-trigger"
                    onClick={() => toggleSpecs(service.id)}
                    aria-expanded={isSpecsExpanded}
                  >
                    <span>Ficha Técnica y Materiales</span>
                    {isSpecsExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  <div className={`service-specs-collapsible ${isSpecsExpanded ? 'open' : ''}`}>
                    {/* Applications */}
                    <div className="service-spec-block">
                      <div className="service-spec-title">Aplicaciones:</div>
                      <div className="service-pills">
                        {service.applications.slice(0, 3).map((app, i) => (
                          <span key={i} className="service-pill">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compatible Materials */}
                    <div className="service-spec-block">
                      <div className="service-spec-title">Materiales:</div>
                      <div className="service-pills">
                        {service.materials.slice(0, 3).map((mat, i) => (
                          <span
                            key={i}
                            className="service-pill mat-pill"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer with Quote Button */}
                  <div className="service-card-footer">
                    <span className="service-min-order">{service.minOrder}</span>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm btn-quote-service"
                      onClick={() => handleQuoteClick(service)}
                      aria-label={`Cotizar ${service.name}`}
                    >
                      <MessageSquare size={14} />
                      <span>Cotizar</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
