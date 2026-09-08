Trabajá sobre el proyecto React + Vite + TypeScript existente de ExpoJuy 2026.

Usá explícitamente las skills instaladas pertinentes. Priorizá:
$frontend-design, $web-design-guidelines, $design-taste-frontend,
$brandkit, $vercel-react-best-practices y $vercel-composition-patterns.

Para este trabajo, si están disponibles, priorizá además:
$high-end-visual-design, $anti-ui-slop y cualquier skill de accesibilidad o testing.

No reinicies el proyecto, no reemplaces la arquitectura actual, no rompas rutas,
formularios, carrito, checkout mock, agenda, mapa ni componentes globales existentes.

## Objetivo

Integrá un asistente conversacional de ExpoJuy 2026 totalmente mock/simulado.

No debe verse como un chatbot genérico de soporte. Debe sentirse como una herramienta
de orientación contextual para recorrer la feria: “Nexo ExpoJuy” o un nombre equivalente
que sugiera conexión, territorio, innovación y movimiento.

El asistente debe aportar valor real de UX dentro de una demo:
- Ayudar a descubrir actividades de agenda.
- Orientar hacia sectores y expositores.
- Explicar el mapa conceptual y servicios del predio.
- Guiar hacia entradas mock y checkout.
- Derivar a FAQ o contacto cuando la respuesta no está disponible.
- Mostrar cómo una futura IA podría mejorar la experiencia sin afirmar que ya existe
  una integración real de IA.

## Restricciones no negociables

- No conectar APIs de IA, LLM, OpenAI, Anthropic, Gemini ni proveedores externos.
- No incluir claves, tokens, variables de entorno, SDKs ni fetch/axios para el chatbot.
- No enviar mensajes a ningún servidor.
- No utilizar datos personales, financieros ni información sensible.
- No simular que una IA está respondiendo en tiempo real o que posee información oficial.
- No usar datos reales no confirmados sobre entradas, horarios, expositores, sede o sponsors.
- Toda respuesta debe provenir de un sistema local de intenciones y contenido mock.
- Incluir una aclaración visible y no invasiva:
  “Asistente de demostración: las respuestas son simuladas y la información está sujeta
  a confirmación oficial.”
- No persistir conversaciones completas en localStorage.
- Como máximo, persistir una preferencia no sensible como “asistente minimizado/cerrado”,
  solo si es necesario y explicando esa decisión en código.
- No usar librerías pesadas si React, CSS y las dependencias actuales son suficientes.

## Concepto y rol del asistente

Nombre sugerido: “Nexo”, con subtítulo “Asistente ExpoJuy”.

Su personalidad debe ser:
- Clara, cordial, breve y orientada a la acción.
- Institucional pero cercana.
- No debe fingir certeza ante datos no oficiales.
- Cuando no tiene respuesta, debe reconocer el límite y proponer una acción útil.
- Debe hablar en español rioplatense/argentino sin exceso de informalidad.
- Debe priorizar links internos y navegación antes que textos largos.

Ejemplos de tono:
- “Puedo orientarte por la agenda, los sectores, el mapa y las entradas de demostración.”
- “Esta información es parte de la maqueta y puede cambiar cuando se publique la agenda oficial.”
- “No encontré una actividad exacta para esa búsqueda. Podés explorar la agenda completa.”
- “Para consultas comerciales o institucionales, te conviene usar el formulario de contacto.”

No uses frases genéricas de chatbot como:
- “¡Hola! ¿Cómo puedo ayudarte hoy?”
- “Estoy aquí para asistirte.”
- “Como modelo de inteligencia artificial…”

## Ubicación e integración global

Implementá el asistente como un componente global, disponible en todas las rutas,
sin bloquear el contenido ni competir con el CTA principal de la página.

Requisitos:
- Botón flotante persistente, ubicado abajo a la derecha.
- En desktop, respetar margen seguro de viewport y no superponerse con contenido crítico.
- En mobile, respetar safe areas y no cubrir controles fijos, el carrito o CTAs de checkout.
- El botón debe usar un ícono coherente de Lucide React, por ejemplo Sparkles, MessagesSquare,
  Route, Compass o Bot; evitar la estética de widget corporativo estándar.
- El botón debe tener label accesible:
  “Abrir asistente Nexo de ExpoJuy”.
- Incluir una señal visual sutil de disponibilidad, pero no una animación invasiva,
  automática o repetitiva.
