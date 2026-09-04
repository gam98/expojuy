## Compra de entradas y pasarela de pago mock

Implementá un flujo completo de compra de entradas con una pasarela de pago 100% simulada.

El objetivo es demostrar una experiencia de usuario realista y profesional para la futura gestión de entradas de ExpoJuy 2026, sin procesar pagos, sin conectarse a proveedores externos y sin solicitar ni guardar información financiera real.

La interfaz debe dejar claro que se trata de una demostración o prototipo funcional.

### Rutas requeridas

Agregá las siguientes rutas:

- /entradas
- /checkout
- /checkout/resultado

Agregá un CTA visible en:

- Header: “Conseguí tu entrada”
- Hero de la Home
- CTA final de la Home
- Página de agenda, como acceso secundario
- Footer

Todos esos accesos deben dirigir a `/entradas`.

### Página de entradas

Creá una página para selección de entradas con:

- Hero interno con el título “Elegí cómo vivir ExpoJuy 2026”
- Texto breve orientado a visitantes, empresas, estudiantes, profesionales y comunidad
- Aviso visible pero discreto:
  “Demo de experiencia de compra. Las entradas y precios mostrados son datos de ejemplo.”
- Tarjetas de tipos de entrada mock, por ejemplo:
  - Pase general
  - Pase por día
  - Pase estudiantes
  - Pase institucional / corporativo
- Cada tarjeta debe incluir:
  - Nombre de la entrada
  - Precio mock en ARS
  - Descripción
  - Beneficios incluidos
  - Fecha o validez ficticia claramente editable
  - Cantidad disponible mock o etiqueta como “Cupos limitados”
  - Selector de cantidad con botones + y -
  - Botón “Agregar”
- Debe existir un resumen lateral o inferior de la compra:
  - Entradas seleccionadas
  - Cantidad
  - Subtotal
  - Cargo de servicio mock si se decide incluir
  - Total
  - Botón “Continuar al pago”
- El botón “Continuar al pago” debe estar deshabilitado si no hay entradas seleccionadas.
- Guardá el carrito temporalmente en localStorage para mantenerlo al navegar o actualizar la página.
- Permití modificar cantidades y eliminar una entrada desde el resumen.
- En mobile, el resumen debe adaptarse sin generar overflow horizontal.

### Datos mock de entradas

Definí los datos de las entradas en un archivo desacoplado, por ejemplo:

src/data/tickets.ts

Incluí tipos TypeScript, por ejemplo:

- TicketType
- CartItem
- OrderSummary
- PaymentMethod
- PaymentStatus

No uses precios reales ni afirmes que los valores son oficiales. Centralizá los importes y textos de demostración para poder reemplazarlos fácilmente más adelante.

### Checkout

La ruta `/checkout` debe presentar un checkout en pasos, visualmente claro y accesible.

Implementá un indicador de progreso con los siguientes pasos:

1. Entradas
2. Datos personales
3. Pago
4. Confirmación

El checkout debe permitir volver a la selección de entradas sin perder el carrito.

#### Paso: datos personales

Crear un formulario con:

- Nombre y apellido
- Email
- Confirmación de email
- Documento opcional o identificador de ejemplo
- Teléfono opcional
- Tipo de asistente:
  - Visitante
  - Estudiante
  - Expositor
  - Empresa / institución
- Checkbox obligatorio:
  “Acepto los términos y condiciones de esta experiencia de demostración.”
- Checkbox opcional:
  “Deseo recibir novedades de ExpoJuy 2026.”

Requisitos:

- Validación del lado del cliente.
- Mensajes de error accesibles.
- Labels visibles y asociados a cada input.
- No guardar datos personales reales.
- Si se usa localStorage, persistir solo datos mínimos de demostración y documentarlo claramente.
- Mostrar un aviso junto al formulario:
  “No ingreses datos personales ni financieros reales. Esta es una simulación de compra.”

#### Paso: pago mock

Crear una sección de método de pago visualmente realista, pero explícitamente simulada.

Métodos de pago mock:

- Tarjeta de crédito o débito
- Billetera virtual
- Transferencia bancaria
- Pago en efectivo / punto de cobro

