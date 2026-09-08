import type { NewsItem } from '../types';
import negociosImage from '../../images/news-negocios.png';
import innovacionImage from '../../images/news-innovacion.png';
import conexionesImage from '../../images/news-conexiones.png';
import agendaImage from '../../images/news-agenda.png';
import comunidadImage from '../../images/news-comunidad.png';
import expositoresImage from '../../images/news-expositores.png';

export const news: NewsItem[] = [
  {id:'nota-ronda-negocios',category:'Institucional',date:'13 AGO 2026',title:'ExpoJuy 2026 se prepara para conectar empresas con nuevos mercados',excerpt:'La edición de octubre pondrá el foco en las rondas de negocios y en las oportunidades que abre la integración regional.',image:{src:negociosImage,alt:'Delegación de emprendedores conversando alrededor de una mesa de trabajo.'},featured:true},
  {id:'nota-innovacion-regional',category:'Innovación',date:'18 AGO 2026',title:'Tecnología con identidad regional: soluciones que nacen en el norte',excerpt:'Un recorrido por proyectos de energía, conocimiento y producción que llevan capacidades jujeñas a nuevos desafíos.',image:{src:innovacionImage,alt:'Persona demostrando un prototipo de energía solar sobre una mesa de trabajo.'}},
  {id:'nota-encuentro-empresas',category:'Expositores',date:'22 AGO 2026',title:'El encuentro entre empresas será parte central de la experiencia',excerpt:'Espacios de conversación, muestras de producto y vínculos estratégicos para que cada visita deje una próxima conversación.',image:{src:conexionesImage,alt:'Emprendedores intercambiando ideas en el pasillo de una exposición.'}},
  {id:'nota-agenda-octubre',category:'Agenda',date:'28 AGO 2026',title:'Cuatro días para mirar, aprender y abrir conversaciones',excerpt:'Del 9 al 12 de octubre, Ciudad Cultural reunirá rondas de negocios, charlas, demostraciones y propuestas para toda la comunidad.',image:{src:agendaImage,alt:'Oradora frente a un público en un auditorio iluminado con tonos violetas.'}},
  {id:'nota-produccion-jujena',category:'Comunidad',date:'02 SEP 2026',title:'La producción jujeña también se cuenta con las manos',excerpt:'Saberes, oficios y materiales locales forman parte de una agenda que busca mostrar el valor de hacer en comunidad.',image:{src:comunidadImage,alt:'Manos de artesana trabajando un textil colorido en un telar tradicional.'}},
  {id:'nota-muestra-productiva',category:'Expositores',date:'05 SEP 2026',title:'Una muestra productiva para descubrir lo que ya está pasando',excerpt:'Alimentos, servicios y soluciones regionales ocuparán un lugar destacado en el recorrido de expositores.',image:{src:expositoresImage,alt:'Productora organizando frascos y alimentos regionales en un puesto de exposición.'}},
  {id:'nota-experiencia-visitante',category:'Agenda',date:'08 SEP 2026',title:'Una experiencia abierta para recorrer en familia',excerpt:'La propuesta suma espacios para conocer proyectos, participar de actividades y encontrarse con nuevas historias del norte.',image:{src:negociosImage,alt:'Visitantes recorriendo un patio abierto de una feria regional.'}},
];