- No abrir automáticamente al cargar el sitio.
- Debe poder abrirse y cerrarse mediante mouse, touch y teclado.
- En el header o footer no agregues un segundo acceso salvo que sea una decisión de UX
  justificada y no recargue la navegación.

## Diseño visual

Respetá y reutilizá el sistema de tokens actual de ExpoJuy:

- Violeta intenso: #8400D8
- Violeta medio: #744BE8
- Lavanda: #B07AF4
- Turquesa: #2CB8CB
- Violeta oscuro: #24113C
- Fondo claro: #F8F6FF
- Texto secundario: #4E455A
- Bordes: #E8E2F2

Dirección visual:
- El widget debe sentirse como una “estación de conexión” o “nodo de orientación”,
  inspirado de forma abstracta en la geometría modular del isologotipo.
- Usá violeta como base de identidad, turquesa como señal de rutas/conexiones y lavanda
  en superficies secundarias.
- Evitá burbujas de chat excesivamente redondeadas, gradientes sin función, glassmorphism,
  emojis y patrones visuales típicos de asistentes SaaS.
- La ventana debe ser elegante, con jerarquía editorial, buena legibilidad y aire visual.
- En desktop, usar panel flotante anclado al botón, aproximadamente 360–420 px de ancho,
  sin cubrir por completo la página.
- En mobile, usar bottom sheet o panel casi completo, con encabezado fijo y área de mensajes
  desplazable; no generar overflow horizontal.
- Respetar prefers-reduced-motion.

## Flujo de conversación mock

Implementá una combinación de:
1. Mensaje de bienvenida contextual.
2. Sugerencias rápidas.
3. Input libre con interpretación local simple basada en palabras clave.
4. Respuestas mock orientadas a acciones internas.

Al abrir, mostrar:

Título:
“Nexo, asistente ExpoJuy”

Mensaje inicial:
“Orientación de demostración para descubrir actividades, sectores, expositores, mapa y entradas.”

Aviso breve:
“Las respuestas son simuladas y pueden cambiar con la información oficial.”

Mostrar entre 4 y 6 chips o sugerencias rápidas, por ejemplo:
- “Explorar la agenda”
- “Buscar expositores”
- “Orientarme en el mapa”
- “Conocer sectores”
- “Ver entradas”
- “Preguntas frecuentes”

No crear demasiadas opciones. Las sugerencias deben ser buttons accesibles, no elementos
div clickeables.

## Intenciones simuladas

Creá un sistema desacoplado de intenciones en un archivo como:

src/data/chatbot.ts
o
src/features/chatbot/chatbotData.ts

Usá tipos TypeScript estrictos, por ejemplo:

type ChatIntent =
  | 'agenda'
  | 'agendaTechnology'
  | 'agendaFavorites'
  | 'exhibitors'
  | 'sectors'
  | 'map'
  | 'services'
  | 'tickets'
  | 'checkout'
  | 'sponsors'
  | 'faq'
  | 'contact'
  | 'greeting'
  | 'fallback';

interface ChatAction {
  label: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'text';
}

interface ChatResponse {
  id: string;
  message: string;
  disclaimer?: string;
  actions?: ChatAction[];
  quickReplies?: string[];
}

Implementá detección local simple y mantenible:
- Normalizar texto: minúsculas, remover tildes y espacios innecesarios.
- Asociar palabras clave a cada intención.
- Priorizar intenciones específicas antes de las generales.
- Nunca usar un modelo de IA ni solicitudes de red.
- Dejar el motor preparado para reemplazarlo posteriormente mediante una interfaz o adapter,
  sin implementar el proveedor real.

Ejemplos de palabras clave:
- Agenda: agenda, charla, panel, taller, workshop, actividad, speaker, horario.
- Tecnología: tecnologia, innovación, innovacion, IA, inteligencia artificial, digital.
- Expositores: expositor, empresa, stand, pabellón, pabellon, rubro.
- Sectores: minería/mineria, energía/energia, agro, turismo, comercio, industria,
  emprendimiento, conocimiento.
- Mapa: mapa, donde, dónde, ubicacion, ubicación, llegar, recorrido.
- Servicios: baño, baño, sanitario, estacionamiento, comida, gastronomía, acceso.
- Entradas: entrada, entradas, ticket, pase, precio, comprar.
- Checkout: pago, pagar, tarjeta, transferencia, billetera.
- Sponsors: sponsor, patrocinio, patrocinador, alianza.
- FAQ: ayuda, pregunta, preguntas, dudas.
- Contacto: contacto, prensa, consultar, hablar, correo.

## Respuestas y acciones internas

