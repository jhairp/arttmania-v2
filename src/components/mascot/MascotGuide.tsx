import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { HummingbirdIcon } from '../common/HummingbirdIcon';
import './MascotGuide.css';

const TIPS: Record<string, string> = {
  inicio: '¡Hola! Soy el colibrí de ART MANIA. Toca una polera para ver la colección navideña 🎄',
  catalogo: 'Elige una colección arriba: Catálogo Oficial, Navidad, Halloween y más.',
  personalizar: 'Diseña tu producto en tiempo real y pide tu cotización.',
  servicios: 'Así producimos: DTF, sublimación, láser y más. También atendemos empresas.',
  nosotros: '¿Dudas? Escríbenos por WhatsApp 💬'
};

export const MascotGuide: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [open, setOpen] = useState(true);
  const [tip, setTip] = useState(TIPS.inicio);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    if (!TIPS[activeSection]) return;
    setTip(TIPS[activeSection]);
    setBump((b) => b + 1);
    setOpen(true);
    const t = setTimeout(() => setOpen(false), 7000);
    return () => clearTimeout(t);
  }, [activeSection]);

  return (
    <div className="mascot" aria-live="polite">
      {open && (
        <div className="mascot-bubble" key={bump}>
          <p>{tip}</p>
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar mensaje"><X size={14} /></button>
        </div>
      )}
      <button type="button" className="mascot-bird" onClick={() => setOpen((o) => !o)} aria-label="Colibrí guía">
        <HummingbirdIcon size={58} animated />
      </button>
    </div>
  );
};
