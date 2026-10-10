import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Figure } from './Bits'

export default function Hero() {
  const stack = useRef<HTMLDivElement>(null)
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    stack.current?.style.setProperty('--ry', `${-16 + x * 14}deg`)
    stack.current?.style.setProperty('--rx', `${6 - y * 12}deg`)
  }
  const reset = () => { stack.current?.style.removeProperty('--ry'); stack.current?.style.removeProperty('--rx') }
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Turning Ideas into Lasting Impacts.</h1>
          <p className="sub">Strategic Consulting. Exceptional Proposals. Lasting Results.</p>
          <p className="desc">iSTAND CONSULT helps individuals, businesses, and organizations transform ideas into clear strategies, compelling proposals, and professional documents that create opportunities.</p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-gold">Let's Discuss Your Project <ArrowRight size={18} /></Link>
            <Link to="/services" className="btn btn-line dark">Explore Our Services</Link>
          </div>
          <div className="checks" aria-label="Our promise">
            {['Professional', 'Reliable', 'Result-driven'].map(t => <span key={t}><i><Check size={14} strokeWidth={3} /></i>{t}</span>)}
          </div>
        </div>
        <div className="stage" onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
          <Figure />
          <div className="stack" ref={stack}>
            <div className="sheet s3"><span className="tab">Business Plan</span></div>
            <div className="sheet s2"><span className="tab">Company Profile</span></div>
            <div className="sheet s1">
              <div className="k"><span>Project Proposal</span><span>Draft</span></div>
              <h2>Your idea, in a form others can approve.</h2>
              <div className="sk d" style={{ width: '58%', animationDelay: '.2s' }} />
              <div className="sec-t">Objectives</div>
              <div className="sk" style={{ width: '100%', animationDelay: '.35s' }} /><div className="sk" style={{ width: '92%', animationDelay: '.45s' }} /><div className="sk" style={{ width: '70%', animationDelay: '.55s' }} />
              <div className="sec-t">Approach and timeline</div>
              <div className="bars">{[38, 52, 46, 70, 88].map((h, i) => <b key={i} style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.08}s` }} />)}</div>
              <div className="sk g" style={{ width: '34%', animationDelay: '1s' }} />
              <div className="seal">iSTAND<br />Consult</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
