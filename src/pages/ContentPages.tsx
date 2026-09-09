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
import {
  Badge,
  Button,
  EmptyState,
  LinkButton,
  PageHero,
  SectionHeading,
} from '../components/ui'

export function AboutPage() {
  return (
    <>
      <PageHero title={aboutContent.hero.title}>
        {aboutContent.hero.description}
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="PROPÓSITO"
              title={aboutContent.purpose.title}
            />
            <p className="lead">{aboutContent.purpose.description}</p>
          </div>
          <div className="values-grid">
            {aboutContent.values.map((value) => (
              <div key={value}>
                <Sparkles />
                <h3>{value}</h3>
                <p>Un valor que guía la construcción colectiva de ExpoJuy.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="IMPACTO REGIONAL"
              title={aboutContent.impact.title}
              copy={aboutContent.impact.description}
            />
          </div>
          <div className="impact-list">
            {aboutContent.impact.goals.map((item, index) => (
              <div key={item}>
                <span>{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="A QUIÉNES CONVOCA"
            title="Una exposición, múltiples formas de participar"
          />
          <div className="audience-grid">
            {aboutContent.audiences.map((audience) => (
              <article key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="container split">
          <div>
            <p className="eyebrow">POR QUÉ PARTICIPAR</p>
            <h2>{aboutContent.participation.title}</h2>
          </div>
          <div>
            <p>{aboutContent.participation.description}</p>
            <div className="button-row">
              <LinkButton
                to="/entradas"
                variant="light"
              >
                Conseguí tu entrada
              </LinkButton>
              <LinkButton
                to="/contacto?tipo=expositor"
                variant="secondary"
              >
                Quiero exponer
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <SectionHeading title="Una preparación abierta y progresiva" />
          <div className="timeline">
            {aboutContent.timeline.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <p>Una etapa clave en el camino hacia ExpoJuy 2026.</p>
              </div>
            ))}
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
      <section className="section">
        <div className="container">
          <div className="exhibitors-filter-bar">
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

          <p className="result-count">{list.length} resultados</p>

          {list.length ? (
            <div className="cards-grid exhibitors-grid">
              {list.map((e) => (
                <article
                  className="card exhibitor-card"
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
                      <span className="exhibitor-monogram">
                        {e.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="exhibitor-sector-overlay">
                        {e.sector}
                      </span>
                    </figcaption>
                  </figure>
                  <div className="exhibitor-card-body">
                    <p className="exhibitor-sector">{e.sector}</p>
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
      <section className="section">
        <div className="container">
          <div
            className="chip-filters"
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
          <p className="result-count">
            <Bookmark size={17} /> Mi agenda: {favorites.length} actividades
          </p>
          {list.length ? (
            <div className="agenda-list full">
              {list.map((a) => {
                const isLive = a.day.startsWith('Día 1') && a.time === '10:00'
                return (
                  <article
                    key={a.id}
                    className={isLive ? 'is-live' : ''}
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
      <section className="section">
        <div className="container">
          <div
            className="chip-filters"
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
                className={i === 0 ? 'featured' : ''}
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
      <article className="article container">
        <Link to="/novedades">← Volver a novedades</Link>
        <p>
          ExpoJuy pone en conversación a quienes producen, investigan,
          emprenden y transforman en Jujuy y la región.
        </p>
        <p>
          Esta nota reúne novedades, historias y recursos para acompañar la
          experiencia de quienes participan del encuentro.
        </p>
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
      <section className="section">
        <div className="container">
          <div
            className="chip-filters"
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

          <div className="map-layout">
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
          <section className="venue-location-section">
            <div className="venue-location-head">
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
              <div className="venue-transport-cards">
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
              <div className="venue-map-bezel">
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
      <section className="section sponsors-page">
        <div className="container">
          <header className="sponsors-header">
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
            {sponsors.map((sponsor) => {
              const mark = sponsorMarks[sponsor.name]
              const isCamComEx = sponsor.name === 'CamComEx Jujuy'
              return (
                <article
                  className={`sponsor-logo-card sponsor-logo-${mark.variant}`}
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
      <section className="final-cta">
        <div className="container final-cta-container">
          <div className="final-cta-text">
            <Users className="final-cta-icon" />
            <div>
              <p className="eyebrow">PARTICIPACIÓN</p>
              <h2>Tu empresa también puede acompañar ExpoJuy</h2>
            </div>
          </div>
          <div className="button-row final-cta-actions">
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
      <section className="section">
        <div className="container form-layout">
          <form
            id="formulario"
            className="form-card"
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
          <aside className="contact-aside">
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
  const [open, setOpen] = useState<string | null>(null)
  const list = faqs.filter((f) =>
    `${f.question} ${f.answer} ${f.category}`
      .toLowerCase()
      .includes(q.toLowerCase()),
  )
  return (
    <>
      <PageHero title="Preguntas frecuentes">
        Información para resolver las primeras dudas sobre la experiencia.
      </PageHero>
      <section className="section">
        <div className="container narrow">
          <label className="search-box">
            <span>Buscar una pregunta</span>
            <div>
              <Search />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Escribí una palabra clave"
              />
            </div>
          </label>
          <div className="accordion">
            {list.map((f) => (
              <div key={f.id}>
                <h2>
                  <button
                    aria-expanded={open === f.id}
                    onClick={() => setOpen(open === f.id ? null : f.id)}
                  >
                    <span>
                      <Badge>{f.category}</Badge>
                      {f.question}
                    </span>
                    <ChevronDown />
                  </button>
                </h2>
                {open === f.id && <p>{f.answer}</p>}
              </div>
            ))}
          </div>
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
