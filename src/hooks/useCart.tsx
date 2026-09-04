import { createContext, useContext, type ReactNode } from 'react';
import type { CartItem, TicketType } from '../data/tickets';
import { calculateOrder } from '../data/tickets';
import { useLocalStorage } from './useLocalStorage';
interface CartContextValue {items:CartItem[];add:(ticket:TicketType,quantity?:number)=>void;setQuantity:(id:string,n:number)=>void;remove:(id:string)=>void;clear:()=>void;summary:ReturnType<typeof calculateOrder>}
const CartContext=createContext<CartContextValue|null>(null);
export function CartProvider({children}:{children:ReactNode}){const[items,setItems]=useLocalStorage<CartItem[]>('expojuy-demo-cart',[]);const setQuantity=(id:string,n:number)=>setItems(current=>n<=0?current.filter(x=>x.ticket.id!==id):current.map(x=>x.ticket.id===id?{...x,quantity:n}:x));const add=(ticket:TicketType,quantity=1)=>setItems(current=>{const item=current.find(x=>x.ticket.id===ticket.id);return item?current.map(x=>x.ticket.id===ticket.id?{...x,quantity:x.quantity+quantity}:x):[...current,{ticket,quantity}]});return <CartContext.Provider value={{items,add,setQuantity,remove:id=>setItems(x=>x.filter(i=>i.ticket.id!==id)),clear:()=>setItems([]),summary:calculateOrder(items)}}>{children}</CartContext.Provider>}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error('useCart debe usarse dentro de CartProvider');return value}
