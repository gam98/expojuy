import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function Button({children,className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`btn ${className}`} {...props}>{children}</button>}
export function LinkButton({to,children,variant='primary'}:{to:string;children:ReactNode;variant?:'primary'|'secondary'|'light'}){return <Link className={`btn btn-${variant}`} to={to}>{children}</Link>}
export function Badge({children,className=''}:{children:ReactNode;className?:string}){return <span className={`badge ${className}`}>{children}</span>}
export function PageHero({eyebrow='EXPOJUY 2026',title,children}:{eyebrow?:string;title:string;children:ReactNode}){return <section className="page-hero"><div className="container"><p className="eyebrow hero-anim-left hero-delay-1">{eyebrow}</p><h1 className="hero-anim-left hero-delay-2">{title}</h1><p className="hero-anim-left hero-delay-3">{children}</p></div></section>}
export function SectionHeading({eyebrow,title,copy}:{eyebrow?:string;title:string;copy?:string}){return <header className="section-heading">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy&&<p>{copy}</p>}</header>}
export function EmptyState({title,copy}:{title:string;copy:string}){return <div className="empty-state"><h3>{title}</h3><p>{copy}</p></div>}
