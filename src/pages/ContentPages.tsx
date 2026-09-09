import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Bookmark,
  Building2,
  Bus,
  Camera,
  Car,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock,
  Compass,
  Copy,
  DoorOpen,
  Heart,
  Info,
  Lightbulb,
  MapPin,
  MessageCircle,
  MoveHorizontal,
  Navigation,
  Presentation,
  Search,
  Send,
  SlidersHorizontal,
  Sparkles,
  Store,
  Users,
  Utensils,
  X,
} from 'lucide-react'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/icons/SocialIcons'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import {
  activities,
  exhibitors,
  sectorsList,
  sponsors,
} from '../data/content'
import { faqs } from '../data/faqs'
import { news } from '../data/news'
import { readStorage } from '../lib/storage'
import { aboutContent } from '../data/about'
import { camcomexLogo } from '../assets/brand'
import { expoValores } from '../assets/valores'
import conexionesImage from '../../images/news-conexiones.png'
import comunidadImage from '../../images/news-comunidad.png'
import expositoresImage from '../../images/news-expositores.png'
import innovacionImage from '../../images/news-innovacion.png'
import agendaImage from '../../images/news-agenda.png'
import {
  Badge,
  Button,
  EmptyState,
  LinkButton,
  PageHero,
  SectionHeading,
} from '../components/ui'

