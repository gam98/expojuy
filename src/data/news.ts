import type { NewsItem } from '../types';

export const news: NewsItem[] = Array.from({length:7},(_,i)=>({
  id:`nota-${i+1}`,
  category:['Institucional','Innovación','Expositores','Agenda','Comunidad'][i%5],
  date:`${10+i} SEP 2026`,
  title:['Una plataforma para mostrar lo que Jujuy crea','El conocimiento también transforma territorios','Nuevos espacios para conectar empresas','La agenda que imagina el próximo norte','Comunidad, producción y futuro en un mismo lugar','Convocatoria demostrativa para expositores','Experiencias abiertas para toda la región'][i],
  excerpt:'Contenido editorial demostrativo. La información definitiva será publicada por la organización.',
  featured:i===0,
}));
