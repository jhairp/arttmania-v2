import React, { useState } from 'react';
import { HummingbirdIcon } from '../../components/common/HummingbirdIcon';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Asesoría y Recepción de Archivo',
      desc: 'Revisamos tu boceto, logotipo o diseño vectorizado, asesorándote sobre la técnica más conveniente según el material.'
    },
    {
      num: '02',
      title: 'Muestra Digital y Perfilado',
      desc: 'Calibramos los perfiles de color CMYK y elaboramos un fotomontaje digital realista para tu aprobación previa.'
    },
    {
      num: '03',
      title: 'Producción de Alta Precisión',
      desc: 'Configuramos nuestras máquinas (DTF, prensas térmicas, láser o UV) con parámetros térmicos y mecánicos controlados.'
    },
    {
      num: '04',
      title: 'Control de Calidad y Empaque',
      desc: 'Cada prenda o artículo es inspeccionado individualmente antes de su empaque protegido para despacho local o nacional.'
    }
  ];

  const toggleStep = (index: number) => {
    setActiveStep((prev) => (prev === index ? null : index));
  };

  return (
    <section id="nosotros" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Text & Brand Story */}
          <div className="about-content">
            <div className="section-tag" style={{ width: 'fit-content' }}>
              <span className="dot" />
              <span>Identidad ARTTMANIA</span>
            </div>

            <h2 className="section-title">
              Precisión Técnica y <span className="text-metallic">Pasión Creativa</span>
            </h2>

            <p className="about-lead-text">
              En <strong>ARTTMANIA</strong> concebimos la personalización no como un simple estampado,
              sino como la materialización física de la identidad de personas, empresas e instituciones en Bolivia.
            </p>

            <p className="about-sub-text">
              Combinamos tecnología industrial de última generación (DTF textil de micropuntos, curado UV y corte láser CNC)
              con estricto control de calidad y tintas de alta duración.
            </p>

            {/* The Hummingbird Symbol Meaning */}
            <div className="about-symbol-card">
              <div className="about-symbol-icon">
                <HummingbirdIcon size={32} animated />
              </div>
              <div>
                <h3 className="about-symbol-title">
                  El Colibrí como Símbolo de Identidad
                </h3>
                <p className="about-symbol-desc">
                  Representa agilidad, precisión milimétrica en el vuelo y riqueza cromática natural: verde esmeralda, azul profundo, magenta y oro. Es nuestro compromiso con el detalle y la viveza de cada color.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Studio Production Workshop Photo */}
          <div className="about-workshop-img-box">
            <img
              src="/images/about/production-workshop.jpg"
              alt="Taller de producción y maquinaria de impresión en ARTTMANIA"
              className="about-workshop-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4 Process Workflow Stages (Horizontal Snap / Compact on Mobile) */}
        <div className="workflow-steps-wrapper">
          <div className="workflow-header-compact">
            <span className="workflow-badge">Proceso de Trabajo</span>
            <h3 className="workflow-title">4 Pasos hacia un Producto Impecable</h3>
          </div>

          <div className="workflow-steps-grid">
            {steps.map((st, i) => (
              <div
                key={i}
                className="workflow-step-card"
                onClick={() => toggleStep(i)}
              >
                <div className="step-num-badge">{st.num}</div>
                <h3 className="step-card-title">
                  {st.title}
                </h3>
                <p className="step-card-desc">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
