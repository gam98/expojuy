import type { ChatIntent, ChatResponse } from '../types/chatbot';

const fallbackQuickReplies = ['Explorar la agenda', 'Buscar expositores', 'Ver entradas'];

export const routeQuickReplies: Record<string, string[]> = {
  '/agenda': ['Filtrar actividades', 'Ver mis favoritos', 'Explorar expositores'],
  '/expositores': ['Buscar por rubro', 'Ver agenda', 'Orientarme en el mapa'],
  '/mapa': ['Ver servicios', 'Explorar expositores', 'Consultar agenda'],
  '/entradas': ['Ver mi selección', 'Entender la demo de pago', 'Preguntas frecuentes'],
  '/checkout': ['Ver mi selección', 'Entender la demo de pago', 'Preguntas frecuentes'],
  '/contacto': ['Preguntas frecuentes', 'Consulta para sponsors', 'Consulta para expositores'],
};

export const defaultQuickReplies = [
  'Explorar la agenda',
  'Buscar expositores',
  'Orientarme en el mapa',
  'Conocer sectores',
  'Ver entradas',
  'Preguntas frecuentes',
];

export function getQuickReplies(pathname: string): string[] {
  if (pathname.startsWith('/checkout')) return routeQuickReplies['/checkout'];
  return routeQuickReplies[pathname] ?? defaultQuickReplies;
}

export const responseCatalog: Record<Exclude<ChatIntent, 'checkout' | 'cartSelection'>, ChatResponse> = {
  agenda: {
    id: 'agenda',
    message: 'Podés explorar las actividades por día, temática y formato. También podés guardar tus favoritas en “Mi agenda”.',
    actions: [{ label: 'Abrir agenda', to: '/agenda' }],
  },
  agendaTechnology: {
    id: 'agenda-technology',
    message: 'En esta maqueta podés filtrar actividades vinculadas a innovación y tecnología. La programación definitiva estará sujeta a confirmación oficial.',
    actions: [{ label: 'Explorar agenda', to: '/agenda' }],
  },
  agendaFavorites: {
    id: 'agenda-favorites',
    message: 'En la agenda podés marcar actividades para armar una selección personal de demostración.',
    actions: [{ label: 'Ver agenda', to: '/agenda' }],
  },
  exhibitors: {
    id: 'exhibitors',
    message: 'El directorio permite buscar empresas y explorar rubros del ecosistema productivo. Los perfiles mostrados son demostrativos.',
    actions: [{ label: 'Ver expositores', to: '/expositores' }],
  },
  sectors: {
    id: 'sectors',
    message: 'ExpoJuy reúne sectores como energía, minería, agroindustria, turismo, tecnología, industria y economía del conocimiento.',
    actions: [{ label: 'Explorar sectores', to: '/expositores' }],
  },
  map: {
    id: 'map',
    message: 'El plano conceptual te ayuda a ubicar accesos, pabellones, auditorio, expositores, gastronomía y servicios.',
    actions: [{ label: 'Abrir mapa', to: '/mapa' }],
  },
  services: {
    id: 'services',
    message: 'En el mapa conceptual podés identificar accesos, sanitarios, gastronomía y estacionamiento. La distribución final dependerá del plano oficial.',
    actions: [{ label: 'Ver servicios en el mapa', to: '/mapa' }],
  },
  tickets: {
    id: 'tickets',
    message: 'Podés recorrer opciones de pase y armar una selección de entradas. Los precios y disponibilidades son datos de demostración.',
    actions: [{ label: 'Ver entradas', to: '/entradas' }],
  },
  sponsors: {
    id: 'sponsors',
    message: 'Hay un espacio conceptual para aliados y patrocinadores. Las condiciones comerciales definitivas se comunicarán oficialmente.',
    actions: [
      { label: 'Ver sponsors', to: '/sponsors' },
      { label: 'Consultar por patrocinio', to: '/contacto?tipo=sponsor', variant: 'secondary' },
    ],
  },
  faq: {
    id: 'faq',
    message: 'Podés consultar respuestas por tema, buscar una pregunta o escribirnos si necesitás orientación adicional.',
    actions: [
      { label: 'Abrir preguntas frecuentes', to: '/preguntas-frecuentes' },
      { label: 'Ir a contacto', to: '/contacto', variant: 'secondary' },
    ],
  },
  contact: {
    id: 'contact',
    message: 'Para consultas de expositores, sponsors, prensa o público general, usá el formulario de contacto de demostración.',
    actions: [{ label: 'Abrir contacto', to: '/contacto' }],
  },
  greeting: {
    id: 'greeting',
    message: 'Puedo orientarte por la agenda, los sectores, el mapa y las entradas de demostración.',
    quickReplies: fallbackQuickReplies,
  },
  fallback: {
    id: 'fallback',
    message: 'No tengo una respuesta simulada para esa consulta todavía. Puedo orientarte por agenda, expositores, mapa, entradas o preguntas frecuentes.',
    actions: [
      { label: 'Ver preguntas frecuentes', to: '/preguntas-frecuentes' },
      { label: 'Contactar al equipo', to: '/contacto', variant: 'secondary' },
    ],
    quickReplies: fallbackQuickReplies,
  },
};

export function createCheckoutResponse(hasCartItems: boolean): ChatResponse {
  return hasCartItems
    ? {
        id: 'checkout',
        message: 'La compra es una simulación: no se procesa ningún cobro ni se almacenan datos financieros.',
        actions: [
          { label: 'Ir a entradas', to: '/entradas' },
          { label: 'Conocer la demo de pago', to: '/checkout', variant: 'secondary' },
        ],
      }
    : {
        id: 'checkout-empty-cart',
        message: 'La compra es una simulación y todavía no hay entradas seleccionadas. Primero podés elegir un pase de demostración.',
        actions: [{ label: 'Ir a entradas', to: '/entradas' }],
      };
}
