import React from 'react';
import { HummingbirdIcon } from '../common/HummingbirdIcon';
import { COMPANY_INFO } from '../../data/company';
import { Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import { useSeasonalTheme } from '../../hooks/useSeasonalTheme';
import { GingerbreadManIcon, ChristmasSparkleIcon } from '../seasonal/ChristmasSVGs';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { isChristmas } = useSeasonalTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040505',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Col 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <img
              src={COMPANY_INFO.logo}
              alt="ARTTMANIA"
              style={{ height: '42px', maxWidth: '190px', objectFit: 'contain' }}
            />
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {COMPANY_INFO.description}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '0.5rem' }}>
              <HummingbirdIcon size={24} animated />
              <span style={{ fontSize: '0.8rem', color: 'var(--silver-metallic)', fontWeight: 600 }}>
                Calidad Gráfica y Textil
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem', color: '#F1F1F1' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button type="button" onClick={() => onNavigate('hero')} style={{ color: 'var(--text-secondary)' }}>
                  Inicio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('temporadas')} style={{ color: 'var(--text-secondary)' }}>
                  Catálogos por Temporada
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('productos')} style={{ color: 'var(--text-secondary)' }}>
                  Catálogo de Productos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('personalizador')} style={{ color: 'var(--text-secondary)' }}>
                  Personalizador en Vivo
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('servicios')} style={{ color: 'var(--text-secondary)' }}>
                  Técnicas y Maquinaria
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('empresas')} style={{ color: 'var(--text-secondary)' }}>
                  Soluciones para Empresas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('portafolio')} style={{ color: 'var(--text-secondary)' }}>
                  Galería de Trabajos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem', color: '#F1F1F1' }}>
              Líneas de Producción
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Poleras y Sudaderas DTF</li>
              <li>Gorras Estructuradas con Bordado 3D</li>
              <li>Tazas de Cerámica y Mágicas Sublimadas</li>
              <li>Termos y Tomatodos con Grabado Láser</li>
              <li>Credenciales PVC y Lanyards Institucionales</li>
              <li>Kits VIP y Regalos Corporativos</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem', color: '#F1F1F1' }}>
              Taller & Despachos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div>{COMPANY_INFO.address}</div>
              <div>{COMPANY_INFO.city}</div>
              <div style={{ color: 'var(--accent-green)', fontWeight: 600 }}>WhatsApp: {COMPANY_INFO.phoneDisplay}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                {COMPANY_INFO.schedule}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. Todos los derechos reservados. Impresión, Publicidad y Merchandising.</span>
            {isChristmas && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#D4AF37', fontWeight: 600 }}>
                <GingerbreadManIcon size={16} color="#D4AF37" />
                <span>¡Felices Fiestas!</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.4rem 0.8rem' }}
          >
            <ArrowUp size={14} />
            <span>Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
