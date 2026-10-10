import { useEffect, useState, type ReactNode } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Plus, Minus, FileText, Handshake, TrendingUp, Lightbulb, Users, Settings, IdCard } from 'lucide-react'
import { PROCESS, PROMO, waLink } from '../config'

export const ICONS: Record<string, typeof FileText> = { FileText, Handshake, TrendingUp, Lightbulb, Users, Settings, IdCard }

export function useSeo(title: string, desc: string) {
  useEffect(() => {
    document.title = `${title} | iSTAND CONSULT LTD`
    document.querySelector('meta[name=description]')?.setAttribute('content', desc)
  }, [title, desc])
}

export function Figure({ className = 'fig' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 120 330" fill="currentColor" aria-hidden="true"><circle cx="60" cy="26" r="20"/><path d="M60 58c-20 0-30 12-30 30v96h14l6 140h20l6-140h14V88c0-18-10-30-30-30z"/></svg>
}
export function Portrait({ sizes = '(max-width:900px) 80vw, 460px' }: { sizes?: string }) {
  return (
    <div className="portrait">
      <img src="/portrait-900.jpg" srcSet="/portrait-480.jpg 480w, /portrait-900.jpg 900w" sizes={sizes} width={900} height={900} loading="lazy" decoding="async"
        alt="A smiling professional in a white shirt, royal blue tie and blue waistcoat, holding a suit jacket" />
    </div>
  )
}
export function PageHead({ title, text }: { title: string; text: string }) {
  useSeo(title, text)
  return <section className="phead"><Figure /><div className="wrap"><div className="rule" /><h1>{title}</h1><p>{text}</p></div></section>
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <>{children}</>
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
}

export function Ticks({ items }: { items: string[] }) {
  return <ul>{items.map(i => <li key={i}><Check size={18} aria-hidden="true" />{i}</li>)}</ul>
}

export function ProcessList({ ice = false }: { ice?: boolean }) {
  void ice
  return (
    <div>
      <ol className="stairs">
        {PROCESS.map(([t, d], i) => <li key={t} style={{ ['--i' as string]: i }}><h3>{t}</h3><p>{d}</p><span className="n" aria-hidden="true">{i + 1}</span></li>)}
      </ol>
      <p className="stairs-note">This is our proposed service workflow. Timelines, deliverables, pricing and revision arrangements are confirmed with you before work begins.</p>
    </div>
  )
}

export function FAQ({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq">
      {items.map(([q, a], i) => {
        const on = open === i
        return (
          <div key={q}>
            <h3><button aria-expanded={on} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(on ? null : i)}>{q}{on ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button></h3>
            <AnimatePresence initial={false}>
              {on && <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className="ans" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.25 }}><p>{a}</p></motion.div>}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export function Promo() {
  return (
    <section className="sec"><div className="wrap">
      <div className="promo">
        <div className="big">{PROMO.discount}<small>% off</small></div>
        <div>
          <h2 style={{ fontSize: 'clamp(1.6rem,3.4vw,2.4rem)', fontWeight: 800 }}>{PROMO.headline}</h2>
          <p style={{ marginTop: 10, color: '#d6e4ff' }}>Valid {PROMO.start} to {PROMO.end}.</p>
          <div className="cta-row"><Link to="/proposal-writing#enquiry" className="btn btn-gold">Request a proposal</Link><a className="btn btn-line" href={waLink('Hello iSTAND CONSULT, I would like to ask about your proposal promotion.')} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a></div>
          <p className="t">{PROMO.terms}</p>
        </div>
      </div>
    </div></section>
  )
}
