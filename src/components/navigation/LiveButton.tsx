import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import './LiveButton.css';

interface TikTokLiveResponse {
  isLive: boolean;
  roomId?: string | null;
  liveUrl?: string;
  profileUrl?: string;
}

const POLL_INTERVAL_MS = 60_000;

/**
 * Botón dinámico de TikTok:
 * - Detecta automáticamente cada 60 segundos si la cuenta (@artt.mania) está transmitiendo en LIVE.
 * - Cuando está EN VIVO: se ilumina con pulso magenta/rojo "EN VIVO • TikTok" y lleva directo al stream (/live).
 * - Cuando NO está en vivo: muestra el estado discreto "TikTok" sin pulso de alerta y lleva al perfil oficial.
 */
export const LiveButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [isLive, setIsLive] = useState<boolean>(false);
  const [checking, setChecking] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const verifyLiveStatus = async () => {
      try {
        // Permite simular en pruebas locales con ?tiktokLive=1 en la URL
        const params = new URLSearchParams(window.location.search);
        if (params.get('tiktokLive') === '1') {
          if (isMounted) {
            setIsLive(true);
            setChecking(false);
          }
          return;
        }

        const res = await fetch('/api/tiktok-live', {
          headers: { Accept: 'application/json' }
        });

        if (!res.ok) throw new Error('Status check failed');
        const data: TikTokLiveResponse = await res.json();

        if (isMounted) {
          setIsLive(Boolean(data.isLive));
          setChecking(false);
        }
      } catch {
        if (isMounted) {
          setIsLive(false);
          setChecking(false);
        }
      }
    };

    verifyLiveStatus();
    const timer = window.setInterval(verifyLiveStatus, POLL_INTERVAL_MS);

    return () => {
      isMounted = false;
      window.clearInterval(timer);
    };
  }, []);

  const targetHref = isLive
    ? `${COMPANY_INFO.social.tiktok.replace(/\/$/, '')}/live`
    : COMPANY_INFO.social.tiktok;

  return (
    <a
      href={targetHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`live-btn ${isLive ? 'live-btn--active' : 'live-btn--offline'} ${compact ? 'live-btn--compact' : ''}`}
      aria-label={
        isLive
          ? 'ARTTMANIA está EN VIVO en TikTok ahora mismo. Haz clic para entrar al Live'
          : 'Visitar perfil oficial de ARTTMANIA en TikTok'
      }
      title={
        isLive
          ? '¡Estamos transmitiendo EN VIVO en TikTok! Haz clic para unirte'
          : 'Síguenos en TikTok (@artt.mania)'
      }
      data-live={isLive ? 'true' : 'false'}
      data-checking={checking ? 'true' : 'false'}
    >
      <span className={`live-dot ${isLive ? 'live-dot--active' : 'live-dot--offline'}`} aria-hidden="true" />
      <span>{isLive ? 'EN VIVO' : 'TikTok'}</span>
      {!compact && <small>{isLive ? 'TikTok' : '@artt.mania'}</small>}
    </a>
  );
};
