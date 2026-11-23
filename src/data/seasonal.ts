import { Product } from './products';
import { COMPANY_INFO } from './company';

export interface SeasonalItem {
  id: string;
  seasonId: 'navidad' | 'halloween' | 'san-valentin' | 'dia-madre-padre' | 'fiestas-patrias';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  includes: string[];
  originalPrice: number;
  promoPrice: number;
  image: string;
  techniques: string[];
  featured?: boolean;
}

export interface SeasonCategory {
  id: 'navidad' | 'halloween' | 'san-valentin' | 'dia-madre-padre' | 'fiestas-patrias';
  name: string;
  shortName: string;
  iconName: 'TreePine' | 'Ghost' | 'Heart' | 'Flower2' | 'Flag';
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
    id: 'san-valentin',
    name: 'San Valentín & Amor/Amistad',
    shortName: 'San Valentín',
    iconName: 'Heart',
    deadlineLabel: 'Cierre de pedidos para el 14 de Febrero:',
    targetDate: '2027-02-12T23:59:59',
    accentColor: '#C2185B',
    accent: '#C2185B',
    accentSoft: 'rgba(194, 24, 91, 0.16)',
    surfaceTint: 'rgba(194, 24, 91, 0.09)',
    gradient: 'linear-gradient(135deg, #C2185B 0%, #F06292 100%)',
    badgeText: 'Especial Parejas',
    description: 'Packs dobles combinados, tazas mágicas sensibles a la temperatura, llaveros magnéticos en madera y cojines personalizados.'
  },
  {
    id: 'dia-madre-padre',
    name: 'Día de la Madre & del Padre',
    shortName: 'Mamá y Papá',
    iconName: 'Flower2',
    deadlineLabel: 'Cierre de pedidos con anticipación sugerida (5 días antes):',
    targetDate: '2027-05-22T23:59:59',
    accentColor: '#0B8A6B',
    accent: '#0B8A6B',
    accentSoft: 'rgba(11, 138, 107, 0.16)',
    surfaceTint: 'rgba(11, 138, 107, 0.09)',
    gradient: 'linear-gradient(135deg, #0B8A6B 0%, #D4AF37 100%)',
    badgeText: 'Kits Premium',
    description: 'Termos grabados en láser, libretas de cuero, delantales de cocina reforzados y cajas rígidas listas para obsequiar.'
  },
  {
    id: 'fiestas-patrias',
    name: 'Fiestas Patrias & Efemérides',
    shortName: 'Patrias',
    iconName: 'Flag',
    deadlineLabel: 'Pedidos masivos para comparsas, desfiles y colegios:',
    targetDate: '2027-08-01T23:59:59',
    accentColor: '#0B4FD0',
    accent: '#0B4FD0',
    accentSoft: 'rgba(11, 79, 208, 0.16)',
    surfaceTint: 'rgba(11, 79, 208, 0.09)',
    gradient: 'linear-gradient(135deg, #0B4FD0 0%, #D32F2F 100%)',
    badgeText: 'Orgullo Nacional',
    description: 'Gorras bordadas con el escudo o mapa, poleras conmemorativas, pañoletas de satén y escarapelas sublimadas para actos cívicos.'
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
      'Polera algodón peinado 100% hipoalergénico',
      'Estampado DTF textil de alta resistencia al lavado',
      'Tallas disponibles: Infantil 2-14 y Adultos S a XXXL',
      'Precios especiales por mayor a partir de 12 unidades (desde 25 Bs.)'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_santa_cool_blanco.jpg',
    techniques: ['DTF Textil', 'Sublimación'],
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
      'Tela verde bosque de alta durabilidad',
      'Detalles en tinta dorada metálica de alta definición',
      'Cuello rib reforzado anti-deformación',
      'Empaque de regalo festivo individual'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_arbol_dorado_verde.jpg',
    techniques: ['DTF Textil Dorado', 'Foil Metálico'],
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
      'Algodón reactivo que no despinta ni encoge',
      'Estampado suave al tacto con colores vibrantes',
      'Tallas completas para toda la familia',
      'Descuento especial por volumen escolar o empresarial'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_grinch_luces_rojo.jpg',
    techniques: ['DTF Textil Full Color', 'Sublimación'],
    featured: true
  },
  {
    id: 'navidad-mockup-mickey-minnie',
    seasonId: 'navidad',
    name: 'Dúo de Poleras Pareja "Mickey & Minnie Navideños"',
    badge: 'Especial Parejas',
    tagline: '2 Poleras combinadas con diseño continuo y corazón rojo',
    description: 'Set especial para novios y matrimonios. Ilustraciones sincronizadas de Mickey y Minnie dándose un beso con gorrito de Papá Noel.',
    includes: [
      '2 Poleras de algodón peinado (tallas a elección para él y para ella)',
      'Estampado DTF textil de máxima nitidez',
      'Opción de añadir nombres o fecha en la espalda',
      'Presentación en caja festiva lista para obsequiar'
    ],
    originalPrice: 160,
    promoPrice: 120,
    image: '/images/seasonal/navidad/mockup_pareja_mickey_minnie.jpg',
    techniques: ['DTF Textil', 'Algodón Peinado'],
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
      '3 Poleras familiares (opción de agregar adicionales a precio mayorista)',
      'Ilustración personalizada de muñecos de nieve con gorritos',
      'Texto "Familia Navideña" con tipografía caligráfica dorada',
      '2 Adornos de madera MDF grabados con láser para el árbol'
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
      'Estampado dorado mate de alta finura y elegancia',
      'Prenda confeccionada en algodón premium de 180g',
      'Diseño ideal para iglesias, colegios y celebraciones familiares',
      'Precios de escala por mayor para instituciones'
    ],
    originalPrice: 85,
    promoPrice: 65,
    image: '/images/seasonal/navidad/mockup_nacimiento_sagrado_rojo.jpg',
    techniques: ['DTF Textil Dorado', 'Serigrafía Textil'],
    featured: true
  },

  // --- 2. MODELOS INDIVIDUALES CATÁLOGO DIGITAL 2026 (N01 - N30) ---
  {
    id: 'navidad-modelo-n01',
    seasonId: 'navidad',
    name: 'Modelo N01 · Santa Claus Ho Ho Ho (Gafas Cool)',
    badge: 'Catálogo N01',
    tagline: 'Papá Noel con actitud, gafas de sol y saludo de paz',
    description: 'Polera clásica blanca con el personaje festivo favorito en versión juvenil y fresca.',
    includes: ['Polera suave cuello redondo', 'Estampado DTF textil', 'Tallas Infantil 2 a XXXL', 'Desde Bs. 25 por docena'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N01.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n02',
    seasonId: 'navidad',
    name: 'Modelo N02 · Reno Navideño Nariz Roja (Rojo Carmesí)',
    badge: 'Catálogo N02',
    tagline: 'Tierno reno sonriente con astas y estrellas de nieve',
    description: 'Polera roja festiva con ilustración tierna de reno navideño en alta resolución.',
    includes: ['Algodón peinado reactivo', 'Estampado suave al tacto', 'Tallas para toda la familia', 'Precio mayorista por volumen'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N02.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n03',
    seasonId: 'navidad',
    name: 'Modelo N03 · El Grinch Navideño con Gorro (Verde)',
    badge: 'Catálogo N03',
    tagline: 'El clásico antihéroe que roba sonrisas en Navidad',
    description: 'Diseño icónico del Grinch sonriendo con gorro de Santa sobre tela verde de temporada.',
    includes: ['Tela peinada de máxima suavidad', 'Colores vivos que no se degradan', 'Tallas niño y adulto', 'Despachos a todo el país'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N03.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n04',
    seasonId: 'navidad',
    name: 'Modelo N04 · Muñeco de Nieve con Bufanda y Gorro',
    badge: 'Catálogo N04',
    tagline: 'Clásico muñeco de nieve de invierno con detalles rojos',
    description: 'Ilustración entrañable de muñeco de nieve sonriente con copos y bufanda tejida.',
    includes: ['Confección 100% algodón', 'Tintas ecológicas certificadas', 'Tallas infantiles y adultos', 'Precios de escala B2B'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N04.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n05',
    seasonId: 'navidad',
    name: 'Modelo N05 · Pesebre & Nacimiento Sagrado (Negro Grafito)',
    badge: 'Catálogo N05',
    tagline: 'Silueta dorada del nacimiento con estrella de Belén',
    description: 'Diseño solemne y elegante en trazo dorado sobre fondo oscuro para quienes celebran el verdadero espíritu de la Navidad.',
    includes: ['Fondo negro grafito de alto contraste', 'Estampado dorado de precisión', 'Tallas S a XXXL', 'Factura fiscal'],
    originalPrice: 80,
    promoPrice: 60,
    image: '/images/seasonal/navidad/modelo_N05.jpg',
    techniques: ['DTF Textil Dorado', 'Serigrafía']
  },
  {
    id: 'navidad-modelo-n06',
    seasonId: 'navidad',
    name: 'Modelo N06 · Árbol Ribbon Geométrico (Rojo Fiesta)',
    badge: 'Catálogo N06',
    tagline: 'Pino estilizado en cinta continua dorada con estrella',
    description: 'Composición moderna de árbol de navidad abstracto en tonos dorados sobre prenda roja festiva.',
    includes: ['Algodón peinado premium', 'Acabado dorado metálico', 'Tallas S a XXXL', 'Desde 25 Bs. por cantidad'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N06.jpg',
    techniques: ['DTF Textil', 'Foil']
  },
  {
    id: 'navidad-modelo-n07',
    seasonId: 'navidad',
    name: 'Modelo N07 · Galleta de Jengibre Navideña (Verde Pino)',
    badge: 'Catálogo N07',
    tagline: 'Muñeco de jengibre sonriente con moño y botones rojos',
    description: 'Diseño tradicional y simpático para niños, familias y amantes de la repostería navideña.',
    includes: ['Tela suave 180 gramos', 'Estampado elástico y lavable', 'Todas las tallas', 'Envíos a toda Bolivia'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N07.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n08',
    seasonId: 'navidad',
    name: 'Modelo N08 · Feliz Navidad Lettering & Campanas',
    badge: 'Catálogo N08',
    tagline: 'Frase tradicional con campanas doradas y lazo rojo',
    description: 'Tipografía clásica y festiva con follaje de acebo y campanas para desear felices fiestas.',
    includes: ['Algodón peinado blanco', 'Full color de alta fidelidad', 'Tallas completas', 'Precio mayorista'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N08.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n09',
    seasonId: 'navidad',
    name: 'Modelo N09 · Snoopy & Woodstock Navideños (Rojo)',
    badge: 'Catálogo N09',
    tagline: 'Snoopy abrazando su corazón festivo con gorrito de Santa',
    description: 'Diseño nostálgico y adorable del icónico perrito blanco con detalles de nieve y amor.',
    includes: ['Algodón reactivo de alta gama', 'Estampado de tacto cero', 'Tallas infantil y adulto', 'Embalaje individual'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N09.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n10',
    seasonId: 'navidad',
    name: 'Modelo N10 · Reno Urbano con Gafas de Sol (Verde)',
    badge: 'Catálogo N10',
    tagline: 'Reno con actitud y lentes reflejantes de invierno',
    description: 'Diseño con gran personalidad para chicos, jóvenes y familias modernas.',
    includes: ['Tela verde bosque peinada', 'Detalle reflejante en lentes', 'Tallas S a XXXL', 'Escala por mayor'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N10.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n11',
    seasonId: 'navidad',
    name: 'Modelo N11 · Trío de Gnomos Escandinavos (Blanco)',
    badge: 'Catálogo N11',
    tagline: 'Tres gnomos nórdicos con gorros tejidos y barbas largas',
    description: 'Estética escandinava elegante y navideña en tonos rojo y gris sobre polera blanca.',
    includes: ['Algodón 100% 20/1', 'Estampado digital nítido', 'Tallas S a XXL', 'Precio por mayor'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N11.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n12',
    seasonId: 'navidad',
    name: 'Modelo N12 · Santa Claus Clásico Realista (Rojo)',
    badge: 'Catálogo N12',
    tagline: 'Papá Noel con gesto de silencio y gafas doradas',
    description: 'Ilustración de alta calidad artística con textura realista de barba y guantes blancos.',
    includes: ['Algodón peinado rojo intenso', 'Resolución fotográfica HD', 'Tallas S a XXXL', 'Facturación legal'],
    originalPrice: 80,
    promoPrice: 60,
    image: '/images/seasonal/navidad/modelo_N12.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n13',
    seasonId: 'navidad',
    name: 'Modelo N13 · Ciervo Poligonal Geométrico Oro (Negro)',
    badge: 'Catálogo N13',
    tagline: 'Estética geométrica vanguardista en líneas doradas',
    description: 'Diseño sofisticado para quienes prefieren un look navideño sobrio, moderno y elegante.',
    includes: ['Fondo negro profundo', 'Estampado dorado de precisión', 'Tallas S a XXXL', 'Empaque para regalo'],
    originalPrice: 80,
    promoPrice: 60,
    image: '/images/seasonal/navidad/modelo_N13.jpg',
    techniques: ['DTF Textil Dorado', 'Foil']
  },
  {
    id: 'navidad-modelo-n14',
    seasonId: 'navidad',
    name: 'Modelo N14 · Polera "Navidad en Familia" (Blanco)',
    badge: 'Catálogo N14',
    tagline: 'Tres pinos navideños y dedicatoria familiar cálida',
    description: 'Prenda pensada para reuniones y cenas familiares con pinos decorados y tipografía festiva.',
    includes: ['Algodón peinado suave', 'Opción de apellido familiar', 'Tallas infantiles a XXXL', 'Descuento familiar'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N14.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n15',
    seasonId: 'navidad',
    name: 'Modelo N15 · Pingüino Festivo con Bufanda (Verde)',
    badge: 'Catálogo N15',
    tagline: 'Tierno pingüinito polar con gorro rojo y bufanda tejida',
    description: 'Modelo favorito de los más pequeños de la casa, perfecto para cursos escolares y regalos.',
    includes: ['Tela hipoalergénica de algodón', 'Colores brillantes y seguros', 'Tallas 2 a 16 e infantiles', 'Precio por mayor'],
    originalPrice: 70,
    promoPrice: 50,
    image: '/images/seasonal/navidad/modelo_N15.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n16',
    seasonId: 'navidad',
    name: 'Modelo N16 · Reno Navideño Sonriente (Rojo)',
    badge: 'Catálogo N16',
    tagline: 'Carita sonriente de reno con cascabel y nieve',
    description: 'Prenda infantil y juvenil muy tierna para sesiones fotográficas navideñas.',
    includes: ['Algodón peinado de primera', 'Estampado flexible', 'Tallas completas', 'Desde 25 Bs. x mayor'],
    originalPrice: 70,
    promoPrice: 50,
    image: '/images/seasonal/navidad/modelo_N16.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n17',
    seasonId: 'navidad',
    name: 'Modelo N17 · Mickey & Minnie Pareja Romántica (Blanco)',
    badge: 'Catálogo N17',
    tagline: 'Ilustración combinable para parejas en Navidad',
    description: 'Prenda con los queridos ratoncitos con gorritos navideños y corazones flotantes.',
    includes: ['Precio individual o por par', 'Algodón peinado premium', 'Tallas para él y ella', 'Caja de regalo opcional'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N17.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n18',
    seasonId: 'navidad',
    name: 'Modelo N18 · Dúo Pareja "Él es mi regalo / Ella es mi regalo"',
    badge: 'Catálogo N18',
    tagline: 'Set divertido y amoroso con lazo dorado de obsequio',
    description: 'Frases sincronizadas con lazo de regalo para celebrar las fiestas en pareja.',
    includes: ['Set de 2 poleras rojas', 'Tipografía script dorada', 'Tallas a elección', 'Empaque especial'],
    originalPrice: 150,
    promoPrice: 110,
    image: '/images/seasonal/navidad/modelo_N18.jpg',
    techniques: ['DTF Textil', 'Algodón Peinado']
  },
  {
    id: 'navidad-modelo-n19',
    seasonId: 'navidad',
    name: 'Modelo N19 · Bosque Invernal & Ciervo en Nieve (Blanco)',
    badge: 'Catálogo N19',
    tagline: 'Pino dorado abstracto con silueta de ciervo y estrellas',
    description: 'Estética nórdica luminosa con destellos de polvo estelar y coníferas.',
    includes: ['Algodón peinado 20/1', 'Tinta dorada y negra', 'Tallas S a XXL', 'Garantía de calidad'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N19.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n20',
    seasonId: 'navidad',
    name: 'Modelo N20 · Esferas Navideñas Colgantes en Oro y Rojo',
    badge: 'Catálogo N20',
    tagline: 'Tres esferas decoradas con ornamentos de encaje navideño',
    description: 'Diseño formal y cálido para empresas, reuniones de trabajo o cenas familiares.',
    includes: ['Prenda roja de alta calidad', 'Detalles dorados refinados', 'Tallas S a XXXL', 'Precio institucional'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N20.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n21',
    seasonId: 'navidad',
    name: 'Modelo N21 · Flor de Nochebuena Poinsettia (Verde Bosque)',
    badge: 'Catálogo N21',
    tagline: 'La tradicional flor navideña en acuarela botánica vibrante',
    description: 'Ilustración botánica viva de la flor de Pascua con hojas verdes y centro dorado.',
    includes: ['Tela verde peinada', 'Gama de rojos intensos', 'Tallas completas', 'Descuento por docena'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N21.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n22',
    seasonId: 'navidad',
    name: 'Modelo N22 · Los Tres Reyes Magos con Estrella (Blanco)',
    badge: 'Catálogo N22',
    tagline: 'Silueta de Melchor, Gaspar y Baltazar siguiendo la estrella',
    description: 'Diseño sobrio de gran significado espiritual sobre fondo blanco puro.',
    includes: ['Algodón suave 180g', 'Estampado en contraste negro y oro', 'Tallas S a XXXL', 'Factura legal'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N22.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n23',
    seasonId: 'navidad',
    name: 'Modelo N23 · Noche de Paz con Iglesia & Estrellas (Negro)',
    badge: 'Catálogo N23',
    tagline: 'Pueblo invernal iluminado bajo un cielo de estrellas doradas',
    description: 'Paisaje nocturno de ensueño con casitas, iglesia y pinos cubiertos de nieve.',
    includes: ['Prenda negra grafito', 'Efecto de luces doradas', 'Tallas S a XXXL', 'Empaque individual'],
    originalPrice: 80,
    promoPrice: 60,
    image: '/images/seasonal/navidad/modelo_N23.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n24',
    seasonId: 'navidad',
    name: 'Modelo N24 · Camioneta Vintage con Pino Navideño (Verde)',
    badge: 'Catálogo N24',
    tagline: 'Camioneta clásica roja llevando el arbolito a casa',
    description: 'Estilo retro americano muy popular en decoraciones navideñas y colecciones de temporada.',
    includes: ['Algodón peinado reactivo', 'Colores vintage vibrantes', 'Tallas completas', 'Precios de escala B2B'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N24.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n25',
    seasonId: 'navidad',
    name: 'Modelo N25 · Cajas de Regalos y Moños Festivos (Rojo)',
    badge: 'Catálogo N25',
    tagline: 'Montón de obsequios navideños con cintas y destellos',
    description: 'El símbolo por excelencia de los regalos y la emoción de abrir sorpresas en nochebuena.',
    includes: ['Tela roja de primera', 'Detalles dorados brillantes', 'Tallas infantiles a adultos', 'Envíos nacionales'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N25.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n26',
    seasonId: 'navidad',
    name: 'Modelo N26 · Llama Andina Navideña con Gafas (Blanco)',
    badge: 'Identidad Bolivia',
    tagline: 'Nuestra simpática llama con gorrito de Santa, chalina y gafas',
    description: 'Un toque boliviano entrañable que combina identidad andina con espíritu navideño.',
    includes: ['Diseño original exclusivo', 'Algodón peinado 20/1', 'Tallas para niños y adultos', 'Favorito para regalos'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N26.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n27',
    seasonId: 'navidad',
    name: 'Modelo N27 · "Paz, Amor, Esperanza, Navidad" (Negro)',
    badge: 'Catálogo N27',
    tagline: 'Mensaje de buenos deseos en lettering caligráfico de autor',
    description: 'Composición tipográfica en forma de árbol con estrella superior dorada.',
    includes: ['Fondo negro elegante', 'Tipografía de autor', 'Tallas S a XXXL', 'Precio mayorista'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N27.jpg',
    techniques: ['DTF Textil', 'Foil']
  },
  {
    id: 'navidad-modelo-n28',
    seasonId: 'navidad',
    name: 'Modelo N28 · Santa en la Chimenea (Verde Bosque)',
    badge: 'Catálogo N28',
    tagline: 'Papá Noel de cabeza entrando con botas por la chimenea',
    description: 'Diseño cómico y festivo que encanta a niños y jóvenes.',
    includes: ['Tela verde peinada', 'Estampado duradero y flexible', 'Tallas completas', 'Descuento por docena'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N28.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n29',
    seasonId: 'navidad',
    name: 'Modelo N29 · Corona de Acebo "Feliz Navidad" (Blanco)',
    badge: 'Catálogo N29',
    tagline: 'Corona navideña tradicional con lazo rojo y dedicatoria',
    description: 'Diseño atemporal y luminoso para recibir las fiestas con alegría.',
    includes: ['Algodón peinado blanco', 'Acuarela digital HD', 'Tallas S a XXL', 'Factura fiscal'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N29.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },
  {
    id: 'navidad-modelo-n30',
    seasonId: 'navidad',
    name: 'Modelo N30 · Árbol Geométrico con Renos Gemelos (Rojo)',
    badge: 'Catálogo N30',
    tagline: 'Pino navideño simétrico con dos renos en salto festivo',
    description: 'Broche de oro de la colección: composición simétrica de gran elegancia y balance visual.',
    includes: ['Algodón peinado reactivo', 'Estampado blanco y oro', 'Tallas S a XXXL', 'Precios desde 25 Bs. x mayor'],
    originalPrice: 75,
    promoPrice: 55,
    image: '/images/seasonal/navidad/modelo_N30.jpg',
    techniques: ['DTF Textil', 'Sublimación']
  },

  // --- 3. PACKS Y COMBOS FAMILIARES PREEXISTENTES ---
  {
    id: 'pack-navideno-familiar',
    seasonId: 'navidad',
    name: 'Pack Familiar "Navidad en Casa"',
    badge: 'Pack Estrella',
    tagline: 'Ideal para sesiones de fotos familiares y nochebuena',
    description: 'Set completo de 3 poleras de algodón peinado con estampado navideño en DTF textil + 2 adornos en madera cortados a láser para el árbol.',
    includes: [
      '3 Poleras algodón peinado (tallas a elección para papá, mamá e hijos)',
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
  {
    id: 'combo-navideno-corporativo',
    seasonId: 'navidad',
    name: 'Kit Brindis Navideño Corporativo',
    badge: 'Más Cotizado B2B',
    tagline: 'Regalo memorable para colaboradores y clientes clave',
    description: 'Caja rígida con termo térmico grabado a láser con logo de tu empresa + libreta ejecutiva de eco-cuero y bolígrafo metálico.',
    includes: [
      'Termo de acero inoxidable 500ml con grabado láser indeleble',
      'Libreta ejecutiva A5 con tapa grabada',
      'Bolígrafo metálico rollerball con logo corporativo',
      'Caja rígida imantada con viruta ecológica y tarjeta dedicatoria'
    ],
    originalPrice: 165,
    promoPrice: 135,
    image: '/images/products/termos.jpg',
    techniques: ['Grabado Láser CNC', 'Impresión UV'],
    featured: true
  },
  {
    id: 'adornos-arbol-laser-set',
    seasonId: 'navidad',
    name: 'Set de 6 Adornos Láser para Árbol',
    badge: 'Edición Limitada',
    tagline: 'Adornos de madera natural personalizados con nombres',
    description: 'Copos de nieve y esferas navideñas en madera de 3mm cortadas y grabadas con precisión milimétrica.',
    includes: [
      '6 Esferas o copos de nieve con nombres de tu familia/equipo',
      'Madera seleccionada con acabado liso satinado',
      'Cintas de terciopelo rojo listas para colgar'
    ],
    originalPrice: 70,
    promoPrice: 50,
    image: '/images/products/llaveros-mdf.jpg',
    techniques: ['Corte & Grabado Láser'],
    featured: false
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

  // =================== SAN VALENTÍN ===================
  {
    id: 'pack-parejas-san-valentin',
    seasonId: 'san-valentin',
    name: 'Combo Parejas "Perfect Match"',
    badge: 'Top San Valentín',
    tagline: 'Poleras complementarias + Tazas mágicas con calor',
    description: 'El kit más vendido para el 14 de Febrero: 2 poleras combinadas con diseños que se complementan + 2 tazas mágicas que muestran la foto con agua caliente.',
    includes: [
      '2 Poleras de algodón peinado con diseño complementario',
      '2 Tazas mágicas termosensibles (revelan la foto con calor)',
      '2 Llaveros de rompecabezas en madera con fecha grabada',
      'Empaque de regalo con lazo satinado'
    ],
    originalPrice: 220,
    promoPrice: 175,
    image: '/images/products/taza-magica.jpg',
    techniques: ['DTF Textil', 'Sublimación Mágica', 'Láser'],
    featured: true
  },
  {
    id: 'cojin-cuadro-amor',
    seasonId: 'san-valentin',
    name: 'Set Cojín & Cuadro de Amor',
    badge: 'Recuerdo Eterno',
    tagline: 'Ideal para aniversarios y San Valentín',
    description: 'Cojín de felpa suave con foto de alta resolución + Cuadro decorativo con código de canción de Spotify y coordenadas de su lugar especial.',
    includes: [
      'Cojín 40x40 cm con relleno siliconado y funda lavable',
      'Cuadro fotográfico enmarcado 20x30 cm con vidrio',
      'Grabado de dedicatoria personalizada'
    ],
    originalPrice: 135,
    promoPrice: 105,
    image: '/images/products/almohadas.jpg',
    techniques: ['Sublimación Full Color'],
    featured: false
  },

  // =================== DÍA DE LA MADRE & PADRE ===================
  {
    id: 'kit-termo-libreta-mama-papa',
    seasonId: 'dia-madre-padre',
    name: 'Kit Homenaje Termo & Libreta Premium',
    badge: 'Regalo Emotivo',
    tagline: 'Un obsequio elegante con frase de agradecimiento',
    description: 'Termo inteligente con sensor de temperatura LED grabado en láser con el nombre de mamá o papá + libreta de cuero con dedicatoria.',
    includes: [
      'Termo digital de acero 500ml con pantalla táctil de temperatura',
      'Libreta ejecutiva personalizada con frase emotiva',
      'Bolígrafo de metal grabado a juego',
      'Caja rígida con sello dorado'
    ],
    originalPrice: 155,
    promoPrice: 120,
    image: '/images/products/termos.jpg',
    techniques: ['Grabado Láser', 'Impresión UV'],
    featured: true
  },
  {
    id: 'combo-chef-mandil-taza',
    seasonId: 'dia-madre-padre',
    name: 'Combo "Chef de la Casa"',
    badge: 'Favorito Familiar',
    tagline: 'Para los reyes y reinas de la cocina familiar',
    description: 'Mandil de gabardina pesada con bolsillos de cuero y bordado con su nombre + taza de cerámica esmaltada de 11oz.',
    includes: [
      'Mandil de chef con correas ajustables y bordado de alta calidad',
      'Taza personalizada con frase o foto',
      'Empaque protector para regalo'
    ],
    originalPrice: 110,
    promoPrice: 85,
    image: '/images/products/mandiles.jpg',
    techniques: ['Bordado Computarizado', 'Sublimación'],
    featured: false
  },

  // =================== FIESTAS PATRIAS ===================
  {
    id: 'pack-civico-gorra-polera',
    seasonId: 'fiestas-patrias',
    name: 'Pack Cívico "Orgullo Boliviano"',
    badge: 'Especial 6 de Agosto',
    tagline: 'Indumentaria para desfiles, colegios e instituciones',
    description: 'Gorra estructurada con bordado en alto relieve 3D del escudo o escarapela + polera polo piqué con bordado en pecho.',
    includes: [
      'Gorra de gabardina pesada con bordado 3D de alta densidad',
      'Polo piqué 100% algodón con bordado institucional',
      'Escarapela o pin metálico de regalo'
    ],
    originalPrice: 125,
    promoPrice: 95,
    image: '/images/products/gorras.jpg',
    techniques: ['Bordado 3D Computarizado'],
    featured: true
  },
  {
    id: 'combo-panueletas-escarapelas',
    seasonId: 'fiestas-patrias',
    name: 'Pack 20 Pañoletas & Escarapelas Sublimadas',
    badge: 'Mayorista Institucional',
    tagline: 'Para promociones escolares, desfiles y comparsas',
    description: 'Set institucional de 20 pañoletas en satén brillante sublimadas a todo color con los colores de la tricolor o bandera departamental.',
    includes: [
      '20 Pañoletas de satén fino con dobladillo reforzado',
      '20 Escarapelas sublimadas con broche de seguridad',
      'Descuento especial por volumen ya aplicado'
    ],
    originalPrice: 220,
    promoPrice: 170,
    image: '/images/products/chapitas.jpg',
    techniques: ['Sublimación Textil'],
    featured: false
  }
];

// Helper to convert a seasonal item to a Product-like structure for the cart & modal
export const seasonalItemToProduct = (item: SeasonalItem): Product => {
  const isShirt = item.seasonId === 'navidad' || item.seasonId === 'halloween' || item.name.toLowerCase().includes('polera') || item.name.toLowerCase().includes('modelo');
  const isHalloween = item.seasonId === 'halloween';
  
  return {
    id: item.id,
    name: item.name,
    category: 'regalos',
    categoryName: `Temporada ${item.seasonId.replace('-', ' ').toUpperCase()}`,
    shortDescription: item.tagline || item.description,
    fullDescription: `${item.description}\n\nDetalles y lo que incluye:\n${item.includes.map(inc => `• ${inc}`).join('\n')}`,
    price: item.promoPrice,
    unit: isShirt ? 'unidad' : 'pack',
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
    ] : [{ name: 'Edición Temporada', hex: '#D32F2F' }],
    sizes: isShirt ? ['Infantil (2-14)', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] : ['Estándar'],
    techniques: item.techniques,
    minQuantity: 1,
    image: item.image,
    gallery: [item.image],
    specs: [
      { label: 'Campaña', value: item.badge || 'Edición Limitada 2026' },
      ...item.includes.map((inc, i) => ({ label: `Detalle ${i + 1}`, value: inc }))
    ]
  };
};

export const buildSeasonalWhatsAppUrl = (item: SeasonalItem, seasonName: string): string => {
  const text =
    `*CONSULTA DE EDICIÓN ESPECIAL POR TEMPORADA - ART MANIA*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Campaña: ${seasonName}\n` +
    `Pack / Artículo: ${item.name}\n` +
    `Colección: ${item.badge}\n` +
    `Precio Promocional: Bs. ${item.promoPrice} (Precio Regular: Bs. ${item.originalPrice})\n` +
    `Técnicas: ${item.techniques.join(', ')}\n` +
    `Incluye:\n${item.includes.map(inc => `   • ${inc}`).join('\n')}\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Hola ART MANIA. Deseo solicitar información y disponibilidad para encargar este combo temático.`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
};

export const buildSeasonalCatalogPdfUrl = (seasonName: string): string => {
  const text =
    `*SOLICITUD DE CATÁLOGO ESPECIAL EN PDF - ART MANIA*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `Hola ART MANIA. Quisiera solicitar el Catálogo Digital en PDF de la temporada de ${seasonName} para revisar precios de combos y cotizaciones al por mayor para mi empresa o institución.\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━`;

  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
};
