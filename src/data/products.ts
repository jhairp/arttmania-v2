export interface Product {
  id: string;
  name: string;
  category: 'poleras' | 'tazas' | 'gorras' | 'regalos' | 'sublimacion' | 'textiles' | 'merchandising';
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  price: number; // in Bolivianos (Bs.)
  unit: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  featured?: boolean;
  badge?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  techniques: string[];
  minQuantity: number;
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
}

export const PRODUCTS: Product[] = [
  // ================= TEXTILES & POLERAS & GORRAS =================
  {
      id: 'polera-personalizada',
      name: 'Polera Personalizada Cuello Redondo',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Algodón peinado 100% 20/1 de alta suavidad. Estampado en DTF textil de máxima definición y elasticidad.',
      fullDescription: 'Confeccionada con tela de algodón peinado suave de 180 gramos, costuras reforzadas en hombros y cuello rib de alta resistencia. Ideal para marcas personales, promociones o eventos familiares con estampado a todo color sin límite de tintas.',
      price: 65,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 38,
      inStock: true,
      featured: true,
      badge: 'Más Vendido',
      colors: [
        { name: 'Negro Grafito', hex: '#141517' },
        { name: 'Blanco Suave', hex: '#F1F1F1' },
        { name: 'Azul Marino', hex: '#16233B' },
        { name: 'Verde Bosque', hex: '#0B3323' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['DTF Textil', 'Logo Mediano (38 Bs.)', 'Serigrafía', 'Bordado'],
      minQuantity: 1,
      image: '/images/products/polera-personalizada.jpg',
      gallery: ['/images/products/polera-personalizada.jpg'],
      specs: [
        { label: 'Precios Estándar', value: '65 Bs. uno | 120 Bs. el par | Logos medianos a 38 Bs.' },
        { label: 'Tallas', value: 'S, M, L (Tallas superiores consultar para cotizar)' },
        { label: 'Material', value: '100% Algodón Peinado 20/1 (180 g/m²)' },
        { label: 'Cuello', value: 'Rib de algodón elastano reforzado' }
      ]
    },
  {
      id: 'sudadera-hoodie',
      name: 'Canguro Hoodie con Capucha y Bolsillo Frontal',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Algodón frizado perchado grueso de 320g, ojalillos metálicos y forro interno suave.',
      fullDescription: 'Sudadera pesada con capucha de doble capa y bolsillo canguro reforzado. Su acabado interior perchado abriga manteniendo la transpirabilidad, garantizando una base inmejorable para estampados DTF o bordado.',
      price: 145,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 31,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Negro Profundo', hex: '#0D0E10' },
        { name: 'Gris Jaspe', hex: '#484B52' },
        { name: 'Azul Petróleo', hex: '#142538' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['DTF Textil', 'Bordado Computarizado'],
      minQuantity: 1,
      image: '/images/products/sudadera-hoodie.jpg',
      gallery: ['/images/products/sudadera-hoodie.jpg'],
      specs: [
        { label: 'Tela', value: 'Franela de Algodón perchado 320g' },
        { label: 'Capucha', value: 'Doble capa con cordón trenzado' },
        { label: 'Herrajes', value: 'Ojalillos de latón niquelado' }
      ]
    },
  {
      id: 'uniformes-empresariales',
      name: 'Polo Piqué Corporativo Ejecutivo',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Tejido piqué 60% algodón 40% poliéster que no encoge ni desteñe con bordado en pecho.',
      fullDescription: 'Prenda institucional diseñada para uso intensivo en oficinas, sucursales bancarias y fuerzas de ventas. Cuello y puños tejidos que mantienen su forma tras cientos de ciclos de lavado.',
      price: 70,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 39,
      inStock: true,
      colors: [
        { name: 'Grafito Corporativo', hex: '#26292E' },
        { name: 'Azul Marino', hex: '#121D30' },
        { name: 'Blanco Óptico', hex: '#F5F5F7' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['Bordado Computarizado', 'DTF Textil'],
      minQuantity: 6,
      image: '/images/products/uniformes-empresariales.jpg',
      gallery: ['/images/products/uniformes-empresariales.jpg'],
      specs: [
        { label: 'Tejido', value: 'Piqué peinado 220 g/m²' },
        { label: 'Botones', value: '3 botones nacarados al tono' },
        { label: 'Corte', value: 'Regular Fit para dama y varón' }
      ]
    },
  {
      id: 'polera-oversize',
      name: 'Polera Streetwear Heavyweight Oversize',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Corte amplio drop-shoulder en algodón premium de 240g con cuello grueso de 3cm.',
      fullDescription: 'La silueta moderna favorita de las marcas urbanas. Algodón pesado de calidad superior con caída estructurada y hombro caído, perfecta para colecciones de autor y merch de creadores.',
      price: 85,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 42,
      inStock: true,
      featured: true,
      badge: 'Tendencia',
      colors: [
        { name: 'Negro Lavado', hex: '#1C1D20' },
        { name: 'Gris Carbón', hex: '#2B2E32' },
        { name: 'Crema Off-White', hex: '#EAE6DF' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['DTF Textil', 'Serigrafía al agua'],
      minQuantity: 1,
      image: '/images/products/polera-oversize.jpg',
      gallery: ['/images/products/polera-oversize.jpg'],
      specs: [
        { label: 'Gramaje', value: '240 g/m² Heavyweight' },
        { label: 'Corte', value: 'Boxy / Drop Shoulder' },
        { label: 'Cuello', value: 'Rib tubular de 3.2 cm' }
      ]
    },
  {
      id: 'poleron-crewneck',
      name: 'Sudadera Clásica Cuello Redondo (Crewneck)',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Franela de algodón perchado 280g con interior suave y puños acanalados. Perfecto para bordado y DTF.',
      fullDescription: 'Sudadera sin capucha confeccionada en algodón perchado premium con interior afelpado térmico de gran confort. Cuello redondo reforzado con rib 2x1 y costuras overlock de cuatro hilos. Prenda favorita para promociones estudiantiles y merch corporativo minimalista.',
      price: 110,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 32,
      inStock: true,
      featured: true,
      badge: 'Popular',
      colors: [
        { name: 'Negro Profundo', hex: '#0D0E10' },
        { name: 'Gris Melange', hex: '#63676E' },
        { name: 'Azul Marino', hex: '#162235' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['DTF Textil', 'Bordado Computarizado', 'Serigrafía'],
      minQuantity: 6,
      image: '/images/products/poleron-crewneck.jpg',
      gallery: ['/images/products/poleron-crewneck.jpg'],
      specs: [
        { label: 'Composición', value: '70% Algodón / 30% Poliéster Perchado' },
        { label: 'Gramaje', value: '280 g/m² térmico' },
        { label: 'Acabados', value: 'Puños y basta en rib elástico reforzado' }
      ]
    },
  {
      id: 'gorras',
      name: 'Gorra Snapback 6 Paneles Estructurada',
      category: 'gorras',
      categoryName: 'Gorras',
      shortDescription: 'Corona alta armada con entretela dura, visera plana o semi-curva y bordado 3D de alto relieve.',
      fullDescription: 'Gorra estilo premium con cierre de plástico regulable a presión, ojales bordados para ventilación y banda interior anti-sudor. Soporta bordado plano, relieve 3D puff o parches de cuero grabados a láser.',
      price: 50,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 52,
      inStock: true,
      colors: [
        { name: 'Negro / Visera Negra', hex: '#141517' },
        { name: 'Negro / Visera Verde', hex: '#00A878' },
        { name: 'Azul Marino', hex: '#0E1E38' }
      ],
      sizes: ['Ajustable (Snapback)'],
      techniques: ['Bordado 3D', 'Parche Láser', 'DTF Textil'],
      minQuantity: 6,
      image: '/images/products/gorras.jpg',
      gallery: ['/images/products/gorras.jpg'],
      specs: [
        { label: 'Paneles', value: '6 paneles estructurados' },
        { label: 'Material', value: 'Twill de algodón acrílico' },
        { label: 'Cierre', value: 'Broche regulable de 7 puntos' }
      ]
    },
  {
      id: 'gorra-trucker',
      name: 'Gorra Trucker con Malla Transpirable',
      category: 'gorras',
      categoryName: 'Gorras',
      shortDescription: 'Frontal acolchado de esponja o twill y malla trasera de alta ventilación con broche plástico snapback.',
      fullDescription: 'La gorra publicitaria más solicitada en ferias y eventos masivos. Su panel frontal plano de poliéster acolchado brinda el lienzo perfecto para estampado full color DTF o sublimación nítida con costos altamente competitivos.',
      price: 35,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 54,
      inStock: true,
      badge: 'Económica',
      colors: [
        { name: 'Frente Blanco / Malla Negra', hex: '#141518' },
        { name: 'Frente Blanco / Malla Azul', hex: '#0C2D5C' },
        { name: 'Negro Total', hex: '#08090A' }
      ],
      sizes: ['Ajustable (54-60cm)'],
      techniques: ['DTF Textil', 'Sublimación', 'Bordado'],
      minQuantity: 12,
      image: '/images/products/gorra-trucker.jpg',
      gallery: ['/images/products/gorra-trucker.jpg'],
      specs: [
        { label: 'Frontal', value: 'Poliéster acolchado alta densidad' },
        { label: 'Malla', value: 'Red de nylon transpirable' },
        { label: 'Cierre', value: 'Broche plástico snapback de 7 puntos' }
      ]
    },
  {
      id: 'polera-deportiva',
      name: 'Polera Deportiva Dry-Fit',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Tejido técnico microperforado de secado rápido con protección UV y sublimación full print.',
      fullDescription: 'Prenda deportiva de alto rendimiento fabricada en microfibra poliéster con tecnología de dispersión de humedad. Sublimada con colores vivos que nunca se destiñen ni pierden brillo con el sudor o lavados intensos.',
      price: 55,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 24,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Negro / Azul', hex: '#0F1A2C' },
        { name: 'Verde Deportivo', hex: '#00A878' },
        { name: 'Gris Plata', hex: '#8E9297' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['Sublimación', 'Vinil Textil'],
      minQuantity: 6,
      image: '/images/products/polera-deportiva.jpg',
      gallery: ['/images/products/polera-deportiva.jpg'],
      specs: [
        { label: 'Composición', value: '100% Microfibra Dry-Fit' },
        { label: 'Propiedades', value: 'Transpirable, anti-bacterial' },
        { label: 'Técnica', value: 'Sublimación digital total' }
      ]
    },
  {
      id: 'polera-manga-larga',
      name: 'Polera Manga Larga de Algodón Peinado',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Algodón 100% 20/1 con puños rib elásticos. Excelente para media estación y uniformes de personal.',
      fullDescription: 'Prenda clásica de alta rotación para promociones de invierno y uniformes de trabajo diurno. Tela de algodón peinado suave de 180 gramos con refuerzo de hombro a hombro y puños acanalados que mantienen la manga en su lugar.',
      price: 75,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 33,
      inStock: true,
      colors: [
        { name: 'Negro Grafito', hex: '#141517' },
        { name: 'Blanco Suave', hex: '#F1F1F1' },
        { name: 'Azul Marino', hex: '#16233B' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['DTF Textil', 'Serigrafía', 'Bordado'],
      minQuantity: 6,
      image: '/images/products/polera-manga-larga.jpg',
      gallery: ['/images/products/polera-manga-larga.jpg'],
      specs: [
        { label: 'Material', value: '100% Algodón Peinado 20/1' },
        { label: 'Gramaje', value: '180 g/m²' },
        { label: 'Mangas', value: 'Puños con rib de algodón elastano' }
      ]
    },
  {
      id: 'cortavientos-windbreaker',
      name: 'Chaqueta Cortavientos Impermeable (Windbreaker)',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Tela taslán microfibra repelente al agua con forro interior de malla transpirable y capucha oculta.',
      fullDescription: 'Chaqueta liviana para protección contra viento y lluvia ligera, diseñada para equipos de entrega, staff deportivo y personal móvil. Incluye cintura y capucha con tensores elásticos regulables y cierres sellados.',
      price: 125,
      unit: 'unidad',
      rating: 4.7,
      reviewsCount: 22,
      inStock: true,
      colors: [
        { name: 'Negro / Grafito', hex: '#111215' },
        { name: 'Azul Rey', hex: '#0B3A82' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['Bordado Computarizado', 'DTF Textil', 'Vinil Reflectivo'],
      minQuantity: 6,
      image: '/images/products/cortavientos-windbreaker.jpg',
      gallery: ['/images/products/cortavientos-windbreaker.jpg'],
      specs: [
        { label: 'Exterior', value: 'Taslán 100% poliéster repelente' },
        { label: 'Forro', value: 'Malla transpirable dry-mesh' },
        { label: 'Ajuste', value: 'Cordón elástico con stopper en basta' }
      ]
    },
  {
      id: 'chaleco-corporativo',
      name: 'Chaleco Corporativo Acolchado Térmico',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Cierre completo, cuello alto y relleno térmico ligero. Ideal para ejecutivos y personal de campo.',
      fullDescription: 'Chaleco impermeable de perfil ejecutivo con acolchado romboidal o lineal de alta densidad. Cuenta con bolsillos laterales con cremallera invisible, forro térmico transpirable y cuello alto que brinda abrigo sin restar movilidad.',
      price: 135,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 19,
      inStock: true,
      colors: [
        { name: 'Negro Mate', hex: '#141517' },
        { name: 'Azul Ejecutivo', hex: '#0F1E38' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['Bordado Computarizado', 'Parche Láser Cuero'],
      minQuantity: 6,
      image: '/images/products/chaleco-corporativo.jpg',
      gallery: ['/images/products/chaleco-corporativo.jpg'],
      specs: [
        { label: 'Exterior', value: 'Microfibra semi-mate repelente al agua' },
        { label: 'Aislamiento', value: 'Guata siliconada térmica ultraligera' },
        { label: 'Bolsillos', value: '2 laterales con cierre + 1 interno' }
      ]
    },
  {
      id: 'mandiles',
      name: 'Mandil de Barista & Chef en Denim y Cuero',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Denim negro pesado con correas de cuero genuino regulables y remaches metálicos de latón.',
      fullDescription: 'El mandil profesional definitivo para cafeterías de especialidad, restaurantes, barberías y talleres creativos. Ofrece bolsillos porta-libreta, porta-lapiceros y tira de colgar repasador con costuras de doble pespunte.',
      price: 95,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 28,
      inStock: true,
      colors: [
        { name: 'Denim Negro', hex: '#1C1F24' },
        { name: 'Denim Índigo', hex: '#162235' }
      ],
      sizes: ['Talla Única Ajustable'],
      techniques: ['Grabado Láser en Cuero', 'Bordado', 'DTF Textil'],
      minQuantity: 3,
      image: '/images/products/mandiles.jpg',
      gallery: ['/images/products/mandiles.jpg'],
      specs: [
        { label: 'Cuerpo', value: 'Denim rígido 12 onzas' },
        { label: 'Arnés', value: 'Cuero genuino desmontable en X' },
        { label: 'Herrajes', value: 'Mosquetones y remaches de latón viejo' }
      ]
    },
  {
      id: 'musculosa-deportiva',
      name: 'Musculosa Deportiva / Bividí Dry-Fit',
      category: 'poleras',
      categoryName: 'Poleras',
      shortDescription: 'Sisa amplia y costuras reforzadas para máxima libertad de movimiento. Tejido técnico anti-humedad.',
      fullDescription: 'Camiseta sin mangas diseñada para atletismo, crossfit, gimnasios y competencias de verano. Microfibra deportiva con canales de ventilación y tratamiento antibacterial, personalizable con sublimación fotográfica sin límite de colores.',
      price: 45,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 18,
      inStock: true,
      colors: [
        { name: 'Negro Deportivo', hex: '#101216' },
        { name: 'Verde Flúor', hex: '#00A878' },
        { name: 'Azul Francia', hex: '#0055D4' }
      ],
      sizes: ['S', 'M', 'L'],
      techniques: ['Sublimación Full Print', 'Vinil Textil'],
      minQuantity: 6,
      image: '/images/products/musculosa-deportiva.jpg',
      gallery: ['/images/products/musculosa-deportiva.jpg'],
      specs: [
        { label: 'Tejido', value: 'Microfibra poliéster con elastano 145g' },
        { label: 'Corte', value: 'Espalda deportiva con sisa holgada' },
        { label: 'Propiedades', value: 'Secado ultra rápido y protección UV' }
      ]
    },
  {
      id: 'chaleco-seguridad',
      name: 'Chaleco de Seguridad Reflectivo Brigadista',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Tela dril o gabardina de alta visibilidad con múltiples bolsillos y cintas reflectivas 3M homologadas.',
      fullDescription: 'Chaleco técnico para supervisores, prevencionistas e ingenieros en obra. Confeccionado en tela dril de alta resistencia con porta-radio, porta-lapiceros, compartimento para credencial y dos bandas reflectivas 3M de 2 pulgadas cruzadas en espalda y paralelas en pecho.',
      price: 60,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 41,
      inStock: true,
      badge: 'Seguridad',
      colors: [
        { name: 'Naranja Alta Visibilidad', hex: '#FF6B00' },
        { name: 'Amarillo Neón', hex: '#D2FF00' },
        { name: 'Azul Marino', hex: '#132138' }
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      techniques: ['DTF Textil', 'Serigrafía', 'Bordado'],
      minQuantity: 12,
      image: '/images/products/chaleco-seguridad.jpg',
      gallery: ['/images/products/chaleco-seguridad.jpg'],
      specs: [
        { label: 'Material', value: 'Dril nacional 100% algodón / Gabardina' },
        { label: 'Reflectivo', value: 'Cinta 3M clase 2 certificada' },
        { label: 'Compartimentos', value: '4 bolsillos delanteros con fuelle' }
      ]
    },
  {
      id: 'ropa-trabajo',
      name: 'Chaqueta de Trabajo de Alta Resistencia con Bandas 3M',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Dril de alta densidad con refuerzos en codos y cinta reflectiva para faenas industriales.',
      fullDescription: 'Chaqueta de seguridad industrial confeccionada bajo estándares normativos con cremallera de uso rudo oculta por solapa con broches. Bolsillos con fuelle y compartimento especial para detectores o radios.',
      price: 160,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 15,
      inStock: true,
      colors: [
        { name: 'Azul Petróleo / Amarillo Flúor', hex: '#1A293D' },
        { name: 'Gris Plomo / Naranja', hex: '#34383F' }
      ],
      sizes: ['M', 'L', 'XL', 'XXL'],
      techniques: ['Bordado', 'Vinil Reflectivo'],
      minQuantity: 6,
      image: '/images/products/ropa-trabajo.jpg',
      gallery: ['/images/products/ropa-trabajo.jpg'],
      specs: [
        { label: 'Tela exterior', value: 'Dril pesado 100% algodón anti-chispas' },
        { label: 'Bandas', value: 'Cinta reflectiva microprismática 3M de 2 pulgadas' },
        { label: 'Cierre', value: 'Cremallera de nylon separable calibre 8' }
      ]
    },
  {
      id: 'overol-industrial',
      name: 'Overol Industrial de Trabajo Tipo Mameluco',
      category: 'textiles',
      categoryName: 'Textiles',
      shortDescription: 'Dril 100% algodón pesado de uso rudo con doble cierre frontal, múltiples bolsillos y cintas reflectivas 3M.',
      fullDescription: 'Traje de protección integral para operarios de minería, mecánica automotriz, hidrocarburos y construcción civil. Elaborado en dril pesado anti-desgarro con triple costura reforzada en tiros y entrepierna, cintura elastizada y bandas reflectivas 3M en brazos, pecho y piernas.',
      price: 180,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 16,
      inStock: true,
      badge: 'Industrial',
      colors: [
        { name: 'Azul Marino Industrial', hex: '#131E33' },
        { name: 'Naranja Seguridad', hex: '#E05500' }
      ],
      sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
      techniques: ['Bordado Computarizado', 'Serigrafía Textil'],
      minQuantity: 6,
      image: '/images/products/overol-industrial.jpg',
      gallery: ['/images/products/overol-industrial.jpg'],
      specs: [
        { label: 'Tela', value: 'Dril pesado 100% algodón 310 g/m²' },
        { label: 'Seguridad', value: 'Bandas reflectivas 3M en mangas, pecho y botamangas' },
        { label: 'Cremallera', value: 'Cierre bidireccional metálico de alta resistencia' }
      ]
    },
  // ================= TAZAS & SUBLIMACIÓN =================
  {
      id: 'taza-blanca',
      name: 'Taza de Cerámica Blanca Sublimada 11oz',
      category: 'tazas',
      categoryName: 'Tazas',
      shortDescription: 'Cerámica AAA de alto brillo con polímero uniforme apta para microondas y lavavajillas.',
      fullDescription: 'El clásico indiscutible del merchandising personal y de negocios. Nuestra cerámica grado AAA asegura una blancura pura y un recubrimiento de polímero cristalino que capta hasta el último degradado sin zonas borrosas.',
      price: 25,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 88,
      inStock: true,
      featured: true,
      badge: 'Top Ventas',
      colors: [{ name: 'Blanco Cerámico', hex: '#F7F8FA' }],
      sizes: ['11 Onzas (325 ml)'],
      techniques: ['Sublimación Digital'],
      minQuantity: 1,
      image: '/images/products/taza-blanca.jpg',
      gallery: ['/images/products/taza-blanca.jpg'],
      specs: [
        { label: 'Capacidad', value: '11 onzas / 325 ml' },
        { label: 'Calidad', value: 'Cerámica Premium AAA' },
        { label: 'Apta para', value: 'Microondas y lavavajillas' }
      ]
    },
  {
      id: 'taza-magica',
      name: 'Taza Mágica Termosensible Mate',
      category: 'tazas',
      categoryName: 'Tazas',
      shortDescription: 'Negra mate en frío; al verter líquido caliente revela el diseño oculto a todo color.',
      fullDescription: 'Sorprende a tus clientes o seres queridos con este efecto visual cautivador. En reposo es una elegante taza negro mate; basta con agregar café o té caliente para que la capa termosensible se aclare y muestre tu arte.',
      price: 35,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 64,
      inStock: true,
      featured: true,
      badge: 'Efecto Mágico',
      colors: [{ name: 'Negro Termosensible', hex: '#161719' }],
      sizes: ['11 Onzas (325 ml)'],
      techniques: ['Sublimación Termosensible'],
      minQuantity: 1,
      image: '/images/products/taza-magica.jpg',
      gallery: ['/images/products/taza-magica.jpg'],
      specs: [
        { label: 'Acabado', value: 'Negro Satinado / Mate' },
        { label: 'Mecanismo', value: 'Pigmento termocrómico reactivo a >45°C' },
        { label: 'Cuidados', value: 'Lavar con esponja suave' }
      ]
    },
  {
      id: 'termos',
      name: 'Termo Tumbler de Acero Inoxidable Doble Pared',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Mantiene bebidas frías por 24 horas y calientes por 12 horas. Tapa hermética y grabado láser o DTF UV.',
      fullDescription: 'Termo metálico de alta gama de 500ml construido en acero quirúrgico 304 libre de BPA con aislamiento al vacío de doble pared. Su exterior negro mate recibe grabado láser plateado brillante o transfer DTF UV a color con relieve.',
      price: 65,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 47,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Negro Mate', hex: '#141517' },
        { name: 'Plata Acero', hex: '#C6C8CB' },
        { name: 'Azul Noche', hex: '#16233B' }
      ],
      sizes: ['500 ml', '750 ml'],
      techniques: ['Grabado Láser', 'DTF UV', 'Sublimación'],
      minQuantity: 1,
      image: '/images/products/termos.jpg',
      gallery: ['/images/products/termos.jpg'],
      specs: [
        { label: 'Material', value: 'Acero Inoxidable 18/8 grado alimenticio' },
        { label: 'Aislamiento', value: 'Doble pared al vacío ThermalShield' },
        { label: 'Capacidad', value: '500 ml' }
      ]
    },
  {
      id: 'tomatodos',
      name: 'Tomatodo Deportivo de Aluminio con Mosquetón',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Botella ligera de 600ml con tapa de rosca a prueba de fugas y gancho mosquetón.',
      fullDescription: 'La compañera ideal para gimnasios, paseos de colegio y eventos deportivos al aire libre. Su cuerpo cilíndrico de aluminio permite estampados perimetrales continuos 360 grados.',
      price: 45,
      unit: 'unidad',
      rating: 4.7,
      reviewsCount: 22,
      inStock: true,
      colors: [
        { name: 'Blanco Brillante', hex: '#F7F8FA' },
        { name: 'Aluminio Plata', hex: '#B5B9BE' }
      ],
      sizes: ['600 ml'],
      techniques: ['Sublimación 360°'],
      minQuantity: 3,
      image: '/images/products/tomatodos.jpg',
      gallery: ['/images/products/tomatodos.jpg'],
      specs: [
        { label: 'Material', value: 'Aluminio anodizado ultraligero' },
        { label: 'Accesorios', value: 'Tapa rosca con junta de silicona y mosquetón' },
        { label: 'Capacidad', value: '600 ml' }
      ]
    },
  {
      id: 'taza-colores',
      name: 'Taza Bicolor con Interior y Asa de Color',
      category: 'tazas',
      categoryName: 'Tazas',
      shortDescription: 'Exterior blanco brillante con asa e interior esmaltados en colores vivos a elección.',
      fullDescription: 'Añade un toque de contraste alineado con la paleta de tu logotipo corporativo. El interior esmaltado aporta sofisticación y resalta sobre cualquier escritorio de trabajo.',
      price: 28,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 35,
      inStock: true,
      colors: [
        { name: 'Interior Verde', hex: '#00A878' },
        { name: 'Interior Azul', hex: '#0759E8' },
        { name: 'Interior Magenta', hex: '#E600A9' },
        { name: 'Interior Amarillo', hex: '#F5B800' },
        { name: 'Interior Negro', hex: '#141517' }
      ],
      sizes: ['11 Onzas (325 ml)'],
      techniques: ['Sublimación Digital'],
      minQuantity: 1,
      image: '/images/products/taza-colores.jpg',
      gallery: ['/images/products/taza-colores.jpg'],
      specs: [
        { label: 'Capacidad', value: '11 onzas / 325 ml' },
        { label: 'Esmalte interno', value: 'Cerámica vitrificada de color' }
      ]
    },
  {
      id: 'mousepads',
      name: 'Mousepad Gamer XL de Precisión',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Superficie de tela micro-texturizada con base de goma antideslizante y bordes cosidos reforzados.',
      fullDescription: 'Disponible en tamaño estándar de oficina o tapete extendido para teclado y mouse de 90x40 cm. Deslizamiento suave de baja fricción y base de caucho natural que no se mueve de su lugar.',
      price: 40,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 56,
      inStock: true,
      colors: [{ name: 'Borde Negro', hex: '#121315' }],
      sizes: ['Estándar 22x18 cm', 'XL Gamer 80x30 cm', 'XXL Desk Mat 90x40 cm'],
      techniques: ['Sublimación HD'],
      minQuantity: 1,
      image: '/images/products/mousepads.jpg',
      gallery: ['/images/products/mousepads.jpg'],
      specs: [
        { label: 'Espesor', value: '3 mm y 4 mm' },
        { label: 'Superficie', value: 'Microfibra Speed/Control' },
        { label: 'Borde', value: 'Overlock anti-deshilachado' }
      ]
    },
  {
      id: 'almohadas',
      name: 'Cojín Decorativo Personalizado con Relleno',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Funda desmontable con cremallera oculta en tela lino o satén con relleno de fibra siliconada.',
      fullDescription: 'Cojín cuadrado de 40x40 cm ideal para salas de espera, habitaciones temáticas o regalos corporativos. Su cremallera oculta facilita el lavado de la funda sin dañar el estampado.',
      price: 45,
      unit: 'unidad',
      rating: 4.7,
      reviewsCount: 26,
      inStock: true,
      colors: [
        { name: 'Lino Natural', hex: '#DDD6CC' },
        { name: 'Blanco Satén', hex: '#F2F2F2' }
      ],
      sizes: ['40 x 40 cm'],
      techniques: ['Sublimación Full Color'],
      minQuantity: 1,
      image: '/images/products/almohadas.jpg',
      gallery: ['/images/products/almohadas.jpg'],
      specs: [
        { label: 'Funda', value: 'Poliéster tipo lino / satén con cremallera' },
        { label: 'Relleno', value: 'Fibra hueca siliconada hipoalergénica' }
      ]
    },
  {
      id: 'portarretratos',
      name: 'Portarretrato de Piedra / Roca Fotográfica Natural',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Laja de roca sedimentaria chiseled con bordes rústicos y cara pulida de alto brillo.',
      fullDescription: 'Cada pieza es única gracias a sus bordes fracturados naturalmente a mano. La fotografía se imprime sobre la superficie blanca esmaltada con una profundidad y relieve visual incomparable.',
      price: 70,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 33,
      inStock: true,
      colors: [{ name: 'Roca Natural', hex: '#2E3033' }],
      sizes: ['15 x 20 cm', '20 x 30 cm'],
      techniques: ['Sublimación de Alta Presión'],
      minQuantity: 1,
      image: '/images/products/portarretratos.jpg',
      gallery: ['/images/products/portarretratos.jpg'],
      specs: [
        { label: 'Material', value: 'Pizarra de roca natural' },
        { label: 'Espesor', value: '9 mm a 11 mm' },
        { label: 'Accesorios', value: 'Par de pies plásticos de soporte' }
      ]
    },
  {
      id: 'rompecabezas',
      name: 'Rompecabezas Personalizado de Cartón Rígido',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Piezas troqueladas con precisión y acabado brillante, entregado en caja personalizada.',
      fullDescription: 'Un regalo entrañable para aniversarios, recuerdos institucionales o actividades de integración de equipos de trabajo. Reproduce fotografías con fidelidad de color y encaje milimétrico.',
      price: 35,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 18,
      inStock: true,
      colors: [{ name: 'Base Blanca HD', hex: '#FFFFFF' }],
      sizes: ['A4 (120 piezas)', 'A3 (252 piezas)'],
      techniques: ['Sublimación HD'],
      minQuantity: 1,
      image: '/images/products/rompecabezas.jpg',
      gallery: ['/images/products/rompecabezas.jpg'],
      specs: [
        { label: 'Material', value: 'Cartón prensado de alta densidad 1.8mm' },
        { label: 'Presentación', value: 'Incluye bolsa sellada y muestra impresa' }
      ]
    },
  {
      id: 'platos-decorativos',
      name: 'Plato Conmemorativo de Porcelana con Borde Dorado',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Porcelana vitrificada con ribete metálico y soporte acrílico de exhibición.',
      fullDescription: 'Distinción elegante para homenajes, aniversarios de bodas, reconocimientos por años de servicio y premiaciones de empresas.',
      price: 60,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 12,
      inStock: true,
      colors: [{ name: 'Porcelana / Oro', hex: '#F4F5F7' }],
      sizes: ['20 cm de diámetro'],
      techniques: ['Sublimación Térmica'],
      minQuantity: 1,
      image: '/images/products/platos-decorativos.jpg',
      gallery: ['/images/products/platos-decorativos.jpg'],
      specs: [
        { label: 'Material', value: 'Porcelana fina vitrificada' },
        { label: 'Ribete', value: 'Lámina dorada horneada' },
        { label: 'Soporte', value: 'Caballete de sobremesa incluido' }
      ]
    },
  {
      id: 'ceramicas-personalizadas',
      name: 'Azulejo Cerámico Esmaltado Decorativo',
      category: 'sublimacion',
      categoryName: 'Sublimación',
      shortDescription: 'Baldosa cerámica brillante de 20x20 cm para murales, cuadros y recuerdos conmemorativos.',
      fullDescription: 'Azulejo cuadrado de arcilla cocida con recubrimiento de polímero cristalino. Puede montarse sobre bastidores de madera, adherirse a paredes interiores o exhibirse con atril de escritorio.',
      price: 35,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 17,
      inStock: true,
      colors: [{ name: 'Blanco Esmaltado', hex: '#FFFFFF' }],
      sizes: ['15 x 15 cm', '20 x 20 cm'],
      techniques: ['Sublimación Térmica'],
      minQuantity: 1,
      image: '/images/products/ceramicas-personalizadas.jpg',
      gallery: ['/images/products/ceramicas-personalizadas.jpg'],
      specs: [
        { label: 'Dimensiones', value: '200 x 200 x 6 mm' },
        { label: 'Acabado', value: 'Esmalte vidriado reflectante' }
      ]
    },
  // ================= REGALOS Y ACCESORIOS (7) =================
  {
      id: 'llaveros-mdf',
      name: 'Llaveros de Madera MDF con Corte y Grabado Láser',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Madera MDF de 3mm con corte de silueta personalizada, argolla de cadena y grabado indeleble.',
      fullDescription: 'Fabricamos llaveros con la forma exacta de tu logotipo, vehículo o mascota corporativa. El corte láser sella los bordes con un tono tostado rústico y el grabado quema la madera con precisión milimétrica.',
      price: 8,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 46,
      inStock: true,
      colors: [
        { name: 'MDF Natural', hex: '#B8976C' },
        { name: 'MDF Laqueado Negro', hex: '#222427' }
      ],
      sizes: ['5 cm promedio'],
      techniques: ['Corte Láser CNC', 'Grabado Láser', 'Impresión UV'],
      minQuantity: 12,
      image: '/images/products/llaveros-mdf.jpg',
      gallery: ['/images/products/llaveros-mdf.jpg'],
      specs: [
        { label: 'Espesor', value: '3.0 mm' },
        { label: 'Argolla', value: 'Cadena con eslabón reforzado de 25 mm' },
        { label: 'Personalización', value: 'Grabado a una o dos caras' }
      ]
    },
  {
      id: 'chapitas',
      name: 'Chapitas / Botones Publicitarios con Alfiler',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Chapitas redondas de 55mm con base metálica, papel fotográfico y mica protectora de mylar.',
      fullDescription: 'El accesorio publicitario más dinámico y económico para ferias, campañas estudiantiles, conciertos y promociones de alto impacto.',
      price: 5,
      unit: 'unidad',
      rating: 4.7,
      reviewsCount: 94,
      inStock: true,
      colors: [{ name: 'Mica Brillante Transparente', hex: '#EBEBEB' }],
      sizes: ['44 mm', '55 mm', '75 mm'],
      techniques: ['Impresión Fotográfica + Ensamble'],
      minQuantity: 25,
      image: '/images/products/chapitas.jpg',
      gallery: ['/images/products/chapitas.jpg'],
      specs: [
        { label: 'Diámetro', value: '55 mm estándar' },
        { label: 'Reverso', value: 'Hojalata con alfiler de gancho de seguridad' },
        { label: 'Frente', value: 'Película de mylar transparente impermeable' }
      ]
    },
  {
      id: 'pines',
      name: 'Pines Metálicos Esmaltados Personalizados',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Aleación de zinc con baño níquel o dorado, relieve nítido y cierre de mariposa.',
      fullDescription: 'Insignias de colección de alta calidad ideales para clubes, congresos, logotipos de marca o accesorios de moda sobre chaquetas y mochilas.',
      price: 15,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 71,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Plata Níquel', hex: '#C6C8CB' },
        { name: 'Oro Brillante', hex: '#F5B800' },
        { name: 'Negro Mate', hex: '#191A1C' }
      ],
      sizes: ['2.5 cm', '3.0 cm', '3.5 cm'],
      techniques: ['Esmaltado Suave', 'Corte CNC', 'Impresión UV'],
      minQuantity: 12,
      image: '/images/products/pines.jpg',
      gallery: ['/images/products/pines.jpg'],
      specs: [
        { label: 'Material', value: 'Aleación de zinc fundido' },
        { label: 'Cierre', value: 'Broche de mariposa / broche de goma' },
        { label: 'Acabado', value: 'Baño galvánico brillante o antiguo' }
      ]
    },
  {
      id: 'bolsas-ecologicas',
      name: 'Bolsa Ecológica Tote Bag de Tocuyo de Algodón',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Lienzo de algodón natural crudo con asas largas reforzadas y estampado serigráfico o DTF.',
      fullDescription: 'Sustituto reutilizable ideal para empaques de tiendas, congresos y regalos de cortesía. Su tejido resistente soporta hasta 12 kg de peso.',
      price: 20,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 65,
      inStock: true,
      colors: [
        { name: 'Crudo / Beige Natural', hex: '#E2DACE' },
        { name: 'Negro Lona', hex: '#181A1D' }
      ],
      sizes: ['38 x 42 cm'],
      techniques: ['Serigrafía', 'DTF Textil'],
      minQuantity: 12,
      image: '/images/products/bolsas-ecologicas.jpg',
      gallery: ['/images/products/bolsas-ecologicas.jpg'],
      specs: [
        { label: 'Tejido', value: 'Tocuyo 100% Algodón crudo 200g' },
        { label: 'Asas', value: 'Cinta de algodón reforzada en X de 65 cm' },
        { label: 'Capacidad de carga', value: 'Hasta 12 kg' }
      ]
    },
  {
      id: 'libretas',
      name: 'Libreta Ecológica con Bolígrafo de Cartón Reciclado',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Tapa de cartón kraft rígido, anillado doble cero metálico y bolígrafo ecológico a juego.',
      fullDescription: 'Refuerza la política de sostenibilidad de tu organización con este cuaderno ecológico. Hojas recicladas color tierra con porta-bolígrafo elástico.',
      price: 25,
      unit: 'unidad',
      rating: 4.7,
      reviewsCount: 33,
      inStock: true,
      colors: [
        { name: 'Kraft Natural / Verde', hex: '#00A878' },
        { name: 'Kraft Natural / Azul', hex: '#0759E8' },
        { name: 'Kraft Natural / Negro', hex: '#1E2024' }
      ],
      sizes: ['13 x 18 cm'],
      techniques: ['Serigrafía', 'DTF UV', 'Tampografía'],
      minQuantity: 12,
      image: '/images/products/libretas.jpg',
      gallery: ['/images/products/libretas.jpg'],
      specs: [
        { label: 'Tapas', value: 'Cartón kraft reciclado de 650g' },
        { label: 'Hojas', value: '70 hojas rayadas de papel reciclado' },
        { label: 'Incluye', value: 'Bolígrafo a juego en tubo de papel' }
      ]
    },
  {
      id: 'agendas',
      name: 'Agenda Ejecutiva con Tapa Dura de Cuero PU',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Encuadernación de lujo con cinta separadora, banda elástica y grabado bajo relieve o láser.',
      fullDescription: 'El regalo de fin de año o bienvenida institucional por excelencia. Hojas en papel ahuesado de 80g suaves al tacto que no traspasan la tinta de pluma.',
      price: 65,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 41,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Negro Ejecutivo', hex: '#16181A' },
        { name: 'Azul Noche', hex: '#16233B' },
        { name: 'Café Caramelo', hex: '#7A4B27' }
      ],
      sizes: ['A5 (15 x 21 cm)'],
      techniques: ['Grabado Láser', 'Bajo Relieve (Hot Stamping)', 'DTF UV'],
      minQuantity: 6,
      image: '/images/products/agendas.jpg',
      gallery: ['/images/products/agendas.jpg'],
      specs: [
        { label: 'Páginas', value: '192 páginas pautadas papel marfil 80g' },
        { label: 'Cubierta', value: 'Termo-poliuretano suave al tacto' },
        { label: 'Extras', value: 'Bolsillo interior en fuelle trasero' }
      ]
    },
  {
      id: 'cuadros-personalizados',
      name: 'Cuadro en Lienzo Canvas sobre Bastidor de Madera',
      category: 'regalos',
      categoryName: 'Regalos y Accesorios',
      shortDescription: 'Lienzo de algodón 360g montado sobre bastidor oculto de pino cepillado de 3 cm.',
      fullDescription: 'Convierte tus fotos familiares o diseños artísticos en una auténtica pieza de galería. El lienzo envuelve los laterales del bastidor para una vista limpia sin necesidad de marco exterior.',
      price: 90,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 29,
      inStock: true,
      featured: true,
      colors: [{ name: 'Lienzo Mate Artístico', hex: '#F0EFEA' }],
      sizes: ['30 x 40 cm', '40 x 60 cm', '60 x 90 cm'],
      techniques: ['Impresión UV / Ecosolvente HD'],
      minQuantity: 1,
      image: '/images/products/cuadros-personalizados.jpg',
      gallery: ['/images/products/cuadros-personalizados.jpg'],
      specs: [
        { label: 'Lienzo', value: 'Canvas 100% algodón calidad Fine Art' },
        { label: 'Bastidor', value: 'Madera de pino secada en horno de 3 cm' },
        { label: 'Montaje', value: 'Grapado posterior listo para colgar' }
      ]
    },
  // ================= MERCHANDISING EMPRESARIAL (7) =================
  {
      id: 'lapiceros',
      name: 'Bolígrafo Ejecutivo Metálico Rollerball',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'Cuerpo metálico negro mate con clip plateado cromado y grabado láser de alta precisión.',
      fullDescription: 'Instrumento de escritura de peso equilibrado y tinta gel fluida de secado rápido. Al grabarse a láser, la capa exterior revela el metal plateado subyacente con un brillo impecable.',
      price: 18,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 78,
      inStock: true,
      featured: true,
      colors: [
        { name: 'Negro Mate / Cromo', hex: '#161719' },
        { name: 'Azul Noche / Plata', hex: '#15243C' },
        { name: 'Plata Satinado', hex: '#C6C8CB' }
      ],
      sizes: ['Estándar 14 cm'],
      techniques: ['Grabado Láser de Fibra', 'Tampografía'],
      minQuantity: 25,
      image: '/images/products/lapiceros.jpg',
      gallery: ['/images/products/lapiceros.jpg'],
      specs: [
        { label: 'Cuerpo', value: 'Aluminio anodizado y latón' },
        { label: 'Tinta', value: 'Carga metálica tipo Parker gel negro 0.7mm' },
        { label: 'Mecanismo', value: 'Retráctil por pulsador o giro' }
      ]
    },
  {
      id: 'credenciales',
      name: 'Credenciales de PVC Tipo Tarjeta Bancaria con Lanyard',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'PVC rígido calibre 30 mil con impresión fotográfica doble cara y cinta colgante sublimada.',
      fullDescription: 'Solución integral de identificación corporativa para personal, accesos a plantas y eventos. Resiste agua, alcohol y fricción diaria sin desgastarse.',
      price: 22,
      unit: 'unidad',
      rating: 5.0,
      reviewsCount: 53,
      inStock: true,
      colors: [{ name: 'Lanyard Personalizado Full Color', hex: '#0759E8' }],
      sizes: ['Tarjeta 8.5 x 5.4 cm + Cinta 2 cm x 90 cm'],
      techniques: ['Sublimación en Cinta + Impresión Térmica PVC'],
      minQuantity: 12,
      image: '/images/products/credenciales.jpg',
      gallery: ['/images/products/credenciales.jpg'],
      specs: [
        { label: 'Tarjeta', value: 'PVC laminado termo-fusionado 0.76 mm' },
        { label: 'Lanyard', value: 'Cinta satinada con mosquetón niquelado' },
        { label: 'Opciones', value: 'Código QR, código de barras, perforación oval' }
      ]
    },
  {
      id: 'bolsas-corporativas',
      name: 'Bolsas de Lujo en Papel Kraft Negro con Hot Stamping',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'Papel couché pesado de 250g con plastificado mate, asas de cinta grosgrain y detalles en foil plata.',
      fullDescription: 'La presentación final que merece tu marca. Diseñada para entregas VIP, joyería, indumentaria o conferencias de negocios de alto nivel.',
      price: 16,
      unit: 'unidad',
      rating: 4.9,
      reviewsCount: 29,
      inStock: true,
      colors: [
        { name: 'Negro Mate / Foil Plata', hex: '#141517' },
        { name: 'Blanco / Foil Oro', hex: '#F5F5F7' }
      ],
      sizes: ['Chica (18x22 cm)', 'Mediana (26x32 cm)', 'Grande (35x40 cm)'],
      techniques: ['Foil Metálico (Hot Stamping)', 'Serigrafía UV'],
      minQuantity: 50,
      image: '/images/products/bolsas-corporativas.jpg',
      gallery: ['/images/products/bolsas-corporativas.jpg'],
      specs: [
        { label: 'Material', value: 'Papel couché 250g con cartón de refuerzo en base y boca' },
        { label: 'Asas', value: 'Cinta de raso o grosgrain de 2.5 cm' }
      ]
    },
  {
      id: 'articulos-publicitarios',
      name: 'Pack Promocional para Ferias y Congresos',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'Combo optimizado para stands: bolsa ecológica, bolígrafo, cuaderno de notas y llavero acrílico.',
      fullDescription: 'La solución llave en mano más rápida para equipar tu stand en ferias internacionales y eventos comerciales sin preocuparte por comprar artículos por separado.',
      price: 45,
      unit: 'pack',
      rating: 4.9,
      reviewsCount: 44,
      inStock: true,
      colors: [{ name: 'Alineado a Paleta de Marca', hex: '#00A878' }],
      sizes: ['Pack de 4 Artículos'],
      techniques: ['Serigrafía', 'Láser', 'DTF UV'],
      minQuantity: 25,
      image: '/images/products/articulos-publicitarios.jpg',
      gallery: ['/images/products/articulos-publicitarios.jpg'],
      specs: [
        { label: 'Incluye', value: 'Tote Bag + Libreta kraft + Lapicero + Llavero' },
        { label: 'Empaque', value: 'Embolsado individual para entrega directa' }
      ]
    },
  {
      id: 'kits-empresariales',
      name: 'Kit Onboarding VIP de Bienvenida Corporativa',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'Caja rígida imantada con termo metálico, libreta de cuero, bolígrafo láser y memoria USB.',
      fullDescription: 'Crea una primera impresión inolvidable en nuevos colaboradores y clientes clave. La caja rígida incorpora una cuna de espuma troquelada a medida para cada artículo, personalizada con los colores y valores de la empresa.',
      price: 240,
      unit: 'kit',
      rating: 5.0,
      reviewsCount: 38,
      inStock: true,
      featured: true,
      badge: 'Pack Premium',
      colors: [
        { name: 'Negro Carbón Deluxe', hex: '#16181B' },
        { name: 'Azul Corporativo', hex: '#0E1A2D' }
      ],
      sizes: ['Caja 32 x 26 x 10 cm'],
      techniques: ['Láser', 'DTF UV', 'Hot Stamping'],
      minQuantity: 6,
      image: '/images/products/kits-empresariales.jpg',
      gallery: ['/images/products/kits-empresariales.jpg'],
      specs: [
        { label: 'Contenido', value: 'Termo 500ml + Libreta A5 PU + Lapicero + Flash USB 32GB' },
        { label: 'Caja', value: 'Cartón piedra forrado con cierre magnético' },
        { label: 'Interior', value: 'Espuma EVA negra fresada con láser' }
      ]
    },
  {
      id: 'regalos-promocionales',
      name: 'Power Bank Inalámbrico y Memorias USB Personalizadas',
      category: 'merchandising',
      categoryName: 'Merchandising Empresarial',
      shortDescription: 'Batería portátil de 10.000 mAh con carga Qi inalámbrica y puertos USB-C de carga rápida.',
      fullDescription: 'Gadgets tecnológicos de alta utilidad que mantienen tu marca presente en los viajes y reuniones de tus clientes. Acabado tacto goma con logotipo retroiluminado o grabado láser.',
      price: 110,
      unit: 'unidad',
      rating: 4.8,
      reviewsCount: 25,
      inStock: true,
      colors: [
        { name: 'Negro Mate', hex: '#161719' },
        { name: 'Blanco Nieve', hex: '#F0F2F5' }
      ],
      sizes: ['10.000 mAh'],
      techniques: ['Grabado Láser', 'Impresión UV LED'],
      minQuantity: 6,
      image: '/images/products/regalos-promocionales.jpg',
      gallery: ['/images/products/regalos-promocionales.jpg'],
      specs: [
        { label: 'Capacidad', value: '10.000 mAh celda Li-polímero' },
        { label: 'Salidas', value: 'USB-C Power Delivery 20W + Qi 15W' },
        { label: 'Certificación', value: 'CE, FCC, RoHS' }
      ]
    }
];
