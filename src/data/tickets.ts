export type PaymentStatus = 'success'|'pending'|'rejected';
export type PaymentMethod = 'card'|'wallet'|'transfer'|'cash';
export interface TicketType { id:string; name:string; price:number; description:string; benefits:string[]; validity:string; availability:string }
export interface CartItem { ticket:TicketType; quantity:number }
export interface OrderSummary { items:CartItem[]; subtotal:number; serviceFee:number; total:number }
export interface PaymentResult { orderId:string; status:PaymentStatus; createdAt:string; summary:OrderSummary }
export const tickets: TicketType[] = [
 {id:'general',name:'Pase general',price:12000,description:'Acceso integral para vivir la exposición.',benefits:['Ingreso al predio','Charlas abiertas','Espacios productivos'],validity:'Válido durante los tres días del evento',availability:'Cupos limitados'},
 {id:'day',name:'Pase por día',price:5500,description:'Una jornada para recorrer y conectar.',benefits:['Ingreso por una jornada','Agenda del día','Zona gastronómica'],validity:'Válido para una jornada a elección',availability:'Disponible'},
 {id:'student',name:'Pase estudiantes',price:3500,description:'Propuesta especial para comunidades educativas.',benefits:['Ingreso general','Laboratorios abiertos','Certificado de participación'],validity:'Válido durante los tres días, con acreditación',availability:'Cupos limitados'},
 {id:'corporate',name:'Pase institucional',price:28000,description:'Acceso para equipos y organizaciones.',benefits:['Hasta 4 asistentes','Ronda de vinculación','Espacio de networking'],validity:'Válido durante los tres días del evento',availability:'Disponible'},
];
export const calculateOrder=(items:CartItem[]):OrderSummary=>{const subtotal=items.reduce((sum,item)=>sum+item.ticket.price*item.quantity,0);const serviceFee=Math.round(subtotal*.04);return{items,subtotal,serviceFee,total:subtotal+serviceFee}};
export interface PaymentGateway { createPayment(order:OrderSummary,status:PaymentStatus):Promise<PaymentResult> }
export class MockPaymentGateway implements PaymentGateway { async createPayment(order:OrderSummary,status:PaymentStatus){await new Promise(r=>setTimeout(r,1100));return{orderId:`EXP-2026-${Math.random().toString(36).slice(2,8).toUpperCase()}`,status,createdAt:new Date().toISOString(),summary:order}} }
// TODO: Reemplazar MockPaymentGateway por la integración oficial del proveedor de pagos seleccionado.
// TODO: Nunca procesar datos de tarjeta directamente en el frontend; usar tokenización y SDK oficial del proveedor.
