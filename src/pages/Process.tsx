import { Link } from 'react-router-dom'
import { PageHead, ProcessList } from '../components/Bits'
export default function Process() {
  return (
    <>
      <PageHead title="How we work with you" text="A clear path from first conversation to final document. This is our proposed service workflow, and we adapt it to each project." />
      <section className="sec"><div className="wrap">
        <ProcessList />
        <Link to="/contact" className="btn btn-blue" style={{ marginTop: 34 }}>Start with a consultation</Link>
      </div></section>
    </>
  )
}
