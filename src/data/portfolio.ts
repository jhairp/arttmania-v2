export interface PortfolioItem {
  id: string;
  title: string;
  category: 'textiles' | 'sublimacion' | 'regalos' | 'merchandising';
  categoryLabel: string;
  technique: string;
  image: string;
  clientType: string;
  description: string;
  piecesProduced: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'col-poleras',
    title: 'Colección de Poleras Personalizadas & Streetwear',
    category: 'textiles',
    categoryLabel: 'Textiles',
    technique: 'DTF Textil de Alta Densidad',
    image: '/images/gallery/coleccion-poleras.jpg',
    clientType: 'Marcas de Ropa & Creadores Urbanos',
    description: 'Producción de 350 poleras oversize de 240g con estampados en pecho y espalda de alta elasticidad para lanzamiento de temporada.',
    piecesProduced: '350 unidades'
  },
  {
    id: 'col-tazas',
    title: 'Colección de Tazas Corporativas y Mágicas',
    category: 'sublimacion',
    categoryLabel: 'Sublimación',
    technique: 'Sublimación Digital AAA',
    image: '/images/gallery/coleccion-tazas.jpg',
    clientType: 'Entidades Financieras & Agencias',
    description: 'Dotación de 800 tazas bicolor con interior azul e impresión fotográfica de alta nitidez para kits navideños.',
    piecesProduced: '800 unidades'
  },
  {
    id: 'col-gorras',
    title: 'Colección de Gorras Estructuradas con Bordado 3D',
    category: 'textiles',
    categoryLabel: 'Textiles',
    technique: 'Bordado Computarizado 3D Puff',
    image: '/images/gallery/coleccion-gorras.jpg',
    clientType: 'Equipos Deportivos & Clubes',
    description: 'Gorras snapback de 6 paneles en twill negro con logotipo tridimensional de 4mm de alto relieve y costuras de contraste.',
    piecesProduced: '200 unidades'
  },
  {
    id: 'col-termos',
    title: 'Colección de Termos Tumbler con Grabado Láser',
    category: 'sublimacion',
    categoryLabel: 'Sublimación & Merch',
    technique: 'Grabado Láser de Fibra Óptica',
    image: '/images/gallery/coleccion-termos.jpg',
    clientType: 'Empresas de Minería y Tecnología',
    description: 'Termos de acero inoxidable térmico negro mate con nombre individual de cada ejecutivo y logo corporativo permanente.',
    piecesProduced: '150 unidades'
  },
  {
    id: 'prod-empresariales',
    title: 'Dotación de Merchandising Empresarial Integral',
    category: 'merchandising',
    categoryLabel: 'Merchandising',
    technique: 'Técnicas Mixtas (Láser, UV, DTF)',
    image: '/images/gallery/productos-empresariales.jpg',
    clientType: 'Corporaciones Multinacionales',
    description: 'Identificadores magnéticos de aluminio, bolígrafos de latón grabados y credenciales de PVC laminadas para más de 400 colaboradores.',
    piecesProduced: '1,200 piezas combinadas'
  },
  {
    id: 'kits-promocionales',
    title: 'Kits Promocionales VIP Onboarding en Caja Rígida',
    category: 'merchandising',
    categoryLabel: 'Merchandising',
    technique: 'Hot Stamping & DTF UV',
    image: '/images/gallery/kits-promocionales.jpg',
    clientType: 'Startups & Empresas Tecnológicas',
    description: 'Cajas rígidas magnéticas personalizadas con cuna de espuma conteniendo libreta de cuero, termo, flash USB y polo ejecutivo.',
    piecesProduced: '75 kits'
  },
  {
    id: 'productos-eventos',
    title: 'Merchandising Completo para Congresos y Ferias',
    category: 'regalos',
    categoryLabel: 'Regalos & Eventos',
    technique: 'Serigrafía Textil & Chapitas',
    image: '/images/gallery/productos-eventos.jpg',
    clientType: 'Universidades & Organizadores de Ferias',
    description: 'Bolsas de tocuyo estampadas, chapitas de 55mm con mica protectora, lanyards satinados y cuadernos de apuntes.',
    piecesProduced: '2,500 piezas'
  },
  {
    id: 'trabajos-dtf',
    title: 'Muestras Técnicas de Alta Complejidad en DTF Textil',
    category: 'textiles',
    categoryLabel: 'Textiles',
    technique: 'DTF Micro-puntos 2400 DPI',
    image: '/images/gallery/trabajos-dtf.jpg',
    clientType: 'Estudios de Ilustración y Arte Digital',
    description: 'Pruebas de gradientes fotográficos complejos, transparencias y tipografías microscópicas de 0.5 puntos con tacto ultra-suave.',
    piecesProduced: 'Producción continua'
  },
  {
    id: 'trabajos-sublimacion',
    title: 'Galería de Acabados en Sublimación Cerámica & Roca',
    category: 'sublimacion',
    categoryLabel: 'Sublimación',
    technique: 'Sublimación de Alta Presión Térmica',
    image: '/images/gallery/trabajos-sublimacion.jpg',
    clientType: 'Galerías de Arte & Tiendas de Souvenirs',
    description: 'Placas de roca natural pulida y azulejos con reproducciones pictóricas de alta saturación y resistencia al frotamiento.',
    piecesProduced: '180 piezas'
  },
  {
    id: 'grabados-laser',
    title: 'Muestras de Precisión en Grabado y Corte Láser CNC',
    category: 'regalos',
    categoryLabel: 'Láser & Acrílico',
    technique: 'Corte y Grabado Láser CO2 / Fibra',
    image: '/images/gallery/grabados-laser.jpg',
    clientType: 'Hoteles Boutique & Sector Gastronómico',
    description: 'Llaveros de MDF y madera noble con numeración de habitaciones y servilleteros acrílicos con logotipo translúcido.',
    piecesProduced: '320 piezas'
  }
];
