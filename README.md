# ART MANIA | Plataforma Web Oficial & Comercio Electrónico B2B / B2C

Rediseño visual completo y reestructuración arquitectónica profesional de **ART MANIA**, empresa líder especializada en soluciones de impresión de alta precisión, personalización de productos textiles, artículos publicitarios y merchandising corporativo.

---

## 🎨 Identidad Visual y Dirección de Arte

El diseño visual ha sido construido respetando estrictamente el **logotipo oficial de ART MANIA** y la paleta corporativa oscura de alto contraste:

### Paleta Principal:
- **Negro Profundo:** `#080909` (Fondos principales y atmósfera inmersiva)
- **Gris Carbón:** `#191A1C` (Superficies y divisiones)
- **Gris Grafito:** `#242629` (Tarjetas elevadas y controles)
- **Plata Metálico:** `#C6C8CB` (Detalles de bisel, acentos de calidad y bordes sutiles)
- **Blanco Suave:** `#F1F1F1` (Tipografía principal de máxima legibilidad)

### Acentos de Identidad (Colores del Colibrí):
- **Verde Esmeralda:** `#00A878` (Disponibilidad, botones activos y alas del colibrí)
- **Azul Eléctrico:** `#0759E8` (Enlaces primarios, pecho y cola del colibrí)
- **Magenta Vivo:** `#E600A9` (Insignias de alerta, badges y cabeza del colibrí)
- **Amarillo Oro:** `#F5B800` (Picos metálicos, estrellas y detalles de precisión)

---

## 📁 Arquitectura del Proyecto

Estructurado de forma modular y desacoplada mediante **React 19 + TypeScript + Vite 6**:

```
art-mania/
├── public/
│   ├── logo/
│   │   └── art-mania-logo.png          # Logotipo oficial circular en alta resolución
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-merchandise.jpg    # Fotografía de portada comercial
│   │   ├── about/
│   │   │   └── production-workshop.jpg # Fotografía del taller de producción
│   │   ├── categories/                 # 4 miniaturas de categoría
│   │   ├── products/                   # 35 fotografías de productos individuales
│   │   ├── services/                   # 9 fotografías de técnicas y maquinarias
│   │   └── gallery/                    # 10 fotografías de colecciones ejecutadas
│   └── favicon/
│       └── favicon.png
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── HummingbirdIcon.tsx     # Elemento vectorial animado del colibrí
│   │   ├── navigation/
│   │   │   └── Header.tsx              # Header sticky corporativo con menú responsive
│   │   ├── products/
│   │   │   ├── ProductCard.tsx         # Tarjeta comercial de producto
│   │   │   └── ProductDetailModal.tsx  # Vista detallada, variantes y selector de cantidad
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx          # Panel lateral de cotización y pedidos
│   │   └── layout/
│   │       └── Footer.tsx              # Pie de página institucional y accesos
│   │
│   ├── sections/
│   │   ├── Hero/                       # Portada principal de alto impacto
│   │   ├── Products/                   # Catálogo con buscador, filtros y ordenamiento
│   │   ├── Customizer/                 # Personalizador interactivo en tiempo real
│   │   ├── Services/                   # 9 técnicas de producción con fichas técnicas
│   │   ├── Business/                   # Sección corporativa B2B y escalas de volumen
│   │   ├── Portfolio/                  # Galería de proyectos con modal lightbox
│   │   ├── About/                      # Filosofía, taller e identidad de marca
│   │   └── Contact/                    # Datos editables, WhatsApp y formulario
│   │
│   ├── context/
│   │   └── CartContext.tsx             # Estado global del carrito y persistencia local
│   ├── data/
│   │   ├── products.ts                 # Catálogo oficial de 35 productos con precios en Bs.
│   │   ├── services.ts                 # Fichas técnicas de los 9 servicios
│   │   ├── categories.ts               # Categorías de productos
│   │   ├── portfolio.ts                # Casos de éxito y portafolio de trabajos
│   │   ├── promotions.ts               # Descuentos escalonados por volumen
│   │   └── company.ts                  # Datos de contacto y configuración comercial
│   │
│   ├── services/
│   │   └── whatsapp.ts                 # Generador de enlaces automáticos para WhatsApp
│   │
│   ├── styles/
│   │   ├── variables.css               # Tokens de color, espaciados y transiciones
│   │   ├── typography.css              # Configuración tipográfica Outfit / Plus Jakarta
│   │   ├── global.css                  # Estilos globales y reset
│   │   └── responsive.css              # Reglas adaptativas multidispositivo
│   │
│   ├── App.tsx                         # Orquestador principal de secciones
│   └── main.tsx                        # Punto de entrada de la aplicación
│
├── index.html                          # Meta-etiquetas SEO, fuentes y Open Graph
├── package.json                        # Dependencias de producción y scripts
├── tsconfig.json                       # Configuración estricta de TypeScript
├── vite.config.ts                      # Configuración de compilación y servidor
└── README.md                           # Documentación técnica
```

---

## 🛠️ Tecnologías Empleadas

- **React 19 & TypeScript:** Tipado estricto, componentes atómicos y arquitectura modular.
- **Vite 6:** Bundler de ultra-alta velocidad y Hot Module Replacement (HMR).
- **Lucide React:** Iconografía vectorial sobria, minimalista y consistente.
- **CSS Modular con Variables Nativas:** Alto rendimiento sin librerías invasivas.
- **Pillow Studio Engine:** Generación local de 59 fotografías comerciales individuales en alta definición (sin emojis ni enlaces externos frágiles).

---

## 🚀 Instrucciones de Instalación y Ejecución

### Prerrequisitos:
- **Node.js** v18 o superior.
- **npm** v9 o superior.

### 1. Entrar en la carpeta del proyecto:
```bash
cd art-mania
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo local:
```bash
npm run dev
```
La aplicación estará disponible de forma inmediata en:
👉 `http://localhost:3000`

### 4. Compilar para producción (Build):
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

### 5. Previsualizar la versión de producción:
```bash
npm run preview
```

---

## 📋 Verificación de Requisitos Cumplidos

1. ✅ **Compilación Exitosa:** El proyecto compila limpiamente con TypeScript y Vite sin errores (`dist/` generado).
2. ✅ **Sin Emojis:** Todos los productos, técnicas y servicios cuentan con fotografías comerciales reales individuales.
3. ✅ **Fotografías Locales:** 35 fotos de productos, 9 fotos de servicios, 10 fotos de galería, fotos de hero, about y categorías en `public/images/`.
4. ✅ **Logotipo Original:** Integrado en alta visibilidad en la cabecera, con el elemento del colibrí vectorizado y animado de manera elegante y sutil.
5. ✅ **Precios en Bolivianos (Bs.):** Catálogo con precios reales configurables y calculadora automática de descuentos por volumen (10%, 18%, 25%, 35%).
6. ✅ **Personalizador Interactivo:** Selector de producto, color, talla, carga de archivos de diseño, texto personalizado en tiempo real y vista previa sobre mockup.
7. ✅ **Integración con WhatsApp:** Generación de cotizaciones preformateadas para envío directo a la línea comercial de ART MANIA (+591 78564210).
8. ✅ **Diseño Responsivo:** Metodología Mobile First, optimizado para smartphones (Android/iOS), tablets y monitores de alta resolución.
