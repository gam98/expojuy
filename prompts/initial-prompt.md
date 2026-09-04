Quiero que actúes como un desarrollador frontend senior, diseñador UX/UI y arquitecto de interfaces web.

Tu tarea es construir una aplicación web de demostración para la propuesta del nuevo sitio oficial de ExpoJuy 2026, dentro de un proyecto existente creado con React, Vite y TypeScript.

No construyas un backend real ni integraciones de producción. El objetivo es una maqueta navegable, visualmente sólida, responsive, accesible y técnicamente ordenada, apta para presentar en un desafío de diseño y desarrollo digital.

## Contexto del proyecto

ExpoJuy 2026 es una exposición productiva y empresarial del Norte Argentino. El sitio debe comunicar innovación, tecnología, producción, desarrollo regional, vinculación empresarial y economía del conocimiento.

La propuesta debe sentirse institucional, moderna, tecnológica, cercana a Jujuy y orientada a conectar visitantes, empresas, expositores, sponsors y actividades.

Debe ser una propuesta original. No copies diseños ni contenido de otros sitios de exposiciones. Podés tomar referencias generales de patrones modernos de eventos, ferias y portales institucionales, pero creá una identidad y una composición propias.

## Stack obligatorio

Usá:

- React
- Vite
- TypeScript
- React Router DOM
- Tailwind CSS
- Lucide React para íconos
- Datos mock locales en archivos TypeScript
- Componentes reutilizables
- Diseño mobile-first

No uses backend, base de datos, autenticación real ni servicios externos obligatorios.

Si faltan dependencias, instalalas mediante npm. No rompas la configuración existente del proyecto.

## Recursos locales obligatorios

Usá obligatoriamente las imágenes y fuentes disponibles en los siguientes directorios del proyecto:

- `/home/gabriel/sides-projects/expoJuy/images`
- `/home/gabriel/sides-projects/expoJuy/fonts`

No uses imágenes ni tipografías externas. Inspeccioná estos directorios antes de implementar y reutilizá sus recursos en la interfaz. Si algún recurso no aplica, conservá una alternativa visual local sin depender de servicios externos.

## Objetivo visual

Creá una experiencia visual premium y contemporánea, con una estética institucional-tecnológica que represente a Jujuy y al desarrollo productivo.

Lineamientos de estilo:

- Interfaz moderna, limpia y profesional
- Gran uso de espacios en blanco y jerarquía tipográfica clara
- Secciones con fondos alternados para facilitar la lectura
- Gradientes sutiles inspirados en energía, innovación, paisaje andino y desarrollo
- Tarjetas con bordes suaves, sombras discretas y estados hover elegantes
- Microinteracciones suaves, sin exagerar
- Elementos gráficos abstractos: líneas, nodos, tramas, formas orgánicas o patrones tecnológicos
- Evitá una estética genérica de dashboard
- Evitá excesos de glassmorphism
- Usá imágenes de placeholder relacionadas con Jujuy, industria, tecnología, empresas, innovación y eventos; si no hay imágenes locales, usá contenedores visuales sofisticados con gradientes y overlays
- Dejá comentarios claros donde luego deba reemplazarse el logo, la paleta y los recursos por el Kit de Diseño oficial

Definí un sistema de tokens reutilizable:

- Color primario institucional provisional
- Color secundario/acento
- Fondo claro
- Fondo oscuro
- Color para texto principal y secundario
- Estados de éxito, advertencia y foco
- Escala tipográfica
- Espaciados
- Border radius
- Sombras

No inventes que los colores, logos o tipografías son oficiales. Tratá todos esos elementos como provisorios hasta incorporar el Kit de Diseño oficial.

## Arquitectura esperada

Organizá el código con una estructura similar a esta:

src/
  app/
    router.tsx
  components/
    layout/
    ui/
    sections/
  data/
    exhibitors.ts
    agenda.ts
    news.ts
    sponsors.ts
    faqs.ts
  pages/
    HomePage.tsx
    AboutPage.tsx
    ExhibitorsPage.tsx
    AgendaPage.tsx
    NewsPage.tsx
    VenueMapPage.tsx
    SponsorsPage.tsx
    ContactPage.tsx
    FaqPage.tsx
  types/
  hooks/
  lib/
  assets/
  App.tsx
  main.tsx
  index.css

Creá componentes reutilizables como:

- Header
- MobileMenu
- Footer
- SectionHeading
- Button
- Badge
- Card
- SearchInput
- EmptyState
- PageHero
- StatItem
- SponsorLogo
- SocialLinks
- Accordion
- Modal o Dialog si hace falta
- LoadingSkeleton si aporta valor visual

Mantené las páginas claras y pequeñas. Extraé componentes cuando una sección sea reutilizable.

## Navegación principal

Implementá React Router DOM con las siguientes rutas:

