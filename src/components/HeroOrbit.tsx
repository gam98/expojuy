import { isologo } from '../assets/brand';

/**
 * Componente HeroOrbit: Sistema orbital vectorial de gran escala y alta fidelidad.
 * Presenta anillos concéntricos aumentados de tamaño que rotan continuamente en direcciones opuestas,
 * con satélites luminosos, marcas cardinales de radar tecnológico y micro-flotación del isologo central.
 */
export function HeroOrbit() {
  return (
    <div
      className="orbit-mark hero-anim-right hero-delay-1"
      aria-label="Isologotipo de ExpoJuy con órbitas interactivas continuas"
    >
      <svg
        className="orbit-svg"
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2cb8cb" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#57d5df" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#744be8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="orbitLavenderGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b07af4" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2cb8cb" stopOpacity="0.45" />
          </linearGradient>
          <filter id="orbitGlowCyan" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="orbitGlowLavender" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Guías circulares estáticas tenues */}
        <circle cx="270" cy="270" r="255" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle cx="270" cy="270" r="195" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <circle cx="270" cy="270" r="145" stroke="rgba(44,184,203,0.16)" strokeWidth="1" />
        <circle cx="270" cy="270" r="105" stroke="rgba(176,122,244,0.12)" strokeWidth="1" strokeDasharray="4 8" />

        {/* Anillo exterior aumentado: rotación horaria continua con segmentos tecnológicos y satélites */}
        <g className="orbit-group-outer">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 270 270"
            to="360 270 270"
            dur="24s"
            repeatCount="indefinite"
          />
          <circle
            cx="270"
            cy="270"
            r="255"
            stroke="rgba(87,213,223,0.6)"
            strokeWidth="2"
            strokeDasharray="50 65 140 55 25 50"
            strokeLinecap="round"
          />
          {/* Satélites luminosos sobre la órbita mayor */}
          <circle cx="525" cy="270" r="6" fill="#2cb8cb" filter="url(#orbitGlowCyan)" />
          <circle cx="15" cy="270" r="4.5" fill="#b07af4" filter="url(#orbitGlowLavender)" />
          <circle cx="270" cy="15" r="3" fill="#ffffff" opacity="0.85" />
          <circle cx="270" cy="525" r="3" fill="#ffffff" opacity="0.85" />
        </g>

        {/* Anillo medio aumentado: rotación antihoraria continua con gradiente vivo y marcas de radar */}
        <g className="orbit-group-mid">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 270 270"
            to="0 270 270"
            dur="16s"
            repeatCount="indefinite"
          />
          <circle
            cx="270"
            cy="270"
            r="195"
            stroke="url(#orbitCyanGrad)"
            strokeWidth="2.5"
            strokeDasharray="160 50 80 50"
            strokeLinecap="round"
          />
          <circle cx="270" cy="75" r="6.5" fill="#57d5df" filter="url(#orbitGlowCyan)" />
          <circle cx="270" cy="465" r="5.5" fill="#b07af4" filter="url(#orbitGlowLavender)" />
          {/* Muescas cardinales que giran visiblemente */}
          <line x1="270" y1="65" x2="270" y2="85" stroke="#57d5df" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="270" y1="455" x2="270" y2="475" stroke="#b07af4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="270" x2="85" y2="270" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
          <line x1="455" y1="270" x2="475" y2="270" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Anillo interior: rotación horaria con resplandor turquesa */}
        <g className="orbit-group-inner">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 270 270"
            to="360 270 270"
            dur="10s"
            repeatCount="indefinite"
          />
          <circle
            cx="270"
            cy="270"
            r="145"
            stroke="url(#orbitLavenderGrad)"
            strokeWidth="2.6"
            strokeDasharray="90 40 45 40"
            strokeLinecap="round"
          />
          <circle cx="372" cy="168" r="5" fill="#2cb8cb" filter="url(#orbitGlowCyan)" />
          <circle cx="168" cy="372" r="3.5" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Anillo núcleo: rotación antihoraria suave */}
        <g className="orbit-group-core">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 270 270"
            to="0 270 270"
            dur="7s"
            repeatCount="indefinite"
          />
          <circle
            cx="270"
            cy="270"
            r="105"
            stroke="rgba(87,213,223,0.5)"
            strokeWidth="1.8"
            strokeDasharray="16 20"
          />
        </g>
      </svg>

      {/* Logotipo central aumentado con micro-flotación */}
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
