import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [sentSuccess, setSentSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = formData.name.trim();
    const cleanPhone = formData.phone.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    if (cleanName.length < 2) {
      setFormError('Por favor, ingresa tu nombre completo (mínimo 2 caracteres).');
      return;
    }
    if (!/^\+?[0-9\s-]{7,15}$/.test(cleanPhone)) {
      setFormError('Por favor, ingresa un número de teléfono o WhatsApp válido (7 a 15 dígitos).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (cleanMessage.length < 5) {
      setFormError('Por favor, escribe tu mensaje o requerimiento (mínimo 5 caracteres).');
      return;
    }

    setFormError('');
    const text =
      `*MENSAJE DE CONTACTO WEB - ARTTMANIA*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Nombre: ${cleanName}\n` +
      `Email: ${cleanEmail}\n` +
      `Teléfono: ${cleanPhone}\n` +
      `Asunto: ${cleanSubject || 'Consulta General'}\n` +
      `Mensaje: ${cleanMessage}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSentSuccess(true);
  };

  return (
    <section id="contacto" className="section-padding contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Atención Comercial</span>
          </div>
          <h2 className="section-title">
            Canales de <span className="text-metallic">Contacto Directo</span>
          </h2>
          <p className="section-description">
            Cotizaciones, visitas a taller, consultas técnicas y coordinación
            de envíos a toda Bolivia con atención inmediata.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Corporate Channels */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">
              Información de Contacto
            </h3>

            {/* Quick Contact Chips for Mobile */}
            <div className="contact-quick-mobile-row">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20ARTTMANIA`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-chip"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} color="#25D366" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="contact-quick-chip"
                aria-label="Llamar"
              >
                <Phone size={18} color="#0759E8" />
                <span>Llamar</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="contact-quick-chip"
                aria-label="Email"
              >
                <Mail size={18} color="#E600A9" />
                <span>Email</span>
              </a>
            </div>

            {/* Full Desktop Channels List */}
            <div className="contact-channels-list">
              {/* WhatsApp */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon" style={{ color: '#25D366' }}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="channel-label">WhatsApp Comercial:</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%20ARTTMANIA`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-value"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <span className="channel-note">Respuesta inmediata en horario laboral</span>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="channel-label">Línea Telefónica:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="channel-value">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="channel-label">Correo Electrónico:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="channel-value">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="channel-label">Taller y Oficinas:</span>
                  <span className="channel-value">{COMPANY_INFO.address}</span>
                  <span className="channel-note">{COMPANY_INFO.city}</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="channel-label">Horario:</span>
                  <span className="channel-note" style={{ color: 'var(--text-secondary)' }}>
                    {COMPANY_INFO.schedule}
                  </span>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="contact-social-row">
              <span className="channel-label">Redes Oficiales:</span>
              <div className="social-links-row">
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href={COMPANY_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  aria-label="TikTok"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">
              Envíanos un Mensaje
            </h3>
            <p className="contact-form-sub">
              Escríbenos directamente y te asesoramos sobre tu proyecto.
            </p>

            {sentSuccess ? (
              <div className="contact-success-box">
                <CheckCircle2 size={40} color="#00A878" style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ color: '#F1F1F1', marginBottom: '0.4rem' }}>
                  ¡Mensaje Transmitido con Éxito!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  Tu consulta fue enviada a nuestro WhatsApp comercial. Te responderemos a la brevedad.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSentSuccess(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-fields-grid">
                  <div className="form-group">
                    <label className="form-label">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 72503228"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-fields-grid">
                  <div className="form-group">
                    <label className="form-label">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Asunto / Tipo de Pedido</label>
                    <input
                      type="text"
                      placeholder="Ej: Cotización 100 poleras"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Mensaje o Requerimiento *</label>
                  <textarea
                    required
                    rows={3}
                    maxLength={500}
                    placeholder="Técnica de interés, cantidades estimadas, fecha de entrega..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                {formError && (
                  <p style={{ color: '#FF6B6B', fontSize: '0.82rem', fontWeight: 600, margin: '0 0 0.75rem 0' }}>
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-contact-submit"
                >
                  <Send size={16} />
                  <span>Enviar por WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
