import React, { useState } from 'react';
import {
  Users,
  Award,
  PackageCheck,
  Calendar,
  Layers,
  MessageSquare,
  FileSpreadsheet,
  X
} from 'lucide-react';
import { buildCorporateQuoteUrl } from '../../services/whatsapp';
import './Business.css';

interface BusinessSectionProps {
  onOpenCorporateModal?: () => void;
}

export const Business: React.FC<BusinessSectionProps> = ({ onOpenCorporateModal }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    itemType: 'Uniformes Corporativos',
    quantity: '50',
    details: ''
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildCorporateQuoteUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    setModalOpen(false);
  };

  const businessSolutions = [
    {
      icon: <Users size={20} color="#0759E8" />,
      title: 'Uniformes Corporativos',
      desc: 'Polos piqué, camisas formales y ropa técnica con bordado industrial de alta jerarquía.'
    },
    {
      icon: <Award size={20} color="#F5B800" />,
      title: 'Merchandising Empresarial',
      desc: 'Bolígrafos metálicos rollerball, libretas de eco-cuero y lanyards satinados con credencial.'
    },
    {
      icon: <PackageCheck size={20} color="#00A878" />,
      title: 'Regalos Institucionales',
      desc: 'Kits onboarding en cajas rígidas imantadas, termos grabados y trofeos en acrílico.'
    },
    {
      icon: <FileSpreadsheet size={20} color="#E600A9" />,
      title: 'Material Promocional',
      desc: 'Bolsas ecológicas de tocuyo, chapitas, pines esmaltados y llaveros láser.'
    },
    {
      icon: <Calendar size={20} color="#0759E8" />,
      title: 'Productos para Eventos',
      desc: 'Poleras masivas, pulseras de acceso y credenciales PVC para congresos.'
    },
    {
      icon: <Layers size={20} color="#00A878" />,
      title: 'Tiradas por Mayor',
      desc: 'Capacidad de 50 a 5,000+ unidades con control por lote y facturación con valor fiscal.'
    }
  ];

  return (
    <section id="empresas" className="section-padding business-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>División B2B & Corporativa</span>
          </div>
          <h2 className="section-title">
            Soluciones para <span className="text-metallic">Empresas e Instituciones</span>
          </h2>
          <p className="section-description">
            Abastecemos a departamentos de compras, marketing y RRHH con merchandising
            corporativo, empaques personalizados y condiciones mayoristas preferenciales.
          </p>
        </div>

        {/* Corporate Hero Card */}
        <div className="business-hero-card">
          <div className="business-hero-content">
            <span className="badge-tag text-accent-blue" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
              Atención B2B Especializada
            </span>
            <h3 className="business-hero-title">
              ¿Cotización formal o muestras previas?
            </h3>
            <p className="business-hero-desc">
              Generamos presupuestos por escrito con desglose impositivo y elaboración de muestra física o digital antes de la producción en serie.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-corporate-cta"
              onClick={() => setModalOpen(true)}
            >
              <MessageSquare size={16} />
              <span>Solicitar Cotización Empresarial</span>
            </button>
          </div>
        </div>

        {/* 6 Key Corporate Solutions: Carousel / Grid */}
        <div className="business-grid-services">
          {businessSolutions.map((sol, index) => (
            <div key={index} className="business-item-card">
              <div className="business-icon-box">{sol.icon}</div>
              <h3 className="business-item-title">
                {sol.title}
              </h3>
              <p className="business-item-desc">
                {sol.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Volume Pricing Tiers Card */}
        <div className="volume-tiers-table-card">
          <div className="volume-tiers-header">
            <h3 className="volume-tiers-title">
              Escalas de Descuento por Volumen
            </h3>
            <p className="volume-tiers-subtitle">
              A mayor cantidad producida en una sola tirada, optimizamos insumos y tiempos de máquina.
            </p>
          </div>

          <div className="volume-tiers-grid">
            <div className="volume-tier-box">
              <div className="tier-qty-badge">12 - 49 uds</div>
              <div className="tier-discount-tag">10% OFF</div>
              <p className="tier-desc">
                Docenas y pequeños equipos
              </p>
            </div>

            <div className="volume-tier-box">
              <div className="tier-qty-badge">50 - 99 uds</div>
              <div className="tier-discount-tag">18% OFF</div>
              <p className="tier-desc">
                Eventos medianos y dotación semestral
              </p>
            </div>

            <div className="volume-tier-box">
              <div className="tier-qty-badge">100 - 499 uds</div>
              <div className="tier-discount-tag">25% OFF</div>
              <p className="tier-desc">
                Campañas anuales y congresos
              </p>
            </div>

            <div className="volume-tier-box">
              <div className="tier-qty-badge">500+ uds</div>
              <div className="tier-discount-tag factory-tier">
                Tarifa de Fábrica
              </div>
              <p className="tier-desc">
                Producción masiva con precio directo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Quote Modal */}
      {modalOpen && (
        <div className="lightbox-modal" onClick={() => setModalOpen(false)}>
          <div
            className="lightbox-content corporate-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>

            <h3 className="modal-title-b2b">
              Cotización Empresarial por Volumen
            </h3>
            <p className="modal-sub-b2b">
              Completa los datos y te responderemos inmediatamente vía WhatsApp con precios por mayor.
            </p>

            <form onSubmit={handleSubmit} className="b2b-form">
              <div className="form-group-b2b">
                <label className="service-spec-title">
                  Empresa o Institución *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Banco Unión, Minera San Cristóbal..."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="search-input"
                />
              </div>

              <div className="b2b-form-row">
                <div className="form-group-b2b">
                  <label className="service-spec-title">
                    Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y cargo"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="search-input"
                  />
                </div>

                <div className="form-group-b2b">
                  <label className="service-spec-title">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 72503228"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="b2b-form-row">
                <div className="form-group-b2b" style={{ flex: 1.2 }}>
                  <label className="service-spec-title">
                    Tipo de Producto
                  </label>
                  <select
                    value={formData.itemType}
                    onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                    className="catalog-sort-select"
                    style={{ width: '100%' }}
                  >
                    <option value="Uniformes Corporativos">Uniformes Corporativos</option>
                    <option value="Merchandising & Lapiceros">Merchandising & Lapiceros</option>
                    <option value="Kits Onboarding VIP">Kits Onboarding VIP</option>
                    <option value="Tazas & Termos">Tazas & Termos</option>
                    <option value="Bolsas Ecológicas">Bolsas Ecológicas</option>
                    <option value="Otro Requerimiento">Otro Requerimiento</option>
                  </select>
                </div>

                <div className="form-group-b2b" style={{ flex: 0.8 }}>
                  <label className="service-spec-title">
                    Cantidad Estimada
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="Ej: 100"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="search-input"
                  />
                </div>
              </div>

              <div className="form-group-b2b">
                <label className="service-spec-title">
                  Detalles o Requerimiento
                </label>
                <textarea
                  rows={3}
                  placeholder="Colores, si disponen de logo vectorizado, fecha límite de entrega..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="search-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="b2b-actions-row">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>Enviar Cotización</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