const audienceLinkData = [
  {
    title: 'Visitantes',
    description: 'Descubrir propuestas, actividades y experiencias.',
    link: '/entradas',
    actionText: 'Conseguí tu entrada',
    image: comunidadImage,
    alt: 'Visitantes recorriendo propuestas en ExpoJuy',
  },
  {
    title: 'Empresas y expositores',
    description: 'Mostrar capacidades y construir oportunidades.',
    link: '/contacto?tipo=expositor',
    actionText: 'Quiero exponer',
    image: expositoresImage,
    alt: 'Empresas y expositores conectando en ExpoJuy',
  },
  {
    title: 'Estudiantes y profesionales',
    description: 'Aprender, compartir y ampliar redes.',
    link: '/agenda',
    actionText: 'Ver actividades',
    image: innovacionImage,
    alt: 'Estudiantes y profesionales en actividades de ExpoJuy',
  },
  {
    title: 'Instituciones y sponsors',
    description: 'Impulsar una agenda productiva con impacto.',
    link: '/sponsors',
    actionText: 'Conocer opciones de sponsor',
    image: agendaImage,
    alt: 'Instituciones y sponsors colaborando en ExpoJuy',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.hero.title}>
        {aboutContent.hero.description}
      </PageHero>

      {/* 1. Propósito y Valores en Fila Continua (Pegadas, sin espacios, pasando de izquierda a derecha) */}
      <section className="section about-purpose-section reveal-group">
        <div className="container">
          <div className="about-purpose-header hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="PROPÓSITO"
              title={aboutContent.purpose.title}
            />
            <p className="lead about-purpose-lead">{aboutContent.purpose.description}</p>
          </div>
        </div>

        <div className="about-values-strip-container hero-anim-up hero-delay-2">
          <div className="about-values-strip-track">
            {[...expoValores, ...expoValores].map((valor, idx) => (
              <article key={`${valor.id}-${idx}`} className="about-values-strip-card">
                <div className="about-values-strip-bg">
                  <img src={valor.image} alt={valor.title} loading="lazy" />
                  <div className="about-values-strip-scrim" />
                </div>
                <div className="about-values-strip-content">
                  <h3 className="about-values-strip-title">{valor.title}</h3>
                  <div className="about-values-strip-sublock">
                    <span className="about-values-strip-num">{valor.num}</span>
                    <span className="about-values-strip-subtitle">{valor.subtitle}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Impacto Regional con Showcase Editorial (Sin etiqueta pill) */}
      <section className="section section-tint about-impact-section reveal-group">
        <div className="container about-impact-container">
          <div className="about-impact-text hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="IMPACTO REGIONAL"
              title={aboutContent.impact.title}
              copy={aboutContent.impact.description}
            />
            <div className="about-impact-goals">
              {aboutContent.impact.goals.map((item, index) => (
                <div key={item} className={`about-goal-item hero-anim-up hero-delay-${(index % 3) + 1}`}>
                  <div className="about-goal-num">
                    <span>0{index + 1}</span>
                  </div>
                  <div className="about-goal-info">
                    <h3 className="about-goal-title">{item}</h3>
                    <p className="about-goal-sub">Compromiso estratégico de articulación para la edición 2026.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-impact-media hero-anim-right hero-delay-2">
            <div className="about-media-frame">
              <img
                src={conexionesImage}
                alt="Conexiones estratégicas en ExpoJuy"
                className="about-media-img"
                loading="lazy"
              />
              <div className="about-media-overlay" />
              <div className="about-media-caption">
                <p>Articulación entre sector público, privado y científico para potenciar la matriz productiva.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Quiénes Convoca (4 Tarjetas Pegadas, Clickeables y Sin Etiquetas) */}
      <section className="section about-audiences-section reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="A QUIÉNES CONVOCA"
              title="Una exposición, múltiples formas de participar"
            />
          </div>
          <div className="about-audiences-seamless-grid hero-anim-up hero-delay-2">
            {audienceLinkData.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="about-audience-seamless-card"
                aria-label={`${item.title}: ${item.description}. ${item.actionText}`}
              >
                <div className="about-audience-seamless-bg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <div className="about-audience-seamless-scrim" />
                </div>
                <div className="about-audience-seamless-body">
                  <h3 className="about-audience-seamless-title">{item.title}</h3>
                  <p className="about-audience-seamless-desc">{item.description}</p>
                  <span className="about-audience-seamless-cta">
                    <span>{item.actionText}</span>
                    <ArrowRight className="about-audience-seamless-arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Por Qué Participar (Fondo Ink institucional con tipografía clara y botones destacados) */}
      <section className="about-why-teaser section reveal-group">
        <div className="container">
          <div className="about-why-content hero-anim-left hero-delay-1">
            <p className="eyebrow about-why-eyebrow">POR QUÉ PARTICIPAR</p>
            <h2 className="about-why-title">{aboutContent.participation.title}</h2>
            <p className="about-why-desc">{aboutContent.participation.description}</p>
            <div className="button-row about-why-btn-row hero-anim-left hero-delay-2">
              <LinkButton to="/entradas">
                Conseguí tu entrada
              </LinkButton>
              <LinkButton to="/contacto?tipo=expositor" variant="light">
                Quiero exponer
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Roadmap Vertical Alternado */}
      <section className="section section-tint about-timeline-section reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading title="Una preparación abierta y progresiva" />
          </div>
          <div className="about-roadmap-vertical">
            <div className="about-roadmap-line" />
            {aboutContent.timeline.map((item, index) => {
              const isEven = index % 2 === 0
              const isTarget = index === 3
              return (
                <div
                  key={item}
                  className={`about-roadmap-item ${isEven ? 'is-left' : 'is-right'} ${isTarget ? 'is-target' : ''} hero-anim-up hero-delay-${index + 1}`}
                >
                  <div className="about-roadmap-node">
                    <span className="about-roadmap-node-num">0{index + 1}</span>
                    {isTarget && <span className="about-roadmap-node-pulse" />}
                  </div>
                  <div className="about-roadmap-card">
                    <span className="about-roadmap-badge">
                      {isTarget ? 'Hito Central' : `Fase 0${index + 1}`}
                    </span>
                    <h3 className="about-roadmap-title">{item}</h3>
                    <p className="about-roadmap-desc">Una etapa clave en el camino hacia ExpoJuy 2026.</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export function ExhibitorsPage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const sector = params.get('sector') ?? 'Todos'

  const list = useMemo(
    () =>
      exhibitors.filter(
        (e) =>
          (sector === 'Todos' || e.sector === sector) &&
          `${e.name} ${e.description} ${e.sector}`
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, sector],
  )
  const [active, setActive] = useState<(typeof exhibitors)[number] | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  const closeDialog = () => {
    setActive(null)
    window.setTimeout(() => previousFocus.current?.focus(), 0)
  }

  useEffect(() => {
    if (!active) return
    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeDialog()
      }
      if (event.key === 'Tab' && focusable?.length) {
        const first = focusable[0],
          last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  const openDialog = (item: (typeof exhibitors)[number]) => {
    previousFocus.current = document.activeElement as HTMLElement
    setActive(item)
  }

  const handleSearchChange = (val: string) => {
    const next = new URLSearchParams(params)
    if (val.trim()) {
      next.set('q', val)
    } else {
      next.delete('q')
    }
    setParams(next)
  }

  const handleSectorChange = (val: string) => {
    const next = new URLSearchParams(params)
    if (val && val !== 'Todos') {
      next.set('sector', val)
    } else {
      next.delete('sector')
    }
    setParams(next)
  }

  const clearFilters = () => setParams({})

  return (
    <>
      <PageHero title="Conocé a quienes hacen">
        Organizaciones de múltiples sectores reunidas para
        mostrar, aprender y conectar.
      </PageHero>
      <section className="section reveal-group">
        <div className="container">
          <div className="exhibitors-filter-bar hero-anim-up hero-delay-1">
            <div className="filter-search-box">
              <Search
                className="filter-search-icon"
                aria-hidden="true"
              />
              <input
                type="text"
                className="filter-search-input"
                value={q}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Buscar expositor por nombre, rubro o descripción..."
                aria-label="Buscar expositor"
              />
            </div>

            <div className="filter-sector-wrapper">
              <select
                className="filter-sector-select"
                value={sector}
                onChange={(e) => handleSectorChange(e.target.value)}
                aria-label="Filtrar por rubro"
              >
                <option value="Todos">Todos los rubros</option>
                {sectorsList.map((s) => (
                  <option
                    key={s}
                    value={s}
                  >
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="filter-sector-chevron"
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="result-count hero-anim-left hero-delay-2">{list.length} resultados</p>

          {list.length ? (
            <div className="cards-grid exhibitors-grid">
              {list.map((e, index) => (
                <article
                  className={`card exhibitor-card hero-anim-up hero-delay-${(index % 6) + 1}`}
                  key={e.id}
                >
                  <figure className="exhibitor-media">
                    {e.image?.src ? (
                      <img
                        src={e.image.src}
                        alt={e.image.alt}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="exhibitor-media-fallback"
                        aria-hidden="true"
                      />
                    )}
                    <figcaption
                      className="exhibitor-image-overlay"
                      aria-hidden="true"
                    >
                      <span className="exhibitor-sector-overlay">
                        {e.sector}
                      </span>
                    </figcaption>
                  </figure>
                  <div className="exhibitor-card-body">
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                    <small>{e.stand}</small>
                    <Button onClick={() => openDialog(e)}>Ver perfil</Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No encontramos expositores</h3>
              <p>Probá con otra búsqueda o limpiá los filtros.</p>
              <Button onClick={clearFilters}>Limpiar filtros</Button>
            </div>
          )}
        </div>
      </section>

      {active && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={closeDialog}
        >
          <section
            ref={dialogRef}
            className="dialog exhibitor-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            aria-describedby="profile-description"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDialog}
              aria-label="Cerrar perfil"
            >
              ×
            </button>
            <div className="exhibitor-dialog-media">
              {active.image?.src ? (
                <img
                  src={active.image.src}
                  alt={active.image.alt}
                />
              ) : (
                <span aria-hidden="true">
                  {active.name.slice(0, 2).toUpperCase()}
                </span>
              )}
              {!active.image?.src && (
                <span aria-hidden="true">
                  {active.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <div className="exhibitor-dialog-copy">
              <Badge>{active.sector}</Badge>
              <h2 id="profile-title">{active.name}</h2>
              <p id="profile-description">{active.description}</p>
              <strong>{active.stand}</strong>
              <LinkButton to="/contacto">Contactar</LinkButton>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export function AgendaPage() {
  const [day, setDay] = useState('Todos')
  const [favorites, setFavorites] = useState<string[]>(() =>
    readStorage(
      'expojuy-favorites',
      [],
      (value): value is string[] =>
        Array.isArray(value) && value.every((item) => typeof item === 'string'),
    ),
  )
  const toggle = (id: string) =>
    setFavorites((x) => {
      const next = x.includes(id) ? x.filter((i) => i !== id) : [...x, id]
      localStorage.setItem('expojuy-favorites', JSON.stringify(next))
      return next
    })
  const dayOrder: Record<string, number> = {
    'Día 1 · 15 OCT': 0,
    'Día 2 · 16 OCT': 1,
    'Día 3 · 17 OCT': 2,
    'Día 4 · 18 OCT': 3,
  }
  const timeValue = (value: string) => {
    const [hours, minutes] = value.split(':').map(Number)
    return hours * 60 + minutes
  }
  const list = activities
    .filter((a) => day === 'Todos' || a.day.startsWith(day))
    .sort(
      (a, b) =>
        (dayOrder[a.day] ?? 99) - (dayOrder[b.day] ?? 99) ||
        timeValue(a.time) - timeValue(b.time),
    )

  return (
    <>
      <PageHero title="Agenda para imaginar el próximo norte">
        Actividades organizadas en cuatro jornadas de
        intercambio, aprendizaje y vinculación.
      </PageHero>
      <section className="section reveal-group">
        <div className="container">
          <div
            className="chip-filters hero-anim-up hero-delay-1"
            aria-label="Filtrar agenda por día"
          >
            {['Todos', 'Día 1', 'Día 2', 'Día 3', 'Día 4'].map((item) => (
              <button
                className={day === item ? 'active' : ''}
                onClick={() => setDay(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="result-count hero-anim-left hero-delay-2">
            <Bookmark size={17} /> Mi agenda: {favorites.length} actividades
          </p>
          {list.length ? (
            <div className="agenda-list full">
              {list.map((a, index) => {
                const isLive = a.day.startsWith('Día 1') && a.time === '10:00'
                return (
                  <article
                    key={a.id}
                    className={`${isLive ? 'is-live' : ''} hero-anim-left hero-delay-${(index % 4) + 1}`}
                  >
                    <time>
                      <span>{a.day}</span>
                      <strong>{a.time}</strong>
                    </time>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          flexWrap: 'wrap',
                          marginBottom: '0.4rem',
                        }}
                      >
                        <Badge>
                          {a.category} · {a.format}
                        </Badge>
                        {isLive && (
                          <Badge className="badge-live">
                            <span
                              className="live-dot"
                              aria-hidden="true"
                            />
                            En vivo ahora
                          </Badge>
                        )}
                      </div>
                      <h2>{a.title}</h2>
                      <p>{a.description}</p>
                      <small>
                        {a.duration} · {a.speakers.join(', ')} · {a.location}
                      </small>
                    </div>
                    <button
                      className={
                        favorites.includes(a.id)
                          ? 'favorite active'
                          : 'favorite'
                      }
                      onClick={() => toggle(a.id)}
                      aria-label={`${favorites.includes(a.id) ? 'Quitar' : 'Agregar'} ${a.title} de mi agenda`}
                    >
                      <Bookmark
                        fill={
                          favorites.includes(a.id) ? 'currentColor' : 'none'
                        }
                        size={18}
                      />
                    </button>
                  </article>
                )
              })}
            </div>
          ) : (
            <EmptyState
              title="No hay actividades para este día"
              copy="Seleccioná otro día o explorá todos los contenidos de la agenda."
            />
          )}
        </div>
      </section>
    </>
  )
}

export function NewsPage() {
  const [category, setCategory] = useState('Todas')
  const visible =
    category === 'Todas'
      ? news
      : news.filter((item) => item.category === category)
  return (
    <>
      <PageHero title="Historias que abren posibilidades">
        Noticias y contenidos de muestra para anticipar la experiencia ExpoJuy
        2026.
      </PageHero>
      <section className="section reveal-group">
        <div className="container">
          <div
            className="chip-filters hero-anim-up hero-delay-1"
            aria-label="Filtrar novedades por categoría"
          >
            {[
              'Todas',
              'Institucional',
              'Innovación',
              'Expositores',
              'Agenda',
              'Comunidad',
            ].map((item) => (
              <button
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="news-grid listing">
            {visible.map((n, i) => (
              <article
                className={`${i === 0 ? 'featured' : ''} hero-anim-up hero-delay-${(i % 3) + 1}`}
                key={n.id}
              >
                <div className="news-art">
                  <img
                    src={n.image.src}
                    alt={n.image.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                  <span>0{i + 1}</span>
                </div>
                <Badge>{n.category}</Badge>
                <time>{n.date}</time>
                <h2>{n.title}</h2>
                <p>{n.excerpt}</p>
                <Link to={`/novedades/${n.id}`}>
                  Leer nota <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export function NewsDetailPage() {
  const { id } = useParams()
  const item = news.find((n) => n.id === id) ?? news[0]
  return (
    <>
      <PageHero
        eyebrow={item.category}
        title={item.title}
      >
        {item.excerpt}
      </PageHero>
      <article className="article container reveal-group">
        <div className="hero-anim-up hero-delay-1">
          <Link to="/novedades">← Volver a novedades</Link>
          <p>
            ExpoJuy pone en conversación a quienes producen, investigan,
            emprenden y transforman en Jujuy y la región.
          </p>
          <p>
            Esta nota reúne novedades, historias y recursos para acompañar la
            experiencia de quienes participan del encuentro.
          </p>
        </div>
      </article>
    </>
  )
}

const zones = [
  ['Pabellón de innovación', 'Escenarios y auditorios', 'innovacion', 'PAB-01'],
  ['Área de expositores', 'Expositores', 'expositores', 'EXP-01'],
  ['Auditorio Norte', 'Escenarios y auditorios', 'auditorio', 'AUD-01'],
  ['Patio de sabores', 'Gastronomía', 'sabores', 'GAS-01'],
  ['Acceso principal', 'Accesos', 'acceso', 'ACC-01'],
  ['Espacio institucional', 'Expositores', 'institucional', 'INS-01'],
  ['Sanitarios', 'Servicios', 'sanitarios', 'SRV-01'],
  ['Estacionamiento', 'Servicios', 'estacionamiento', 'SRV-02'],
  ['Punto de información', 'Servicios', 'info', 'SRV-03'],
] as const

const zoneIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Pabellón de innovación': Lightbulb,
  'Área de expositores': Store,
  'Auditorio Norte': Presentation,
  'Patio de sabores': Utensils,
  'Acceso principal': DoorOpen,
  'Espacio institucional': Building2,
  Sanitarios: Sparkles,
  Estacionamiento: Car,
  'Punto de información': Info,
}

const transportOptions = [
  {
    id: 'colectivo',
    title: 'Transporte público',
    badge: 'PARADA DIRECTA',
    icon: Bus,
    lead: 'Líneas 3, 4, 18 y 20 con parada frente al pórtico de Ciudad Cultural.',
  },
  {
    id: 'auto',
    title: 'Vehículo particular',
    badge: '+1.500 PLAZAS',
    icon: Car,
    lead: 'Accesos directos por Av. Bolivia, Av. de los Estudiantes y Ruta Nacional 9.',
  },
  {
    id: 'peatonal',
    title: 'Acceso peatonal universal',
    badge: '100% ACCESIBLE',
    icon: Navigation,
    lead: 'Rampas integradas, sendas podotáctiles y corredores amplios de libre circulación.',
  },
] as const

export function VenueMapPage() {
  const [selected, setSelected] = useState<(typeof zones)[number]>(zones[0])
  const [filter, setFilter] = useState('Todos')
  const [copied, setCopied] = useState(false)
  const categories = ['Todos', ...new Set(zones.map((z) => z[1]))]

  const SelectedIcon = zoneIcons[selected[0]] ?? MapPin

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Predio Ferial Ciudad Cultural, Av. de los Estudiantes s/n, San Salvador de Jujuy')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <>
      <PageHero title="Un mapa para explorar conexiones">
        Recorré los espacios del predio y anticipá tu experiencia.
      </PageHero>
      <section className="section reveal-group">
        <div className="container">
          <div
            className="chip-filters hero-anim-up hero-delay-1"
            aria-label="Filtrar espacios del mapa"
          >
            {categories.map((category) => (
              <button
                type="button"
                className={filter === category ? 'active' : ''}
                onClick={() => setFilter(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="map-layout hero-anim-up hero-delay-2">
            <div className="interactive-map-frame">
              <div className="map-frame-header" aria-hidden="true">
                <span className="map-frame-chip">
                  <Compass size={13} />
                  <span>PREDIO</span>
                </span>
                <span className="map-frame-legend">CIUDAD CULTURAL · 2026</span>
              </div>
              <div className="interactive-map-scroll-hint" aria-hidden="true">
                <MoveHorizontal size={13} />
                <span>Deslizá para explorar el plano completo</span>
              </div>
              <div className="interactive-map-scroll">
                <div
                  className="interactive-map"
                  aria-label="Mapa del predio"
                >
                  {zones.map((z) => {
                    const Icon = zoneIcons[z[0]] ?? MapPin
                    const isSelected = selected[0] === z[0]
                    const isMatch = filter === 'Todos' || z[1] === filter
                    return (
                      <button
                        key={z[0]}
                        type="button"
                        className={`map-zone mz-${z[2]} ${isSelected ? 'active' : ''} ${!isMatch ? 'dimmed' : ''}`}
                        onClick={() => setSelected(z)}
                        aria-pressed={isSelected}
                      >
                        <div className="zone-content">
                          <Icon />
                          <span className="zone-name">{z[0]}</span>
                        </div>
                        <span className="zone-pill">{z[1]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <aside className="map-panel">
              <div className="map-panel-eyebrow-row">
                <p className="eyebrow">ZONA SELECCIONADA</p>
              </div>
              <div className="map-panel-header">
                <div className="map-panel-icon">
                  <SelectedIcon />
                </div>
                <div>
                  <h2>{selected[0]}</h2>
                  <Badge>{selected[1]}</Badge>
                </div>
              </div>
              <p className="map-panel-desc">
                Área pensada para orientar a visitantes y facilitar
                recorridos accesibles en el predio ferial.
              </p>
              <ul className="map-panel-features">
                <li>Información y orientación general</li>
                <li>Accesibilidad universal y pasillos amplios</li>
                <li>Señalética orientativa por pabellones</li>
              </ul>
              <div className="map-panel-actions">
                {selected[1] === 'Expositores' && (
                  <Link to="/expositores" className="btn btn-secondary btn-sm">
                    Ver expositores de esta área <ArrowRight size={14} />
                  </Link>
                )}
                {selected[1] === 'Escenarios y auditorios' && (
                  <Link to="/agenda" className="btn btn-secondary btn-sm">
                    Ver agenda de actividades <ArrowRight size={14} />
                  </Link>
                )}
                {selected[1] === 'Gastronomía' && (
                  <span className="map-panel-status">
                    Servicios de comida y cafetería continuos
                  </span>
                )}
              </div>
            </aside>
          </div>

          {/* SECCIÓN CÓMO LLEGAR REDISEÑADA (ESTILO HIGH-END BENTO) */}
          <section className="venue-location-section reveal-group">
            <div className="venue-location-head hero-anim-left hero-delay-1">
              <div className="venue-location-lead">
                <h2>Cómo llegar a ExpoJuy 2026</h2>
                <p>
                  El encuentro se realiza en el predio ferial de Ciudad Cultural,
                  San Salvador de Jujuy. Un enclave estratégico con conexiones
                  inmediatas desde toda la provincia y el NOA.
                </p>
              </div>

              <div className="venue-tactical-specs">
                <div className="tactical-item">
                  <MapPin size={16} />
                  <div>
                    <span className="tactical-label">DIRECCIÓN</span>
                    <strong className="tactical-value">Av. de los Estudiantes s/n, B° Alto Padilla</strong>
                  </div>
                </div>
                <div className="tactical-item">
                  <Clock size={16} />
                  <div>
                    <span className="tactical-label">HORARIOS DE APERTURA</span>
                    <strong className="tactical-value">10:00 a 22:00 hs (todos los días)</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="venue-bento-grid">
              {/* Tarjetas de movilidad y transporte */}
              <div className="venue-transport-cards hero-anim-left hero-delay-2">
                {transportOptions.map((opt) => {
                  const OptIcon = opt.icon
                  return (
                    <article key={opt.id} className="venue-transport-card">
                      <div className="transport-card-head">
                        <div className="transport-icon-wrap">
                          <OptIcon size={18} />
                        </div>
                        <span className="transport-badge">{opt.badge}</span>
                      </div>
                      <h3>{opt.title}</h3>
                      <p className="transport-lead">{opt.lead}</p>
                    </article>
                  )
                })}
              </div>

              {/* Canvas de Google Maps con Double-Bezel e islas de acción */}
              <div className="venue-map-bezel hero-anim-right hero-delay-2">
                <div className="venue-map-core">
                  <div className="map-floating-chip">
                    <span className="pulse-dot" />
                    <span>Ciudad Cultural · Predio Ferial ExpoJuy</span>
                  </div>

                  <iframe
                    title="Ubicación de ExpoJuy 2026 - Ciudad Cultural, Jujuy"
                    src="https://maps.google.com/maps?q=Ciudad+Cultural+San+Salvador+de+Jujuy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="map-floating-actions">
                    <a
                      href="https://maps.google.com/?q=Ciudad+Cultural+San+Salvador+de+Jujuy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-island-primary"
                    >
                      <span>Abrir en Google Maps</span>
                      <span className="btn-island-icon">
                        <ArrowRight size={13} />
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="btn-island-secondary"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copied ? '¡Dirección copiada!' : 'Copiar dirección'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

const sponsorMarks: Record<string, { monogram: string; variant: string }> = {
  'CamComEx Jujuy': { monogram: 'CC', variant: 'orbit' },
  'Andes Futuro': { monogram: 'AF', variant: 'ridge' },
  'Norte Productivo': { monogram: 'NP', variant: 'block' },
  'Impulso Federal': { monogram: 'IF', variant: 'line' },
  'Red Puna': { monogram: 'RP', variant: 'loop' },
  'Industria Viva': { monogram: 'IV', variant: 'stack' },
  'Jujuy Innova': { monogram: 'JI', variant: 'gridmark' },
  'Cámara Regional': { monogram: 'CR', variant: 'frame' },
}

export function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="AUSPICIANTES DE EXPOJUY 2026"
        title="Las empresas que hacen posible el encuentro"
      >
        Empresas, instituciones y organizaciones que acompañan el desarrollo
        productivo y la experiencia de ExpoJuy.
      </PageHero>
      <section className="section sponsors-page reveal-group">
        <div className="container">
          <header className="sponsors-header hero-anim-left hero-delay-1">
            <div>
              <p className="eyebrow">RED DE AUSPICIANTES</p>
              <h2>Marcas que apuestan por Jujuy</h2>
            </div>
            <p>
              Un espacio para reconocer a las empresas que acompañan esta
              edición y hacen posible que el encuentro suceda.
            </p>
          </header>
          <div
            className="sponsor-logo-grid"
            aria-label="Auspiciantes de ExpoJuy 2026"
          >
            {sponsors.map((sponsor, index) => {
              const mark = sponsorMarks[sponsor.name]
              const isCamComEx = sponsor.name === 'CamComEx Jujuy'
              return (
                <article
                  className={`sponsor-logo-card sponsor-logo-${mark.variant} hero-anim-up hero-delay-${(index % 4) + 1}`}
                  key={sponsor.id}
                >
                  {isCamComEx ? (
                    <img
                      className="sponsor-logo-image"
                      src={camcomexLogo}
                      alt={`${sponsor.name} — logo`}
                      width={1077}
                      height={1008}
                    />
                  ) : (
                    <div
                      className="sponsor-logo-lockup"
                      aria-label={`${sponsor.name} — logo`}
                    >
                      <span className="sponsor-logo-mark" aria-hidden="true">
                        {mark.monogram}
                      </span>
                      <span className="sponsor-logo-name">{sponsor.name}</span>
                    </div>
                  )}
                  <p className="sponsor-logo-caption">Auspiciantes ExpoJuy 2026</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="final-cta reveal-group">
        <div className="container final-cta-container">
          <div className="final-cta-text hero-anim-left hero-delay-1">
            <Users className="final-cta-icon" />
            <div>
              <p className="eyebrow">PARTICIPACIÓN</p>
              <h2>Tu empresa también puede acompañar ExpoJuy</h2>
            </div>
          </div>
          <div className="button-row final-cta-actions hero-anim-right hero-delay-2">
            <LinkButton to="/contacto?tipo=sponsor" variant="light">
              Quiero acompañar ExpoJuy <ArrowRight size={17} />
            </LinkButton>
            <LinkButton to="/contacto?tipo=expositor" variant="secondary">
              Quiero exponer
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selectedType, setSelectedType] = useState('')

  const handleSelectChannel = (channelId: string) => {
    setSelectedType(channelId)
    if (errors.type) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy.type
        return copy
      })
    }
    const selectElem = document.getElementById('contact-type') as HTMLSelectElement | null
    if (selectElem) {
      selectElem.focus()
    }
    const formElem = document.getElementById('formulario')
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next: Record<string, string> = {}
    if (!String(data.get('name') ?? '').trim()) next.name = 'Ingresá un nombre.'
    if (!String(data.get('email') ?? '').includes('@'))
      next.email = 'Ingresá un email válido.'
    if (!String(data.get('type') ?? '').trim())
      next.type = 'Seleccioná un tipo de consulta.'
    if (!String(data.get('message') ?? '').trim())
      next.message = 'Escribí un mensaje.'
    if (!data.get('consent'))
      next.consent = 'Debés aceptar el contacto para continuar.'
    setErrors(next)
    if (!Object.keys(next).length) setSent(true)
  }
  return (
    <>
      <PageHero title="Abramos una conversación">
        Contanos cómo te gustaría participar.
      </PageHero>
      <section className="section reveal-group">
        <div className="container form-layout">
          <form
            id="formulario"
            className="form-card hero-anim-left hero-delay-1"
            onSubmit={submit}
            noValidate
          >
            {sent ? (
              <div
                className="success-message"
                role="status"
              >
                <CheckCircle2 />
                <h2>Mensaje recibido</h2>
                <p>Gracias por escribirnos. Nuestro equipo se comunicará con vos.</p>
                <Button
                  type="button"
                  onClick={() => {
                    setSent(false)
                    setSelectedType('')
                  }}
                >
                  Nueva consulta
                </Button>
              </div>
            ) : (
              <>
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  required
                  name="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? 'contact-name-error' : undefined
                  }
                />
                {errors.name && (
                  <p
                    className="field-error"
                    id="contact-name-error"
                  >
                    {errors.name}
                  </p>
                )}
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  name="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? 'contact-email-error' : undefined
                  }
                />
                {errors.email && (
                  <p
                    className="field-error"
                    id="contact-email-error"
                  >
                    {errors.email}
                  </p>
                )}
                <label htmlFor="contact-organization">Organización</label>
                <input
                  id="contact-organization"
                  name="organization"
                />
                <label htmlFor="contact-type">Tipo de consulta</label>
                <select
                  id="contact-type"
                  name="type"
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value)
                    if (errors.type) {
                      setErrors((prev) => {
                        const copy = { ...prev }
                        delete copy.type
                        return copy
                      })
                    }
                  }}
                  aria-invalid={Boolean(errors.type)}
                  aria-describedby={
                    errors.type ? 'contact-type-error' : undefined
                  }
                >
                  <option
                    value=""
                    disabled
                  >
                    Seleccioná una opción
                  </option>
                  <option value="Quiero exponer">Quiero exponer</option>
                  <option value="Quiero ser sponsor">Quiero ser sponsor</option>
                  <option value="Prensa y difusión">Prensa y difusión</option>
                  <option value="Consultas generales">Consultas generales</option>
                </select>
                {errors.type && (
                  <p
                    className="field-error"
                    id="contact-type-error"
                  >
                    {errors.type}
                  </p>
                )}
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                />
                {errors.message && (
                  <p
                    className="field-error"
                    id="contact-message-error"
                  >
                    {errors.message}
                  </p>
                )}
                <label
                  className="check"
                  htmlFor="contact-consent"
                >
                  <input
                    id="contact-consent"
                    type="checkbox"
                    name="consent"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? 'contact-consent-error' : undefined
                    }
                  />{' '}
                  Acepto ser contactado por el equipo de ExpoJuy 2026.
                </label>
                {errors.consent && (
                  <p
                    className="field-error"
                    id="contact-consent-error"
                  >
                    {errors.consent}
                  </p>
                )}
                <Button type="submit">
                  Enviar <Send size={18} />
                </Button>
              </>
            )}
          </form>
          <aside className="contact-aside hero-anim-right hero-delay-2">
            <h2 className="contact-aside-title">Encontrá el canal indicado</h2>
            <div className="contact-quick-links">
              {[
                'Quiero exponer',
                'Quiero ser sponsor',
                'Prensa y difusión',
                'Consultas generales',
              ].map((channel) => {
                const isSelected = selectedType === channel
                return (
                  <button
                    key={channel}
                    type="button"
                    className={`contact-quick-link-btn ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelectChannel(channel)}
                    aria-pressed={isSelected}
                  >
                    <span>{channel}</span>
                    <ArrowRight size={18} className="contact-quick-link-arrow" aria-hidden="true" />
                  </button>
                )
              })}
            </div>

            <section className="contact-social" aria-labelledby="contact-social-title">
              <h3 id="contact-social-title" className="contact-social-heading">Seguinos en redes</h3>
              <div className="contact-social-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de ExpoJuy 2026"
                  className="contact-social-btn"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de ExpoJuy 2026"
                  className="contact-social-btn"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube de ExpoJuy 2026"
                  className="contact-social-btn"
                >
                  <YoutubeIcon size={20} />
                </a>
              </div>
              <p className="contact-social-note">
                Seguinos para conocer las novedades de ExpoJuy 2026.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </>
  )
}

export function FaqPage() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<string | null>('faq-1')

  const list = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return faqs
    return faqs.filter((f) =>
      `${f.question} ${f.answer} ${f.category}`
        .toLowerCase()
        .includes(query)
    )
  }, [q])

  return (
    <>
      <PageHero title="Preguntas frecuentes">
        Información y respuestas claras para resolver tus dudas sobre ExpoJuy 2026.
      </PageHero>
      <section className="section faq-section reveal-group">
        <div className="container narrow">
          {/* Barra de búsqueda con el mismo estilo minimalista que en Expositores */}
          <div className="faq-filter-area hero-anim-up hero-delay-1">
            <div className="filter-search-box faq-search-box">
              <Search className="filter-search-icon" aria-hidden="true" />
              <input
                type="text"
                className="filter-search-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por pregunta, respuesta o tema..."
                aria-label="Buscar en preguntas frecuentes"
              />
              {q && (
                <button
                  type="button"
                  className="filter-search-clear"
                  onClick={() => setQ('')}
                  aria-label="Limpiar búsqueda"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Acordeón interactivo con iconos minimalistas y animación fluida */}
          {list.length > 0 ? (
            <div className="faq-accordion" role="region" aria-label="Listado de preguntas frecuentes">
              {list.map((f, index) => {
                const isOpen = open === f.id
                return (
                  <article
                    key={f.id}
                    className={`faq-card ${isOpen ? 'is-open' : ''} hero-anim-up hero-delay-${(index % 4) + 1}`}
                  >
                    <h3>
                      <button
                        type="button"
                        className="faq-trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : f.id)}
                      >
                        <div className="faq-title-group">
                          <span className="faq-category-tag">{f.category}</span>
                          <span className="faq-question-text">{f.question}</span>
                        </div>
                        <span className="faq-chevron-bubble" aria-hidden="true">
                          <ChevronDown className="faq-chevron" />
                        </span>
                      </button>
                    </h3>
                    <div className="faq-collapse">
                      <div className="faq-collapse-body">
                        <p>{f.answer}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="faq-empty-state">
              <div className="faq-empty-icon" aria-hidden="true">
                <CircleHelp size={28} />
              </div>
              <h3>No encontramos respuestas para "{q}"</h3>
              <p>Probá con otras palabras clave o limpiá la búsqueda.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setQ('')}
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
export function NotFoundPage() {
  return (
    <section className="not-found">
      <span>404</span>
      <h1>Esta ruta todavía no existe</h1>
      <p>Volvamos al punto de encuentro.</p>
      <LinkButton to="/">Ir al inicio</LinkButton>
    </section>
  )
}
