import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { PageHead, Reveal } from '../components/Bits'
import EnquiryForm from '../components/EnquiryForm'
import { CONTACT, waLink } from '../config'

export default function Contact() {
  return (
    <>
      <PageHead title="Your next opportunity starts with a conversation" text="Tell us what you are planning. We serve individuals, businesses and organizations from Abuja, Nigeria." />
      <section className="sec"><div className="wrap split" style={{ alignItems: 'start' }}>
        <Reveal>
          <div className="cards">
            <a className="contact-card wa" href={waLink()} target="_blank" rel="noopener noreferrer"><span className="ico"><MessageCircle /></span><span><b>{CONTACT.whatsappDisplay}</b><small>WhatsApp only. Please do not call this number.</small></span></a>
            <a className="contact-card" href={`tel:${CONTACT.callTel}`}><span className="ico"><Phone /></span><span><b>{CONTACT.callDisplay}</b><small>Calls only. Please do not message this number.</small></span></a>
            <a className="contact-card" href={`mailto:${CONTACT.email}`}><span className="ico"><Mail /></span><span><b>{CONTACT.email}</b><small>Email</small></span></a>
            <div className="contact-card"><span className="ico"><MapPin /></span><span><b>{CONTACT.location}</b><small>Serving individuals, businesses and organizations</small></span></div>
          </div>
        </Reveal>
        <div id="enquiry" style={{ scrollMarginTop: 90 }}><EnquiryForm mode="contact" /></div>
      </div></section>
    </>
  )
}
