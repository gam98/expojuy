import { useEffect, useState } from 'react';

const eventDate = new Date('2026-10-15T09:00:00-03:00').getTime();
const getRemaining = () => Math.max(0, eventDate - Date.now());

export function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining);
  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining / 3_600_000) % 24);
  const minutes = Math.floor((remaining / 60_000) % 60);
  return <div className="countdown" aria-label={`Faltan ${days} días, ${hours} horas y ${minutes} minutos`}>
    <p>Cuenta regresiva simulada</p>
    <div><strong>{days}</strong><span>Días</span><strong>{hours}</strong><span>Horas</span><strong>{minutes}</strong><span>Min</span></div>
  </div>;
}
