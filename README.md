# ExpoJuy 2026 — Plataforma Digital

Plataforma web y prototipo interactivo para **ExpoJuy 2026**, la exposición multisectorial más representativa del norte argentino organizada por la Cámara de Comercio Exterior de Jujuy.

Construido como una Single Page Application (SPA) moderna, accesible y de alto rendimiento utilizando React 19, TypeScript, Vite 8 y Tailwind CSS v4.

---

## 🚀 Inicio Rápido (Quickstart)

### Requisitos previos

- **Node.js**: `v18.0.0` o superior (recomendado `v20+` o `v22+` LTS).
- **Gestor de paquetes**: `npm` (incluido con Node), `pnpm` o `yarn`.
- **Variables de entorno**: No se requieren archivos `.env` ni credenciales externas para ejecutar el proyecto de forma local.

### Instalación y ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd expoJuy
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación quedará disponible en `http://localhost:5173` (o el puerto indicado en la terminal) con Hot Module Replacement (HMR).

---

## 🛠️ Scripts Disponibles

En el directorio del proyecto podés ejecutar:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo en modo local con Vite. |
| `npm run build` | Ejecuta la comprobación estricta de tipos de TypeScript (`tsc -b`) y genera el bundle optimizado para producción en `dist/`. |
| `npm run preview` | Levanta un servidor local para previsualizar el contenido generado en `dist/`. |
| `npm run typecheck` | Valida los tipos en todo el proyecto sin generar archivos de salida. |

---

## 📁 Estructura del Proyecto

```text
expoJuy/
├── fonts/                 # Tipografías oficiales de marca (Ambit)
├── images/                # Fotografías, logotipos y recursos gráficos locales
├── prompts/               # Especificaciones y directrices de diseño y arquitectura
├── public/                # Archivos estáticos servidos directamente (favicon, etc.)
├── src/
│   ├── app/               # Configuración central de rutas (React Router)
│   ├── assets/            # Mapeo y barrel exports de logos y recursos visuales
│   ├── components/        # Componentes UI reutilizables
│   │   ├── chatbot/       # Asistente virtual flotante ("Nexo")
│   │   ├── common/        # Componentes comunes (botones, badges, diálogos)
│   │   ├── layout/        # Estructura de página (Header, Footer, Navigation)
│   │   └── tickets/       # Componentes del carrito y selector de entradas
│   ├── data/              # Fuentes de datos tipadas (agenda, expositores, noticias, etc.)
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Lógica de negocio (asistente virtual, utilidades)
│   ├── pages/             # Vistas de la aplicación (Home, Agenda, Expositores, Checkout, etc.)
│   ├── types/             # Definiciones de tipos e interfaces TypeScript
│   ├── App.tsx            # Componente raíz con Router y componentes globales
│   ├── index.css          # Tokens de diseño, Tailwind CSS v4 y @font-face
│   └── main.tsx           # Punto de entrada de la aplicación
├── index.html             # Plantilla HTML base
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de compilación de TypeScript
└── vite.config.ts         # Configuración del bundler Vite y plugins
```

---

## 🌟 Módulos y Funcionalidades Clave

- **Experiencia Institucional y Editorial**: Portada dinámica, historia, propósitos y valores con carrusel accesible adaptado a directivas de movimiento reducido.
- **Directorio de Expositores y Agenda**: Catálogo interactivo con filtrado dinámico por sector productivo y cronograma cronológico de actividades.
- **Plano Interactivo del Predio**: Mapa conceptual organizado por sectores y pabellones.
- **Venta de Entradas y Simulación de Checkout**:
  - Carrito de compras con persistencia en `localStorage`.
  - Flujo de checkout accesible en pasos: selección de entradas, acreditación de asistentes, resumen y pago simulado.
  - Implementación con `MockPaymentGateway`: simula estados (`success`, `pending`, `rejected`) de forma local, garantizando que nunca se persistan ni transmitan datos financieros o sensibles.
- **Asistente Virtual "Nexo"**: Chatbot interactivo local montado globalmente para responder preguntas frecuentes, brindar asistencia sobre el evento y guiar la navegación.

---

## 🎨 Personalización y Datos

Todo el contenido del sitio está desacoplado para facilitar su actualización:

- **Contenido y textos**: Archivos en `src/data/` (`content.ts`, `news.ts`, `faqs.ts`, `alliances.ts`, `tickets.ts`).
- **Identidad visual y estilos**: Variables CSS y directivas `@theme` en `src/index.css`.
- **Logotipos e imágenes**: Reemplazables en `images/` y mapeados en `src/assets/brand.ts`.
- **Tipografías**: Configuradas bajo `fonts/Fuentes_Oficiales/` e importadas en `src/index.css`.

---

## 💳 Integración de Pasarela de Pagos Real

Para conectar una pasarela de pagos real (e.g. Mercado Pago, Stripe):

1. Mantener el contrato definido en `PaymentGateway` (`src/data/tickets.ts`).
2. Reemplazar `MockPaymentGateway` por un servicio que interactúe con el backend del evento y el SDK oficial del proveedor.
3. **Seguridad**: La aplicación cliente jamás debe procesar ni almacenar números de tarjeta o CVV en texto plano; se debe utilizar tokenización oficial y cumplir con las normativas PCI-DSS vigentes.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia ISC.
