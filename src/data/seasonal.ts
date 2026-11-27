import { Product } from './products';
import { COMPANY_INFO } from './company';

export type SeasonId =
  | 'navidad'
  | 'halloween'
  | 'dia-del-amor'
  | 'dia-del-padre'
  | 'dia-de-la-madre'
  | 'identidad-boliviana';

export interface SeasonalItem {
  id: string;
  seasonId: SeasonId;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  includes: string[];
  originalPrice: number;
  promoPrice: number;
  image: string;
  backImage?: string;
  gallery?: string[];
  techniques: string[];
  featured?: boolean;
}

export interface SeasonCategory {
  id: SeasonId;
  name: string;
  shortName: string;
  iconName:
    | 'TreePine'
    | 'Ghost'
    | 'Heart'
    | 'Award'
    | 'Flower2'
    | 'Coffee'
    | 'Shirt'
    | 'Crown'
    | 'Gift'
    | 'Flag';
  hasCountdown?: boolean;
  deadlineLabel: string;
  targetDate: string; // ISO date for countdown
  accentColor: string; // Keep for compatibility
  accent: string;
  accentSoft: string;
  surfaceTint: string;
  gradient: string;
  badgeText: string;
  description: string;
}

export const SEASONS: SeasonCategory[] = [
  {
    id: 'navidad',
    name: 'Navidad & Fin de Año',
    shortName: 'Navidad',
    iconName: 'TreePine',
    hasCountdown: true,
    deadlineLabel: 'Cierre de pedidos con entrega garantizada antes del 24 de Diciembre:',
    targetDate: '2026-12-20T23:59:59',
    accentColor: '#D32F2F',
    accent: '#D32F2F',
    accentSoft: 'rgba(211, 47, 47, 0.15)',
    surfaceTint: 'rgba(179, 38, 46, 0.10)',
    gradient: 'linear-gradient(135deg, #B3262E 0%, #D4AF37 100%)',
    badgeText: 'Campaña Navideña Activa',
    description: 'Regalos corporativos, adornos grabados a láser, poleras familiares navideñas y canastas personalizadas con identidad propia.'
  },
  {
    id: 'halloween',
    name: 'Halloween & Noche de Brujas · Línea Umbría',
    shortName: 'Halloween',
    iconName: 'Ghost',
    hasCountdown: true,
    deadlineLabel: 'Cierre de pedidos con entrega garantizada antes del 31 de Octubre:',
    targetDate: '2027-10-27T23:59:59',
    accentColor: '#E8590C',
    accent: '#E8590C',
    accentSoft: 'rgba(232, 89, 12, 0.16)',
    surfaceTint: 'rgba(75, 29, 107, 0.12)',
    gradient: 'linear-gradient(135deg, #E8590C 0%, #7B2CBF 100%)',
    badgeText: 'Colección Umbría Activa',
    description: 'Colección exclusiva "Umbría de Arttmania": poleras negras de algodón peinado premium con estampados DTF de alta definición de íconos del terror, cultura dark y edición Halloween.'
  },
  {
    id: 'dia-del-amor',
    name: 'Día del Amor & la Amistad',
    shortName: 'Día del amor',
    iconName: 'Heart',
    hasCountdown: true,
    deadlineLabel: 'Cierre de pedidos especiales para el Día del Amor:',
    targetDate: '2027-02-12T23:59:59',
    accentColor: '#E91E63',
    accent: '#E91E63',
    accentSoft: 'rgba(233, 30, 99, 0.16)',
    surfaceTint: 'rgba(233, 30, 99, 0.10)',
    gradient: 'linear-gradient(135deg, #C2185B 0%, #FF6090 100%)',
    badgeText: 'Especial Parejas & Amistad',
    description: 'Packs dobles de poleras y canguros para parejas, tazas mágicas termosensibles, cojines con código Spotify y regalos románticos personalizados.'
  },
  {
    id: 'dia-del-padre',
    name: 'Especial Día del Padre',
    shortName: 'Día del padre',
    iconName: 'Award',
    hasCountdown: true,
    deadlineLabel: 'Cierre de pedidos con entrega garantizada para el Día del Padre:',
    targetDate: '2027-03-17T23:59:59',
    accentColor: '#0B63E5',
    accent: '#0B63E5',
    accentSoft: 'rgba(11, 99, 229, 0.16)',
    surfaceTint: 'rgba(11, 99, 229, 0.10)',
    gradient: 'linear-gradient(135deg, #0B63E5 0%, #D4AF37 100%)',
    badgeText: 'Homenaje a Papá',
    description: 'Kits ejecutivos grabados a láser, combos parrilleros con mandil bordado, poleras edición papá, gorras 3D y vasos térmicos personalizados.'
  },
  {
    id: 'dia-de-la-madre',
    name: 'Especial Día de la Madre',
    shortName: 'Día de la madre',
    iconName: 'Flower2',
    hasCountdown: true,
    deadlineLabel: 'Cierre de pedidos con entrega garantizada para el Día de la Madre:',
    targetDate: '2027-05-25T23:59:59',
    accentColor: '#D81B60',
    accent: '#D81B60',
    accentSoft: 'rgba(216, 27, 96, 0.16)',
    surfaceTint: 'rgba(216, 27, 96, 0.10)',
    gradient: 'linear-gradient(135deg, #D81B60 0%, #D4AF37 100%)',
    badgeText: 'Homenaje a Mamá',
    description: 'Detalles únicos para mamá: termos digitales grabados, sets de cojín y taza floral, cuadros conmemorativos, mandiles bordados y cajas de regalo.'
  },
  {
    id: 'identidad-boliviana',
    name: 'Colección Identidad Boliviana',
    shortName: 'Identidad Boliviana',
    iconName: 'Flag',
    hasCountdown: false,
    deadlineLabel: '',
    targetDate: '2027-12-31T23:59:59',
    accentColor: '#D32F2F',
    accent: '#D32F2F',
    accentSoft: 'rgba(211, 47, 47, 0.16)',
    surfaceTint: 'rgba(0, 168, 120, 0.10)',
    gradient: 'linear-gradient(135deg, #D32F2F 0%, #F5B800 50%, #00A878 100%)',
    badgeText: 'Orgullo & Cultura de Bolivia',
    description: 'Diseños exclusivos inspirados en la cultura, fauna andina, símbolos patrios y tradiciones de Bolivia en poleras, gorras, termos y souvenirs.'
  }
];