Cada método debe mostrar un ícono de Lucide React u otro recurso visual no asociado a una marca comercial real.

No usar logos ni nombres de proveedores de pago reales salvo que estén disponibles como recurso autorizado. Mantener la solución neutral para facilitar una futura integración con Mercado Pago, MODO, Todo Pago u otro proveedor, sin implementarla ahora.

Al seleccionar tarjeta, mostrar un formulario simulado:

- Nombre en tarjeta
- Número de tarjeta
- Vencimiento
- CVV
- Cuotas

Reglas estrictas:

- No validar ni enviar datos reales de tarjeta.
- Nunca persistir número de tarjeta, CVV o vencimiento.
- No incluir SDKs de pagos.
- No realizar solicitudes HTTP de cobro.
- No usar pasarelas reales.
- Reemplazar visualmente los inputs sensibles por placeholders de demostración, por ejemplo:
  - Número de tarjeta: `0000 0000 0000 0000`
  - Vencimiento: `MM/AA`
  - CVV: `***`
- Agregar un aviso visible:
  “Pasarela de pago simulada. No se procesa ningún cobro ni se almacenan datos financieros.”

Para billetera virtual, transferencia y efectivo:

- Mostrar un resumen visual de cómo sería el flujo futuro.
- Incluir un estado de simulación.
- No mostrar datos bancarios reales.
- No generar QR real.
- Podés usar un QR visual de placeholder exclusivamente decorativo, con alt vacío y texto explicativo fuera de la imagen.

#### Resumen de orden

Durante todo el checkout, mostrar un resumen de compra con:

- Tipos de entrada
- Cantidades
- Subtotal
- Descuentos mock si se implementan
- Cargo de servicio mock si se implementa
- Total final
- Mensaje de “Precios de demostración, no oficiales”
- Posibilidad de volver a editar las entradas

### Confirmar pago mock

En el último paso, agregá un botón principal:

“Simular pago y confirmar compra”

Al presionarlo:

- Simulá una espera breve de procesamiento mediante un estado loading.
- Mostrá un spinner accesible y texto como:
  “Procesando simulación de pago…”
- No hagas ninguna petición a una API externa.
- Generá un resultado exitoso local.
- Creá un identificador de orden ficticio, por ejemplo:
  `EXP-2026-XXXXXX`
- Guardá solo el resumen no sensible de la orden en localStorage:
  - ID de orden mock
  - Fecha
  - Tipo y cantidad de entradas
  - Total
  - Estado
- Limpiá el carrito después de una confirmación exitosa.
- Redirigí a `/checkout/resultado?status=success`.

También agregá una forma de visualizar un pago rechazado simulado para fines de demo, por ejemplo:

- Un pequeño selector “Resultado de la simulación” visible solo en modo demo:
  - Pago aprobado
  - Pago rechazado
  - Pago pendiente
- O un parámetro de URL controlado para probar estados.
- Nunca hagas que un fallo de simulación parezca un cobro real rechazado.

### Página de resultado

La página `/checkout/resultado` debe renderizar distintos estados:

#### Pago aprobado simulado

- Ícono de éxito
- Título: “Tu reserva fue registrada”
- Aclaración visible:
  “Resultado simulado: no se realizó ningún cobro.”
- ID de orden mock
- Resumen de entradas
- Total mock
- Fecha de generación
- Botón “Volver al inicio”
- Botón “Ver agenda”
- Botón “Descargar comprobante demo” opcional

Si implementás el comprobante, debe ser un documento o vista de comprobante claramente marcada como:
“COMPROBANTE DE DEMOSTRACIÓN — SIN VALIDEZ COMERCIAL”.

#### Pago rechazado simulado

- Ícono de error no alarmista
- Título: “No pudimos completar la simulación”
- Texto que aclare que no hubo ningún cobro
- CTA para intentar nuevamente
- CTA para volver a entradas

#### Pago pendiente simulado

- Ícono de reloj
- Título: “Tu reserva está en estado pendiente”
- Texto que aclare que es una simulación
- CTA para volver a la home o consultar la agenda

### Diseño de la experiencia de pago

Respetá la identidad visual de ExpoJuy definida por la paleta del isologotipo:

