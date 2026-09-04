## Identidad visual y paleta cromática

Debés usar el isologotipo oficial provisto en los recursos del proyecto como referencia visual principal.

El logo combina una estructura geométrica contemporánea y modular, con una paleta que transmite innovación, tecnología, creatividad, energía y desarrollo. La interfaz debe construir una identidad visual coherente con esos colores, evitando una apariencia corporativa genérica o excesivamente sobria.

Usá la siguiente paleta cromática provisional, extraída visualmente del isologotipo adjunto. Centralizala mediante variables CSS o tokens de Tailwind para que sea sencilla de actualizar si luego se recibe una paleta institucional oficial.

### Colores principales

- Violeta Expo intenso: `#8400D8`
  - Uso: color principal de marca, botones primarios, enlaces destacados, elementos activos, indicadores, badges principales y llamadas a la acción.
  - No usar en bloques extensos de texto pequeño sobre fondos claros si afecta la legibilidad.

- Violeta Expo medio: `#744BE8`
  - Uso: gradientes, elementos secundarios de marca, iconografía destacada, fondos de tarjetas especiales y estados hover.

- Lavanda Expo: `#B07AF4`
  - Uso: superficies decorativas, bloques visuales suaves, fondos de secciones, ilustraciones abstractas, gráficos y estados de baja intensidad.
  - Para texto sobre este color, verificar contraste. Preferir texto violeta muy oscuro o blanco según el contexto.

- Turquesa Expo: `#2CB8CB`
  - Uso: acento de innovación y tecnología, etiquetas de agenda, categorías, estados informativos, detalles en gráficos, íconos, subrayados y elementos de interacción secundarios.
  - Usarlo como complemento visual, no como color dominante del sitio.

### Colores neutros

- Blanco: `#FFFFFF`
  - Uso: fondo principal, superficies limpias, tarjetas y espacios de respiro visual.

- Fondo muy claro con tinte violeta: `#F8F6FF`
  - Uso: fondo alternativo de secciones, formularios, paneles y áreas de lectura.

- Violeta muy oscuro: `#24113C`
  - Uso: texto principal, títulos, fondos oscuros, footer y overlays.

- Gris violeta oscuro: `#4E455A`
  - Uso: texto secundario, descripciones, metadata y contenido de apoyo.

- Gris lavanda: `#E8E2F2`
  - Uso: bordes, separadores, superficies deshabilitadas y fondos sutiles.

- Gris muy claro: `#F4F3F6`
  - Uso: fondos neutros, skeletons, campos deshabilitados y divisores suaves.

### Colores semánticos

Mantené los estados semánticos accesibles y diferenciables de la paleta de marca:

- Éxito: `#168B60`
- Advertencia: `#B66A00`
- Error: `#C2303F`
- Información: `#167EAE`

No uses solo el color para comunicar éxito, error, selección o estado. Acompañalo con texto, ícono, borde, patrón o cambio de contenido cuando corresponda.

### Gradientes recomendados

Usá gradientes con moderación, principalmente en hero sections, CTAs, fondos decorativos y recursos gráficos abstractos.

Gradiente institucional principal:

