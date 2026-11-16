import React from 'react';
import { COMPANY_INFO } from '../../data/company';
import './LiveButton.css';

/** Botón "EN VIVO" que lleva al perfil de TikTok donde se hacen los lives. */
export const LiveButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <a
    href={COMPANY_INFO.social.tiktok}
    target="_blank"
    rel="noopener noreferrer"
    className={`live-btn ${compact ? 'live-btn--compact' : ''}`}
    aria-label="Ver nuestros lives en TikTok"
  >
    <span className="live-dot" aria-hidden="true" />
    <span>EN VIVO</span>
    {!compact && <small>TikTok</small>}
  </a>
);
