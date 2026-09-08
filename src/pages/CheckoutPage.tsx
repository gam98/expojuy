import { Banknote, Building, Check, CreditCard, Landmark, LoaderCircle, Smartphone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { horizontalLogo } from '../assets/brand';
import { OrderSummary } from '../components/OrderSummary';
import { Button } from '../components/ui';
import { MockPaymentGateway, type PaymentMethod } from '../data/tickets';
import { useCart } from '../hooks/useCart';

const methods: [PaymentMethod, string, typeof CreditCard][] = [
  ['card', 'Tarjeta de crédito o débito', CreditCard],
  ['wallet', 'Billetera virtual', Smartphone],
  ['transfer', 'Transferencia bancaria', Landmark],
  ['cash', 'Efectivo / punto de cobro', Banknote],
];

export function CheckoutPage() {
  const { items, summary, clear } = useCart();
  const nav = useNavigate();
  const [step, setStep] = useState(2);
  const [method, setMethod] = useState<PaymentMethod>('card');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const result = 'success';

  if (!items.length) return <Navigate to="/entradas" replace />;

  const personal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get('name') ?? '').trim()) next.name = 'Ingresá tu nombre y apellido.';
    if (!String(data.get('email') ?? '').includes('@')) next.email = 'Ingresá un email válido.';
    if (data.get('email') !== data.get('confirmEmail')) next.confirmEmail = 'Los emails deben coincidir.';
    if (!data.get('terms')) next.terms = 'Debés aceptar los términos y condiciones.';
    setErrors(next);
    if (!Object.keys(next).length) setStep(3);
  };

  const pay = async () => {
    setStep(4);
    setLoading(true);
    const payment = await new MockPaymentGateway().createPayment(summary, result);
    localStorage.setItem('expojuy-demo-order', JSON.stringify(payment));
    if (result === 'success') clear();
    nav(`/checkout/resultado?status=${result}`);
  };

  return <main className="checkout-page"><div className="container">
    <header className="checkout-head"><a href="/"><img src={horizontalLogo} alt="ExpoJuy 2026" width={2614} height={1125} /></a></header>
    <ol className="steps" aria-label="Progreso de la compra">{['Entradas', 'Datos personales', 'Pago', 'Confirmación'].map((label, index) => {
      const number = index + 1;
      return <li className={step === number ? 'active' : step > number ? 'done' : ''} aria-current={step === number ? 'step' : undefined} key={label}><span>{step > number ? <Check /> : number}</span>{label}</li>;
    })}</ol>
    <div className="checkout-layout"><div className="checkout-main">
      {step === 2 && <form className="checkout-form" onSubmit={personal} noValidate>
        <p className="eyebrow">PASO 2 DE 4</p><h1>Tus datos para la reserva</h1>
        {Object.keys(errors).length > 0 && <div className="form-errors" role="alert"><p>Revisá los campos señalados.</p></div>}
        <div className="form-grid">
          <label className="full" htmlFor="checkout-name">Nombre y apellido<input id="checkout-name" required name="name" placeholder="Nombre y apellido" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'checkout-name-error' : undefined} />{errors.name && <span className="field-error" id="checkout-name-error">{errors.name}</span>}</label>
          <label htmlFor="checkout-email">Email<input id="checkout-email" required type="email" name="email" placeholder="correo@ejemplo.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'checkout-email-error' : undefined} />{errors.email && <span className="field-error" id="checkout-email-error">{errors.email}</span>}</label>
          <label htmlFor="checkout-confirm-email">Confirmación de email<input id="checkout-confirm-email" required type="email" name="confirmEmail" placeholder="correo@ejemplo.com" aria-invalid={Boolean(errors.confirmEmail)} aria-describedby={errors.confirmEmail ? 'checkout-confirm-email-error' : undefined} />{errors.confirmEmail && <span className="field-error" id="checkout-confirm-email-error">{errors.confirmEmail}</span>}</label>
          <label>Documento opcional<input name="document" placeholder="Número de documento" /></label>
          <label>Teléfono opcional<input name="phone" placeholder="388 000 0000" /></label>
          <label className="full">Tipo de asistente<select name="attendee" required><option>Visitante</option><option>Estudiante</option><option>Expositor</option><option>Empresa / institución</option></select></label>
        </div>
        <label className="check" htmlFor="checkout-terms"><input id="checkout-terms" type="checkbox" name="terms" required aria-required="true" aria-invalid={Boolean(errors.terms)} aria-describedby={errors.terms ? 'checkout-terms-error' : undefined} />Acepto los términos y condiciones de ExpoJuy 2026.</label>
        {errors.terms && <p className="field-error" id="checkout-terms-error">{errors.terms}</p>}
        <label className="check"><input type="checkbox" name="news" />Deseo recibir novedades de ExpoJuy 2026.</label>
        <div className="form-actions"><Button type="button" className="btn-secondary" onClick={() => nav('/entradas')}>Volver a entradas</Button><Button type="submit">Continuar al pago</Button></div>
      </form>}
      {step === 3 && <section className="checkout-form">
        <p className="eyebrow">PASO 3 DE 4</p><h1>Método de pago</h1>
        <fieldset className="payment-methods"><legend>Elegí un método de pago</legend>{methods.map(([id, label, Icon]) => <label className={method === id ? 'selected' : ''} key={id}><input type="radio" name="payment" checked={method === id} onChange={() => setMethod(id)} /><Icon /><span>{label}</span></label>)}</fieldset>
        {method === 'card' ? <div className="fake-card-form"><label>Nombre en la tarjeta<input value="NOMBRE DEL TITULAR" readOnly aria-describedby="card-note" /></label><label>Número de tarjeta<input value="0000 0000 0000 0000" readOnly inputMode="none" /></label><label>Vencimiento<input value="MM/AA" readOnly inputMode="none" /></label><label>CVV<input value="***" readOnly inputMode="none" /></label><label>Cuotas<select><option>1 cuota</option><option>3 cuotas</option></select></label><p id="card-note">Completá los datos de tu tarjeta para continuar.</p></div> : <div className="method-preview"><Building /><h2>Instrucciones de pago</h2><p>Te mostraremos los datos necesarios para completar este pago.</p></div>}
        <div className="form-actions"><Button className="btn-secondary" onClick={() => setStep(2)}>Volver</Button><Button onClick={pay} disabled={loading}>{loading ? <><LoaderCircle className="spinner" />Procesando pago…</> : <>Confirmar pago</>}</Button></div>
        <div aria-live="polite" className="sr-only">{loading ? 'Procesando pago…' : ''}</div>
      </section>}
      {step === 4 && <section className="checkout-form processing-state" aria-live="polite"><LoaderCircle className="spinner" /><p className="eyebrow">PASO 4 DE 4</p><h1>Confirmando tu compra</h1><p>Estamos procesando tu pago. No cierres esta vista.</p></section>}
    </div><OrderSummary editable={false} /></div>
  </div></main>;
}
