import { useEffect, useState } from 'react';

const eventDate = new Date('2026-10-15T09:00:00-03:00').getTime();
const getRemaining = () => Math.max(0, eventDate - Date.now());

/**
 * Componente Countdown: Contador en vivo hacia la inauguración de ExpoJuy 2026.
 * Incluye cabecera de estado, segundero en tiempo real y estética glassmórfica.
 */
export function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining / 3_600_000) % 24);
  const minutes = Math.floor((remaining / 60_000) % 60);
  const seconds = Math.floor((remaining / 1_000) % 60);

  return (
    <aside
      className="countdown hero-anim-right hero-delay-2"
      aria-label={`Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para ExpoJuy 2026`}
    >
      <div className="countdown-header">
        <span className="countdown-live-dot" aria-hidden="true"></span>
        <span className="countdown-label">COMIENZA EN</span>
      </div>
      <div className="countdown-grid">
        <div className="countdown-cell">
          <strong>{days}</strong>
          <span>DÍAS</span>
        </div>
        <span className="countdown-divider" aria-hidden="true">:</span>
        <div className="countdown-cell">
          <strong>{hours.toString().padStart(2, '0')}</strong>
          <span>HORAS</span>
        </div>
        <span className="countdown-divider" aria-hidden="true">:</span>
        <div className="countdown-cell">
          <strong>{minutes.toString().padStart(2, '0')}</strong>
          <span>MIN</span>
        </div>
        <span className="countdown-divider" aria-hidden="true">:</span>
        <div className="countdown-cell">
          <strong>{seconds.toString().padStart(2, '0')}</strong>
          <span>SEG</span>
        </div>
      </div>
    </aside>
  );
}

