import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Camera, CheckCircle2, ChevronDown, DoorOpen, Heart, Info, MapPin, MessageCircle, Presentation, Search, Send, SlidersHorizontal, Sparkles, Store, Users, Utensils, X } from 'lucide-react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { activities, exhibitors, sectorsList, sponsors, sponsorshipBenefits } from '../data/content';
import { faqs } from '../data/faqs';
import { news } from '../data/news';
import { readStorage } from '../lib/storage';
import { aboutContent } from '../data/about';
import { Badge, Button, EmptyState, LinkButton, PageHero, SectionHeading } from '../components/ui';

export function AboutPage(){return <><PageHero title={aboutContent.hero.title}>{aboutContent.hero.description}</PageHero><section className="section"><div className="container split"><div><SectionHeading eyebrow="PROPÓSITO" title={aboutContent.purpose.title}/><p className="lead">{aboutContent.purpose.description}</p></div><div className="values-grid">{aboutContent.values.map(value=><div key={value}><Sparkles/><h3>{value}</h3><p>Valor conceptual sujeto a validación institucional.</p></div>)}</div></div></section><section className="section section-tint"><div className="container split"><div><SectionHeading eyebrow="IMPACTO REGIONAL" title={aboutContent.impact.title} copy={aboutContent.impact.description}/><p className="demo-note">{aboutContent.impact.disclaimer}</p></div><div className="impact-list">{aboutContent.impact.goals.map((item,index)=><div key={item}><span>{index+1}</span><h3>{item}</h3></div>)}</div></div></section><section className="section"><div className="container"><SectionHeading eyebrow="A QUIÉNES CONVOCA" title="Una exposición, múltiples formas de participar"/><div className="audience-grid">{aboutContent.audiences.map(audience=><article key={audience.title}><h3>{audience.title}</h3><p>{audience.description}</p></article>)}</div></div></section><section className="why-section"><div className="container split"><div><p className="eyebrow">POR QUÉ PARTICIPAR</p><h2>{aboutContent.participation.title}</h2></div><div><p>{aboutContent.participation.description}</p><div className="button-row"><LinkButton to="/entradas" variant="light">Conseguí tu entrada</LinkButton><LinkButton to="/contacto?tipo=expositor" variant="secondary">Quiero exponer</LinkButton></div></div></div></section><section className="section section-tint"><div className="container"><SectionHeading title="Una preparación abierta y progresiva"/><div className="timeline">{aboutContent.timeline.map((item,index)=><div key={item}><span>0{index+1}</span><h3>{item}</h3><p>Hito demostrativo a confirmar.</p></div>)}</div></div></section></>}

