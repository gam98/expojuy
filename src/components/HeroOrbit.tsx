import { isologo } from '../assets/brand';

/**
 * Genera el trazado SVG de una onda armónica circular continua.
 * Crea un recorrido cerrado con ondulaciones sinuoidales suaves.
 */
function generateWavePath(cx: number, cy: number, r: number, amplitude: number, crests: number, points = 120): string {
  let d = '';
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const currentR = r + amplitude * Math.sin(angle * crests);
    const x = cx + currentR * Math.cos(angle);
    const y = cy + currentR * Math.sin(angle);
    if (i === 0) {
      d += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    } else {
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }
  return d + ' Z';
}

// Exactamente 3 ondas concéntricas con frecuencias armónicas diferenciadas
const wavePathInner = generateWavePath(270, 270, 160, 4.2, 6);
const wavePathMid = generateWavePath(270, 270, 210, 5.8, 8);
const wavePathOuter = generateWavePath(270, 270, 258, 7.5, 10);

/**
 * Componente HeroOrbit: Sistema de 3 ondas concéntricas fluidas y armónicas.
 * Presenta 3 ondas sinuoidales en rotación y pulsación continua que abrazan el isologotipo de ExpoJuy.
 */
export function HeroOrbit() {
  return (
    <div
      className="orbit-mark hero-anim-right hero-delay-1"
      aria-label="Isologotipo de ExpoJuy con 3 ondas fluidas interactivas"
    >
      <svg
        className="orbit-svg"
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Gradientes armónicos para las 3 ondas */}
          <linearGradient id="waveCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2cb8cb" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#57d5df" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2cb8cb" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="waveCyanLavenderGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#57d5df" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#b07af4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2cb8cb" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="waveLavenderGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b07af4" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#744be8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#57d5df" stopOpacity="0.35" />
          </linearGradient>

          {/* Filtro de resplandor sutil para las ondas */}
          <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. ONDA EXTERIOR: Rotación horaria pausada y ondulación expansiva */}
        <g className="hero-wave wave-outer">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 270 270"
            to="360 270 270"
            dur="36s"
            repeatCount="indefinite"
          />
          <path
            d={wavePathOuter}
            stroke="url(#waveLavenderGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.75"
          />
          {/* Nodos de energía lumínica sobre la cresta exterior */}
          <circle cx="528" cy="270" r="4" fill="#b07af4" filter="url(#waveGlow)" />
          <circle cx="270" cy="12" r="3" fill="#57d5df" opacity="0.8" />
        </g>

        {/* 2. ONDA MEDIA: Rotación antihoraria suave y gradiente bicromático */}
        <g className="hero-wave wave-mid">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 270 270"
            to="0 270 270"
            dur="26s"
            repeatCount="indefinite"
          />
          <path
            d={wavePathMid}
            stroke="url(#waveCyanLavenderGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
            filter="url(#waveGlow)"
          />
          {/* Nodos de energía sobre la onda media */}
          <circle cx="270" cy="60" r="4.5" fill="#57d5df" filter="url(#waveGlow)" />
          <circle cx="270" cy="480" r="3.5" fill="#b07af4" opacity="0.9" />
        </g>

        {/* 3. ONDA INTERIOR: Rotación horaria rítmica con brillo cian cercano */}
        <g className="hero-wave wave-inner">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 270 270"
            to="360 270 270"
            dur="18s"
            repeatCount="indefinite"
          />
          <path
            d={wavePathInner}
            stroke="url(#waveCyanGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.95"
            filter="url(#waveGlow)"
          />
          {/* Nodos de energía sobre la onda interior */}
          <circle cx="430" cy="270" r="4" fill="#2cb8cb" filter="url(#waveGlow)" />
          <circle cx="110" cy="270" r="3" fill="#ffffff" opacity="0.85" />
        </g>
      </svg>

      {/* Logotipo central de ExpoJuy aumentado con ampliación suave al interactuar */}
      <img
        className="hero-logo"
        src={isologo}
        alt="Isologotipo de ExpoJuy 2026"
        width={1510}
        height={1509}
      />
    </div>
  );
}
