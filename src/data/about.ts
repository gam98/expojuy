export interface AboutAudience {
  title: string;
  description: string;
}

export const aboutContent = {
  hero: {
    title: 'Jujuy muestra lo que puede hacer',
    description: 'Una propuesta de encuentro que integra capacidades productivas, empresariales y tecnológicas con la identidad de un territorio único.',
  },
  purpose: {
    title: 'Conectar para transformar',
    description: 'ExpoJuy 2026 propone un espacio para visibilizar proyectos, compartir conocimiento y crear vínculos que fortalezcan la región.',
  },
  values: ['Innovación', 'Tecnología', 'Producción', 'Desarrollo', 'Vinculación empresarial', 'Economía del conocimiento'],
  impact: {
    title: 'Capacidades locales con proyección nacional',
    description: 'La propuesta busca acercar oportunidades, activar redes y visibilizar el valor que nace en los distintos territorios de Jujuy.',
    disclaimer: 'Impactos y alcances expresados como objetivos de demostración, no como resultados oficiales.',
    goals: ['Nuevos vínculos entre sectores', 'Circulación de conocimiento aplicado', 'Visibilidad para proyectos regionales'],
  },
  audiences: [
    { title: 'Visitantes', description: 'Descubrir propuestas, actividades y experiencias.' },
    { title: 'Empresas y expositores', description: 'Mostrar capacidades y construir oportunidades.' },
    { title: 'Estudiantes y profesionales', description: 'Aprender, compartir y ampliar redes.' },
    { title: 'Instituciones y sponsors', description: 'Impulsar una agenda productiva con impacto.' },
  ] satisfies AboutAudience[],
  participation: {
    title: 'Porque el futuro regional se construye cuando nos encontramos.',
    description: 'Para hacer visibles ideas, abrir conversaciones y conectar desafíos concretos con capacidades reales.',
  },
  timeline: ['Escucha y definición', 'Convocatoria', 'Construcción de agenda', 'Encuentro 2026'],
} as const;
