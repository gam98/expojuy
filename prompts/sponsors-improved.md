Trabajá únicamente sobre la sección/página de Sponsors o Aliados de ExpoJuy 2026
y sus componentes, datos mock y recursos visuales directamente relacionados.

Usá explícitamente las skills instaladas pertinentes:
$frontend-design, $web-design-guidelines, $design-taste-frontend, $brandkit,
$high-end-visual-design, $redesign-existing-projects, $anti-ui-slop,
$vercel-react-best-practices y $vercel-composition-patterns.

No reinicies el proyecto, no cambies rutas existentes, no alteres Header, Footer,
checkout, chatbot, agenda, mapa ni otras secciones. No agregues librerías pesadas
ni servicios externos.

## Diagnóstico de la implementación actual

La implementación actual presenta sponsors como categorías jerárquicas
“Presenting”, “Oro”, “Plata” y “Aliados institucionales”, con cajas blancas
vacías y nombres placeholder. Esta solución parece un listado comercial genérico,
tiene demasiado espacio vacío, carece de narrativa visual y no transmite la
identidad productiva, tecnológica y territorial de ExpoJuy.

## Objetivo de rediseño

Reemplazá por completo la lógica visual de clasificación por niveles comerciales.

No deben aparecer las palabras:
- Presenting
- Oro
- Plata
- Bronce
- Nivel
- Categoría de patrocinio

En su lugar, diseñá una sección titulada:

“Aliados que activan el futuro”

Texto de apoyo:

“Empresas, instituciones y organizaciones que acompañan una visión compartida:
conectar producción, conocimiento, innovación y desarrollo para impulsar Jujuy.”

Aclaración editorial visible pero discreta:

“Representación conceptual. Las organizaciones y colaboraciones definitivas serán
comunicadas oficialmente.”

La sección debe comunicar una red de colaboración horizontal, no una escala de
estatus ni una jerarquía de patrocinio.

## Concepto visual

Dirección creativa: “Constelación productiva”.

Representá a los aliados como nodos conectados dentro de un ecosistema visual:
- Los nodos expresan colaboración, no rangos.
- Los caminos o conexiones simbolizan intercambio entre industria, conocimiento,
  territorio, innovación y comunidad.
- Tomá como referencia abstracta la geometría modular del isologotipo ExpoJuy,
  sin copiarlo literalmente ni deformar su logo.
- La composición debe sentirse editorial, espacial y tecnológica, no como una
  cuadrícula de tarjetas repetidas.
- Usá un layout asimétrico controlado en desktop y una composición lineal/navegable
  en mobile.
- Debe seguir siendo sobrio, institucional, legible y accesible.

## Identidad visual obligatoria

Usá los tokens existentes de ExpoJuy:

- Violeta intenso: #8400D8
- Violeta medio: #744BE8
- Lavanda: #B07AF4
- Turquesa: #2CB8CB
- Violeta oscuro: #24113C
- Fondo claro: #F8F6FF
- Texto secundario: #4E455A
- Bordes: #E8E2F2

Uso visual:
- Fondo mayormente blanco o fondo claro con tinte violeta.
- Violeta oscuro para títulos y texto principal.
- Violeta intenso para foco, enlaces y nodos destacados, sin sugerir jerarquía comercial.
- Turquesa para líneas, rutas, conexiones y puntos de innovación.
- Lavanda para superficies, halos, áreas decorativas y profundidad.
- No usar gradientes decorativos repetidos. Si hay gradiente, debe reforzar una zona
  concreta de conexión o transición.
- No usar glassmorphism excesivo, emojis, iconografía de medallas, coronas, trofeos,
  estrellas de “nivel”, cintas ni insignias de jerarquía.

## Estructura propuesta

Implementá esta secuencia dentro de la página o sección:

1. Encabezado editorial:
   - Eyebrow: “ECOSISTEMA EXPOJUY”
   - Título: “Aliados que activan el futuro”
   - Párrafo de apoyo.
   - Aclaración de representación conceptual.

2. Visual central:
   - Crear una composición conceptual de “constelación productiva”.
   - Usar un SVG inline, CSS/HTML o recurso visual local generado para representar:
     - Nodos.
     - Conexiones.
     - Zonas abstractas de actividad.
     - Detalles tecnológicos suaves.
   - No usar logos reales, marcas reales ni afirmar alianzas reales.
   - La visualización debe ser decorativa cuando corresponda (`aria-hidden="true"`)
     y acompañarse de contenido textual accesible equivalente.

3. Mosaico de aliados mock:
   - Mostrar entre 6 y 9 aliados ficticios y claramente reemplazables.
   - Evitar agrupación por “oro/plata/etc.”.
   - Usar tarjetas visualmente distintas pero dentro de un sistema coherente:
     - Imagen conceptual propia.
     - Nombre mock.
     - Tipo de aporte no comercial y conceptual, por ejemplo:
       “Innovación aplicada”, “Conocimiento y talento”, “Producción sostenible”,
       “Articulación regional”, “Tecnología e infraestructura” o “Comunidad emprendedora”.
     - Frase corta sobre la conexión conceptual, no una promesa comercial.
   - Ningún aliado debe parecer superior a otro.
   - Las cards no deben ser idénticas ni presentarse en una grilla monótona:
     usar variaciones de tamaño, orientación, orden y color de acento con una
     composición cuidada.
   - Mantener una alternativa mobile clara, lineal y fácil de explorar.