- /
- /sobre-expojuy
- /expositores
- /agenda
- /novedades
- /mapa
- /sponsors
- /contacto
- /preguntas-frecuentes

El header debe incluir:

- Logo textual temporal: “ExpoJuy 2026”
- Navegación de escritorio
- Menú hamburguesa funcional en mobile
- CTA destacado: “Quiero exponer” o “Conseguí tu entrada”
- Link visual para redes sociales en el footer
- Header sticky con fondo adaptativo al hacer scroll

Implementá una navegación activa clara según la ruta actual.

## Página de inicio

La home debe ser la página más trabajada y contener estas secciones:

### Hero

- Título potente, por ejemplo: “Donde Jujuy impulsa el futuro”
- Texto breve que relacione producción, innovación, empresas y conocimiento
- Dos CTAs:
  - “Explorar la agenda”
  - “Conocer expositores”
- Un bloque visual destacado con fecha, lugar y una cuenta regresiva simulada
- Fecha y ubicación deben ser mock y fáciles de cambiar
- Recursos visuales abstractos o imágenes placeholder
- Evitá afirmar datos oficiales no proporcionados

### Indicadores

Mostrá métricas de ejemplo claramente presentadas como contenido de demostración, por ejemplo:

- Expositores estimados
- Actividades
- Sectores productivos
- Visitantes esperados

Usá animación de entrada suave, sin librerías pesadas si no son necesarias.

### Sobre la exposición

- Breve introducción a ExpoJuy 2026
- Valores clave:
  - Innovación
  - Tecnología
  - Producción
  - Desarrollo
  - Vinculación empresarial
  - Economía del conocimiento
- Tarjetas o grilla con íconos Lucide

### Sectores destacados

Mostrá una grilla visual de rubros, por ejemplo:

- Minería y energía
- Agroindustria
- Turismo
- Tecnología
- Comercio exterior
- Economía del conocimiento
- Industria
- Emprendimientos

Cada rubro debe tener ícono, color/acento y enlace a la página de expositores con el filtro correspondiente.

### Agenda destacada

- Mostrar 3 a 4 actividades mock
- Incluir hora, fecha, categoría, título, speaker y ubicación
- CTA “Ver agenda completa”

### Expositores destacados

- Mostrar 6 empresas mock
- Logo placeholder estilizado
- Categoría/rubro
- CTA “Explorar expositores”

### Novedades

- Mostrar 3 noticias mock
- Imagen placeholder
- Fecha
- Categoría
- Título
- Extracto
- CTA “Ver todas las novedades”

### Mapa del predio

- Bloque visual con un plano conceptual e interactivo simplificado
- CTA “Explorar mapa”
- Incluir zonas como:
  - Acceso principal
  - Pabellón de innovación
  - Área de expositores
  - Auditorio
  - Gastronomía
  - Espacio institucional
  - Sanitarios
  - Estacionamiento

### Sponsors

- Franja de logos placeholder de sponsors
- CTA para potenciales patrocinadores

### CTA final

- Sección visual llamativa para invitar a participar
- Botones para exponer, visitar o consultar

## Página “Sobre ExpoJuy”

Incluí:

- Hero interno
- Propósito del evento
- Valores
- Impacto regional
- Público objetivo
- Línea de tiempo conceptual de preparación del evento
- Bloque “Por qué participar”
- Contenido editable mediante estructuras de datos locales

No inventes historia institucional específica no incluida en el brief. Usá texto de muestra razonable o marcadores de contenido cuando sea necesario.

## Página “Expositores”

Debe ser funcional con datos mock.

Implementá:

- Encabezado de página
- Buscador por nombre, descripción o rubro
- Filtros por rubro/categoría
- Contador de resultados
- Grilla de tarjetas de expositores
- Estado vacío si no hay coincidencias
- Botón para limpiar filtros
- Tarjeta con:
  - Logo placeholder
  - Nombre
  - Rubro
  - Descripción breve
  - Pabellón/stand mock
  - Botón “Ver perfil”
- Modal o página de detalle simple al hacer clic en “Ver perfil”
- Filtros reflejados en la URL mediante query params si es viable sin sobrecomplicar

Creá al menos 12 expositores mock de sectores distintos.

## Página “Agenda”

Debe tener una agenda interactiva con contenido mock.

Implementá:

- Selector de día
- Filtro por categoría
- Filtro por formato, por ejemplo charla, panel, workshop, networking
- Buscador por actividad, speaker o tema
- Lista cronológica de actividades
- Cada actividad debe mostrar:
  - Hora
  - Duración
  - Categoría
  - Tipo
  - Título
  - Descripción
  - Speakers
  - Ubicación
- Botón para marcar o desmarcar una actividad como favorita
- Persistir favoritos en localStorage
- Pequeña sección o contador “Mi agenda”
- Estado vacío para filtros sin resultados

Creá al menos 15 actividades mock repartidas en varios días y categorías.