export const SEASONAL_ITEMS: SeasonalItem[] = [
  // =================== NAVIDAD & FIN DE AÑO 2026 ===================
  // --- 1. MOCKUPS DESTACADOS EN ALTA RESOLUCIÓN ---
  {
    id: 'navidad-mockup-santa-cool',
    seasonId: 'navidad',
    name: 'Polera Santa Cool con Gafas (Blanco)',
    badge: 'Más Vendido',
    tagline: 'Algodón peinado premium con Papá Noel moderno y luces festivas',
    description: 'Confección en suave algodón peinado 20/1 con estampado en DTF textil de alta elasticidad. Un clásico moderno para celebraciones navideñas familiares y de amigos.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Polera algodón peinado 100% con estampado DTF textil'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_santa_cool_blanco.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'navidad-mockup-arbol-dorado',
    seasonId: 'navidad',
    name: 'Polera Árbol Dorado & Ciervo Festivo (Verde Bosque)',
    badge: 'Línea Elegante',
    tagline: 'Composición sobria con pino en cinta dorada y reno',
    description: 'Diseño minimalista y elegante en tonos oro brillante sobre tela verde bosque. Ideal para cenas navideñas de fin de año o uniformes de temporada.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Detalles en tinta dorada de alta definición'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_arbol_dorado_verde.jpg',
    techniques: ['DTF Textil Dorado', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'navidad-mockup-grinch-luces',
    seasonId: 'navidad',
    name: 'Polera El Grinch con Guirnalda de Luces (Rojo Navidad)',
    badge: 'Tendencia 2026',
    tagline: 'El personaje favorito de quienes viven la fiesta a su manera',
    description: 'Ilustración detallada y expresiva del Grinch con gorrito navideño y corona de luces brillantes sobre rojo carmesí.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Algodón reactivo que no despinta ni encoge'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_grinch_luces_rojo.jpg',
    techniques: ['DTF Textil Full Color', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'navidad-mockup-mickey-minnie',
    seasonId: 'navidad',
    name: 'Dúo de Poleras Pareja "Mickey & Minnie Navideños"',
    badge: 'Especial Parejas',
    tagline: '2 Poleras combinadas con diseño continuo y corazón rojo (120 Bs. el par)',
    description: 'Set especial para novios y matrimonios. Ilustraciones sincronizadas de Mickey y Minnie dándose un beso con gorrito de Papá Noel.',
    includes: [
      'Precio Promocional: 120 Bs. el par (2 poleras) | 65 Bs. individual',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Estampado DTF textil de máxima nitidez en algodón peinado'
    ],
    originalPrice: 160,
    promoPrice: 120,
    image: '/images/seasonal/navidad/mockup_pareja_mickey_minnie.jpg',
    techniques: ['DTF Textil (Par 2 Poleras)', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'navidad-mockup-familia-munecos',
    seasonId: 'navidad',
    name: 'Pack Familiar "Familia Muñecos de Nieve"',
    badge: 'Pack Familiar',
    tagline: 'Set temático para papá, mamá e hijos con copos de nieve',
    description: 'Colección de poleras navideñas a juego para sesiones de fotos, nochebuena y recuerdos inolvidables en familia.',
    includes: [
      '3 Poleras familiares (180 Bs. el pack de 3 | 120 Bs. el par | 65 Bs. unidad)',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Ilustración personalizada de muñecos de nieve con gorritos'
    ],
    originalPrice: 240,
    promoPrice: 180,
    image: '/images/seasonal/navidad/mockup_familia_munecos_verde.jpg',
    techniques: ['DTF Textil', 'Sublimación Digital'],
    featured: true
  },
  {
    id: 'navidad-mockup-nacimiento-sagrado',
    seasonId: 'navidad',
    name: 'Polera Silueta Nacimiento Sagrado & Estrella (Rojo)',
    badge: 'Tradición & Fe',
    tagline: 'El verdadero sentido de la Navidad en trazo fino dorado',
    description: 'Representación artística y solemne del pesebre de Belén con la estrella guía en acabado oro sobre fondo rojo navideño.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)',
      'Estampado dorado mate de alta finura y elegancia'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_nacimiento_sagrado_rojo.jpg',
    techniques: ['DTF Textil Dorado', 'Logo Mediano (38 Bs.)'],
    featured: true
  },

  // --- 2. MODELOS INDIVIDUALES CATÁLOGO DIGITAL 2026 (N01 - N16 y N18) ---
  {
    id: 'navidad-modelo-n01',
    seasonId: 'navidad',
    name: 'Modelo N01 · Santa Claus Ho Ho Ho (Gafas Cool)',
    badge: 'Catálogo N01',
    tagline: 'Papá Noel con actitud, gafas de sol y saludo de paz',
    description: 'Polera clásica blanca con el personaje festivo favorito en versión juvenil y fresca.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Estampado DTF textil en algodón peinado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N01.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n02',
    seasonId: 'navidad',
    name: 'Modelo N02 · Reno Navideño Nariz Roja (Rojo Carmesí)',
    badge: 'Catálogo N02',
    tagline: 'Tierno reno sonriente con astas y estrellas de nieve',
    description: 'Polera roja festiva con ilustración tierna de reno navideño en alta resolución.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado reactivo de tacto suave'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N02.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n03',
    seasonId: 'navidad',
    name: 'Modelo N03 · El Grinch Navideño con Gorro (Verde)',
    badge: 'Catálogo N03',
    tagline: 'El clásico antihéroe que roba sonrisas en Navidad',
    description: 'Diseño icónico del Grinch sonriendo con gorro de Santa sobre tela verde de temporada.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Tela peinada de máxima suavidad'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N03.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n04',
    seasonId: 'navidad',
    name: 'Modelo N04 · Muñeco de Nieve con Bufanda y Gorro',
    badge: 'Catálogo N04',
    tagline: 'Clásico muñeco de nieve de invierno con detalles rojos',
    description: 'Ilustración entrañable de muñeco de nieve sonriente con copos y bufanda tejida.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Confección 100% algodón peinado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N04.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n05',
    seasonId: 'navidad',
    name: 'Modelo N05 · Pesebre & Nacimiento Sagrado (Negro Grafito)',
    badge: 'Catálogo N05',
    tagline: 'Silueta dorada del nacimiento con estrella de Belén',
    description: 'Diseño solemne y elegante en trazo dorado sobre fondo oscuro para quienes celebran el verdadero espíritu de la Navidad.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Fondo negro grafito con estampado dorado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N05.jpg',
    techniques: ['DTF Textil Dorado', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n06',
    seasonId: 'navidad',
    name: 'Modelo N06 · Árbol Ribbon Geométrico (Rojo Fiesta)',
    badge: 'Catálogo N06',
    tagline: 'Pino estilizado en cinta continua dorada con estrella',
    description: 'Composición moderna de árbol de navidad abstracto en tonos dorados sobre prenda roja festiva.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado premium con acabado dorado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N06.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n07',
    seasonId: 'navidad',
    name: 'Modelo N07 · Galleta de Jengibre Navideña (Verde Pino)',
    badge: 'Catálogo N07',
    tagline: 'Muñeco de jengibre sonriente con moño y botones rojos',
    description: 'Diseño tradicional y simpático para niños, familias y amantes de la repostería navideña.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Tela suave 180 gramos con estampado elástico'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N07.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n08',
    seasonId: 'navidad',
    name: 'Modelo N08 · Feliz Navidad Lettering & Campanas',
    badge: 'Catálogo N08',
    tagline: 'Frase tradicional con campanas doradas y lazo rojo',
    description: 'Tipografía clásica y festiva con follaje de acebo y campanas para desear felices fiestas.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado blanco con full color HD'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N08.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n09',
    seasonId: 'navidad',
    name: 'Modelo N09 · Snoopy & Woodstock Navideños (Rojo)',
    badge: 'Catálogo N09',
    tagline: 'Snoopy abrazando su corazón festivo con gorrito de Santa',
    description: 'Diseño nostálgico y adorable del icónico perrito blanco con detalles de nieve y amor.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón reactivo de alta gama'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N09.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n10',
    seasonId: 'navidad',
    name: 'Modelo N10 · Reno Urbano con Gafas de Sol (Verde)',
    badge: 'Catálogo N10',
    tagline: 'Reno con actitud y lentes reflejantes de invierno',
    description: 'Diseño con gran personalidad para chicos, jóvenes y familias modernas.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Tela verde bosque peinada'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N10.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n11',
    seasonId: 'navidad',
    name: 'Modelo N11 · Trío de Gnomos Escandinavos (Blanco)',
    badge: 'Catálogo N11',
    tagline: 'Tres gnomos nórdicos con gorros tejidos y barbas largas',
    description: 'Estética escandinava elegante y navideña en tonos rojo y gris sobre polera blanca.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón 100% 20/1 con estampado nítido'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N11.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n12',
    seasonId: 'navidad',
    name: 'Modelo N12 · Santa Claus Clásico Realista (Rojo)',
    badge: 'Catálogo N12',
    tagline: 'Papá Noel con gesto de silencio y gafas doradas',
    description: 'Ilustración de alta calidad artística con textura realista de barba y guantes blancos.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado rojo intenso en resolución HD'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N12.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n13',
    seasonId: 'navidad',
    name: 'Modelo N13 · Ciervo Poligonal Geométrico Oro (Negro)',
    badge: 'Catálogo N13',
    tagline: 'Estética geométrica vanguardista en líneas doradas',
    description: 'Diseño sofisticado para quienes prefieren un look navideño sobrio, moderno y elegante.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Fondo negro profundo con estampado dorado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N13.jpg',
    techniques: ['DTF Textil Dorado', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n14',
    seasonId: 'navidad',
    name: 'Modelo N14 · Polera "Navidad en Familia" (Blanco)',
    badge: 'Catálogo N14',
    tagline: 'Tres pinos navideños y dedicatoria familiar cálida',
    description: 'Prenda pensada para reuniones y cenas familiares con pinos decorados y tipografía festiva.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado suave con opción de apellido'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N14.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n15',
    seasonId: 'navidad',
    name: 'Modelo N15 · Pingüino Festivo con Bufanda (Verde)',
    badge: 'Catálogo N15',
    tagline: 'Tierno pingüinito polar con gorro rojo y bufanda tejida',
    description: 'Modelo favorito para toda la familia, cursos escolares y regalos navideños.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Tela hipoalergénica de algodón peinado'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N15.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n16',
    seasonId: 'navidad',
    name: 'Modelo N16 · Reno Navideño Sonriente (Rojo)',
    badge: 'Catálogo N16',
    tagline: 'Carita sonriente de reno con cascabel y nieve',
    description: 'Prenda festiva muy tierna para sesiones fotográficas navideñas.',
    includes: ['Precio: 65 Bs. unidad | 120 Bs. el par', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Algodón peinado de primera con estampado flexible'],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/modelo_N16.jpg',
    techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)']
  },
  {
    id: 'navidad-modelo-n18',
    seasonId: 'navidad',
    name: 'Modelo N18 · Dúo Pareja "Él es mi regalo / Ella es mi regalo"',
    badge: 'Catálogo N18',
    tagline: 'Set de 2 poleras divertidas con lazo dorado de obsequio (120 Bs. el par)',
    description: 'Frases sincronizadas con lazo de regalo para celebrar las fiestas en pareja.',
    includes: ['Precio Promocional: 120 Bs. el par (2 poleras) | 65 Bs. unidad', 'Logos medianos a 38 Bs.', 'Tallas: S, M, L (arriba de L consultar para cotizar)', 'Set de 2 poleras rojas en algodón peinado'],
    originalPrice: 160,
    promoPrice: 120,
    image: '/images/seasonal/navidad/modelo_N18.jpg',
    techniques: ['DTF Textil (Par 2 Poleras)', 'Logo Mediano (38 Bs.)']
  },

  // --- 3. CANGUROS NAVIDEÑOS (VISTA DELANTERA Y TRASERA · 168 BS.) ---
  {
    id: 'navidad-canguro-gato-rojo',
    seasonId: 'navidad',
    name: 'Canguro Navideño Gato con Gorro (Rojo · Delantera y Trasera)',
    badge: 'Frente + Espalda',
    tagline: 'Canguro abrigado con logo en pecho y estampado grande en espalda',
    description: 'Canguro hoodie navideño en algodón frisado de alto gramaje con doble estampado DTF: gatito navideño en el pecho delantero e ilustración completa en la parte trasera.',
    includes: [
      'Precio: 168 Bs. (incluye estampado delantero y trasero)',
      'Algodón frisado perchado suave con capucha y bolsillo canguro',
      'Tallas disponibles: S, M, L (arriba de L consultar para cotizar)',
      'Estampado DTF textil HD de máxima durabilidad'
    ],
    originalPrice: 200,
    promoPrice: 168,
    image: '/images/seasonal/navidad/canguro_gato_rojo_1.jpg',
    backImage: '/images/seasonal/navidad/canguro_gato_rojo_2.jpg',
    gallery: [
      '/images/seasonal/navidad/canguro_gato_rojo_1.jpg',
      '/images/seasonal/navidad/canguro_gato_rojo_2.jpg'
    ],
    techniques: ['DTF Delantera + Trasera'],
    featured: true
  },
  {
    id: 'navidad-canguro-muneco-negro',
    seasonId: 'navidad',
    name: 'Canguro Navideño Muñeco de Nieve (Negro · Delantera y Trasera)',
    badge: 'Frente + Espalda',
    tagline: 'Canguro negro profundo con muñeco de nieve en pecho y espalda',
    description: 'Canguro hoodie negro confeccionado en frisa térmica pesada con estampado DTF frontal en el pecho y diseño navideño completo en la espalda.',
    includes: [
      'Precio: 168 Bs. (incluye estampado delantero y trasero)',
      'Algodón frisado perchado suave con capucha y bolsillo canguro',
      'Tallas disponibles: S, M, L (arriba de L consultar para cotizar)',
      'Estampado DTF textil HD de máxima durabilidad'
    ],
    originalPrice: 200,
    promoPrice: 168,
    image: '/images/seasonal/navidad/canguro_muneco_negro_1.jpg',
    backImage: '/images/seasonal/navidad/canguro_muneco_negro_2.jpg',
    gallery: [
      '/images/seasonal/navidad/canguro_muneco_negro_1.jpg',
      '/images/seasonal/navidad/canguro_muneco_negro_2.jpg'
    ],
    techniques: ['DTF Delantera + Trasera'],
    featured: true
  },
  {
    id: 'navidad-canguro-pinguino-azul',
    seasonId: 'navidad',
    name: 'Canguro Navideño Pingüinos Festivos (Azul · Delantera y Trasera)',
    badge: 'Frente + Espalda',
    tagline: 'Canguro azul intenso con pingüinito en pecho y arte en espalda',
    description: 'Canguro hoodie azul rey de tacto abrigado con doble personalización DTF: detalle de pingüino navideño adelante y composición completa atrás.',
    includes: [
      'Precio: 168 Bs. (incluye estampado delantero y trasero)',
      'Algodón frisado perchado suave con capucha y bolsillo canguro',
      'Tallas disponibles: S, M, L (arriba de L consultar para cotizar)',
      'Estampado DTF textil HD de máxima durabilidad'
    ],
    originalPrice: 200,
    promoPrice: 168,
    image: '/images/seasonal/navidad/canguro_pinguino_azul_1.webp',
    backImage: '/images/seasonal/navidad/canguro_pinguino_azul_2.webp',
    gallery: [
      '/images/seasonal/navidad/canguro_pinguino_azul_1.webp',
      '/images/seasonal/navidad/canguro_pinguino_azul_2.webp'
    ],
    techniques: ['DTF Delantera + Trasera'],
    featured: true
  },
  {
    id: 'navidad-canguro-snoopy-verde',
    seasonId: 'navidad',
    name: 'Canguro Navideño Snoopy (Verde Bosque · Delantera y Trasera)',
    badge: 'Frente + Espalda',
    tagline: 'Canguro verde navideño con Snoopy en pecho y diseño en espalda',
    description: 'Canguro hoodie verde bosque en frisa premium con estampado DTF en pecho delantero y diseño grande de Snoopy navideño en la parte trasera.',
    includes: [
      'Precio: 168 Bs. (incluye estampado delantero y trasero)',
      'Algodón frisado perchado suave con capucha y bolsillo canguro',
      'Tallas disponibles: S, M, L (arriba de L consultar para cotizar)',
      'Estampado DTF textil HD de máxima durabilidad'
    ],
    originalPrice: 200,
    promoPrice: 168,
    image: '/images/seasonal/navidad/canguro_snoopy_verde_1.webp',
    backImage: '/images/seasonal/navidad/canguro_snoopy_verde_2.webp',
    gallery: [
      '/images/seasonal/navidad/canguro_snoopy_verde_1.webp',
      '/images/seasonal/navidad/canguro_snoopy_verde_2.webp'
    ],
    techniques: ['DTF Delantera + Trasera'],
    featured: true
  },

  // --- 4. PACK FAMILIAR ---
  {
    id: 'pack-navideno-familiar',
    seasonId: 'navidad',
    name: 'Pack Familiar "Navidad en Casa"',
    badge: 'Pack Estrella',
    tagline: 'Ideal para sesiones de fotos familiares y nochebuena',
    description: 'Set completo de 3 poleras de algodón peinado con estampado navideño en DTF textil + 2 adornos en madera cortados a láser para el árbol.',
    includes: [
      '3 Poleras algodón peinado (tallas S, M, L)',
      'Estampado full color navideño personalizado con apellido familiar',
      '2 Adornos navideños de madera MDF grabados con nombres',
      'Caja de regalo festiva incluida'
    ],
    originalPrice: 240,
    promoPrice: 195,
    image: '/images/seasonal/navidad/mockup_familia_munecos_verde.jpg',
    techniques: ['DTF Textil', 'Grabado Láser'],
    featured: true
  },

  // =================== HALLOWEEN · COLECCIÓN UMBRÍA DE ARTTMANIA ===================
  {
    id: 'halloween-modelo-h01',
    seasonId: 'halloween',
    name: 'Modelo H01 · Crypt Demon Ojos Azules (Umbría)',
    badge: 'Catálogo H01',
    tagline: 'Rostro demoníaco hiperrealista con iluminación azul eléctrica',
    description: 'Confección en algodón peinado negro intenso con estampado DTF de altísima resolución que resalta cada textura, sombra y brillo ocular.',
    includes: [
      'Polera algodón peinado 100% negro profundo (línea Umbría)',
      'Estampado DTF textil HD de alta resistencia al lavado',
      'Tallas disponibles: Infantil 2-14 y Adultos S a XXXL',
      'Precios especiales por mayor a partir de 12 unidades (desde 25 Bs.)'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H01.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h02',
    seasonId: 'halloween',
    name: 'Modelo H02 · Polera Oficial "Umbría de Arttmania"',
    badge: 'Edición Oficial',
    tagline: 'Emblema gótico en textura ósea dorada sobre cruz carmesí',
    description: 'El diseño insignia de nuestra línea oscura "Umbría de Arttmania". Tipografía metal gótica con detalles en alto contraste sobre prenda negra oversize o corte clásico.',
    includes: [
      'Algodón peinado 20/1 de tacto suave y cuello rib reforzado',
      'Estampado DTF de máxima nitidez con rojos y dorados intensos',
      'Disponible en corte clásico y oversize (tallas S a XXXL)',
      'Descuento especial para grupos, bandas y eventos de Halloween'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H02.jpg',
    techniques: ['DTF Textil HD', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h03',
    seasonId: 'halloween',
    name: 'Modelo H03 · Chucky "Good Guys" Reflejo en Cuchillo',
    badge: 'Más Vendido',
    tagline: 'El muñeco diabólico con reflejo de víctima en la hoja metálica',
    description: 'Ilustración cinematográfica de Chucky con cicatrices detalladas, ojos azules penetrantes y contraste de luces cálidas y frías.',
    includes: [
      'Polera negra de algodón reactivo que no destiñe ni encoge',
      'Impresión DTF de calidad fotográfica y tacto flexible',
      'Tallas completas para niños, jóvenes y adultos',
      'Precios mayoristas por docena para fiestas y tiendas'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H03.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h04',
    seasonId: 'halloween',
    name: 'Modelo H04 · Frankenstein Neón & Fuego Púrpura',
    badge: 'Catálogo H04',
    tagline: 'El clásico monstruo en verde flúor rodeado de energía violeta',
    description: 'Reinterpretación moderna y vibrante del monstruo de Frankenstein con saturación neón que destaca con fuerza sobre el fondo negro.',
    includes: [
      'Algodón peinado 180g de alta durabilidad',
      'Tintas DTF vibrantes con contraste verde ácido y púrpura',
      'Tallas Infantiles y Adultos S a XXXL',
      'Envíos a todo el país y atención por mayor'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H04.jpg',
    techniques: ['DTF Textil Neón', 'Algodón Peinado'],
    featured: false
  },
  {
    id: 'halloween-modelo-h05',
    seasonId: 'halloween',
    name: 'Modelo H05 · Freddy Krueger Pesadilla en Elm Street',
    badge: 'Clásico del Terror',
    tagline: 'Freddy con su sombrero clásico y guante de cuchillas afiladas',
    description: 'Arte hiperrealista del señor de las pesadillas con destellos verdes y rojos sobre tela negra premium de la colección Umbría.',
    includes: [
      'Polera negra 100% algodón peinado hipoalergénico',
      'Estampado DTF de gran formato en pecho',
      'Tallas S, M, L, XL, XXL y XXXL',
      'Precio promocional por campaña de Halloween'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H05.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h06',
    seasonId: 'halloween',
    name: 'Modelo H06 · Gato Brujo Místico & Calavera Dorada',
    badge: 'Tendencia Halloween',
    tagline: 'Felino hechicero con sombrero violeta, aura eléctrica y dije de cráneo',
    description: 'Diseño místico y cautivador que combina la magia de Noche de Brujas con destellos neón púrpura y detalles en oro.',
    includes: [
      'Prenda suave de algodón peinado negro azabache',
      'Colores intensos resistentes a múltiples lavados',
      'Tallas disponibles desde infantil hasta XXXL',
      'Favorito para fiestas temáticas y regalo de temporada'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H06.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h07',
    seasonId: 'halloween',
    name: 'Modelo H07 · Ghostface Scream bajo Luna de Sangre',
    badge: 'Más Cotizado',
    tagline: 'El ícono del slasher con luna roja, relámpagos violetas y puñal carmesí',
    description: 'Composición atmosférica de Ghostface emergiendo entre la tormenta y la luna roja. Uno de los modelos más solicitados de la temporada.',
    includes: [
      'Algodón peinado premium con costuras reforzadas',
      'Estampado DTF de alto contraste y profundidad cromática',
      'Tallas juveniles y adultos S a XXXL',
      'Descuentos por volumen desde 12 unidades'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H07.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h08',
    seasonId: 'halloween',
    name: 'Modelo H08 · Pennywise IT El Payaso Bailarín',
    badge: 'Catálogo H08',
    tagline: 'Mirada siniestra y sonrisa macabra sobre aura de fuego rojo',
    description: 'Retrato frontal impactante de Pennywise con maquillaje agrietado, ojos amarillos brillantes y cuello victoriano desgastado.',
    includes: [
      'Confección en algodón peinado 20/1 de primera calidad',
      'Estampado DTF de máxima definición y durabilidad',
      'Tallas S a XXXL y tallas infantiles a pedido',
      'Precios de fábrica al por mayor y menor'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H08.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h09',
    seasonId: 'halloween',
    name: 'Modelo H09 · Jason Voorhees Máscara Viernes 13',
    badge: 'Catálogo H09',
    tagline: 'La legendaria máscara de hockey con mirada roja e iluminación neón',
    description: 'Diseño imponente de Jason Voorhees con textura desgastada de batalla y contra-luz fucsia y azul eléctrico.',
    includes: [
      'Polera negra de algodón reactivo de alto gramaje',
      'Impresión DTF full color sin límite de detalles',
      'Tallas completas para hombre y mujer',
      'Atención de pedidos individuales y corporativos'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H09.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h10',
    seasonId: 'halloween',
    name: 'Modelo H10 · Tiffany "La Novia de Chucky" Neón',
    badge: 'Especial Parejas',
    tagline: 'Estética glam rock con letras de neón fucsia/azul y ojos verdes',
    description: 'El complemento ideal del modelo Chucky (H03) para parejas en Halloween o para lucir un estilo dark pop inconfundible.',
    includes: [
      'Algodón peinado suave con caída impecable',
      'Efecto visual de luces neón rosadas y celestes en DTF',
      'Ideal para combinar en pareja con el Modelo H03 de Chucky',
      'Disponible en todas las tallas'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H10.jpg',
    techniques: ['DTF Textil Neón', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h11',
    seasonId: 'halloween',
    name: 'Modelo H11 · Art the Clown "Terrifier" Edición Gore',
    badge: 'Tendencia 2026',
    tagline: 'El nuevo ícono del cine de terror moderno en máxima crudeza visual',
    description: 'Estampado frontal de Art the Clown con tipografía roja sangrienta "TERRIFIER" y fondo de brasas ardientes.',
    includes: [
      'Polera negra línea Umbría en algodón 100% peinado',
      'Estampado DTF de gran formato y negros profundos',
      'Tallas S, M, L, XL, XXL y XXXL',
      'Precios especiales por docena'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H11.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h12',
    seasonId: 'halloween',
    name: 'Modelo H12 · Blanka Street Fighter Bestia Eléctrica',
    badge: 'Edición Gamer Dark',
    tagline: 'Versión monstruosa hiperrealista rodeada de relámpagos y fuego',
    description: 'Fusión perfecta entre cultura gamer y terror: Blanka desatando su descarga eléctrica en una ilustración llena de energía.',
    includes: [
      'Algodón peinado premium resistente al uso intensivo',
      'Gama cromática explosiva en verde, naranja y azul eléctrico',
      'Tallas infantiles, juveniles y adultos hasta XXXL',
      'Entrega inmediata y envíos a toda Bolivia'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H12.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: false
  },
  {
    id: 'halloween-modelo-h13',
    seasonId: 'halloween',
    name: 'Modelo H13 · Calavera Mexicana Catrina Floral 3D',
    badge: 'Arte & Tradición',
    tagline: 'Cráneo bordado en flores multicolores con relieve visual',
    description: 'Homenaje al Día de los Muertos con una calavera artística repleta de pétalos vibrantes, pedrería simulada y contraste espectacular sobre negro.',
    includes: [
      'Polera negra de algodón peinado que realza cada color floral',
      'Estampado DTF de altísima riqueza cromática',
      'Corte unisex cómodo en tallas infantil a XXXL',
      'Descuento por cantidad para eventos culturales y comparsas'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H13.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'halloween-modelo-h14',
    seasonId: 'halloween',
    name: 'Modelo H14 · Freezer Dragon Ball Aura Oscura',
    badge: 'Edición Anime Dark',
    tagline: 'El emperador del mal envuelto en llamas de ki púrpura y lettering',
    description: 'Para los fanáticos del anime en versión oscura: Freezer en pose desafiante con aura violeta incandescente y tipografía urbana.',
    includes: [
      'Prenda 100% algodón peinado de tacto fresco y suave',
      'Impresión DTF de alta definición con tonos violetas intensos',
      'Tallas para niños, jóvenes y adultos (S a XXXL)',
      'Precio mayorista disponible por docena'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H14.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: false
  },
  {
    id: 'halloween-modelo-h15',
    seasonId: 'halloween',
    name: 'Modelo H15 · Guerrero Vikingo Ragnar Ensangrentado',
    badge: 'Catálogo H15',
    tagline: 'Mirada azul penetrante tras la batalla en estética brutal dark',
    description: 'Retrato fotorrealista de guerrero nórdico cubierto de sangre de combate con ojos azules hipnóticos sobre fondo negro.',
    includes: [
      'Algodón peinado negro profundo de 180 gramos',
      'Estampado DTF con nivel de detalle fotográfico',
      'Tallas S a XXXL con cuello reforzado',
      'Precios de campaña por unidad y al por mayor'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/halloween/modelo_H15.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: false
  },

  // =================== DÍA DEL AMOR ===================
  {
    id: 'amor-combo-parejas-perfect-match',
    seasonId: 'dia-del-amor',
    name: 'Combo Parejas "Perfect Match" (2 Poleras + 2 Tazas Mágicas)',
    badge: 'Top Día del Amor',
    tagline: 'Poleras complementarias + Tazas mágicas que revelan foto con calor',
    description: 'El kit más vendido para enamorados: 2 poleras combinadas con diseños sincronizados + 2 tazas mágicas termosensibles con su foto favorita.',
    includes: [
      '2 Poleras de algodón peinado con diseño complementario (tallas a elección)',
      '2 Tazas mágicas termosensibles de 11oz',
      '2 Llaveros de madera cortados a láser con iniciales y fecha',
      'Empaque de regalo con lazo satinado'
    ],
    originalPrice: 220,
    promoPrice: 175,
    image: '/images/products/taza-magica.jpg',
    techniques: ['DTF Textil', 'Sublimación Mágica', 'Grabado Láser'],
    featured: true
  },
  {
    id: 'amor-duo-poleras-pareja',
    seasonId: 'dia-del-amor',
    name: 'Dúo de Poleras Pareja "King & Queen / Amor Eterno"',
    badge: 'Especial Parejas',
    tagline: '2 Poleras de algodón peinado con estampado DTF de alta definición',
    description: 'Set de 2 poleras personalizadas para novios y esposos con ilustraciones conectadas, fechas especiales o frases de pareja.',
    includes: [
      '2 Poleras 100% algodón peinado (colores blanco, negro o rojo)',
      'Estampado DTF textil resistente a lavados',
      'Personalización con nombres o fecha de aniversario',
      'Presentación lista para obsequiar'
    ],
    originalPrice: 150,
    promoPrice: 120,
    image: '/images/products/polera-personalizada.jpg',
    techniques: ['DTF Textil Full Color', 'Algodón Peinado'],
    featured: true
  },
  {
    id: 'amor-cojin-cuadro-spotify',
    seasonId: 'dia-del-amor',
    name: 'Set Cojín & Cuadro Spotify con Código de Canción',
    badge: 'Recuerdo Eterno',
    tagline: 'Su foto favorita y el código escaneable de su canción especial',
    description: 'Cojín de felpa suave sublimado en alta resolución + Cuadro decorativo con código de canción de Spotify y fecha de aniversario.',
    includes: [
      'Cojín 40x40 cm con relleno siliconado y cierre oculto',
      'Cuadro fotográfico de 20x30 cm con placa sublimada HD',
      'Diseño personalizado con código Spotify funcional'
    ],
    originalPrice: 135,
    promoPrice: 105,
    image: '/images/products/almohadas.jpg',
    techniques: ['Sublimación Full Color'],
    featured: true
  },
  {
    id: 'amor-duo-hoodies-bordados',
    seasonId: 'dia-del-amor',
    name: 'Dúo Canguros Hoodie "Together Since" con Fecha Bordada',
    badge: 'Edición Premium',
    tagline: '2 Canguros abrigados con bordado de fecha en números romanos',
    description: 'Pareja de canguros hoodie en algodón frisado de alto gramaje con su fecha especial bordada en el pecho e iniciales en la manga.',
    includes: [
      '2 Canguros Hoodie pesados con capucha forrada y bolsillo canguro',
      'Bordado computarizado de alta densidad en pecho y manga',
      'Tallas S a XXL a elección',
      'Caja de regalo especial'
    ],
    originalPrice: 310,
    promoPrice: 260,
    image: '/images/products/sudadera-hoodie.jpg',
    techniques: ['Bordado Computarizado', 'DTF Textil'],
    featured: true
  },
  {
    id: 'amor-par-tazas-magicas',
    seasonId: 'dia-del-amor',
    name: 'Dúo Tazas Mágicas Termosensibles "Nuestro Amor"',
    badge: 'Efecto Sorpresa',
    tagline: 'Negras en frío y revelan sus fotos al servir café o té caliente',
    description: 'Par de tazas mágicas importadas de 11 onzas personalizadas con collage fotográfico y dedicatoria romántica.',
    includes: [
      '2 Tazas mágicas termosensibles de cerámica AAA',
      'Impresión panorámica full color de alta nitidez',
      '2 Cajas individuales de regalo'
    ],
    originalPrice: 90,
    promoPrice: 70,
    image: '/images/products/taza-magica.jpg',
    techniques: ['Sublimación Termosensible'],
    featured: false
  },
  {
    id: 'amor-rompecabezas-fotografico',
    seasonId: 'dia-del-amor',
    name: 'Rompecabezas Fotográfico con Mensaje Secreto',
    badge: 'Detalle Creativo',
    tagline: 'Armen juntos su mejor recuerdo fotográfico',
    description: 'Rompecabezas brillante de alta rigidez sublimado con su fotografía favorita y frase oculta para descubrir al armarlo.',
    includes: [
      'Rompecabezas sublimado a todo color con acabado brillante',
      'Caja personalizada con la imagen guía en la tapa',
      'Diseño y retoque fotográfico incluido'
    ],
    originalPrice: 60,
    promoPrice: 45,
    image: '/images/products/rompecabezas.jpg',
    techniques: ['Sublimación HD'],
    featured: false
  },
  {
    id: 'amor-portarretrato-laser',
    seasonId: 'dia-del-amor',
    name: 'Portarretrato & Placa Fotográfica de Aniversario',
    badge: 'Diseño Elegante',
    tagline: 'Fotografía transferida en alta definición con soporte de mesa',
    description: 'Pieza decorativa ideal para el velador o escritorio con fotografía de pareja y grabado de nombres.',
    includes: [
      'Portarretrato personalizado de acabado brillante',
      'Soporte de exhibición incluido',
      'Empaque protector para regalo'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/products/portarretratos.jpg',
    techniques: ['Sublimación HD', 'Grabado Láser'],
    featured: false
  },
  {
    id: 'amor-pack-termo-taza',
    seasonId: 'dia-del-amor',
    name: 'Box Enamorados Termo Acero + Taza Bicolor + Llavero',
    badge: 'Kit Completo',
    tagline: 'Un regalo práctico y romántico para acompañarlo todo el día',
    description: 'Combinación de termo de acero grabado a láser con su nombre, taza bicolor sublimada y llavero personalizado.',
    includes: [
      'Termo de acero inoxidable 500ml grabado con láser',
      'Taza cerámica con interior y asa roja o rosada',
      'Llavero doble en MDF / Acrílico',
      'Caja de presentación decorada'
    ],
    originalPrice: 145,
    promoPrice: 115,
    image: '/images/products/regalos-promocionales.jpg',
    techniques: ['Grabado Láser', 'Sublimación'],
    featured: false
  },

  // =================== DÍA DEL PADRE ===================
  {
    id: 'padre-kit-ejecutivo-termo-libreta',
    seasonId: 'dia-del-padre',
    name: 'Kit Papá Ejecutivo (Termo Digital + Libreta Cuero + Bolígrafo)',
    badge: 'Top Día del Padre',
    tagline: 'El regalo más elegante para el escritorio o vehículo de papá',
    description: 'Caja rígida con termo inteligente LED de acero inoxidable grabado a láser con el nombre de papá + libreta ejecutiva y bolígrafo metálico.',
    includes: [
      'Termo digital 500ml con sensor táctil de temperatura y grabado láser',
      'Libreta ejecutiva de eco-cuero personalizada',
      'Bolígrafo metálico grabado con su nombre o iniciales',
      'Caja rígida de lujo lista para entregar'
    ],
    originalPrice: 165,
    promoPrice: 130,
    image: '/images/products/termos.jpg',
    techniques: ['Grabado Láser CNC', 'Impresión UV'],
    featured: true
  },
  {
    id: 'padre-combo-parrillero-asador',
    seasonId: 'dia-del-padre',
    name: 'Combo Parrillero "Rey del Asado" (Mandil Bordado + Vaso Térmico)',
    badge: 'Favorito de Papá',
    tagline: 'Para los papás que dominan la parrilla el fin de semana',
    description: 'Mandil parrillero en gabardina pesada con aplicaciones de cuero y bordado personalizado + vaso térmico grabado en láser.',
    includes: [
      'Mandil de gabardina gruesa con bolsillos y correas regulables',
      'Bordado computarizado con su nombre ("La Parrilla de Papá")',
      'Termo o vaso cervecero de acero grabado a láser'
    ],
    originalPrice: 160,
    promoPrice: 125,
    image: '/images/products/mandiles.jpg',
    techniques: ['Bordado Computarizado', 'Grabado Láser'],
    featured: true
  },
  {
    id: 'padre-polera-mejor-papa',
    seasonId: 'dia-del-padre',
    name: 'Polera Edición Papá "El Mejor Papá de Bolivia" DTF',
    badge: 'Clásico para Papá',
    tagline: 'Algodón peinado 20/1 con diseño personalizado e hijos',
    description: 'Polera confeccionada en suave algodón peinado con estampado DTF de alta durabilidad: personalízala con los nombres de sus hijos o su hobby favorito.',
    includes: [
      'Polera 100% algodón peinado en negro, azul marino o blanco',
      'Estampado DTF textil de tacto suave y alta resistencia',
      'Tallas S, M, L, XL, XXL y XXXL'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/products/polera-personalizada.jpg',
    techniques: ['DTF Textil Full Color'],
    featured: true
  },
  {
    id: 'padre-canguro-hoodie-bordado',
    seasonId: 'dia-del-padre',
    name: 'Canguro Hoodie Abrigado "Legend Dad" con Bordado',
    badge: 'Invierno & Confort',
    tagline: 'Sudadera pesada con capucha ideal para el frío de junio/marzo',
    description: 'Canguro hoodie de frisa gruesa y suave con diseño sobrio bordado o estampado en DTF para papá.',
    includes: [
      'Canguro Hoodie de alto gramaje con bolsillo frontal',
      'Personalización en pecho con bordado o DTF',
      'Tallas S a XXL con costuras reforzadas'
    ],
    originalPrice: 175,
    promoPrice: 145,
    image: '/images/products/sudadera-hoodie.jpg',
    techniques: ['Bordado Computarizado', 'DTF Textil'],
    featured: true
  },
  {
    id: 'padre-gorra-trucker-3d',
    seasonId: 'dia-del-padre',
    name: 'Gorra Trucker / Snapback Papá con Bordado 3D',
    badge: 'Estilo & Sol',
    tagline: 'Gorra estructurada con parche o bordado en alto relieve',
    description: 'Gorra personalizada con las iniciales de papá, su equipo, marca de autos o frase favorita en bordado 3D o parche grabado.',
    includes: [
      'Gorra Trucker o Snapback de 6 paneles de primera calidad',
      'Bordado 3D frontal o parche de eco-cuero grabado a láser',
      'Cierre trasero ajustable'
    ],
    originalPrice: 65,
    promoPrice: 50,
    image: '/images/products/gorra-trucker.jpg',
    techniques: ['Bordado 3D', 'Parche Láser'],
    featured: false
  },
  {
    id: 'padre-tomatodo-deportivo-laser',
    seasonId: 'dia-del-padre',
    name: 'Tomatodo Térmico Deportivo Grabado para Papá',
    badge: 'Sport & Gym',
    tagline: 'Hidratación térmica para el gimnasio, oficina o viajes',
    description: 'Botella deportiva metálica de alta resistencia con tapa antiderrame y grabado láser permanente.',
    includes: [
      'Tomatodo metáico 750ml con pico deportivo',
      'Grabado láser indeleble con nombre y escudo/logo',
      'Caja individual de presentación'
    ],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/products/tomatodos.jpg',
    techniques: ['Grabado Láser'],
    featured: false
  },
  {
    id: 'padre-agenda-ejecutiva-grabada',
    seasonId: 'dia-del-padre',
    name: 'Agenda Ejecutiva Anual en Cuero Grabada a Láser',
    badge: 'Organización VIP',
    tagline: 'Tapa en eco-cuero cosido con grabado bajo relieve',
    description: 'Agenda diaria para el trabajo y proyectos de papá, personalizada con su nombre, profesión y dedicatoria en la portada.',
    includes: [
      'Agenda ejecutiva encuadernada con cinta separadora',
      'Grabado láser personalizado en tapa frontal',
      'Bolígrafo metálico de obsequio'
    ],
    originalPrice: 95,
    promoPrice: 75,
    image: '/images/products/agendas.jpg',
    techniques: ['Grabado Láser CNC'],
    featured: false
  },

  // =================== DÍA DE LA MADRE ===================
  {
    id: 'madre-kit-homenaje-termo-libreta',
    seasonId: 'dia-de-la-madre',
    name: 'Kit Homenaje Mamá (Termo Digital + Libreta + Caja de Lujo)',
    badge: 'Top Día de la Madre',
    tagline: 'Un obsequio fino con dedicatoria grabada para mamá',
    description: 'Termo inteligente de acero inoxidable grabado a láser con el nombre de mamá y flores + libreta ejecutiva y bolígrafo a juego.',
    includes: [
      'Termo digital de acero 500ml con visor LED de temperatura',
      'Libreta personalizada con frase emotiva para mamá',
      'Bolígrafo metálico grabado',
      'Caja rígida decorada con lazo'
    ],
    originalPrice: 165,
    promoPrice: 130,
    image: '/images/products/termos.jpg',
    techniques: ['Grabado Láser', 'Impresión UV'],
    featured: true
  },
  {
    id: 'madre-set-cojin-taza-floral',
    seasonId: 'dia-de-la-madre',
    name: 'Set Cojín Decorativo + Taza Floral "Te Amo Mamá"',
    badge: 'Más Regalado',
    tagline: 'Sus mejores fotos familiares en un dúo lleno de cariño',
    description: 'Cojín suave de 40x40 cm sublimado con collage familiar y dedicatoria + taza cerámica de 11oz con interior de color a juego.',
    includes: [
      'Cojín 40x40 cm con relleno siliconado hipoalergénico',
      'Taza bicolor 11oz sublimada en alta definición',
      'Diseño floral personalizado con nombres de hijos y nietos'
    ],
    originalPrice: 110,
    promoPrice: 85,
    image: '/images/products/almohadas.jpg',
    techniques: ['Sublimación Full Color'],
    featured: true
  },
  {
    id: 'madre-combo-reina-cocina',
    seasonId: 'dia-de-la-madre',
    name: 'Combo "Reina de la Cocina" (Mandil Bordado + Taza)',
    badge: 'Favorito Familiar',
    tagline: 'Mandil de gabardina con bordado floral y nombre de mamá',
    description: 'Delantal de cocina en tela antimanchas de alta durabilidad con bordado computarizado fino + taza personalizada.',
    includes: [
      'Mandil con hebilla ajustable, bolsillo amplio y bordado',
      'Taza cerámica de 11oz con frase o fotografía',
      'Empaque de regalo incluido'
    ],
    originalPrice: 115,
    promoPrice: 90,
    image: '/images/products/mandiles.jpg',
    techniques: ['Bordado Computarizado', 'Sublimación'],
    featured: true
  },
  {
    id: 'madre-cuadro-familiar-personalizado',
    seasonId: 'dia-de-la-madre',
    name: 'Cuadro Fotográfico Familiar Conmemorativo "Mamá"',
    badge: 'Recuerdo para Siempre',
    tagline: 'Retrato familiar en acabado brillante de galería',
    description: 'Cuadro decorativo de alta resolución con las fotografías más emotivas de mamá junto a toda la familia.',
    includes: [
      'Cuadro personalizado 20x30 cm listo para colgar o apoyar',
      'Impresión HD con protección contra rayos UV',
      'Retoque fotográfico y diseño con dedicatoria incluidos'
    ],
    originalPrice: 95,
    promoPrice: 75,
    image: '/images/products/cuadros-personalizados.jpg',
    techniques: ['Sublimación HD'],
    featured: true
  },
  {
    id: 'madre-polera-mama-increible',
    seasonId: 'dia-de-la-madre',
    name: 'Polera Algodón Peinado "Mamá Increíble" DTF Dorado',
    badge: 'Edición Mamá',
    tagline: 'Prenda suave con estampado floral y detalles dorados',
    description: 'Polera femenina o unisex en algodón peinado 20/1 con diseño exclusivo para el Día de la Madre y los nombres de sus hijos.',
    includes: [
      'Polera 100% algodón peinado (blanco, rosa, negro o rojo)',
      'Estampado DTF textil con detalles en color oro',
      'Tallas S, M, L, XL y XXL'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/products/polera-personalizada.jpg',
    techniques: ['DTF Textil Full Color'],
    featured: false
  },
  {
    id: 'madre-tote-bag-ecologica',
    seasonId: 'dia-de-la-madre',
    name: 'Bolsa Tote Bag de Tocuyo Premium Estampada para Mamá',
    badge: 'Práctica & Eco',
    tagline: 'Bolso de tela resistente con ilustración botánica y frase',
    description: 'Tote bag confeccionada en tocuyo grueso de primera calidad con asas reforzadas y estampado DTF de alta definición.',
    includes: [
      'Bolsa Tote Bag 38x42 cm con fuelle y costuras dobles',
      'Estampado personalizado a todo color',
      'Llavero de madera grabado de regalo'
    ],
    originalPrice: 55,
    promoPrice: 40,
    image: '/images/products/bolsas-ecologicas.jpg',
    techniques: ['DTF Textil', 'Sublimación'],
    featured: false
  },
  {
    id: 'madre-plato-ceramica-decorativa',
    seasonId: 'dia-de-la-madre',
    name: 'Plato & Cerámica Decorativa Conmemorativa con Soporte',
    badge: 'Edición Clásica',
    tagline: 'Pieza de porcelana sublimada con borde dorado y foto familiar',
    description: 'Clásico plato decorativo de cerámica brillante ideal para vitrinas y salas, personalizado con fotografía y homenaje a mamá.',
    includes: [
      'Plato de cerámica esmaltada con impresión central HD',
      'Pedestal / soporte de exhibición incluido',
      'Caja protectora para obsequio'
    ],
    originalPrice: 80,
    promoPrice: 60,
    image: '/images/products/platos-decorativos.jpg',
    techniques: ['Sublimación Cerámica'],
    featured: false
  },
  {
    id: 'madre-taza-magica-collage',
    seasonId: 'dia-de-la-madre',
    name: 'Taza Mágica Termosensible "La Mejor Mamá del Mundo"',
    badge: 'Detalle Sorpresa',
    tagline: 'Revela las fotos de sus hijos al verter agua caliente',
    description: 'Taza mágica de 11 onzas con recubrimiento sensible al calor que descubre un hermoso diseño familiar en segundos.',
    includes: [
      'Taza mágica 11oz importada calidad AAA',
      'Diseño de collage con hasta 4 fotografías y frase',
      'Cajita individual de regalo'
    ],
    originalPrice: 50,
    promoPrice: 38,
    image: '/images/products/taza-magica.jpg',
    techniques: ['Sublimación Termosensible'],
    featured: false
  },

  // =================== IDENTIDAD BOLIVIANA (COLECCIÓN PERMANENTE) ===================
  {
    id: 'bolivia-pack-civico-orgullo',
    seasonId: 'identidad-boliviana',
    name: 'Pack Cívico "Orgullo Boliviano" (Gorra Bordado 3D + Polo Piqué)',
    badge: 'Top Bolivia',
    tagline: 'Indumentaria de gala con escudo, tricolor o emblema departamental',
    description: 'Gorra estructurada con bordado en alto relieve 3D de Bolivia + polera polo piqué con bordado en pecho y pin metálico.',
    includes: [
      'Gorra de gabardina pesada con bordado 3D de alta densidad',
      'Polera o Polo 100% algodón con bordado tricolor',
      'Pin o escarapela metálica de obsequio'
    ],
    originalPrice: 125,
    promoPrice: 95,
    image: '/images/products/gorras.jpg',
    techniques: ['Bordado 3D Computarizado'],
    featured: true
  },
  {
    id: 'bolivia-polera-llama-andina',
    seasonId: 'identidad-boliviana',
    name: 'Polera "Llama Andina Cool" en Algodón Peinado DTF',
    badge: 'Diseño Exclusivo',
    tagline: 'Ilustración original de llama boliviana con chullo, chalina y gafas',
    description: 'Uno de los diseños más queridos por bolivianos y turistas: polera en algodón peinado 20/1 con arte andino moderno en DTF full color.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/products/polera-personalizada.jpg',
    techniques: ['DTF Textil Full Color', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'bolivia-polera-cultura-departamentos',
    seasonId: 'identidad-boliviana',
    name: 'Polera Colección "Bolivia & Sus 9 Departamentos" DTF',
    badge: 'Identidad Nacional',
    tagline: 'Arte gráfico inspirado en La Paz, Santa Cruz, Cochabamba y toda Bolivia',
    description: 'Polera conmemorativa con ilustraciones del Illimani, Salar de Uyuni, Cristo de la Concordia, Chiquitanía o carnaval boliviano.',
    includes: [
      'Precio: 65 Bs. la unidad | 120 Bs. el par',
      'Opción con Logo Mediano: 38 Bs.',
      'Tallas estándar: S, M, L (tallas superiores consultar para cotizar)'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/products/polera-personalizada.jpg',
    techniques: ['DTF Textil Full Color', 'Logo Mediano (38 Bs.)'],
    featured: true
  },
  {
    id: 'bolivia-termo-acero-escudo',
    seasonId: 'identidad-boliviana',
    name: 'Termo de Acero Grabado a Láser "Bolivia & Mapa Andino"',
    badge: 'Souvenir Premium',
    tagline: 'Grabado láser permanente con símbolos patrios y tu nombre',
    description: 'Termo de acero inoxidable de 500ml grabado con el mapa de Bolivia, tejidos andinos o escudo nacional junto a tu nombre.',
    includes: [
      'Termo térmico 500ml doble capa de acero inoxidable',
      'Grabado láser CNC de alta precisión',
      'Caja individual lista para viaje o regalo'
    ],
    originalPrice: 95,
    promoPrice: 75,
    image: '/images/products/termos.jpg',
    techniques: ['Grabado Láser CNC'],
    featured: true
  },
  {
    id: 'bolivia-taza-tradiciones',
    seasonId: 'identidad-boliviana',
    name: 'Taza Colección "Tradiciones, Salar & Folklore de Bolivia"',
    badge: 'Recuerdo de Bolivia',
    tagline: 'Taza bicolor 11oz con arte folklórico, diablada, morenada y paisajes',
    description: 'Taza de cerámica sublimada a todo color con motivos culturales bolivianos, ideal para el desayuno o para obsequiar a visitantes.',
    includes: [
      'Taza cerámica 11oz grado AAA (blanca o interior rojo/verde/amarillo)',
      'Sublimación panorámica de alto brillo',
      'Caja individual incluida'
    ],
    originalPrice: 40,
    promoPrice: 30,
    image: '/images/products/taza-colores.jpg',
    techniques: ['Sublimación Digital HD'],
    featured: false
  },
  {
    id: 'bolivia-pack-panoletas-escarapelas',
    seasonId: 'identidad-boliviana',
    name: 'Pack 20 Pañoletas & Escarapelas Sublimadas para Desfiles',
    badge: 'Mayorista Institucional',
    tagline: 'Para colegios, fraternidades, comparsas e instituciones públicas',
    description: 'Set institucional de 20 pañoletas en satén brillante sublimadas a todo color con la tricolor o bandera departamental.',
    includes: [
      '20 Pañoletas de satén fino con dobladillo reforzado',
      '20 Escarapelas o chapitas con broche de seguridad',
      'Descuento mayorista ya aplicado'
    ],
    originalPrice: 220,
    promoPrice: 170,
    image: '/images/products/chapitas.jpg',
    techniques: ['Sublimación Textil'],
    featured: false
  },
  {
    id: 'bolivia-pines-escarapelas-metal',
    seasonId: 'identidad-boliviana',
    name: 'Set 12 Pines Metálicos & Escudos Institucionales de Bolivia',
    badge: 'Protocolo & Gala',
    tagline: 'Pines de solapa con acabado brillante en resina epóxica UV',
    description: 'Docena de pines metálicos personalizados con la bandera boliviana, escudo o emblema de tu institución para trajes y uniformes.',
    includes: [
      '12 Pines metálicos con broche mariposa de seguridad',
      'Impresión UV con recubrimiento de gota de resina cristalina',
      'Presentación individual'
    ],
    originalPrice: 120,
    promoPrice: 90,
    image: '/images/products/pines.jpg',
    techniques: ['Impresión UV & Resina'],
    featured: false
  },
  {
    id: 'bolivia-tote-bag-arte-andino',
    seasonId: 'identidad-boliviana',
    name: 'Bolsa Tote Bag de Tocuyo "Hecho en Bolivia" con Arte Andino',
    badge: 'Eco & Cultural',
    tagline: 'Tocuyo 100% algodón boliviano con ilustración cultural a todo color',
    description: 'Bolso ecológico reutilizable de tocuyo grueso estampado con motivos de aguayo, fauna andina y frases bolivianas.',
    includes: [
      'Bolsa Tote Bag 38x42 cm de tocuyo nacional reforzado',
      'Estampado DTF textil de alta durabilidad',
      'Precios especiales por docena para ferias y turismo'
    ],
    originalPrice: 50,
    promoPrice: 35,
    image: '/images/products/bolsas-ecologicas.jpg',
    techniques: ['DTF Textil', 'Serigrafía'],
    featured: false
  }
];

// Helper to convert a seasonal item to a Product-like structure for the cart & modal
export const seasonalItemToProduct = (item: SeasonalItem): Product => {
  const isCanguro = item.name.toLowerCase().includes('canguro') || item.name.toLowerCase().includes('sudadera');
  const isPoleraOnly =
    !isCanguro &&
    (item.seasonId === 'navidad' ||
      item.seasonId === 'halloween' ||
      item.name.toLowerCase().includes('polera') ||
      item.name.toLowerCase().includes('camisa') ||
      item.name.toLowerCase().includes('musculosa') ||
      item.name.toLowerCase().includes('modelo'));
  const isShirt = isPoleraOnly || isCanguro;
  const isHalloween = item.seasonId === 'halloween';
  const seasonMeta = SEASONS.find((s) => s.id === item.seasonId);

  const techniques = isPoleraOnly && !item.techniques.some((t) => t.toLowerCase().includes('38'))
    ? [...item.techniques, 'Logo Mediano (38 Bs.)']
    : item.techniques;
  
  return {
    id: item.id,
    name: item.name,
    category: 'regalos',
    categoryName: seasonMeta ? seasonMeta.name : `Colección ${item.seasonId.replace(/-/g, ' ').toUpperCase()}`,
    shortDescription: item.tagline || item.description,
    fullDescription: `${item.description}\n\nDetalles y lo que incluye:\n${item.includes.map(inc => `• ${inc}`).join('\n')}${isPoleraOnly ? '\n• Precios estándar en poleras: 65 Bs. unidad | 120 Bs. el par | Logos medianos a 38 Bs.\n• Tallas disponibles: S, M, L (Tallas superiores consultar para cotizar).' : isCanguro ? '\n• Tallas disponibles: S, M, L (Tallas superiores consultar para cotizar).' : ''}`,
    price: item.promoPrice,
    unit: isShirt ? 'unidad' : 'pack / unidad',
    rating: 5.0,
    reviewsCount: 38,
    inStock: true,
    featured: item.featured,
    badge: item.badge,
    colors: isHalloween ? [
      { name: 'Negro Umbría', hex: '#0E0E10' },
      { name: 'Gris Carbón', hex: '#222428' }
    ] : isShirt ? [
      { name: 'Blanco Nieve', hex: '#F1F1F1' },
      { name: 'Rojo Carmesí', hex: '#B3121F' },
      { name: 'Verde Bosque', hex: '#0F6B3A' },
      { name: 'Negro Grafito', hex: '#141517' }
    ] : [{ name: 'Edición Especial', hex: '#D32F2F' }],
    sizes: isShirt ? ['S', 'M', 'L'] : ['Estándar'],
    techniques,
    minQuantity: 1,
    image: item.image,
    gallery: item.backImage ? [item.image, item.backImage] : [item.image],
    specs: [
      { label: 'Colección', value: item.badge || 'Catálogo ARTTMANIA' },
      ...(isPoleraOnly ? [
        { label: 'Estándar de Precios', value: '65 Bs. uno | 120 Bs. el par | Logos medianos a 38 Bs.' },
        { label: 'Tallas', value: 'S, M, L (Arriba de L se debe consultar para cotizar)' }
      ] : isCanguro ? [
        { label: 'Tallas', value: 'S, M, L (Arriba de L se debe consultar para cotizar)' }
      ] : []),
      ...item.includes.map((inc, i) => ({ label: `Detalle ${i + 1}`, value: inc }))
    ]
  };
};

export const buildSeasonalWhatsAppUrl = (item: SeasonalItem, seasonName: string): string => {
  const text =
    `*CONSULTA DE EDICIÓN ESPECIAL POR TEMPORADA - ARTTMANIA*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Campaña: ${seasonName}\n` +
    `Pack / Artículo: ${item.name}\n` +
    `Colección: ${item.badge}\n` +
    `Precio Promocional: Bs. ${item.promoPrice} (Precio Regular: Bs. ${item.originalPrice})\n` +
    `Técnicas: ${item.techniques.join(', ')}\n` +
    `Incluye:\n${item.includes.map(inc => `   • ${inc}`).join('\n')}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Hola ARTTMANIA. Deseo solicitar información y disponibilidad para encargar este combo temático.`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const buildSeasonalCatalogPdfUrl = (seasonName: string): string => {
  const text =
    `*SOLICITUD DE CATÁLOGO ESPECIAL EN PDF - ARTTMANIA*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Hola ARTTMANIA. Quisiera solicitar el Catálogo Digital en PDF de la temporada de ${seasonName} para revisar precios de combos y cotizaciones al por mayor para mi empresa o institución.\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
};
