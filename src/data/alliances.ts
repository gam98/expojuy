import innovationTerritory from '../assets/sponsors/alliance-innovation-territory.webp';
import energyFlow from '../assets/sponsors/alliance-energy-flow.webp';
import knowledgeNetwork from '../assets/sponsors/alliance-knowledge-network.webp';
import industrialWeave from '../assets/sponsors/alliance-industrial-weave.webp';
import entrepreneurCommunity from '../assets/sponsors/alliance-entrepreneur-community.webp';
import regionalConnectivity from '../assets/sponsors/alliance-regional-connectivity.webp';
import tradeProjection from '../assets/sponsors/alliance-trade-projection.webp';

export type AllianceTheme =
  | 'innovation'
  | 'energy'
  | 'knowledge'
  | 'industry'
  | 'community'
  | 'connectivity'
  | 'trade';

export type AllianceAccent = 'purple' | 'turquoise' | 'lavender';
export type AllianceLayout = 'wide' | 'portrait' | 'square';

export interface Alliance {
  id: string;
  name: string;
  theme: AllianceTheme;
  label: string;
  description: string;
  image: string;
  accent: AllianceAccent;
  layout: AllianceLayout;
}

export const alliances: readonly Alliance[] = [
  {
    id: 'nodo-terral',
    name: 'Nodo Terral',
    theme: 'innovation',
    label: 'Innovación aplicada',
    description: 'Aliado que impulsa proyectos que traducen ideas en soluciones situadas.',
    image: innovationTerritory,
    accent: 'purple',
    layout: 'wide',
  },
  {
    id: 'flujo-alto',
    name: 'Flujo Alto',
    theme: 'energy',
    label: 'Energía y desarrollo',
    description: 'Aliado que acompaña la conversación entre energía, eficiencia y futuro regional.',
    image: energyFlow,
    accent: 'turquoise',
    layout: 'portrait',
  },
  {
    id: 'trama-saber',
    name: 'Trama Saber',
    theme: 'knowledge',
    label: 'Conocimiento y talento',
    description: 'Aliado que conecta formación, investigación y capacidades que se comparten.',
    image: knowledgeNetwork,
    accent: 'lavender',
    layout: 'square',
  },
  {
    id: 'tejido-productivo',
    name: 'Tejido Productivo',
    theme: 'industry',
    label: 'Producción conectada',
    description: 'Aliado que fortalece vínculos entre oficio, industria y cadenas de valor.',
    image: industrialWeave,
    accent: 'purple',
    layout: 'portrait',
  },
  {
    id: 'umbral-comun',
    name: 'Umbral Común',
    theme: 'community',
    label: 'Comunidad emprendedora',
    description: 'Aliado que promueve redes de pares, acompañamiento y oportunidades compartidas.',
    image: entrepreneurCommunity,
    accent: 'turquoise',
    layout: 'square',
  },
  {
    id: 'conexion-norte',
    name: 'Conexión Norte',
    theme: 'connectivity',
    label: 'Conectividad regional',
    description: 'Aliado que impulsa infraestructura, circulación e integración territorial.',
    image: regionalConnectivity,
    accent: 'lavender',
    layout: 'wide',
  },
  {
    id: 'horizonte-abierto',
    name: 'Horizonte Abierto',
    theme: 'trade',
    label: 'Comercio y proyección',
    description: 'Aliado que vincula producción local, intercambio y nuevas escalas.',
    image: tradeProjection,
    accent: 'purple',
    layout: 'wide',
  },
] as const;