Diseñá respuestas breves, honestas y accionables.

Ejemplos esperados:

Intención agenda:
“Podés explorar las actividades por día, temática y formato. También podés guardar tus favoritas en ‘Mi agenda’.”
Acciones:
- “Abrir agenda” → /agenda
- “Ver mi agenda” → /agenda con la interacción o estado existente, si corresponde

Intención agendaTechnology:
“En esta maqueta podés filtrar actividades vinculadas a innovación y tecnología. La programación definitiva estará sujeta a confirmación oficial.”
Acción:
- “Explorar agenda” → /agenda

Intención expositores:
“El directorio permite buscar empresas y explorar rubros del ecosistema productivo. Los perfiles mostrados son demostrativos.”
Acción:
- “Ver expositores” → /expositores

Intención sectores:
“ExpoJuy reúne sectores como energía, minería, agroindustria, turismo, tecnología, industria y economía del conocimiento.”
Acción:
- “Explorar sectores” → /expositores

Intención map:
“El plano conceptual te ayuda a ubicar accesos, pabellones, auditorio, expositores, gastronomía y servicios.”
Acción:
- “Abrir mapa” → /mapa

Intención services:
“En el mapa conceptual podés identificar accesos, sanitarios, gastronomía y estacionamiento. La distribución final dependerá del plano oficial.”
Acción:
- “Ver servicios en el mapa” → /mapa

Intención tickets:
“Podés recorrer opciones de pase y armar una selección de entradas. Los precios y disponibilidades son datos de demostración.”
Acción:
- “Ver entradas” → /entradas

Intención checkout:
“La compra es una simulación: no se procesa ningún cobro ni se almacenan datos financieros.”
Acciones:
- “Ir a entradas” → /entradas
- “Conocer la demo de pago” → /checkout solo si hay ítems; si no, orientar a /entradas

Intención sponsors:
“Hay un espacio conceptual para aliados y patrocinadores. Las condiciones comerciales definitivas se comunicarán oficialmente.”
Acciones:
- “Ver sponsors” → /sponsors
- “Consultar por patrocinio” → /contacto con asunto o intención preseleccionada, si ya existe soporte

Intención faq:
“Podés consultar respuestas por tema, buscar una pregunta o escribirnos si necesitás orientación adicional.”
Acciones:
- “Abrir preguntas frecuentes” → /preguntas-frecuentes
- “Ir a contacto” → /contacto

Intención contact:
“Para consultas de expositores, sponsors, prensa o público general, usá el formulario de contacto de demostración.”
Acción:
- “Abrir contacto” → /contacto

Intención fallback:
“No tengo una respuesta simulada para esa consulta todavía. Puedo orientarte por agenda, expositores, mapa, entradas o preguntas frecuentes.”
Acciones:
- “Ver preguntas frecuentes” → /preguntas-frecuentes
- “Contactar al equipo” → /contacto
Quick replies:
- “Explorar la agenda”
- “Buscar expositores”
- “Ver entradas”

Todas las acciones deben navegar mediante React Router, no con recarga completa de página.
Al usar una acción, cerrar el panel solo si mejora el flujo; en ese caso, devolver el foco
correctamente al elemento lógico de la nueva vista si es posible.

## Contexto según la ruta

Mejorá la sensación de inteligencia sin usar IA real: el mensaje inicial y las sugerencias
pueden cambiar según la página actual.

Ejemplos:
- En /agenda: priorizar “Filtrar actividades”, “Ver mis favoritos” y “Explorar expositores”.
- En /expositores: priorizar “Buscar por rubro”, “Ver agenda” y “Orientarme en el mapa”.
- En /mapa: priorizar “Ver servicios”, “Explorar expositores” y “Consultar agenda”.
- En /entradas y /checkout: priorizar “Ver mi selección”, “Entender la demo de pago” y “FAQ”.
- En /contacto: priorizar “Preguntas frecuentes”, “Consulta para sponsors” y “Consulta para expositores”.
- En la Home: usar las sugerencias generales.

La contextualización debe usar `useLocation` o la solución actual de router, sin duplicar
mensajes innecesariamente.

## Comportamiento del input

Implementá un input de texto real, aunque las respuestas sean mock.

Requisitos:
- Placeholder: “Escribí una consulta de demostración…”
- Label accesible, que pueda ser visualmente oculto si el diseño lo justifica.
- Al enviar, agregá el mensaje del visitante y luego una respuesta del sistema local.
- No simules una IA “pensando” por varios segundos. Si usás una demora breve estética,
  debe ser menor a 500 ms, cancelable/compatible con reduced motion y no prometer procesamiento real.
