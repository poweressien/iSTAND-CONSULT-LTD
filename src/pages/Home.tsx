import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Target, FileCheck2, Clock, HeartHandshake, Compass, MessageCircle, Lightbulb, ClipboardList, FileText } from 'lucide-react'
import { SERVICES, promoActive, waLink } from '../config'
import { ICONS, Reveal, ProcessList, Promo, Portrait, useSeo } from '../components/Bits'
import Hero from '../components/Hero'

const WHY = [
  [Target, 'Well researched and strategic', 'Each document is built on facts and a clear purpose.'],
  [FileCheck2, 'Professional presentation', 'Clean structure and formatting your reader will take seriously.'],
  [Clock, 'Timely delivery', 'We agree dates with you upfront and plan the work around them.'],
  [HeartHandshake, 'Client satisfaction', 'We work with you until the document says what you need it to.'],
  [ShieldCheck, 'Professionalism and integrity', 'Honest advice, and no overpromising.'],
  [Compass, 'A focus on practical results', 'Documents designed to be used, presented and acted on.'],
] as const
const SPANS: [number, number][] = [[3, 2], [3, 1], [3, 1], [2, 1], [2, 1], [2, 1], [6, 1]]

export default function Home() {
  useSeo('Turning Ideas into Lasting Impacts', 'iSTAND CONSULT LTD helps individuals, businesses and organizations turn ideas into clear strategies, compelling proposals and professional documents. Abuja, Nigeria.')
  return (
    <>
      <Hero />

      <section className="brush" aria-label="Our promise">
        <svg className="bg" viewBox="0 0 1000 220" preserveAspectRatio="none" aria-hidden="true">
          <defs><filter id="rough" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.035 0.12" numOctaves="3" seed="4" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="26" /></filter>
            <linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor="#06155a" /><stop offset="1" stopColor="#1d3fbf" /></linearGradient></defs>
          <path filter="url(#rough)" fill="url(#bg)" d="M20 40 C200 15 520 30 980 24 L972 190 C700 205 300 192 24 200 Z" />
        </svg>
        <div className="brush-in"><h2>A Brand You Can Trust.</h2><span className="ul" /><p>Your Vision. Our Expertise. Real Results.</p></div>
      </section>

      <section className="sec"><div className="wrap">
        <div className="split" style={{ alignItems: 'start' }}>
          <Reveal><div className="rule" /><h2 className="h2">Ideas Deserve More Than Possibility. They Deserve a Plan.</h2></Reveal>
          <Reveal delay={0.1}><p className="lead" style={{ marginTop: 0 }}>Most good ideas stall at the same point: nobody has written them down in a form others can understand, fund or approve. We help you develop the idea, structure the opportunity and prepare the professional documents that carry it forward.</p></Reveal>
        </div>
        <div className="path">
          <div><Lightbulb color="#1d3fbf" /><h3>Your idea</h3><p>What you want to build, win or fund.</p></div>
          <div className="arr"><ArrowRight /></div>
          <div><ClipboardList color="#1d3fbf" /><h3>A clear plan</h3><p>Objectives, approach and timeline, written down.</p></div>
          <div className="arr"><ArrowRight /></div>
          <div><FileText color="#22b8ff" /><h3>A professional document</h3><p>Ready to present, submit or act on.</p></div>
        </div>
      </div></section>

      <section className="sec ice"><div className="wrap">
        <Reveal><h2 className="h2">Seven ways we can help</h2><p className="lead">From a single proposal to a full planning document, choose the support that fits what you are building.</p></Reveal>
        <div className="bento">
          {SERVICES.map((s, i) => { const I = ICONS[s.icon]; const [c, r] = SPANS[i]; const cls = i === 0 ? 'big' : i === 6 ? 'wide' : ''
            return (
              <Link key={s.id} to={`/services#${s.id}`} className={`tile ${cls}`} style={{ gridColumn: `span ${c}`, gridRow: `span ${r}` }}>
                <span className="ico"><I size={i === 0 ? 32 : 26} /></span>
                <div><h3>{s.title}</h3><p style={{ marginTop: 8 }}>{s.short}</p></div>
                {i === 0 && <ul>{s.items.slice(0, 8).map(x => <li key={x}>{x}</li>)}</ul>}
                <span className="go">{i === 0 ? 'See proposal writing' : 'Learn more'} <ArrowRight size={16} /></span>
              </Link>
            ) })}
        </div>
      </div></section>

      <section className="sec navy"><div className="wrap why">
        <div className="sticky"><div className="rule" /><h2 className="h2">Why choose iSTAND CONSULT?</h2><p className="lead">These are the commitments we hold ourselves to on every piece of work.</p></div>
        <div className="why-list">{WHY.map(([I, t, d]) => <div key={t}><I size={26} /><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
      </div></section>

      {promoActive() && <Promo />}

      <section className="sec"><div className="wrap">
        <Reveal><div className="rule" /><h2 className="h2">From first call to final document</h2><p className="lead">Our proposed workflow in seven steps. Details are confirmed with you before work begins.</p></Reveal>
        <ProcessList />
      </div></section>

      <section className="band"><div className="wrap band-grid">
        <div>
        <h2>Your Next Opportunity Starts With a Conversation.</h2>
        <p>Tell us what you are planning, and let's explore how we can help you move forward.</p>
        <div className="cta-row"><Link to="/contact" className="btn btn-gold">Start Your Project <ArrowRight size={18} /></Link><a className="btn btn-line" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Chat on WhatsApp</a></div>
        </div>
        <Portrait sizes="(max-width:900px) 250px, 320px" />
      </div></section>
    </>
  )
}
