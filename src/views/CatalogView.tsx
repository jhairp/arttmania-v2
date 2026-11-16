import React from 'react';
import { LayoutGrid, TreePine, Ghost, Heart, Flower2, Flag } from 'lucide-react';
import { SEASONS } from '../data/seasonal';
import { Products } from '../sections/Products/Products';
import { Seasonal } from '../sections/Seasonal/Seasonal';
import './views.css';

const ICONS = { TreePine, Ghost, Heart, Flower2, Flag } as const;

interface Props { collection: string; onChange: (col: string) => void; }

export const CatalogView: React.FC<Props> = ({ collection, onChange }) => {
  const season = SEASONS.find((s) => s.id === collection);
  return (
    <div className="catalog-view">
      <div className="container collections-bar" role="tablist" aria-label="Colecciones">
        <button type="button" role="tab" aria-selected={!season}
          className={`collection-chip ${!season ? 'active' : ''}`}
          style={{ ['--chip' as string]: '#0759E8' }} onClick={() => onChange('normal')}>
          <LayoutGrid size={16} /><span>Catálogo normal</span>
        </button>
        {SEASONS.map((s) => {
          const Icon = ICONS[s.iconName];
          return (
            <button key={s.id} type="button" role="tab" aria-selected={collection === s.id}
              className={`collection-chip ${collection === s.id ? 'active' : ''}`}
              style={{ ['--chip' as string]: s.accent }} onClick={() => onChange(s.id)}>
              <Icon size={16} /><span>{s.shortName}</span>
            </button>
          );
        })}
      </div>
      {season ? <Seasonal seasonId={season.id} hideTabs /> : <Products />}
    </div>
  );
};
