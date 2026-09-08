import { ArrowUpRight, Compass } from 'lucide-react';
import type { ChatAction, ConversationMessage } from '../../types/chatbot';

interface ChatMessageProps {
  message: ConversationMessage;
  onAction: (action: ChatAction) => void;
  onQuickReply: (reply: string) => void;
}

export function ChatMessage({ message, onAction, onQuickReply }: ChatMessageProps) {
  if (message.role === 'visitor') {
    return <article className="nexo-message nexo-message-visitor"><p>{message.content}</p></article>;
  }

  const response = message.response;
  if (!response) return null;

  return <article className="nexo-message nexo-message-assistant">
    <div className="nexo-message-mark" aria-hidden="true"><Compass /></div>
    <div className="nexo-message-content">
      <p>{response.message}</p>
      {response.disclaimer && <small>{response.disclaimer}</small>}
      {response.actions && <div className="nexo-actions">
        {response.actions.map((action) => <button key={action.label} className={`nexo-action nexo-action-${action.variant ?? 'primary'}`} type="button" onClick={() => onAction(action)}>
          {action.label}<ArrowUpRight aria-hidden="true" />
        </button>)}
      </div>}
      {response.quickReplies && <div className="nexo-inline-replies" aria-label="Sugerencias para continuar">
        {response.quickReplies.map((reply) => <button type="button" key={reply} onClick={() => onQuickReply(reply)}>{reply}</button>)}
      </div>}
    </div>
  </article>;
}
