import type { Activity, Exhibitor, Sponsor } from '../types';

const sectors = ['Minería y energía','Agroindustria','Turismo','Tecnología','Comercio exterior','Economía del conocimiento','Industria','Emprendimientos'];
const exhibitorImages = [
  {src:'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',alt:'Paneles solares orientados hacia el cielo, imagen editorial para Andes Solar.'},
  {src:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',alt:'Placa electrónica en primer plano, imagen editorial para Puna Tech.'},
  {src:'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',alt:'Pantalla con código y luz azul, imagen editorial para Quebrada Foods.'},
  {src:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',alt:'Contenedores de carga en un puerto, imagen editorial para Norte Logística.'},
  {src:'https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1200&q=80',alt:'Manos ordenando materiales reciclables, imagen editorial para Jujuy Circular.'},
  {src:'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=80',alt:'Excavación industrial en un paisaje abierto, imagen editorial para Altura Minera.'},
  {src:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',alt:'Cordillera iluminada al amanecer, imagen editorial para Humahuaca Viajes.'},
  {src:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',alt:'Cultivo verde visto desde cerca, imagen editorial para Yungas Bio.'},
  {src:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',alt:'Persona trabajando con una computadora portátil, imagen editorial para Código Norte.'},
  {src:'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',alt:'Equipo reunido alrededor de una mesa de trabajo, imagen editorial para Llama Lab.'},
  {src:'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',alt:'Contenedores de transporte alineados, imagen editorial para Frontera Export.'},
  {src:'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80',alt:'Manos trabajando una pieza artesanal, imagen editorial para Manos Andinas.'},
];
export const exhibitors: Exhibitor[] = Array.from({length:12},(_,i)=>({id:`exp-${i+1}`,name:['Andes Solar','Puna Tech','Quebrada Foods','Norte Logística','Jujuy Circular','Altura Minera','Humahuaca Viajes','Yungas Bio','Código Norte','Llama Lab','Frontera Export','Manos Andinas'][i],sector:sectors[i%sectors.length],description:'Organización que conecta capacidades regionales, innovación y nuevas oportunidades.',stand:`Pabellón ${String.fromCharCode(65+i%4)} · Stand ${10+i}`,image:exhibitorImages[i]}));
export const activities: Activity[] = Array.from({length:16},(_,i)=>({id:`act-${i+1}`,day:['Día 1 · 15 OCT','Día 2 · 16 OCT','Día 3 · 17 OCT','Día 4 · 18 OCT'][i%4],time:`${9+Math.floor(i/4)}:${i%2?'30':'00'}`,duration:i%3===0?'60 min':'45 min',category:['Innovación','Producción','Comunidad','Negocios'][i%4],format:['Charla','Panel','Workshop','Networking'][i%4],title:['Energía para una nueva matriz productiva','Tecnología con identidad regional','Cadenas de valor que cruzan fronteras','Talento y economía del conocimiento','Diseño de futuros posibles'][i%5],description:'Encuentro con referentes para intercambiar experiencias y abrir conversaciones de futuro.',speakers:[`Referente ${i+1}`,`Especialista ${i+2}`],location:['Auditorio Norte','Laboratorio Abierto','Pabellón Central'][i%3]}));
export const sponsors: Sponsor[] = ['CamComEx Jujuy','Andes Futuro','Norte Productivo','Impulso Federal','Red Puna','Industria Viva','Jujuy Innova','Cámara Regional'].map((name,i)=>({id:`sp-${i}`,name,level:i===0?'Presenting':i<3?'Oro':i<6?'Plata':'Aliados institucionales'}));
export const sectorsList = sectors;
export const sponsorshipBenefits = [
  { title: 'Visibilidad de marca', description: 'Presencia en piezas digitales, señalética y espacios del evento según el nivel elegido.' },
  { title: 'Activaciones en el predio', description: 'Posibilidad de crear experiencias de marca y puntos de contacto con públicos relevantes.' },
  { title: 'Vinculación estratégica', description: 'Acceso a espacios de networking con empresas, instituciones y referentes productivos.' },
  { title: 'Contenido y posicionamiento', description: 'Participación potencial en conversaciones y contenidos vinculados al desarrollo regional.' },
];
