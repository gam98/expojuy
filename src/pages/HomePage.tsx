import { useEffect } from 'react';
import { ArrowRight, Atom, Building2, CalendarDays, Cpu, Factory, Gem, Globe2, Leaf, Map, MapPin, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { activities, exhibitors, sectorsList, sponsors } from '../data/content';
import { news } from '../data/news';
import { Badge, LinkButton, SectionHeading } from '../components/ui';
import { camcomexLogo } from '../assets/brand';
import { Countdown } from '../components/Countdown';
import { HeroOrbit } from '../components/HeroOrbit';
import { expoValores } from '../assets/valores';

const icons = [Gem, Leaf, Globe2, Cpu, Building2, Atom, Factory, Sparkles];

export function HomePage() {
  useEffect(() => {
    // Si no está disponible IntersectionObserver, revelar todo de inmediato
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal-group').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Observador para activar la animación de entrada al hacer scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal-group');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SECCIÓN 1: HERO (Aparición inicial inmediata con 3 ondas fluidas) */}
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow hero-anim-left hero-delay-1">
              EXPOSICIÓN PRODUCTIVA Y EMPRESARIAL · PROPUESTA 2026
            </p>
            <h1 className="hero-anim-left hero-delay-2">
              El futuro se encuentra <em>acá.</em>
            </h1>
            <p className="hero-anim-left hero-delay-3">
              Jujuy conecta producción, empresas, innovación y conocimiento para proyectar una región que avanza con identidad propia.
            </p>
            <div className="button-row hero-anim-left hero-delay-4">
              <LinkButton to="/entradas" variant="light">
                Entradas <ArrowRight />
              </LinkButton>
              <LinkButton to="/agenda" variant="secondary">
                Agenda
              </LinkButton>
              <LinkButton to="/expositores" variant="secondary">
                Expositores
              </LinkButton>
            </div>
          </div>
          <div className="hero-orbit" aria-label="Información del evento">
            <HeroOrbit />
            <div className="date-card hero-anim-right hero-delay-3">
              <div className="date-badge">
                <span className="date-badge-month">OCT</span>
                <strong className="date-badge-days">15—17</strong>
                <span className="date-badge-year">2026</span>
              </div>
              <div className="date-info">
                <div className="date-info-row">
                  <span className="date-icon-box" aria-hidden="true">
                    <CalendarDays className="date-icon" />
                  </span>
                  <div className="date-info-texts">
                    <small className="date-info-label">FECHA</small>
                    <strong className="date-info-val">15 al 17 de Octubre</strong>
                  </div>
                </div>
                <div className="date-info-divider" aria-hidden="true"></div>
                <div className="date-info-row">
                  <span className="date-icon-box" aria-hidden="true">
                    <MapPin className="date-icon" />
                  </span>
                  <div className="date-info-texts">
                    <small className="date-info-label">LUGAR</small>
                    <span className="date-info-val">Predio Ferial · Jujuy</span>
                  </div>
                </div>
              </div>
            </div>
            <Countdown />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: INDICADORES (STATS) */}
      <section className="stats container reveal-group" aria-label="Indicadores demostrativos">
        {[
          ['120+', 'Expositores estimados'],
          ['45', 'Actividades demo'],
          ['8', 'Sectores productivos'],
          ['15K', 'Visitantes proyectados'],
        ].map((x, index) => (
          <div key={x[1]} className={`hero-anim-up hero-delay-${index + 1}`}>
            <strong>{x[0]}</strong>
            <span>{x[1]}</span>
          </div>
        ))}
      </section>

      {/* SECCIÓN 3: SOBRE LA EXPOSICIÓN */}
      <section className="section home-about reveal-group">
        <div className="container split">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="SOBRE LA EXPOSICIÓN"
              title="Una vidriera para el talento y la producción de Jujuy"
              copy="ExpoJuy 2026 se proyecta como un punto de encuentro entre quienes producen, innovan, investigan, invierten y construyen comunidad."
            />
            <div className="hero-anim-left hero-delay-2">
              <LinkButton to="/sobre-expojuy" variant="secondary">
                Conocer la propuesta
              </LinkButton>
            </div>
          </div>
          <div className="values-grid hero-anim-right hero-delay-2" aria-label="Valores de la propuesta">
            {expoValores.map((v, index) => (
              <div key={v.id} className={`value-card hero-anim-up hero-delay-${(index % 3) + 1}`}>
                <img src={v.image} alt={v.title} className="value-card-img" loading="lazy" />
                <div className="value-card-overlay" />
                <div className="value-card-content">
                  <span className="value-card-num">{v.num}</span>
                  <strong className="value-card-title">{v.title}</strong>
                  <span className="value-card-sub">{v.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: SECTORES PRODUCTIVOS */}
      <section className="section reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="UN TERRITORIO EN MOVIMIENTO"
              title="Todo lo que Jujuy produce. Todo lo que puede transformar."
              copy="Una experiencia para descubrir capacidades, construir vínculos y convertir ideas en desarrollo."
            />
          </div>
          <div className="sector-grid">
            {sectorsList.map((s, i) => {
              const Icon = icons[i];
              return (
                <Link
                  to={`/expositores?sector=${encodeURIComponent(s)}`}
                  className={`sector-card hero-anim-up hero-delay-${(i % 4) + 1}`}
                  key={s}
                >
                  <span>
                    <Icon />
                  </span>
                  <h3>{s}</h3>
                  <ArrowRight />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: AGENDA ABIERTA */}
      <section className="section section-tint reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading eyebrow="AGENDA ABIERTA" title="Conversaciones que mueven la región" />
          </div>
          <div className="agenda-list">
            {activities.slice(0, 4).map((a, index) => (
              <article key={a.id} className={`hero-anim-left hero-delay-${(index % 4) + 1}`}>
                <time>{a.time}</time>
                <div>
                  <Badge>{a.category}</Badge>
                  <h3>{a.title}</h3>
                  <p>
                    {a.speakers.join(' · ')} — {a.location}
                  </p>
                </div>
                <Link aria-label={`Ver ${a.title}`} to="/agenda">
                  <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
          <div className="hero-anim-left hero-delay-3" style={{ marginTop: '2rem' }}>
            <LinkButton to="/agenda">Ver agenda completa</LinkButton>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: QUIÉNES HACEN */}
      <section className="section reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading eyebrow="QUIÉNES HACEN" title="Un ecosistema productivo conectado" />
          </div>
          <div className="logo-grid">
            {exhibitors.slice(0, 6).map((e, index) => (
              <div key={e.id} className={`hero-anim-up hero-delay-${(index % 3) + 1}`}>
                <span>{e.name.slice(0, 2).toUpperCase()}</span>
                <strong>{e.name}</strong>
                <small>{e.sector}</small>
              </div>
            ))}
          </div>
          <div className="hero-anim-left hero-delay-3" style={{ marginTop: '2rem' }}>
            <LinkButton to="/expositores" variant="secondary">
              Explorar expositores
            </LinkButton>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: PLANO CONCEPTUAL (MAPA) */}
      <section className="map-teaser section reveal-group">
        <div className="container split">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading
              eyebrow="ORIENTATE"
              title="Un predio pensado para encontrarse"
              copy="Explorá pabellones, auditorios, servicios y áreas de experiencia en nuestro plano conceptual."
            />
            <div className="hero-anim-left hero-delay-2">
              <LinkButton to="/mapa">
                Explorar mapa <Map />
              </LinkButton>
            </div>
          </div>
          <div className="mini-map hero-anim-right hero-delay-2" aria-hidden="true">
            <span className="zone z1">INNOVACIÓN</span>
            <span className="zone z2">EXPOSITORES</span>
            <span className="zone z3">AUDITORIO</span>
            <span className="zone z4">SERVICIOS</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: NOVEDADES */}
      <section className="section reveal-group">
        <div className="container">
          <div className="hero-anim-left hero-delay-1">
            <SectionHeading eyebrow="NOVEDADES" title="Lo que empieza a suceder" />
          </div>
          <div className="news-grid">
            {news.slice(0, 3).map((n, i) => (
              <article
                className={`${i === 0 ? 'featured' : ''} hero-anim-up hero-delay-${i + 1}`}
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
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <Link to={`/novedades/${n.id}`}>
                  Leer nota <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 9: SPONSORS */}
      <section className="sponsor-strip reveal-group">
        <div className="container">
          <p className="hero-anim-left hero-delay-1">Impulsan esta propuesta</p>
          <div className="hero-anim-right hero-delay-2">
            <img
              className="camcomex-mark"
              src={camcomexLogo}
              alt="Cámara de Comercio Exterior de Jujuy"
              width={1077}
              height={1008}
            />
            {sponsors.slice(1, 5).map((s) => (
              <span key={s.id}>{s.name}</span>
            ))}
          </div>
          <div className="hero-anim-left hero-delay-3">
            <Link to="/sponsors">Quiero ser sponsor →</Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 10: LLAMADO FINAL A LA ACCIÓN (FINAL CTA) */}
      <section className="final-cta reveal-group">
        <div className="container final-cta-container">
          <div className="hero-anim-left hero-delay-1 final-cta-text">
            <Users className="final-cta-icon" />
            <div>
              <p className="eyebrow">VOS TAMBIÉN SOS PARTE</p>
              <h2>El próximo encuentro empieza hoy.</h2>
            </div>
          </div>
          <div className="button-row hero-anim-right hero-delay-2 final-cta-actions">
            <LinkButton to="/entradas" variant="light">
              Entradas <ArrowRight />
            </LinkButton>
            <LinkButton to="/contacto?tipo=expositor" variant="secondary">
              Quiero exponer
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
