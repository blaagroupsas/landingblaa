import { TeamMember } from '../models';

// Agrega photoUrl cuando tengas las fotos del equipo.
// Ejemplo: photoUrl: '/images/team/daniel-leon.jpg'
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Daniel León',
    role: 'Fundador & Estratega Digital',
    bio: 'Más de 8 años construyendo estrategias digitales para pymes colombianas. Experto en Meta Ads, Google Ads y SEO. Trabajo directamente con cada cliente — sin intermediarios.',
    linkedin: 'https://linkedin.com/in/daniel-leon',
    // photoUrl: '/images/team/daniel-leon.jpg',
  },
  {
    id: 'creatividad',
    name: 'Por definir',
    role: 'Diseño & Creatividad',
    bio: 'Especialista en contenido visual y diseño gráfico para redes sociales y campañas de pauta. Cada pieza creativa está pensada para convertir.',
    // photoUrl: '/images/team/miembro-2.jpg',
  },
  {
    id: 'contenido',
    name: 'Por definir',
    role: 'Contenido & Copywriting',
    bio: 'Estratega de contenido con foco en copy de conversión. Escribimos para el dueño de la clínica en Bogotá, no para "las pymes en general".',
    // photoUrl: '/images/team/miembro-3.jpg',
  },
];
