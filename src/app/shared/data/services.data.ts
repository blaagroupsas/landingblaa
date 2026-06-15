import { Service } from '../models';

export const SERVICES: Service[] = [
  {
    id: 'redes-sociales',
    title: 'Gestión de Redes Sociales',
    description:
      'Creación de contenido, publicidad, engagement y análisis de resultados para construir tu comunidad digital.',
    featured: true,
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    modal: {
      headline: 'Tu marca en redes debe trabajar para tu negocio, no al revés.',
      body: 'Gestionamos tu presencia en redes sociales de forma estratégica: creamos contenido alineado a tu marca, manejamos la pauta y analizamos los resultados para optimizar mes a mes. Publicamos con propósito, no por cumplir.',
      includes: [
        'Estrategia de contenido mensual',
        'Diseño de piezas gráficas y videos',
        'Publicación y gestión de comunidad',
        'Pauta en Facebook e Instagram',
        'Reporte mensual de métricas y crecimiento',
      ],
      idealFor: 'Negocios que quieren construir o escalar su presencia en Instagram, Facebook, TikTok o LinkedIn.',
      timeline: 'Los primeros resultados visibles de crecimiento aparecen entre el mes 2 y 3.',
    },
  },
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description:
      'Landing pages, e-commerce, UI/UX y desarrollo a medida. Tu sitio como herramienta de ventas, no solo vitrina.',
    icon: 'M16 18l6-6-6-6M8 6L2 12l6 6',
    modal: {
      headline: 'Tu sitio es la primera impresión. Que cuente.',
      body: 'Diseñamos y desarrollamos sitios web orientados a convertir visitantes en clientes. Desde landing pages para campañas hasta tiendas online completas, cada proyecto se construye con foco en rendimiento, usabilidad y resultados medibles.',
      includes: [
        'Diseño UI/UX personalizado',
        'Desarrollo responsivo y optimizado',
        'Integración con pasarelas de pago',
        'SEO técnico base incluido',
        'Soporte post-lanzamiento',
      ],
      idealFor: 'Negocios que necesitan presencia digital sólida o quieren mejorar su sitio actual para convertir más.',
      timeline: 'Entrega de landing page en 2 semanas. Proyectos complejos en 4-6 semanas.',
    },
  },
  {
    id: 'seo-posicionamiento',
    title: 'SEO y Posicionamiento',
    description:
      'Google Ads, SEM y estrategias de conversión para que te encuentren cuando más importa.',
    icon: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z',
    modal: {
      headline: 'Aparece primero. Convierte mejor.',
      body: 'Combinamos SEO orgánico y SEM (Google Ads) para capturar a tu cliente en el momento exacto en que te está buscando. Optimizamos la estructura de tu sitio, las palabras clave y las campañas de búsqueda para maximizar el retorno de inversión.',
      includes: [
        'Auditoría técnica SEO del sitio',
        'Investigación y selección de palabras clave',
        'Optimización on-page de páginas clave',
        'Creación y gestión de campañas Google Ads',
        'Reporte mensual de posiciones y conversiones',
      ],
      idealFor: 'Negocios en sectores donde los clientes buscan activamente proveedores online.',
      timeline: 'Primeras mejoras orgánicas al mes 2-3. Resultados de Google Ads desde el día 1.',
    },
  },
  {
    id: 'branding-diseno',
    title: 'Branding y Diseño',
    description:
      'Identidad visual y video marketing que diferencia tu marca y genera recordación en tu mercado.',
    icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z',
    modal: {
      headline: 'Tu imagen comunica antes de que abras la boca.',
      body: 'Creamos identidades visuales coherentes que reflejan lo que tu marca representa. Desde el logo y paleta de colores hasta piezas de video marketing, construimos la base visual que diferencia tu negocio y genera confianza desde el primer contacto.',
      includes: [
        'Diseño de logotipo y manual de identidad',
        'Paleta de colores y tipografía',
        'Kit de plantillas para redes sociales',
        'Producción de video marketing',
        'Guía de uso de marca',
      ],
      idealFor: 'Negocios sin identidad visual definida o con marca desactualizada que no refleja su propuesta de valor.',
      timeline: 'Propuesta de identidad en 1 semana. Entrega completa en 2-3 semanas.',
    },
  },
  {
    id: 'elearning',
    title: 'E-learning y Formación Digital',
    description:
      'Plataformas educativas, cursos online y capacitación virtual para convertir tu conocimiento en un producto escalable.',
    icon: 'M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z',
    modal: {
      headline: 'El conocimiento también puede ser tu producto más escalable.',
      body: 'Diseñamos e implementamos plataformas de formación digital para empresas que quieren capacitar a sus equipos o monetizar su expertise. Desde la arquitectura del curso hasta la experiencia del estudiante, nos encargamos de todo.',
      includes: [
        'Diseño instruccional del programa',
        'Configuración de plataforma LMS',
        'Producción de contenido audiovisual',
        'Diseño de experiencia del estudiante',
        'Integración de pagos y certificados',
      ],
      idealFor: 'Empresas con conocimiento especializado que quieren escalar su capacitación o crear un nuevo canal de ingresos.',
      timeline: 'Primera versión del curso lista en 3-4 semanas según el volumen de contenido.',
    },
  },
];