4. Bloque de impacto:
   - Agregar tres ejes de articulación:
     - Producción y territorio.
     - Talento y conocimiento.
     - Innovación y proyección.
   - Conectar visualmente esos ejes con el mosaico/nodos, pero garantizar también
     lectura lineal para accesibilidad.
   - Todo texto debe describirse como propuesta conceptual hasta contar con información oficial.

5. CTA final:
   - Título: “Construyamos nuevas conexiones”
   - Texto breve para organizaciones que quieran acompañar ExpoJuy.
   - Botón: “Quiero acompañar ExpoJuy”
   - Debe dirigir a /contacto y preseleccionar “Sponsor / alianza” si la arquitectura
     actual ya admite query params o estado. Si no lo admite, dirigir simplemente a /contacto.
   - No presentar beneficios, precios ni condiciones comerciales como definitivos.

## Generación de imágenes conceptuales

Necesito que generes recursos visuales propios para esta sección y los agregues al
proyecto como assets locales. No uses imágenes externas, URLs remotas, fotos stock,
marcas, logotipos, texto dentro de imágenes ni nombres de empresas dentro de imágenes.

Generá 6 a 9 imágenes conceptuales abstractas o semiabstractas, una por aliado mock,
más una imagen o ilustración horizontal/vertical para la visual principal si mejora
la composición.

Cada imagen debe representar una de estas ideas:
- Innovación aplicada en el territorio.
- Energía y desarrollo sostenible.
- Conocimiento, educación y talento.
- Industria y producción conectada.
- Emprendimiento y comunidad.
- Tecnología y conectividad regional.
- Comercio y proyección.
- Naturaleza, altura y paisaje andino reinterpretado de forma abstracta.
- Redes de colaboración productiva.

Especificaciones visuales de las imágenes:
- Estilo editorial contemporáneo, abstracto, tecnológico y territorial.
- Referencias visuales sutiles: topografía andina, estratos minerales, luz solar de altura,
  tramas textiles reinterpretadas, nodos de red, rutas y flujos productivos.
- Paleta exclusiva: violeta #8400D8, violeta #744BE8, lavanda #B07AF4,
  turquesa #2CB8CB, violeta oscuro #24113C, blanco y neutros claros.
- Alto contraste y áreas de respiro para superponer texto HTML si fuera necesario.
- Sin personas identificables.
- Sin texto, letras, números, sellos, logos ni marcas.
- Sin elementos fotorealistas de empresas específicas.
- Evitar apariencia de banner publicitario, imagen de IA estereotipada o wallpaper genérico.
- Generar variantes visualmente relacionadas, pero no repetidas.

Guardá los recursos en una ubicación coherente con el proyecto, por ejemplo:
src/assets/sponsors/
o
public/images/sponsors/

Usá nombres de archivo claros, por ejemplo:
- alliance-innovation-territory.webp
- alliance-energy-flow.webp
- alliance-knowledge-network.webp
- alliance-industrial-weave.webp
- alliance-entrepreneur-community.webp
- alliance-regional-connectivity.webp
- alliance-trade-projection.webp
- alliance-andes-abstract.webp
- alliance-collaboration-network.webp

Si no podés generar binarios de imagen directamente desde este entorno, creá estos
recursos como SVGs propios, accesibles y optimizados, usando formas vectoriales,
gradientes limitados y patrones abstractos. No dejes placeholders vacíos.

## Datos y arquitectura

Separá contenido y presentación.

Adaptá o creá un archivo de datos como:
src/data/alliances.ts

Usá tipos estrictos, por ejemplo:

type AllianceTheme =
  | 'innovation'
  | 'energy'
  | 'knowledge'
  | 'industry'
  | 'community'
  | 'connectivity'
  | 'trade'
  | 'territory';

interface Alliance {
  id: string;
  name: string;
  theme: AllianceTheme;
  label: string;
  description: string;
  image: string;
  accent: 'purple' | 'turquoise' | 'lavender';
  layout: 'wide' | 'portrait' | 'square';
}

No usar `any`. Todos los nombres, descripciones e imágenes deben ser fáciles de
reemplazar por organizaciones reales y autorizadas cuando estén disponibles.

## Accesibilidad y responsive

Asegurá:
- HTML semántico: section, heading, article y listas donde corresponda.
- Un orden de lectura lógico, incluso si el layout desktop es asimétrico.
- Imágenes conceptuales decorativas con alt vacío; imágenes que expliquen contenido,
  con alt descriptivo apropiado.
- No depender solo de color, posición o conexiones gráficas para comunicar información.
- Estados hover y focus visibles para cards, enlaces y botón CTA.
- Soporte completo por teclado.
- Cumplimiento de contraste WCAG AA.
- Preferencias de reduced motion.
- Sin animaciones automáticas largas ni partículas invasivas.
- Sin overflow horizontal en 320 px, 375 px, 768 px, 1024 px y 1440 px.
- Layout de una columna o carrusel NO automático en mobile si es lo más claro;
  evitar carruseles que oculten contenido o requieran gestos sin alternativa.

## Validación final

Antes de finalizar:

1. Confirmá que ya no aparecen categorías de patrocinio como Presenting, Oro, Plata
   ni jerarquías equivalentes.
2. Confirmá que no hay logos, organizaciones ni alianzas presentadas como reales.
3. Confirmá que los recursos visuales generados son locales y no dependen de URLs externas.
4. Confirmá que la página comunica una red horizontal de aliados.
5. Revisá responsive y accesibilidad.
6. Ejecutá npm run build.
7. Informá:
   - Archivos creados y modificados.
   - Recursos visuales generados.
   - Cómo reemplazar posteriormente los aliados mock por datos y logos autorizados.