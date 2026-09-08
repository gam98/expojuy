import type { ChatIntent } from '../types/chatbot';

export function normalizeChatText(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es-AR')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function tokenizeChatText(input: string): string[] {
  const normalized = normalizeChatText(input);
  return normalized ? normalized.split(' ') : [];
}

function hasAny(tokens: Set<string>, keywords: readonly string[]): boolean {
  return keywords.some((keyword) => tokens.has(keyword));
}

export function matchChatIntent(input: string): ChatIntent {
  const normalized = normalizeChatText(input);
  const tokens = new Set(tokenizeChatText(input));
  const hasPhrase = (phrase: string) => normalized.includes(phrase);

  if (!normalized) return 'fallback';
  if (hasAny(tokens, ['bano', 'sanitario', 'sanitarios', 'estacionamiento', 'comida', 'gastronomia', 'acceso', 'accesos'])) return 'services';
  if (hasAny(tokens, ['pagar', 'pago', 'tarjeta', 'transferencia', 'billetera', 'checkout'])) return 'checkout';
  if (hasAny(tokens, ['seleccion', 'seleccionadas', 'carrito', 'cart'])) return 'cartSelection';
  if (hasAny(tokens, ['entrada', 'entradas', 'ticket', 'pase', 'precio', 'comprar'])) return 'tickets';
  if (hasAny(tokens, ['favorito', 'favoritos']) || hasPhrase('mi agenda')) return 'agendaFavorites';
  if (hasAny(tokens, ['tecnologia', 'innovacion', 'ia', 'digital']) || hasPhrase('inteligencia artificial')) return 'agendaTechnology';
  if (hasAny(tokens, ['sponsor', 'sponsors', 'patrocinio', 'patrocinador', 'alianza', 'alianzas'])) return 'sponsors';
  if (hasAny(tokens, ['expositor', 'expositores', 'empresa', 'empresas', 'stand', 'pabellon', 'rubro', 'rubros'])) return 'exhibitors';
  if (hasAny(tokens, ['mineria', 'energia', 'agro', 'agroindustria', 'turismo', 'comercio', 'industria', 'emprendimiento', 'emprendimientos', 'conocimiento', 'sector', 'sectores'])) return 'sectors';
  if (hasAny(tokens, ['mapa', 'donde', 'ubicacion', 'llegar', 'recorrido', 'recorridos'])) return 'map';
  if (hasAny(tokens, ['agenda', 'charla', 'charlas', 'panel', 'paneles', 'taller', 'workshop', 'actividad', 'actividades', 'speaker', 'speakers', 'horario', 'horarios'])) return 'agenda';
  if (hasAny(tokens, ['ayuda', 'pregunta', 'preguntas', 'duda', 'dudas', 'faq'])) return 'faq';
  if (hasAny(tokens, ['contacto', 'prensa', 'consultar', 'consulta', 'consultas', 'hablar', 'correo', 'email'])) return 'contact';
  if (hasAny(tokens, ['hola', 'buenas', 'buenos', 'saludos'])) return 'greeting';

  return 'fallback';
}
