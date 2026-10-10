import { useState, type FormEvent } from 'react'
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react'
import { CONTACT, SERVICES, waLink } from '../config'

type Props = { mode: 'contact' | 'proposal' }
const PROPOSAL_TYPES = ['Business proposal', 'Church / ministry proposal', 'Cleaning service proposal', 'Project proposal', 'Partnership proposal', 'Sponsorship proposal', 'Investment proposal', 'Contract bidding document', 'Funding / grant proposal', 'Other']
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || ''

export default function EnquiryForm({ mode }: Props) {
  const [v, setV] = useState<Record<string, string>>(() => {
    const q = new URLSearchParams(window.location.search).get('service')
    return mode === 'contact' && q && SERVICES.some(x => x.title === q) ? { kind: q } as Record<string, string> : {} as Record<string, string>
  })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const [state, setState] = useState<'idle' | 'sending' | 'ready' | 'sent' | 'failed'>('idle')
  const set = (k: string) => (e: { target: { value: string } }) => setV(p => ({ ...p, [k]: e.target.value }))
  const kind = mode === 'proposal' ? 'Proposal type' : 'Service needed'

  const validate = () => {
    const e: Record<string, string> = {}
    if (!v.name?.trim()) e.name = 'Enter your name.'
    if (!v.email?.trim() && !v.phone?.trim()) { e.email = 'Enter an email address or phone number so we can reply.' }
    if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address, for example name@example.com.'
    if (!v.kind) e.kind = `Choose a ${kind.toLowerCase()}.`
    if (!v.message?.trim() || v.message.trim().length < 15) e.message = 'Tell us a little more about what you need (at least 15 characters).'
    if (mode === 'proposal' && !v.audience?.trim()) e.audience = 'Say who the proposal is for.'
    setErrs(e); return Object.keys(e).length === 0
  }
  const summary = () => [
    `Name: ${v.name}`, v.email && `Email: ${v.email}`, v.phone && `Phone: ${v.phone}`, `${kind}: ${v.kind}`,
    mode === 'proposal' && `Intended audience: ${v.audience}`, v.deadline && `Deadline: ${v.deadline}`, `Details: ${v.message}`,
  ].filter(Boolean).join('\n')
  const subject = `${mode === 'proposal' ? 'Proposal enquiry' : 'Service enquiry'}: ${v.kind || ''}`

  const submit = async (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    if (!ENDPOINT) { setState('ready'); return }
    setState('sending')
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...v, subject }) })
      setState(r.ok ? 'sent' : 'failed')
    } catch { setState('failed') }
  }
  const field = (k: string) => ({ 'aria-invalid': !!errs[k], 'aria-describedby': errs[k] ? `${mode}-${k}-e` : undefined, onChange: set(k), value: v[k] || '' })
  const E = ({ k }: { k: string }) => errs[k] ? <span className="err" id={`${mode}-${k}-e`} role="alert">{errs[k]}</span> : null

  if (state === 'sent') return <div className="status" role="status"><h3><CheckCircle2 size={20} style={{ verticalAlign: -4 }} /> Enquiry sent</h3><p>Thank you, {v.name}. We will reply using the details you gave. If it is urgent, message us on WhatsApp.</p></div>

  return (
    <form className="form" onSubmit={submit} noValidate aria-label={mode === 'proposal' ? 'Proposal enquiry form' : 'Contact enquiry form'}>
      <div className="row2">
        <label>Full name<input autoComplete="name" {...field('name')} /><E k="name" /></label>
        <label>Email<input type="email" autoComplete="email" {...field('email')} /><E k="email" /></label>
      </div>
      <div className="row2">
        <label>Phone or WhatsApp (optional)<input type="tel" autoComplete="tel" {...field('phone')} /></label>
        <label>{kind}
          <select {...field('kind')}>
            <option value="">Select one</option>
            {(mode === 'proposal' ? PROPOSAL_TYPES : SERVICES.map(s => s.title)).map(s => <option key={s}>{s}</option>)}
          </select><E k="kind" />
        </label>
      </div>
      {mode === 'proposal' && <label>Who is the proposal for?<input placeholder="For example: a bank, a church board, a government agency" {...field('audience')} /><E k="audience" /></label>}
      <label>{mode === 'proposal' ? 'Project objectives and requirements' : 'Your message'}<textarea {...field('message')} /><E k="message" /></label>
      <label>Deadline (optional)<input type="date" {...field('deadline')} /></label>

      {state !== 'ready' && <button className="btn btn-blue" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : ENDPOINT ? 'Send enquiry' : 'Prepare my enquiry'}</button>}
      {state === 'failed' && <p className="status" role="alert">Your enquiry did not send. Check your connection and try again, or use WhatsApp or email below.</p>}
      {state === 'ready' && (
        <div className="status" role="status">
          <h3>Your enquiry is ready. Choose how to send it.</h3>
          <p>This website has no server inbox. Nothing is sent until you tap one of these buttons.</p>
          <div className="cta-row">
            <a className="btn btn-gold" href={waLink(`Hello iSTAND CONSULT,\n\n${summary()}`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Send on WhatsApp</a>
            <a className="btn btn-line dark" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary())}`}><Mail size={18} />Send by email</a>
          </div>
        </div>
      )}
    </form>
  )
}
