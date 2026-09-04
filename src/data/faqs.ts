import type { Faq } from '../types';

export const faqs: Faq[] = Array.from({length:12},(_,i)=>({
  id:`faq-${i}`,
  category:['Visitantes','Expositores','Entradas','Accesibilidad','Sponsors'][i%5],
  question:['¿Cuándo se realizará ExpoJuy 2026?','¿Cómo puedo participar como expositor?','¿Las entradas ya están disponibles?','¿El predio será accesible?','¿Cómo puedo ser sponsor?','¿Dónde se realizará el encuentro?'][i%6],
  answer:'Esta respuesta es demostrativa y deberá actualizarse cuando la organización confirme la información oficial. Podés contactarnos para recibir novedades.',
}));
