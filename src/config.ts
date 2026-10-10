// Edit this file to update business details, the promotion and the process.
export const CONTACT = {
  whatsappDisplay: '+234 816 305 4527',
  whatsappNumber: '2348163054527',
  callDisplay: '+234 912 126 5608',
  callTel: '+2349121265608',
  email: 'jephtahessien100@gmail.com',
  location: 'Abuja, Nigeria',
}
export const waLink = (text = "Hello iSTAND CONSULT, I'd like to discuss a project. ") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`

// PROMOTION: hidden unless enabled AND today falls between start and end (inclusive).
// The October flyer is historical, so this ships switched off. Confirm with the company before enabling.
export const PROMO = {
  enabled: false,
  headline: 'Enjoy 50% off on any kind of proposal',
  discount: 50,
  start: '2026-10-01',
  end: '2026-10-20',
  terms: 'Offer applies to new proposal requests confirmed within the promotion period. Scope, deliverables and final pricing are agreed with the client before work begins.',
}
export const promoActive = (now = new Date()) => {
  if (!PROMO.enabled) return false
  const t = now.getTime()
  return t >= new Date(PROMO.start + 'T00:00:00').getTime() && t <= new Date(PROMO.end + 'T23:59:59').getTime()
}

export const PROCESS = [
  ['Initial consultation', 'We talk through what you are planning, who it is for and what you need produced.'],
  ['Understanding your objectives', 'We pin down your goals, audience, constraints and deadline in plain terms.'],
  ['Research and information gathering', 'We collect the facts, figures and context the document must stand on.'],
  ['Planning and preparation', 'We agree the structure and key messages before any drafting begins.'],
  ['Draft development', 'We write the first full draft in a clear, professional format.'],
  ['Review and agreed revisions', 'You review the draft and we refine it within the revisions agreed upfront.'],
  ['Final delivery', 'You receive the finished document, ready to present or submit.'],
]

export const SERVICES = [
  { id: 'proposal-writing', icon: 'FileText', title: 'Proposal Writing', short: 'Clear, persuasive proposals for every kind of opportunity.',
    long: 'Structured proposals written around your objective and your reader.',
    items: ['Business proposals', 'Church and ministry proposals', 'Cleaning service proposals', 'Project proposals', 'Partnership proposals', 'Sponsorship proposals', 'Investment proposals', 'Contract bidding documents', 'Funding and grant proposals (where offered)'] },
  { id: 'business-solutions', icon: 'Handshake', title: 'Business Solutions', short: 'Turn a business idea into organized, usable documentation.',
    long: 'Support for people and organizations who need their business thinking written down properly.',
    items: ['Business documentation', 'Business planning support', 'Organizing and structuring business ideas'] },
  { id: 'strategic-planning', icon: 'TrendingUp', title: 'Strategic Planning', short: 'Goals, roadmaps and plans you can actually follow.',
    long: 'Practical planning documents that connect what you want to what you will do.',
    items: ['Goal setting', 'Project roadmaps', 'Planning documents', 'Strategic development'] },
  { id: 'research-consultancy', icon: 'Lightbulb', title: 'Research & Consultancy', short: 'Well-researched information and analysis behind your decisions.',
    long: 'Research support and consultancy deliverables matched to what the client needs.',
    items: ['Research support', 'Information gathering', 'Analysis and findings', 'Consultancy deliverables'] },
  { id: 'professional-support', icon: 'Users', title: 'Professional Support Services', short: 'Hands-on professional support for your documents and projects.',
    long: 'Ask us what you need. We will confirm what we can support before work starts.',
    items: ['Document preparation and formatting', 'General professional support (confirm scope with us)'] },
  { id: 'project-management', icon: 'Settings', title: 'Project Management', short: 'Plans, timelines and tracking that keep work on course.',
    long: 'Organization for projects that need clear steps, owners and dates.',
    items: ['Project planning', 'Timelines', 'Coordination documents', 'Progress tracking', 'Project organization'] },
  { id: 'company-profile', icon: 'IdCard', title: 'Company Profile & Documentation', short: 'A professional face for your business on paper.',
    long: 'Documents that present who you are and what you can do.',
    items: ['Company profiles', 'Organizational profiles', 'Capability statements', 'Other professional business documents'] },
]