## Página “Novedades”

Implementá:

- Hero interno
- Grilla de noticias
- Filtro por categoría
- Destacar una noticia principal
- Cards secundarias
- Página o modal de detalle de noticia
- Breadcrumb o botón para volver al listado
- Datos mock separados en `src/data/news.ts`

Las categorías pueden incluir:

- Institucional
- Innovación
- Expositores
- Agenda
- Comunidad

## Página “Mapa”

Desarrollá un mapa conceptual del predio sin depender de mapas reales.

Requisitos:

- Plano SVG simple o layout HTML/CSS interactivo
- Zonas claramente identificadas
- Leyenda de íconos
- Selector o filtros por tipo de espacio:
  - Escenarios y auditorios
  - Expositores
  - Servicios
  - Gastronomía
  - Accesos
- Al seleccionar una zona, mostrar panel con nombre, descripción y servicios
- Debe ser usable en mobile
- Aclarar en una nota pequeña que es una “vista conceptual de demostración” hasta contar con el plano oficial

## Página “Sponsors”

Implementá:

- Hero interno
- Sponsors organizados por nivel:
  - Presenting
  - Oro
  - Plata
  - Aliados institucionales
- Logos mock estilizados
- Beneficios resumidos de patrocinar
- CTA “Quiero ser sponsor” que lleve a contacto con un asunto precompletado si es viable

## Página “Contacto”

Implementá:

- Hero interno
- Formulario con:
  - Nombre
  - Email
  - Organización
  - Tipo de consulta
  - Mensaje
  - Checkbox de aceptación de contacto
- Validación cliente accesible
- Mensajes de error asociados con aria-describedby
- Estado de envío simulado
- Mensaje de éxito simulado
- Datos de contacto mock claramente reemplazables
- Bloque de redes sociales
- Tarjetas de consulta rápida:
  - Quiero exponer
  - Quiero ser sponsor
  - Prensa y difusión
  - Consultas generales

No implementes envío real ni expongas claves.

## Página “Preguntas frecuentes”

Implementá:

- Buscador de preguntas
- FAQ por categorías
- Acordeón accesible
- Estados expandido y contraído claros
- Categorías sugeridas:
  - Visitantes
  - Expositores
  - Entradas
  - Accesibilidad
  - Sponsors
- Datos mock en un archivo dedicado

## Footer

El footer debe contener:

- Marca ExpoJuy 2026
- Texto breve institucional
- Navegación resumida
- Links a redes sociales
- Datos de contacto mock
- Aviso legal simple
- Año dinámico
- Texto de reemplazo para logos y datos oficiales

## Accesibilidad

Aplicá buenas prácticas reales:

- HTML semántico: header, nav, main, section, footer, article, aside según corresponda
- Un único h1 por página
- Jerarquía correcta de encabezados
- Navegación completa por teclado
- Estados focus visibles y consistentes
- Botones con labels accesibles
- Inputs asociados a labels
- Roles ARIA solo cuando sean necesarios
- Contraste suficiente
- No depender únicamente del color para transmitir estados
- Menú mobile accesible
- Acordeones accesibles
- Respeto por `prefers-reduced-motion`
- Imágenes decorativas con alt vacío e imágenes informativas con alt descriptivo

## Responsive

Priorizá mobile-first y verificá especialmente:

- 320 px
- 375 px
- 768 px
- 1024 px
- 1440 px

El diseño no debe tener overflow horizontal. Las tablas deben evitarse; usá cards o layouts fluidos. El menú debe funcionar correctamente en mobile.

## Calidad del código

- TypeScript estricto, sin `any`
- Definí interfaces y tipos para expositores, actividades, noticias, sponsors y FAQs
- Evitá duplicación
- No dejes imports sin usar
- No agregues dependencias innecesarias
- No uses imágenes externas que puedan romper el proyecto
- Mantené los datos mock fáciles de reemplazar
- Separá contenido de presentación
- Agregá comentarios TODO únicamente donde se necesite reemplazar contenido provisional por recursos oficiales
- Usá constantes reutilizables para rutas, categorías y configuraciones frecuentes
- Asegurá que `npm run build` compile sin errores

## Entregable esperado

Quiero que implementes el código completo de la aplicación, no solo una explicación.

Al finalizar:

1. Mostrá la estructura de archivos creada o modificada.
2. Explicá brevemente las decisiones principales de arquitectura.
3. Indicá cómo ejecutar el proyecto con npm.
4. Indicá qué archivos debo reemplazar cuando reciba el Kit de Diseño oficial:
   - Logo
   - Paleta
   - Tipografías
   - Imágenes institucionales
   - Datos reales de evento
   - Plano oficial
   - Sponsors y expositores
5. Confirmá que el proyecto compila correctamente.

Empezá revisando la estructura actual del repositorio y luego implementá la solución de forma incremental, conservando lo que sea útil del proyecto existente.