export function ExhibitorsPage(){
  const[params,setParams]=useSearchParams();
  const q=params.get('q')??'';
  const sector=params.get('sector')??'Todos';

  const list=useMemo(()=>exhibitors.filter(e=>(sector==='Todos'||e.sector===sector)&&`${e.name} ${e.description} ${e.sector}`.toLowerCase().includes(q.toLowerCase())),[q,sector]);
  const[active,setActive]=useState<(typeof exhibitors)[number]|null>(null);
  const dialogRef=useRef<HTMLDivElement>(null);
  const previousFocus=useRef<HTMLElement|null>(null);

  const closeDialog=()=>{setActive(null);window.setTimeout(()=>previousFocus.current?.focus(),0)};

  useEffect(()=>{
    if(!active)return;
    const dialog=dialogRef.current;
    const focusable=dialog?.querySelectorAll<HTMLElement>('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    focusable?.[0]?.focus();
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.preventDefault();closeDialog()}
      if(event.key==='Tab'&&focusable?.length){
        const first=focusable[0],last=focusable[focusable.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
      }
    };
    document.addEventListener('keydown',onKey);
    return()=>document.removeEventListener('keydown',onKey);
  },[active]);

  const openDialog=(item:(typeof exhibitors)[number])=>{
    previousFocus.current=document.activeElement as HTMLElement;
    setActive(item);
  };

  const handleSearchChange=(val:string)=>{
    const next=new URLSearchParams(params);
    if(val.trim()){next.set('q',val)}else{next.delete('q')}
    setParams(next);
  };

  const handleSectorChange=(val:string)=>{
    const next=new URLSearchParams(params);
    if(val&&val!=='Todos'){next.set('sector',val)}else{next.delete('sector')}
    setParams(next);
  };

  const clearFilters=()=>setParams({});

  return <>
    <PageHero title="Conocé a quienes hacen">Organizaciones demostrativas de múltiples sectores reunidas para mostrar, aprender y conectar.</PageHero>
    <section className="section">
      <div className="container">
        <div className="exhibitors-filter-bar">
          <div className="filter-search-box">
            <Search className="filter-search-icon" aria-hidden="true"/>
            <input
              type="text"
              className="filter-search-input"
              value={q}
              onChange={e=>handleSearchChange(e.target.value)}
              placeholder="Buscar expositor por nombre, rubro o descripción..."
              aria-label="Buscar expositor"
            />
          </div>

          <div className="filter-sector-wrapper">
            <select
              className="filter-sector-select"
              value={sector}
              onChange={e=>handleSectorChange(e.target.value)}
              aria-label="Filtrar por rubro"
            >
              <option value="Todos">Todos los rubros</option>
              {sectorsList.map(s=>(
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="filter-sector-chevron" aria-hidden="true"/>
          </div>
        </div>

        {list.length?(
          <div className="cards-grid">
            {list.map(e=>(
              <article className="card" key={e.id}>
                <div className="monogram">{e.name.slice(0,2).toUpperCase()}</div>
                <Badge>{e.sector}</Badge>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <small>{e.stand}</small>
                <Button onClick={()=>openDialog(e)}>Ver perfil</Button>
              </article>
            ))}
          </div>
        ):(
          <div className="empty-state">
            <h3>No encontramos expositores</h3>
            <p>Probá con otra búsqueda o restablecé los filtros para ver el catálogo completo.</p>
            <Button onClick={clearFilters}>Ver todos los expositores</Button>
          </div>
        )}
      </div>
    </section>
    {active&&(
      <div className="dialog-backdrop" role="presentation" onMouseDown={closeDialog}>
        <section
          ref={dialogRef}
          className="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-title"
          onMouseDown={e=>e.stopPropagation()}
        >
          <button onClick={closeDialog} aria-label="Cerrar perfil">×</button>
          <Badge>{active.sector}</Badge>
          <h2 id="profile-title">{active.name}</h2>
          <p>{active.description}</p>
          <strong>{active.stand}</strong>
          <LinkButton to="/contacto">Contactar</LinkButton>
        </section>
      </div>
    )}
  </>
}

export function AgendaPage(){const[q,setQ]=useState('');const[day,setDay]=useState('Todos');const[format,setFormat]=useState('Todos');const[category,setCategory]=useState('Todas');const[favorites,setFavorites]=useState<string[]>(()=>readStorage('expojuy-favorites',[],(value):value is string[]=>Array.isArray(value)&&value.every(item=>typeof item==='string')));const toggle=(id:string)=>setFavorites(x=>{const next=x.includes(id)?x.filter(i=>i!==id):[...x,id];localStorage.setItem('expojuy-favorites',JSON.stringify(next));return next});const dayOrder:Record<string,number>={'15 OCT':0,'16 OCT':1,'17 OCT':2};const timeValue=(value:string)=>{const[hours,minutes]=value.split(':').map(Number);return hours*60+minutes};const list=activities.filter(a=>(day==='Todos'||a.day===day)&&(format==='Todos'||a.format===format)&&(category==='Todas'||a.category===category)&&`${a.title} ${a.speakers} ${a.category}`.toLowerCase().includes(q.toLowerCase())).sort((a,b)=>(dayOrder[a.day]??99)-(dayOrder[b.day]??99)||timeValue(a.time)-timeValue(b.time));return <><PageHero title="Agenda para imaginar el próximo norte">Actividades de demostración organizadas en tres jornadas de intercambio, aprendizaje y vinculación.</PageHero><section className="section"><div className="container"><aside className="demo-banner">Programa demostrativo · Horarios y contenidos sujetos a confirmación. <Link to="/entradas">Conseguí tu entrada</Link></aside><div className="filters three"><label><span>Buscar actividad</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tema, speaker o actividad"/></label><label><span>Día</span><select value={day} onChange={e=>setDay(e.target.value)}><option>Todos</option>{['15 OCT','16 OCT','17 OCT'].map(x=><option key={x}>{x}</option>)}</select></label><label><span>Formato</span><select value={format} onChange={e=>setFormat(e.target.value)}><option>Todos</option>{['Charla','Panel','Workshop','Networking'].map(x=><option key={x}>{x}</option>)}</select></label><label><span>Categoría</span><select value={category} onChange={e=>setCategory(e.target.value)}><option>Todas</option>{['Innovación','Producción','Comunidad','Negocios'].map(x=><option key={x}>{x}</option>)}</select></label></div><p className="result-count"><Heart size={17}/> Mi agenda: {favorites.length} actividades</p>{list.length?<div className="agenda-list full">{list.map(a=><article key={a.id}><time>{a.day}<strong>{a.time}</strong></time><div><Badge>{a.category} · {a.format}</Badge><h2>{a.title}</h2><p>{a.description}</p><small>{a.duration} · {a.speakers.join(', ')} · {a.location}</small></div><button className={favorites.includes(a.id)?'favorite active':'favorite'} onClick={()=>toggle(a.id)} aria-label={`${favorites.includes(a.id)?'Quitar':'Agregar'} ${a.title} de mi agenda`}><Heart fill={favorites.includes(a.id)?'currentColor':'none'}/></button></article>)}</div>:<EmptyState title="No hay actividades con esos filtros" copy="Ajustá tu búsqueda para volver a explorar la agenda."/>}</div></section></>}

export function NewsPage(){const[category,setCategory]=useState('Todas');const visible=category==='Todas'?news:news.filter(item=>item.category===category);return <><PageHero title="Historias que abren posibilidades">Noticias y contenidos de muestra para anticipar la experiencia ExpoJuy 2026.</PageHero><section className="section"><div className="container"><div className="chip-filters" aria-label="Filtrar novedades por categoría">{['Todas','Institucional','Innovación','Expositores','Agenda','Comunidad'].map(item=><button className={category===item?'active':''} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div><div className="news-grid listing">{visible.map((n,i)=><article className={i===0?'featured':''} key={n.id}><div className="news-art"><span>0{i+1}</span></div><Badge>{n.category}</Badge><time>{n.date}</time><h2>{n.title}</h2><p>{n.excerpt}</p><Link to={`/novedades/${n.id}`}>Leer nota <ArrowRight/></Link></article>)}</div></div></section></>}
export function NewsDetailPage(){const{id}=useParams();const item=news.find(n=>n.id===id)??news[0];return <><PageHero eyebrow={item.category} title={item.title}>{item.excerpt}</PageHero><article className="article container"><Link to="/novedades">← Volver a novedades</Link><p>Este artículo forma parte de una propuesta editorial demostrativa. La versión definitiva incorporará información, testimonios y recursos institucionales validados.</p><p>ExpoJuy busca poner en conversación a quienes producen, investigan, emprenden y transforman. Los contenidos reales serán publicados cuando la organización confirme la agenda oficial.</p></article></>}

const zones=[['Pabellón de innovación','Escenarios y auditorios'],['Área de expositores','Expositores'],['Auditorio Norte','Escenarios y auditorios'],['Patio de sabores','Gastronomía'],['Acceso principal','Accesos'],['Espacio institucional','Expositores'],['Sanitarios','Servicios'],['Estacionamiento','Servicios'],['Punto de información','Servicios']] as const;
const mapLegend=[['Escenarios y auditorios',Presentation],['Expositores',Store],['Servicios',Info],['Gastronomía',Utensils],['Accesos',DoorOpen]] as const;
export function VenueMapPage(){const[selected,setSelected]=useState<(typeof zones)[number]>(zones[0]);const[filter,setFilter]=useState('Todos');const categories=['Todos',...new Set(zones.map(z=>z[1]))];const visible=filter==='Todos'?zones:zones.filter(z=>z[1]===filter);return <><PageHero title="Un mapa para explorar conexiones">Recorré una vista conceptual del predio y anticipá tu experiencia.</PageHero><section className="section"><div className="container"><div className="chip-filters" aria-label="Filtrar espacios del mapa">{categories.map(category=><button className={filter===category?'active':''} onClick={()=>setFilter(category)} key={category}>{category}</button>)}</div><div className="map-legend" aria-label="Leyenda de íconos del mapa"><strong>Leyenda del mapa</strong><div>{mapLegend.map(([label,Icon])=><span key={label}><Icon aria-hidden="true"/>{label}</span>)}</div></div><div className="map-layout"><div className="interactive-map" aria-label="Mapa conceptual del predio">{visible.map((z,i)=><button key={z[0]} className={`map-zone mz${i+1} ${selected[0]===z[0]?'active':''}`} onClick={()=>setSelected(z)}><MapPin/>{z[0]}</button>)}</div><aside className="map-panel"><p className="eyebrow">ZONA SELECCIONADA</p><h2>{selected[0]}</h2><Badge>{selected[1]}</Badge><p>Área demostrativa pensada para orientar a visitantes y facilitar recorridos accesibles.</p><ul><li>Información</li><li>Accesibilidad</li><li>Señalética orientativa</li></ul></aside></div></div><p className="demo-note container">Vista conceptual de demostración hasta contar con el plano oficial.</p></section></>}

export function SponsorsPage(){return <><PageHero title="Alianzas que amplifican el impacto">Una plataforma para que organizaciones líderes acompañen el desarrollo productivo regional.</PageHero><section className="section"><div className="container">{['Presenting','Oro','Plata','Aliados institucionales'].map(level=><div className="sponsor-level" key={level}><h2>{level}</h2><div>{sponsors.filter(s=>s.level===level).map(s=><span key={s.id}>{s.name}</span>)}</div></div>)}<section className="sponsor-benefits"><SectionHeading eyebrow="BENEFICIOS DEMOSTRATIVOS" title="Una alianza con valor antes, durante y después del encuentro"/><div>{sponsorshipBenefits.map(benefit=><article key={benefit.title}><CheckCircle2/><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div><p className="demo-note">Beneficios sujetos a definición institucional y comercial.</p></section><div className="cta-panel"><div><h2>Convertite en aliado de ExpoJuy</h2><p>Beneficios, formatos y niveles presentados a modo demostrativo.</p></div><LinkButton to="/contacto?tipo=sponsor">Quiero ser sponsor</LinkButton></div></div></section></>}

export function ContactPage(){const[sent,setSent]=useState(false);const[errors,setErrors]=useState<Record<string,string>>({});const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const data=new FormData(e.currentTarget);const next:Record<string,string>={};if(!String(data.get('name')??'').trim())next.name='Ingresá un nombre.';if(!String(data.get('email')??'').includes('@'))next.email='Ingresá un email válido.';if(!String(data.get('type')??''))next.type='Seleccioná un tipo de consulta.';if(!String(data.get('message')??'').trim())next.message='Escribí un mensaje.';if(!data.get('consent'))next.consent='Debés aceptar el contacto para continuar.';setErrors(next);if(!Object.keys(next).length)setSent(true)};return <><PageHero title="Abramos una conversación">Contanos cómo te gustaría participar. Este formulario no realiza un envío real.</PageHero><section className="section"><div className="container form-layout"><form id="formulario" className="form-card" onSubmit={submit} noValidate>{sent?<div className="success-message" role="status"><CheckCircle2/><h2>Mensaje de demostración registrado</h2><p>No se envió información a ningún servidor.</p><Button type="button" onClick={()=>setSent(false)}>Nueva consulta</Button></div>:<><label htmlFor="contact-name">Nombre</label><input id="contact-name" required name="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name?'contact-name-error':undefined}/>{errors.name&&<p className="field-error" id="contact-name-error">{errors.name}</p>}<label htmlFor="contact-email">Email</label><input id="contact-email" required type="email" name="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email?'contact-email-error':undefined}/>{errors.email&&<p className="field-error" id="contact-email-error">{errors.email}</p>}<label htmlFor="contact-organization">Organización</label><input id="contact-organization" name="organization"/><label htmlFor="contact-type">Tipo de consulta</label><select id="contact-type" name="type" defaultValue="" aria-invalid={Boolean(errors.type)} aria-describedby={errors.type?'contact-type-error':undefined}><option value="" disabled>Seleccioná una opción</option><option>Quiero exponer</option><option>Quiero ser sponsor</option><option>Prensa y difusión</option><option>Consultas generales</option></select>{errors.type&&<p className="field-error" id="contact-type-error">{errors.type}</p>}<label htmlFor="contact-message">Mensaje</label><textarea id="contact-message" name="message" required rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message?'contact-message-error':undefined}/>{errors.message&&<p className="field-error" id="contact-message-error">{errors.message}</p>}<label className="check" htmlFor="contact-consent"><input id="contact-consent" type="checkbox" name="consent" required aria-required="true" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent?'contact-consent-error':undefined}/> Acepto ser contactado en el marco de esta demostración.</label>{errors.consent&&<p className="field-error" id="contact-consent-error">{errors.consent}</p>}<Button type="submit">Simular envío <Send/></Button></>}</form><aside><SectionHeading title="Encontrá el canal indicado"/><div className="quick-links">{['Quiero exponer','Quiero ser sponsor','Prensa y difusión','Consultas generales'].map(x=><a href="#formulario" key={x}>{x}<ArrowRight/></a>)}</div><section className="contact-social" aria-labelledby="social-title"><h2 id="social-title">Seguinos en redes</h2><div><a href="#social-demo" aria-label="Instagram de demostración"><Camera/></a><a href="#social-demo" aria-label="LinkedIn de demostración"><Users/></a><a href="#social-demo" aria-label="Canal social de demostración"><MessageCircle/></a></div><p>Enlaces sociales demostrativos hasta confirmar los perfiles oficiales.</p></section><p className="demo-note">Datos mock reemplazables: hola@expojuy.example · San Salvador de Jujuy</p></aside></div></section></>}

export function FaqPage(){const[q,setQ]=useState('');const[open,setOpen]=useState<string|null>(null);const list=faqs.filter(f=>`${f.question} ${f.answer} ${f.category}`.toLowerCase().includes(q.toLowerCase()));return <><PageHero title="Preguntas frecuentes">Información demostrativa para resolver las primeras dudas sobre la experiencia.</PageHero><section className="section"><div className="container narrow"><label className="search-box"><span>Buscar una pregunta</span><div><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Escribí una palabra clave"/></div></label><div className="accordion">{list.map(f=><div key={f.id}><h2><button aria-expanded={open===f.id} onClick={()=>setOpen(open===f.id?null:f.id)}><span><Badge>{f.category}</Badge>{f.question}</span><ChevronDown/></button></h2>{open===f.id&&<p>{f.answer}</p>}</div>)}</div></div></section></>}
export function NotFoundPage(){return <section className="not-found"><span>404</span><h1>Esta ruta todavía no existe</h1><p>Volvamos al punto de encuentro.</p><LinkButton to="/">Ir al inicio</LinkButton></section>}
