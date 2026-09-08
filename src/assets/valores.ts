import valorInnovacion from '../../images/valores/valor_innovacion.jpg';
import valorTecnologia from '../../images/valores/valor_tecnologia.jpg';
import valorProduccion from '../../images/valores/valor_produccion.jpg';
import valorDesarrollo from '../../images/valores/valor_desarrollo.jpg';
import valorVinculacion from '../../images/valores/valor_vinculacion.jpg';
import valorConocimiento from '../../images/valores/valor_conocimiento.jpg';

export interface ExpoValor {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image: string;
}

export const expoValores: ExpoValor[] = [
  {
    id: 'innovacion',
    num: '01',
    title: 'Innovación',
    subtitle: 'Energías limpias y litio',
    image: valorInnovacion,
  },
  {
    id: 'tecnologia',
    num: '02',
    title: 'Tecnología',
    subtitle: 'Robótica y conectividad',
    image: valorTecnologia,
  },
  {
    id: 'produccion',
    num: '03',
    title: 'Producción',
    subtitle: 'Agroindustria y manufactura',
    image: valorProduccion,
  },
  {
    id: 'desarrollo',
    num: '04',
    title: 'Desarrollo',
    subtitle: 'Infraestructura y comercio',
    image: valorDesarrollo,
  },
  {
    id: 'vinculacion',
    num: '05',
    title: 'Vinculación empresarial',
    subtitle: 'Rondas de negocios y B2B',
    image: valorVinculacion,
  },
  {
    id: 'conocimiento',
    num: '06',
    title: 'Economía del conocimiento',
    subtitle: 'Talento joven e investigación',
    image: valorConocimiento,
  },
];
