import { createCheckoutResponse, responseCatalog } from '../data/chatbot';
import { matchChatIntent } from './chatIntentMatcher';
import type { AssistantContext, AssistantResponder, ChatResponse } from '../types/chatbot';

export class MockAssistantResponder implements AssistantResponder {
  getResponse(input: string, context: AssistantContext): ChatResponse {
    const intent = matchChatIntent(input);

    if (intent === 'checkout') return createCheckoutResponse(context.hasCartItems);
    if (intent === 'cartSelection') {
      return context.pathname.startsWith('/checkout')
        ? createCheckoutResponse(context.hasCartItems)
        : responseCatalog.tickets;
    }
    return responseCatalog[intent];
  }
}

// TODO: Reemplazar MockAssistantResponder por un servicio de IA con base de conocimiento
// oficial, controles de privacidad, moderación, trazabilidad y consentimiento explícito.
// No enviar datos personales ni financieros a un proveedor externo sin evaluación legal y técnica.
export const mockAssistantResponder = new MockAssistantResponder();
