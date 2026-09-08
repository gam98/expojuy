import { Compass, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getQuickReplies } from '../../data/chatbot';
import { useCart } from '../../hooks/useCart';
import { mockAssistantResponder } from '../../lib/MockAssistantResponder';
import type { ChatAction, ChatResponse, ConversationMessage } from '../../types/chatbot';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';

function createAssistantMessage(response: ChatResponse): ConversationMessage {
  return { id: `assistant-${crypto.randomUUID()}`, role: 'assistant', content: response.message, response };
}

function createWelcome(pathname: string): ConversationMessage {
  const contextNote = pathname === '/agenda' ? ' Estás en la agenda: podés usar las sugerencias para acotar tu recorrido.'
    : pathname === '/expositores' ? ' Estás en el directorio: podés buscar por rubro o conectar con la agenda.'
      : pathname === '/mapa' ? ' Estás en el mapa: podés consultar servicios y recorridos.'
        : pathname === '/entradas' || pathname.startsWith('/checkout') ? ' Estás en la sección de entradas: podés revisar pases y opciones de pago.'
          : pathname === '/contacto' ? ' Estás en contacto: también podés resolver consultas frecuentes o derivar una consulta.' : '';
  return createAssistantMessage({
    id: `welcome-${pathname}`,
    message: `Estoy para ayudarte a descubrir actividades, sectores, expositores, mapa y entradas.${contextNote}`,
  });
}

function focusPageContent() {
  window.setTimeout(() => {
    const target = document.querySelector('main, h1') as HTMLElement | null;
    if (!target) return;
    const hadTabIndex = target.hasAttribute('tabindex');
    if (!hadTabIndex) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (!hadTabIndex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }, 0);
}

export function ChatAssistant() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { items } = useCart();
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const welcomedPaths = useRef(new Set<string>());
  const conversationRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [liveAnnouncement, setLiveAnnouncement] = useState('');

  const closePanel = (restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) window.setTimeout(() => launcherRef.current?.focus(), 0);
  };

  const openPanel = () => {
    setIsOpen(true);
    if (!welcomedPaths.current.has(pathname)) {
      welcomedPaths.current.add(pathname);
      setMessages((current) => [...current, createWelcome(pathname)]);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    conversationRef.current?.scrollTo({ top: conversationRef.current.scrollHeight, behavior: 'smooth' });
  }, [isOpen, messages]);

  const sendMessage = (input: string) => {
    const response = mockAssistantResponder.getResponse(input, { pathname, hasCartItems: items.length > 0 });
    setMessages((current) => [
      ...current,
      { id: `visitor-${crypto.randomUUID()}`, role: 'visitor', content: input },
      createAssistantMessage(response),
    ]);
    setLiveAnnouncement(response.message);
  };

  const handleAction = (action: ChatAction) => {
    closePanel(false);
    navigate(action.to);
    focusPageContent();
  };

  const trapFocus = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closePanel();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = panelRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const quickReplies = getQuickReplies(pathname);

  return <div className="nexo-layer">
    {isOpen && <div className="nexo-backdrop" role="presentation" onMouseDown={() => closePanel()}>
      <section className="nexo-panel" ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="nexo-title" onMouseDown={(event) => event.stopPropagation()} onKeyDown={trapFocus}>
        <header className="nexo-header">
          <div className="nexo-heading"><span className="nexo-heading-mark" aria-hidden="true"><Compass /></span><div><p>Asistente ExpoJuy</p><h2 id="nexo-title">Nexo, asistente ExpoJuy</h2></div></div>
          <button className="nexo-close" type="button" onClick={() => closePanel()} aria-label="Cerrar asistente Nexo"><X aria-hidden="true" /></button>
        </header>
        <div className="nexo-conversation" ref={conversationRef} aria-label="Conversación con Nexo">
          {messages.map((message) => <ChatMessage key={message.id} message={message} onAction={handleAction} onQuickReply={sendMessage} />)}
        </div>
        <div className="nexo-quick-replies" aria-label="Consultas sugeridas">
          {quickReplies.map((reply) => <button type="button" key={reply} onClick={() => sendMessage(reply)}>{reply}</button>)}
        </div>
        <ChatInput inputRef={inputRef} onSend={sendMessage} />
        <div className="sr-only" aria-live="polite" aria-atomic="true">{liveAnnouncement}</div>
      </section>
    </div>}
    <button className="nexo-launcher" ref={launcherRef} type="button" onClick={openPanel} aria-label="Abrir asistente Nexo de ExpoJuy" aria-haspopup="dialog" aria-expanded={isOpen}>
      <Compass aria-hidden="true" /><span>Nexo</span><i aria-hidden="true" /><Sparkles aria-hidden="true" />
    </button>
  </div>;
}
