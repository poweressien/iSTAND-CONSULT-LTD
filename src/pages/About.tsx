import { Link } from 'react-router-dom'
import { PageHead, Reveal, Portrait } from '../components/Bits'

const VALUES = [['Professionalism', 'We treat every document as if our name is on the front, because it is.'], ['Integrity', 'We give honest advice and never promise outcomes we cannot control.'], ['Excellence', 'We research, structure and review until the work is ready to use.']]
export default function About() {
  return (
    <>
      <PageHead title="A brand you can trust, built around your ideas" text="iSTAND CONSULT LTD is a professional consulting and proposal-writing company based in Abuja, Nigeria." />
      <section className="sec"><div className="wrap split">
        <Reveal><Portrait /></Reveal>
        <Reveal delay={0.1}><div className="rule" /><h2 className="h2">Who we are</h2><p className="lead">We work with individuals, businesses and organizations who have something worth pursuing and need it presented clearly. That might be a proposal, a company profile, a plan or a body of research. Our job is to make the idea understandable and the document credible.</p></Reveal>
      </div></section>
      <section className="sec ice"><div className="wrap split">
        <Reveal><div className="quote-block"><small style={{ marginTop: 0, marginBottom: 12 }}>Mission</small><p>To help clients turn ideas into clear, professional documents and plans that open doors.</p></div></Reveal>
        <Reveal delay={0.1}><div className="quote-block" style={{ background: 'linear-gradient(140deg,var(--navy),var(--ink))' }}><small style={{ marginTop: 0, marginBottom: 12 }}>Vision</small><p>To be a consulting brand that individuals and organizations trust with the work that matters to them.</p></div></Reveal>
      </div></section>
      <section className="sec"><div className="wrap">
        <Reveal><h2 className="h2">What we stand for</h2></Reveal>
        <div className="cols3">{VALUES.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div></section>
      <section className="sec ice"><div className="wrap split">
        <Reveal><div className="rule" /><h2 className="h2">How we approach client work</h2></Reveal>
        <Reveal delay={0.1}><p className="lead" style={{ marginTop: 0 }}>We start by listening, then agree scope, deadline and deliverables before we write anything. We research, draft, and refine with you. You always know what is being produced and what happens next.</p><Link to="/process" className="btn btn-blue" style={{ marginTop: 24 }}>See our process</Link></Reveal>
      </div></section>
    </>
  )
}
