import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar, Footer, ScrollTop } from './components/Chrome'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ProposalWriting from './pages/ProposalWriting'
import Process from './pages/Process'
import Contact from './pages/Contact'
import { PageHead } from './components/Bits'

function NotFound() {
  return <><PageHead title="Page not found" text="That page does not exist. Use the menu or go back to the home page." /><div className="wrap sec"><Link className="btn btn-blue" to="/">Back to home</Link></div></>
}
export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => { if (!hash) window.scrollTo(0, 0) }, [pathname, hash])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/proposal-writing" element={<ProposalWriting />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
