export interface Category {
  id: string;
  name: string;
  slug: 'poleras' | 'tazas' | 'gorras' | 'regalos' | 'sublimacion' | 'textiles' | 'merchandising';
  description: string;
  itemCount: number;
  image: string;
  accentColor: string;
}

/**
 * Categorías del Catálogo Oficial ordenadas por popularidad (de más vendidas a especializadas)
 */
export const CATEGORIES: Category[] = [
  {
    id: 'poleras',
    name: 'Poleras',
    slug: 'poleras',
    description: 'Poleras de algodón peinado 20/1, oversize, dry-fit deportivas, manga larga, sudaderas y canguros.',
    itemCount: 8,
    image: '/images/products/polera-personalizada.webp',
    accentColor: '#0759E8'
  },
  {
    id: 'tazas',
    name: 'Tazas',
    slug: 'tazas',
    description: 'Tazas de cerámica AAA 11oz, tazas mágicas termosensibles, bicolor y packs corporativos.',
    itemCount: 5,
    image: '/images/products/taza-blanca.webp',
    accentColor: '#00A878'
  },
  {
    id: 'gorras',
    name: 'Gorras',
    slug: 'gorras',
    description: 'Gorras Snapback de 6 paneles con bordado 3D, gorras Trucker con malla y parches grabados a láser.',
    itemCount: 4,
    image: '/images/products/gorras.webp',
    accentColor: '#F59E0B'
  },
  {
    id: 'regalos',
    name: 'Regalos',
    slug: 'regalos',
    description: 'Cojines personalizados, cuadros, portarretratos en roca, rompecabezas, llaveros láser, pines y bolsas ecológicas.',
    itemCount: 10,
    image: '/images/categories/cat-regalos.webp',
    accentColor: '#E600A9'
  },
  {
    id: 'sublimacion',
    name: 'Sublimación',
    slug: 'sublimacion',
    description: 'Termos de acero inoxidable, tomatodos deportivos, mousepads gamer, cerámicas, platos y tazas sublimadas.',
    itemCount: 10,
    image: '/images/categories/cat-sublimacion.webp',
    accentColor: '#00A878'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    slug: 'textiles',
    description: 'Indumentaria completa: poleras, gorras, polos piqué corporativos, chalecos, cortavientos, mandiles y ropa de trabajo.',
    itemCount: 19,
    image: '/images/categories/cat-textiles.webp',
    accentColor: '#0759E8'
  },
  {
    id: 'merchandising',
    name: 'Merchandising Empresarial',
    slug: 'merchandising',
    description: 'Soluciones corporativas B2B: credenciales PVC con lanyard, bolígrafos metálicos grabados, bolsas de lujo y kits VIP.',
    itemCount: 6,
    image: '/images/categories/cat-merch.webp',
    accentColor: '#F5B800'
  }
];
