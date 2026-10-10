import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHead, Ticks, Reveal, FAQ, Promo } from '../components/Bits'
import EnquiryForm from '../components/EnquiryForm'
import { SERVICES, promoActive, waLink } from '../config'

const FAQS: [string, string][] = [
  ['Can you guarantee my proposal will be accepted or funded?', 'No. Funders and clients make their own decisions. We focus on what we control: research, structure, clarity and professional presentation.'],
  ['What do you need from me to start?', 'The purpose of the proposal, who will read it, any guidelines from the recipient, supporting facts and your deadline. We help you gather the rest.'],
  ['How long does a proposal take?', 'It depends on the type, length and research needed. We confirm a timeline with you before work begins.'],
  ['What does it cost?', 'Pricing depends on the scope. We agree the price with you before we start writing.'],
  ['Can I request changes to the draft?', 'Yes. Revision arrangements are agreed upfront, and we refine the draft with your feedback.'],
]
export default function ProposalWriting() {
  const types = SERVICES[0].items
  return (
    <>
      <PageHead title="Proposals that make your case clearly" text="A good proposal explains what you want to do, why it matters and how it will work, in a form your reader can approve." />
      <section className="sec"><div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal><div className="rule" /><h2 className="h2">Why structure matters</h2></Reveal>
        <Reveal delay={0.1}><p className="lead" style={{ marginTop: 0 }}>Readers skim. A well-ordered proposal puts the problem, the plan, the budget and the outcome where they expect to find them. It shows you understand the opportunity and have thought it through. We do not promise funding or awards. We help you present your best case.</p></Reveal>
      </div></section>
      {promoActive() && <Promo />}
      <section className="sec ice"><div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal><h2 className="h2">Proposal types we support</h2><div className="chips">{types.map(t => <span key={t}>{t}</span>)}</div></Reveal>
        <Reveal delay={0.1}>
          <h3 className="h2" style={{ fontSize: '1.7rem' }}>What you receive</h3>
          <div className="sdetail" style={{ display: 'block', padding: '16px 0 0', border: 0 }}><Ticks items={['A structured, professionally formatted proposal document', 'Content built around your stated objectives and audience', 'A review round with agreed revisions', 'Final document delivered ready to submit or present']} /></div>
        </Reveal>
      </div></section>
      <section className="sec"><div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal><div className="rule" /><h2 className="h2">Writing and review process</h2><p className="lead">We brief, research, draft and review with you. Details, timeline and revisions are agreed before we begin.</p><Link to="/process" className="btn btn-line dark" style={{ marginTop: 22 }}>See the full process</Link></Reveal>
        <Reveal delay={0.1}><div className="cols3" style={{ gridTemplateColumns: '1fr', marginTop: 0 }}>{[['Brief', 'You tell us the proposal type, purpose, audience and deadline.'], ['Research and draft', 'We gather information and write the first full draft.'], ['Review and finalize', 'You review, we revise as agreed, and deliver the final.']].map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></Reveal>
      </div></section>
      <section className="sec ice" id="enquiry" style={{ scrollMarginTop: 80 }}><div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal><h2 className="h2">Tell us about your proposal</h2><p className="lead">Fill in what you know. We will follow up to confirm scope, timeline and price.</p><a className="btn btn-gold" style={{ marginTop: 24 }} href={waLink('Hello iSTAND CONSULT, I need help with a proposal. ')} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Chat on WhatsApp</a></Reveal>
        <EnquiryForm mode="proposal" />
      </div></section>
      <section className="sec"><div className="wrap" style={{ maxWidth: 860 }}><h2 className="h2">Frequently asked questions</h2><FAQ items={FAQS} /></div></section>
    </>
  )
}
