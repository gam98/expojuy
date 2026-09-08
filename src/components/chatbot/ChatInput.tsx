import { Send } from 'lucide-react';
import { type FormEvent, type RefObject, useState } from 'react';

interface ChatInputProps {
  inputRef: RefObject<HTMLInputElement | null>;
  onSend: (value: string) => void;
}

export function ChatInput({ inputRef, onSend }: ChatInputProps) {
  const [value, setValue] = useState('');
  const maxLength = 240;
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = value.trim();
    if (!message) return;
    onSend(message);
    setValue('');
  };

  return <form className="nexo-input-form" onSubmit={submit}>
    <label className="sr-only" htmlFor="nexo-input">Consulta para Nexo</label>
    <div className="nexo-input-wrap">
      <input id="nexo-input" name="message" ref={inputRef} value={value} onChange={(event) => setValue(event.target.value)} maxLength={maxLength} placeholder="Escribí tu consulta…" autoComplete="off" />
      <button type="submit" aria-label="Enviar consulta" disabled={!value.trim()}><Send aria-hidden="true" /></button>
    </div>
    <p className="nexo-input-note"><span>{value.length}/{maxLength}</span><span>Solo se usa en esta sesión.</span></p>
  </form>;
}
