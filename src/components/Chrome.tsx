import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUp, MessageCircle } from 'lucide-react'
import { CONTACT, waLink } from '../config'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'light' : ''}`} aria-label="iSTAND CONSULT LTD home">
      <svg width="30" height="42" viewBox="0 0 34 46" aria-hidden="true"><circle cx="17" cy="6" r="5.5" fill="#1fb6ff"/><path d="M17 15c-5 0-8 3-8 8v11h3l1 11h8l1-11h3V23c0-5-3-8-8-8z" fill="#1fb6ff"/></svg>
      <span><b>STAND</b><i>CONSULT</i></span>
    </Link>
  )
}

const LINKS: [string, string][] = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/proposal-writing', 'Proposal Writing'], ['/process', 'Our Process'], ['/contact', 'Contact']]

export function Navbar() {
    const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Logo />
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav id="menu" className={`links ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `l ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
          <Link to="/contact" className="btn btn-gold">Request a Consultation</Link>
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Logo light />
            <p style={{ marginTop: 16, maxWidth: 340 }}>Turning Ideas into Lasting Impacts. A brand you can trust.</p>
            <p style={{ marginTop: 10 }}>Serving individuals, businesses and organizations.</p>
          </div>
          <div><h4>Explore</h4>{LINKS.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
          <div>
            <h4>Get in touch</h4>
            <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp only: {CONTACT.whatsappDisplay}</a>
            <a href={`tel:${CONTACT.callTel}`}>Calls only: {CONTACT.callDisplay}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span>{CONTACT.location}</span>
          </div>
        </div>
        <div className="copy"><span>© {new Date().getFullYear()} iSTAND CONSULT LTD. All rights reserved.</span><span>Professionalism, integrity, excellence.</span></div>
      </div>
    </footer>
  )
}

export function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 700); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <div className="floats">
      {show && <button className="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button>}
      <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={20} /><span>WhatsApp us</span></a>
    </div>
  )
}
