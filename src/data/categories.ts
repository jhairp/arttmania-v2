export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  image: string;
  accentColor: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'textiles',
    name: 'Textiles',
    slug: 'textiles',
    description: 'Poleras personalizadas, sudaderas, gorras, uniformes y ropa de trabajo con acabados duraderos.',
    itemCount: 19,
    image: '/images/categories/cat-textiles.jpg',
    accentColor: '#0759E8'
  },
  {
    id: 'sublimacion',
    name: 'Sublimación',
    slug: 'sublimacion',
    description: 'Tazas personalizadas, termos térmicos, mousepads, cerámicas y artículos para regalo con máxima nitidez.',
    itemCount: 11,
    image: '/images/categories/cat-sublimacion.jpg',
    accentColor: '#00A878'
  },
  {
    id: 'regalos',
    name: 'Regalos y Accesorios',
    slug: 'regalos',
    description: 'Pines metálicos, llaveros MDF con grabado láser, chapitas, agendas ejecutivas y bolsas ecológicas.',
    itemCount: 7,
    image: '/images/categories/cat-regalos.jpg',
    accentColor: '#E600A9'
  },
  {
    id: 'merchandising',
    name: 'Merchandising Empresarial',
    slug: 'merchandising',
    description: 'Soluciones corporativas completas: credenciales PVC, identificadores, bolígrafos grabados y kits VIP.',
    itemCount: 7,
    image: '/images/categories/cat-merch.jpg',
    accentColor: '#F5B800'
  }
];
