export type ChatIntent =
  | 'agenda'
  | 'agendaTechnology'
  | 'agendaFavorites'
  | 'exhibitors'
  | 'sectors'
  | 'map'
  | 'services'
  | 'tickets'
  | 'cartSelection'
  | 'checkout'
  | 'sponsors'
  | 'faq'
  | 'contact'
  | 'greeting'
  | 'fallback';

export interface ChatAction {
  label: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export interface ChatResponse {
  id: string;
  message: string;
  disclaimer?: string;
  actions?: ChatAction[];
  quickReplies?: string[];
}

export interface AssistantContext {
  pathname: string;
  hasCartItems: boolean;
}

export interface AssistantResponder {
  getResponse(input: string, context: AssistantContext): ChatResponse;
}

export interface ConversationMessage {
  id: string;
  role: 'visitor' | 'assistant';
  content: string;
  response?: ChatResponse;
}