- Limitar longitud del mensaje, por ejemplo a 240 caracteres, con contador accesible si aporta valor.
- No enviar mensajes vacíos.
- Soportar Enter para enviar; permitir salto de línea solo si se usa textarea y se documenta.
- Mostrar un estado de conversación vacío o bienvenida sin que parezca un historial real.
- Como máximo conservar mensajes durante la sesión actual en estado local.
- Al cerrar y volver a abrir, podés conservar la sesión mientras la app siga abierta,
  pero no guardarla en localStorage.

## Accesibilidad

Implementá el asistente como diálogo accesible:

- Usar `role="dialog"` o un elemento dialog apropiado, `aria-modal="true"` cuando bloquee interacción.
- Asociar `aria-labelledby` al título del asistente y `aria-describedby` al aviso de demostración.
- Llevar el foco al título, primer control útil o input al abrir.
- Permitir cierre con Escape.
- Mantener foco dentro del diálogo mientras esté abierto si hay overlay/modal.
- Restaurar foco al botón activador al cerrar.
- No hacer que lectores de pantalla anuncien repetidamente mensajes viejos.
- Usar `aria-live="polite"` para nuevas respuestas, con una estrategia que anuncie solo la respuesta nueva.
- Todos los botones deben tener nombres accesibles.
- Quick replies, enlaces y acciones deben ser totalmente navegables con teclado.
- Los colores no pueden ser la única señal de mensajes, estados o acciones.
- Asegurar objetivos táctiles adecuados.
- Respetar prefers-reduced-motion.

## Arquitectura sugerida

Usá una estructura limpia y compatible con la app existente. Adaptala si ya hay convenciones:

src/
  components/
    chatbot/
      ChatAssistant.tsx
      ChatLauncher.tsx
      ChatPanel.tsx
      ChatMessage.tsx
      QuickReplyList.tsx
      ChatInput.tsx
  data/
    chatbot.ts
  hooks/
    useChatAssistant.ts
  lib/
    chatIntentMatcher.ts
  types/
    chatbot.ts

No es obligatorio usar exactamente estos paths; priorizá las convenciones ya existentes.
Separá:
- Datos de respuestas y quick replies.
- Tipos.
- Lógica de normalización y matching.
- Estado de UI y conversación.
- Componentes visuales.

Creá una interfaz opcional para permitir una futura sustitución del motor mock:

interface AssistantResponder {
  getResponse(input: string, context: AssistantContext): ChatResponse;
}

Implementar ahora solamente:

class MockAssistantResponder implements AssistantResponder {
  // Respuestas locales basadas en intenciones y contexto de ruta.
}

Agregar un comentario TODO claro:

TODO: Reemplazar MockAssistantResponder por un servicio de IA con base de conocimiento
oficial, controles de privacidad, moderación, trazabilidad y consentimiento explícito.
No enviar datos personales ni financieros a un proveedor externo sin evaluación legal y técnica.

## Integración responsable con la propuesta

Agregá una referencia breve y visualmente discreta dentro del asistente:
“Propuesta conceptual de asistencia inteligente para ExpoJuy 2026.”

No agregues afirmaciones de que ExpoJuy usa IA actualmente. El chatbot demuestra una posible
funcionalidad futura. Debe quedar listo para explicarse en la memoria descriptiva como:
“asistencia contextual simulada, diseñada para orientar visitantes y centralizar futuras
consultas sobre agenda, expositores, servicios y entradas”.

## Verificación final

Antes de terminar:

1. Revisá el proyecto para reutilizar componentes, tokens y convenciones existentes.
2. Confirmá que el chatbot aparece globalmente sin duplicarse por rutas.
3. Probá:
   - Abrir/cerrar desde botón, teclado y Escape.
   - Navegación de links internos.
   - Sugerencias rápidas.
   - Input con mensajes vacíos, palabras clave y fallback.
   - Contexto de Home, Agenda, Expositores, Mapa, Entradas y Checkout.
   - Responsive en 320 px, 375 px, 768 px, 1024 px y 1440 px.
4. Confirmá explícitamente que el chatbot no tiene llamadas de red, APIs, tokens ni persistencia
   de datos personales o conversaciones.
5. Ejecutá npm run build.
6. Informá:
   - Archivos creados o modificados.
   - Estructura del motor mock.
   - Intenciones soportadas.
   - Cómo reemplazarlo de manera segura por una integración real futura.