import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../config'
import { PageHead, ICONS, Ticks, Reveal } from '../components/Bits'

export default function Services() {
  return (
    <>
      <PageHead title="Services built around your documents and plans" text="Seven areas of support for individuals, businesses and organizations. Scope and pricing are confirmed with you before work begins." />
      <div className="wrap">
        {SERVICES.map(s => { const I = ICONS[s.icon]; return (
          <section key={s.id} id={s.id} className="sdetail">
            <Reveal><span className="ico" style={{ marginBottom: 18 }}><I size={26} /></span><h2 className="h2" style={{ fontSize: 'clamp(1.8rem,3.4vw,2.6rem)' }}>{s.title}</h2><p className="lead">{s.long}</p></Reveal>
            <Reveal delay={0.08}>
              <Ticks items={s.items} />
              <div className="cta-row" style={{ marginTop: 0 }}>
                <Link className="btn btn-blue" to={`/contact?service=${encodeURIComponent(s.title)}#enquiry`}>Request This Service</Link>
                {s.id === 'proposal-writing' && <Link className="btn btn-line dark" to="/proposal-writing">Proposal writing details <ArrowRight size={16} /></Link>}
              </div>
            </Reveal>
          </section>
        ) })}
      </div>
    </>
  )
}
