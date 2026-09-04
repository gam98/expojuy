# ExpoJuy 2026 — propuesta digital

Prototipo navegable construido con React, Vite, TypeScript, React Router, Tailwind CSS y Lucide React. Todo el contenido, las fechas, los precios y los resultados de pago son demostrativos.

## Ejecutar

```bash
npm install
npm run dev
```

Validación de producción:

```bash
npm run typecheck
npm run build
```

## Contenido reemplazable

- Logos e imágenes: `images/`
- Tipografías: `fonts/Fuentes_Oficiales/`
- Paleta y tokens: `src/index.css`
- Datos de evento, expositores, agenda y sponsors: `src/data/content.ts`
- Novedades: `src/data/news.ts`
- Preguntas frecuentes: `src/data/faqs.ts`
- Entradas y precios: `src/data/tickets.ts`
- Plano conceptual: `VenueMapPage` en `src/pages/ContentPages.tsx`

## Pasarela de pago

`MockPaymentGateway` no realiza solicitudes de red y genera resultados locales `success`, `pending` o `rejected`. El carrito y el resumen no sensible de la última orden se guardan en `localStorage`; los datos personales y financieros no se persisten.

Para una integración futura, reemplazar la implementación detrás de `PaymentGateway` en `src/data/tickets.ts`. La aplicación cliente nunca debe recibir ni almacenar CVV o números de tarjeta: se debe usar la tokenización y el SDK oficial del proveedor, junto con un backend seguro y una revisión legal/institucional.
