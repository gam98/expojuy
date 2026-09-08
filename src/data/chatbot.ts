import type { ChatIntent, ChatResponse } from '../types/chatbot';

const fallbackQuickReplies = ['Explorar la agenda', 'Buscar expositores', 'Ver entradas'];

export const routeQuickReplies: Record<string, string[]> = {
  '/agenda': ['Filtrar actividades', 'Ver mis favoritos', 'Explorar expositores'],
  '/expositores': ['Buscar por rubro', 'Ver agenda', 'Orientarme en el mapa'],
  '/mapa': ['Ver servicios', 'Explorar expositores', 'Consultar agenda'],
  '/entradas': ['Ver mi selección', 'Conocer medios de pago', 'Preguntas frecuentes'],
  '/checkout': ['Ver mi selección', 'Conocer medios de pago', 'Preguntas frecuentes'],
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
    message: 'Podés filtrar actividades vinculadas a innovación y tecnología para organizar tu recorrido.',
    actions: [{ label: 'Explorar agenda', to: '/agenda' }],
  },
  agendaFavorites: {
    id: 'agenda-favorites',
    message: 'En la agenda podés marcar actividades para armar una selección personal.',
    actions: [{ label: 'Ver agenda', to: '/agenda' }],
  },
  exhibitors: {
    id: 'exhibitors',
    message: 'El directorio permite buscar empresas y explorar rubros del ecosistema productivo.',
    actions: [{ label: 'Ver expositores', to: '/expositores' }],
  },
  sectors: {
    id: 'sectors',
    message: 'ExpoJuy reúne sectores como energía, minería, agroindustria, turismo, tecnología, industria y economía del conocimiento.',
    actions: [{ label: 'Explorar sectores', to: '/expositores' }],
  },
  map: {
    id: 'map',
    message: 'El mapa te ayuda a ubicar accesos, pabellones, auditorios, expositores, gastronomía y servicios.',
    actions: [{ label: 'Abrir mapa', to: '/mapa' }],
  },
  services: {
    id: 'services',
    message: 'En el mapa podés identificar accesos, sanitarios, gastronomía y estacionamiento.',
    actions: [{ label: 'Ver servicios en el mapa', to: '/mapa' }],
  },
  tickets: {
    id: 'tickets',
    message: 'Podés recorrer opciones de pase y armar una selección de entradas.',
    actions: [{ label: 'Ver entradas', to: '/entradas' }],
  },
  sponsors: {
    id: 'sponsors',
    message: 'Conocé a los aliados y patrocinadores que acompañan ExpoJuy 2026.',
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
    message: 'Para consultas de expositores, sponsors, prensa o público general, usá el formulario de contacto.',
    actions: [{ label: 'Abrir contacto', to: '/contacto' }],
  },
  greeting: {
    id: 'greeting',
    message: 'Puedo orientarte por la agenda, los sectores, el mapa y las entradas.',
    quickReplies: fallbackQuickReplies,
  },
  fallback: {
    id: 'fallback',
    message: 'Todavía no tengo una respuesta para esa consulta. Puedo orientarte por agenda, expositores, mapa, entradas o preguntas frecuentes.',
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
        message: 'Podés continuar con tu selección y elegir un medio de pago.',
        actions: [
          { label: 'Ir a entradas', to: '/entradas' },
          { label: 'Conocer medios de pago', to: '/checkout', variant: 'secondary' },
        ],
      }
    : {
        id: 'checkout-empty-cart',
        message: 'Todavía no hay entradas seleccionadas. Primero podés elegir un pase.',
        actions: [{ label: 'Ir a entradas', to: '/entradas' }],
      };
}
