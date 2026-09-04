import type { Activity, Exhibitor, Sponsor } from '../types';

const sectors = ['Minería y energía','Agroindustria','Turismo','Tecnología','Comercio exterior','Economía del conocimiento','Industria','Emprendimientos'];
export const exhibitors: Exhibitor[] = Array.from({length:12},(_,i)=>({id:`exp-${i+1}`,name:['Andes Solar','Puna Tech','Quebrada Foods','Norte Logística','Jujuy Circular','Altura Minera','Humahuaca Viajes','Yungas Bio','Código Norte','Llama Lab','Frontera Export','Manos Andinas'][i],sector:sectors[i%sectors.length],description:'Organización demostrativa que conecta capacidades regionales, innovación y nuevas oportunidades.',stand:`Pabellón ${String.fromCharCode(65+i%4)} · Stand ${10+i}`}));
export const activities: Activity[] = Array.from({length:15},(_,i)=>({id:`act-${i+1}`,day:['15 OCT','16 OCT','17 OCT'][i%3],time:`${9+Math.floor(i/3)}:${i%2?'30':'00'}`,duration:i%3===0?'60 min':'45 min',category:['Innovación','Producción','Comunidad','Negocios'][i%4],format:['Charla','Panel','Workshop','Networking'][i%4],title:['Energía para una nueva matriz productiva','Tecnología con identidad regional','Cadenas de valor que cruzan fronteras','Talento y economía del conocimiento','Diseño de futuros posibles'][i%5],description:'Encuentro de muestra con referentes para intercambiar experiencias y abrir conversaciones de futuro.',speakers:[`Referente ${i+1}`,`Especialista ${i+2}`],location:['Auditorio Norte','Laboratorio Abierto','Pabellón Central'][i%3]}));
export const sponsors: Sponsor[] = ['CamComEx Jujuy','Andes Futuro','Norte Productivo','Impulso Federal','Red Puna','Industria Viva','Jujuy Innova','Cámara Regional'].map((name,i)=>({id:`sp-${i}`,name,level:i===0?'Presenting':i<3?'Oro':i<6?'Plata':'Aliados institucionales'}));
export const sectorsList = sectors;
export const sponsorshipBenefits = [
  { title: 'Visibilidad de marca', description: 'Presencia demostrativa en piezas digitales, señalética y espacios del evento según el nivel elegido.' },
  { title: 'Activaciones en el predio', description: 'Posibilidad de crear experiencias de marca y puntos de contacto con públicos relevantes.' },
  { title: 'Vinculación estratégica', description: 'Acceso a espacios de networking con empresas, instituciones y referentes productivos.' },
  { title: 'Contenido y posicionamiento', description: 'Participación potencial en conversaciones y contenidos vinculados al desarrollo regional.' },
];