- Violeta Expo intenso: `#8400D8`
- Violeta Expo medio: `#744BE8`
- Lavanda Expo: `#B07AF4`
- Turquesa Expo: `#2CB8CB`
- Violeta muy oscuro: `#24113C`
- Fondo claro: `#F8F6FF`
- Texto secundario: `#4E455A`
- Bordes: `#E8E2F2`

Uso sugerido:

- CTA principal “Continuar al pago” y “Simular pago y confirmar compra”: violeta intenso.
- Indicador de paso activo: violeta intenso.
- Paso completado: turquesa con ícono de confirmación.
- Información y mensajes de demo: fondos lavanda suave o turquesa muy claro, con ícono informativo.
- Éxito: verde accesible, acompañado de ícono y texto.
- Error: rojo accesible, acompañado de ícono y texto.
- No utilizar el verde o rojo como único indicador de estado.
- Usar blanco y fondos claros para mantener legibilidad y confianza en el flujo de checkout.
- Aplicar focus visible de alto contraste a inputs, radios, botones y controles de cantidad.

### Accesibilidad específica del checkout

Asegurá que:

- El indicador de pasos sea entendible por lectores de pantalla.
- Los campos requeridos se comuniquen correctamente.
- Los errores se anuncien y se asocien al input correspondiente.
- El selector de cantidad tenga botones con labels claros, por ejemplo:
  - “Aumentar cantidad de Pase general”
  - “Disminuir cantidad de Pase general”
- Los métodos de pago funcionen con teclado.
- Los radios tengan labels completos.
- Los estados de carga sean anunciados con `aria-live`.
- El resumen de orden tenga una jerarquía semántica clara.
- Los modales, si se usan, administren correctamente el foco.
- Se respete `prefers-reduced-motion`.

### Arquitectura y estado

No uses Redux salvo que ya esté instalado en el proyecto.

Implementá una solución simple y mantenible con:

- React Context, Zustand si ya existe, o un hook personalizado para carrito y checkout.
- `useLocalStorage` reutilizable para persistir únicamente información no sensible.
- Tipos estrictos con TypeScript.
- Datos de tickets desacoplados de la UI.
- Helpers para calcular subtotal, cargo de servicio y total.
- Un adaptador o interfaz preparada para un futuro proveedor de pago real, pero sin implementación externa, por ejemplo:

interface PaymentGateway {
  createPayment(order: OrderSummary): Promise<PaymentResult>;
}

Implementá solo:

class MockPaymentGateway implements PaymentGateway {
  // Simula estados success, pending o rejected sin llamadas externas.
}

Dejá un comentario TODO claro donde se conectaría en el futuro una pasarela real:

TODO: Reemplazar MockPaymentGateway por la integración oficial del proveedor de pagos seleccionado.
TODO: Nunca procesar datos de tarjeta directamente en el frontend; usar tokenización y SDK oficial del proveedor.

### Restricciones de seguridad

- No usar APIs reales de pago.
- No incluir claves, tokens, secretos ni variables de entorno de proveedores de pago.
- No procesar, enviar ni persistir datos financieros reales.
- No guardar CVV, número de tarjeta ni vencimiento.
- No simular que una transacción fue efectivamente cobrada.
- Marcar claramente todos los precios, medios de pago y comprobantes como demostrativos hasta contar con definiciones institucionales y legales.
- No implementar facturación fiscal ni comprobantes con validez legal.
- No incluir términos legales definitivos; usar contenido placeholder claramente identificable.

### Calidad y validación final

Al finalizar la implementación:

1. Verificá que el flujo completo funcione:
   - Seleccionar entradas.
   - Modificar cantidades.
   - Persistir el carrito.
   - Completar datos mock.
   - Seleccionar método de pago.
   - Simular pago.
   - Visualizar los estados success, pending y rejected.
2. Confirmá que no existen llamadas de red relacionadas con pagos.
3. Confirmá que no se persiste información financiera sensible.
4. Confirmá que `npm run build` compila sin errores.
5. Documentá brevemente en README cómo reemplazar el mock por una integración real futura, sin incluir secretos ni código de producción.