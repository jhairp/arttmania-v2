export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  applications: string[];
  materials: string[];
  features: string[];
  minOrder: string;
  turnaround: string;
  accentColor: string;
}

export const SERVICES: Service[] = [
  {
    id: 'sublimacion',
    name: 'Sublimación Digital',
    shortDescription: 'Transferencia térmica de alta resolución para artículos de cerámica, polímeros y textiles con base de poliéster.',
    description: 'La sublimación es un proceso térmico donde los pigmentos pasan de estado sólido a gaseoso penetrando directamente en la estructura molecular del polímero o fibra sintética. Proporciona una resistencia inigualable a lavados y uso diario, sin generar relieve táctil ni riesgo de descascarado.',
    image: '/images/services/sublimacion.jpg',
    applications: [
      'Tazas de cerámica y tazas mágicas',
      'Termos metálicos y tomatodos de aluminio',
      'Mousepads de alto rendimiento gamer',
      'Placas de roca fotográfica y azulejos',
      'Prendas deportivas dry-fit y rompecabezas'
    ],
    materials: ['Poliéster 100%', 'Cerámica tratada', 'Aluminio anodizado', 'Neopreno', 'Poliacrilato'],
    features: ['Gama de color ilimitada sin costo extra', 'Acabado liso sin textura al tacto', 'Alta resistencia a lavavajillas y uso continuo'],
    minOrder: 'Desde 1 unidad',
    turnaround: '24 a 48 horas',
    accentColor: '#00A878'
  },
  {
    id: 'dtf-textil',
    name: 'DTF Textil (Direct to Film)',
    shortDescription: 'Impresión digital directa a película PET de última generación con tinta pigmentada y base blanca para prendas de cualquier color.',
    description: 'La tecnología DTF revolucionó la personalización textil al permitir estampar sobre algodón 100%, mezclas poliéster y tejidos sintéticos de cualquier tono con una elasticidad y suavidad insuperable, superando las limitaciones tradicionales de la serigrafía o el transfer.',
    image: '/images/services/dtf-textil.jpg',
    applications: [
      'Poleras de algodón peinado y oversize',
      'Polerones, sudaderas y hoodies de felpa',
      'Mandiles para hostelería y barismo',
      'Mochilas, tote bags y lonas textiles',
      'Prendas infantiles y uniformes corporativos'
    ],
    materials: ['Algodón 100%', 'Algodón peinado', 'Poliéster oscuro', 'Mezclas poly-cotton', 'Denim y lonas'],
    features: ['Opacidad total sobre prendas negras', 'Alta elasticidad sin cuarteo', 'Definición fotográfica de microdetalles'],
    minOrder: 'Desde 1 unidad',
    turnaround: '24 a 48 horas',
    accentColor: '#0759E8'
  },
  {
    id: 'dtf-uv',
    name: 'DTF UV (Stickers 3D & Relieve)',
    shortDescription: 'Transferencias autoadhesivas curadas por luz UV con barniz brillante y relieve táctil 3D para superficies rígidas.',
    description: 'El DTF UV genera calcomanías industriales curadas mediante luz ultravioleta que incorporan tinta blanca, cuatricromía y barniz de relieve brillante. Permite personalizar objetos cilíndricos, curvos o irregulares sin necesidad de someterlos a calor o presión de máquinas grandes.',
    image: '/images/services/dtf-uv.jpg',
    applications: [
      'Termos metálicos, tomatodos y botellas de vidrio',
      'Fundas de teléfono, laptops y carcasas rígidas',
      'Cajas de empaque premium y maderas lacadas',
      'Trofeos, placas acrílicas e instrumentos',
      'Cascos de seguridad y señalética técnica'
    ],
    materials: ['Vidrio', 'Metal esmaltado', 'Acrílico', 'Madera pulida', 'Policarbonato y cerámica'],
    features: ['Barniz protector UV de alto brillo', 'Relieve volumétrico palpable', 'Adherencia ultra fuerte resistente al agua'],
    minOrder: 'Desde 1 unidad (o pliegos)',
    turnaround: '24 a 72 horas',
    accentColor: '#E600A9'
  },
  {
    id: 'vinil-textil',
    name: 'Vinil Textil Termotransferible',
    shortDescription: 'Corte computarizado de alta precisión en vinilos poliuretánicos térmicos con acabados metalizados, mate y reflectivos.',
    description: 'Técnica ideal para números deportivos, logotipos monocromáticos de alto impacto y aplicaciones especiales como vinilos reflectivos de seguridad industrial, flock aterciopelado o láminas metálicas de alto brillo.',
    image: '/images/services/vinil-textil.jpg',
    applications: [
      'Numeración y nombres de poleras deportivas',
      'Ropa de trabajo con bandas reflectivas 3M',
      'Gorras con emblemas metalizados o mate',
      'Poleras de eventos y promociones especiales',
      'Chaquetas y cortavientos corporativos'
    ],
    materials: ['Poliéster deportivo', 'Algodón', 'Nylon tratado', 'Tejidos técnicos impermeables'],
    features: ['Colores planos sólidos de máxima viveza', 'Disponibilidad de acabados reflectivos y metálicos', 'Excelente adhesión con prensa neumática'],
    minOrder: 'Desde 1 unidad',
    turnaround: '24 a 48 horas',
    accentColor: '#F5B800'
  },
  {
    id: 'bordado',
    name: 'Bordado Computarizado Industrial',
    shortDescription: 'Puntadas de alta densidad con hilos de poliéster reforzado y relieve 3D para una apariencia corporativa de máxima jerarquía.',
    description: 'El bordado computarizado aporta elegancia, durabilidad y valor percibido insuperable. Nuestras bordadoras multi-cabezal reproducen matrices vectoriales con precisión milimétrica sobre gorras armadas, polos ejecutivos y camperas de trabajo.',
    image: '/images/services/bordado.jpg',
    applications: [
      'Gorras estructuradas y snapbacks (plano y 3D puff)',
      'Polos piqué empresariales y camisas corporativas',
      'Chalecos, polerones y chaquetas térmicas',
      'Mandiles gastronómicos y delantales',
      'Parches termo-adhesivos y con velcro'
    ],
    materials: ['Twill de algodón', 'Piqué grueso', 'Dril y gabardina', 'Denim pesado', 'Lana y micropolar'],
    features: ['Durabilidad de por vida de la prenda', 'Relieve 3D puff disponible para gorras', 'Hilos resistentes al cloro y lavado industrial'],
    minOrder: 'Desde 12 unidades',
    turnaround: '3 a 5 días hábiles',
    accentColor: '#00A878'
  },
  {
    id: 'serigrafia',
    name: 'Serigrafía Tradicional & Textil',
    shortDescription: 'Impresión por estarcido con tintas plastisol y al agua, insuperable para producciones de gran volumen con costos competitivos.',
    description: 'La serigrafía es la reina de las tiradas medianas y masivas. Empleamos carruseles con micro-registro y tintas plastisol curadas en horno túnel, garantizando un costo por unidad extraordinariamente eficiente para campañas corporativas y eventos.',
    image: '/images/services/serigrafia.jpg',
    applications: [
      'Poleras promocionales para campañas masivas',
      'Bolsas ecológicas de tocuyo y friselina',
      'Mochilas tipo saco para eventos deportivos',
      'Embalajes de cartón y bolsas de papel kraft',
      'Merchandising para conciertos y festivales'
    ],
    materials: ['Algodón 100%', 'Tocuyo', 'Non-woven (tela ecológica)', 'Papel kraft', 'Cartón corrugado'],
    features: ['Costo unitario decreciente en volumen', 'Cobertura opaca de gran intensidad', 'Tintas ecológicas libres de ftalatos'],
    minOrder: 'Desde 25 unidades',
    turnaround: '3 a 6 días hábiles',
    accentColor: '#E600A9'
  },
  {
    id: 'grabado-laser',
    name: 'Corte y Grabado Láser CNC',
    shortDescription: 'Haz de luz concentrado para marcado indeleble y corte geométrico perfecto sobre metales, maderas, cueros y acrílicos.',
    description: 'Nuestros equipos láser CO2 y fibra óptica ofrecen un marcado permanente que no se borra con el tiempo. El grabado láser elimina material de forma controlada o altera térmicamente el metal para producir una firma elegante y sobria.',
    image: '/images/services/grabado-laser.jpg',
    applications: [
      'Bolígrafos metálicos y lapiceros ejecutivos',
      'Llaveros de MDF y madera noble',
      'Termos de acero inoxidable (efecto plata brillante)',
      'Placas de trofeos y señalética arquitectónica',
      'Cajas de madera para regalos corporativos VIP'
    ],
    materials: ['Acero inoxidable', 'Aluminio anodizado', 'MDF y triplay', 'Acrílico óptico', 'Cuero natural y sintético'],
    features: ['Marcado indeleble de por vida', 'Detalle microscópico en tipografías finas', 'Corte sin contacto con bordes sellados'],
    minOrder: 'Desde 6 unidades',
    turnaround: '24 a 48 horas',
    accentColor: '#F5B800'
  },
  {
    id: 'diseno-grafico',
    name: 'Diseño Gráfico & Preparación Técnica',
    shortDescription: 'Asesoría profesional de pre-prensa, vectorización de logotipos, separación de color y elaboración de maquetas digitales 3D.',
    description: 'No dejamos nada al azar. Nuestro departamento de diseño verifica tus archivos, calibra perfiles de color CMYK, crea separaciones para cada técnica y genera fotomontajes realistas para que apruebes la muestra digital antes de encender las máquinas.',
    image: '/images/services/diseno-grafico.jpg',
    applications: [
      'Vectorización de bocetos y logos de baja resolución',
      'Generación de mockups comerciales para aprobación',
      'Diseño de patrones continuos y adaptaciones textiles',
      'Preparación de perfiles técnicos para corte y bordado',
      'Branding y desarrollo de manuales de aplicación corporativa'
    ],
    materials: ['Archivos vectoriales (AI, PDF, EPS, SVG)', 'Formatos ráster alta resolución (TIFF, PNG 300dpi)'],
    features: ['Muestra digital previa antes de producción', 'Verificación rigurosa de perfiles CMYK', 'Asesoría técnica para elegir la mejor técnica'],
    minOrder: 'Incluido en proyectos de producción',
    turnaround: '24 horas',
    accentColor: '#0759E8'
  }
];
