import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/navigation/Header';
import { Hero } from './sections/Hero/Hero';
import { Showcase } from './sections/Showcase/Showcase';
import { Location } from './sections/Location/Location';
import { CatalogView } from './views/CatalogView';
import { Customizer } from './sections/Customizer/Customizer';
import { Services } from './sections/Services/Services';
import { Business } from './sections/Business/Business';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { BackToTop } from './components/ui/BackToTop';
import { CartProvider } from './context/CartContext';
import { useSeasonalTheme } from './hooks/useSeasonalTheme';
import { SnowEffect } from './components/seasonal';
import './styles/global.css';
import './components/seasonal/seasonal.css';
import './views/views.css';

type View = 'inicio' | 'catalogo' | 'personalizar' | 'servicios' | 'nosotros';
const VIEWS: View[] = ['inicio', 'catalogo', 'personalizar', 'servicios', 'nosotros'];

interface Target { view: View; col?: string; anchor?: string }

/** Cualquier id de sección o de vista se traduce a una vista (página) + opcional ancla. */
const ROUTES: Record<string, Target> = {
  inicio: { view: 'inicio' },
  hero: { view: 'inicio' },
  catalogo: { view: 'catalogo', col: 'normal' },
  productos: { view: 'catalogo', col: 'normal' },
  temporadas: { view: 'catalogo', col: 'navidad' },
  personalizar: { view: 'personalizar' },
  personalizador: { view: 'personalizar' },
  servicios: { view: 'servicios', anchor: 'servicios' },
  empresas: { view: 'servicios', anchor: 'empresas' },
  portafolio: { view: 'servicios', anchor: 'portafolio' },
  nosotros: { view: 'nosotros', anchor: 'nosotros' },
  contacto: { view: 'nosotros', anchor: 'contacto' }
};

const hashFor = (t: Target) => `#/${t.view}${t.col ? `?col=${t.col}` : ''}`;

const readRoute = (): { view: View; col: string } => {
  const [v, q] = window.location.hash.replace(/^#\/?/, '').split('?');
  const view = (VIEWS as string[]).includes(v) ? (v as View) : 'inicio';
  return { view, col: new URLSearchParams(q || '').get('col') || 'normal' };
};

export const AppContent: React.FC = () => {
  const [route, setRoute] = useState(readRoute);
  const [loadingFinished, setLoadingFinished] = useState(false);
  const { isChristmas } = useSeasonalTheme();
  const pendingAnchor = useRef<string | null>(null);

  const scrollToPending = useCallback(() => {
    const el = pendingAnchor.current ? document.getElementById(pendingAnchor.current) : null;
    pendingAnchor.current = null;
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    else window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const onHash = () => {
      setRoute(readRoute());
      setTimeout(scrollToPending, 80);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [scrollToPending]);

  const handleNavigate = (id: string) => {
    const target = ROUTES[id] ?? ROUTES.inicio;
    pendingAnchor.current = target.anchor ?? null;
    const hash = hashFor(target);
    if (window.location.hash === hash) scrollToPending();
    else window.location.hash = hash;
  };

  const openCollection = (col: string) => {
    pendingAnchor.current = null;
    window.location.hash = `#/catalogo?col=${col}`;
  };

  return (
    <div className={`app-root ${isChristmas ? 'theme-christmas' : ''}`}>
      <LoadingScreen minDuration={1600} onFinish={() => setLoadingFinished(true)} />
      {isChristmas && loadingFinished && <SnowEffect active={loadingFinished} />}

      <Header activeSection={route.view} onNavigate={handleNavigate} />

      <main key={route.view} className="view-enter">
        {route.view === 'inicio' && (
          <>
            <Hero onOpenCollection={openCollection} />
            <Showcase />
          </>
        )}
        {route.view === 'catalogo' && (
          <div className="view-top-pad">
            <CatalogView collection={route.col} onChange={openCollection} />
          </div>
        )}
        {route.view === 'personalizar' && (
          <div className="view-top-pad"><Customizer /></div>
        )}
        {route.view === 'servicios' && (
          <div className="view-top-pad"><Services /><Business /><Portfolio /></div>
        )}
        {route.view === 'nosotros' && (
          <div className="view-top-pad"><About /><Location /><Contact /></div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <CartDrawer />
      <BackToTop />
    </div>
  );
};

export const App: React.FC = () => (
  <CartProvider>
    <AppContent />
  </CartProvider>
);

export default App;