linear-gradient(135deg, #8400D8 0%, #744BE8 55%, #B07AF4 100%)

Gradiente de innovación:

linear-gradient(135deg, #2CB8CB 0%, #744BE8 55%, #8400D8 100%)

Gradiente suave para fondos:

linear-gradient(135deg, #F8F6FF 0%, #FFFFFF 50%, #EDE5FC 100%)

Gradiente oscuro para hero o footer:

linear-gradient(135deg, #24113C 0%, #4A1C78 55%, #744BE8 100%)

Evitá usar todos los gradientes al mismo tiempo. Cada pantalla debe conservar aire visual y una jerarquía clara.

### Reglas de uso cromático

- El violeta intenso debe ser el color dominante de marca.
- El turquesa debe utilizarse como acento estratégico para reforzar conceptos de innovación, tecnología, agenda, interacción o datos.
- El lavanda debe aportar profundidad, suavidad y riqueza visual en fondos, decoraciones o bloques secundarios.
- Priorizá fondos blancos o muy claros para mantener una interfaz institucional, legible y moderna.
- Usá el violeta oscuro para títulos y grandes superficies oscuras, especialmente el footer, overlays y secciones de alto impacto.
- Limitá los botones principales a violeta intenso, con hover hacia violeta medio o violeta oscuro.
- Los botones secundarios pueden ser outline violeta o fondo lavanda suave con texto violeta oscuro.
- Los enlaces deben tener un estado hover y focus perceptible, sin depender solo de un cambio de tonalidad.
- Usá el turquesa para chips, pequeños indicadores, detalles decorativos y elementos seleccionados cuando no compitan con los CTAs principales.
- Verificá contraste WCAG AA como mínimo para texto, controles, foco y elementos interactivos.

### Tokens de diseño sugeridos

Definí los siguientes tokens en Tailwind o en variables CSS globales:

--color-brand-primary: #8400D8;
--color-brand-secondary: #744BE8;
--color-brand-lavender: #B07AF4;
--color-brand-turquoise: #2CB8CB;

--color-background: #FFFFFF;
--color-background-subtle: #F8F6FF;
--color-surface: #FFFFFF;
--color-surface-muted: #F4F3F6;
--color-border: #E8E2F2;

--color-text-primary: #24113C;
--color-text-secondary: #4E455A;
--color-text-inverse: #FFFFFF;

--color-success: #168B60;
--color-warning: #B66A00;
--color-danger: #C2303F;
--color-info: #167EAE;

--shadow-soft: 0 8px 30px rgba(36, 17, 60, 0.08);
--shadow-brand: 0 16px 40px rgba(132, 0, 216, 0.18);
--radius-sm: 0.5rem;
--radius-md: 0.875rem;
--radius-lg: 1.25rem;
--radius-xl: 1.75rem;

### Aplicación por componentes

Header:
- Fondo blanco o semitransparente sobre hero, según contexto.
- Navegación con texto violeta oscuro.
- Link activo con violeta intenso y un indicador turquesa o subrayado.
- CTA principal en violeta intenso.

Hero:
- Fondo basado en gradiente oscuro o gradiente institucional.
- Usar lavanda y turquesa como formas abstractas, puntos, líneas, módulos geométricos o brillos controlados.
- Títulos en blanco.
- CTA principal en blanco con texto violeta intenso o turquesa, según contraste.
- CTA secundario con borde blanco y texto blanco.

Tarjetas:
- Fondo blanco.
- Borde gris lavanda sutil.
- Sombra suave.
- Hover con elevación leve, borde violeta suave y detalle turquesa o violeta intenso.
- No usar fondos saturados para todas las tarjetas; reservarlos para destacados.

Agenda:
- Usar turquesa para categorías vinculadas a tecnología e innovación.
- Usar violeta intenso para actividades principales, seleccionadas o favoritas.
- Usar lavanda en fondos suaves de filtros, tabs y bloques de fechas.

Expositores:
- Rubros y etiquetas con combinaciones de lavanda, turquesa y violeta muy claro.
- Botones de acción en violeta intenso.
- Estados de filtros seleccionados claramente visibles.

Mapa:
- Usar una base clara.
- Representar zonas principales con tonos de lavanda.
- Usar violeta intenso para zonas seleccionadas.
- Usar turquesa para accesos, servicios, puntos de información o recorridos.
- Mantener una leyenda accesible y no depender solo del color.

Footer:
- Fondo violeta muy oscuro o gradiente oscuro.
- Texto blanco con contraste adecuado.
- Elementos interactivos con detalles lavanda o turquesa.
- Evitar usar violeta intenso sobre violeta oscuro si reduce contraste.

Accesibilidad:
- Asegurá que los botones violeta intenso tengan texto blanco con contraste suficiente.
- Para texto normal sobre lavanda y turquesa, elegí violeta muy oscuro si el blanco no ofrece contraste adecuado.
- Todos los elementos focus deben tener un anillo visible; sugerencia:
  `outline: 3px solid #2CB8CB; outline-offset: 3px;`
- No uses lavanda clara para texto pequeño.
- Respetá `prefers-reduced-motion` en transiciones, fondos animados y microinteracciones.