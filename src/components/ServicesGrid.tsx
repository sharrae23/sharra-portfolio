import { CheckCircle } from '@/components/slab'

type Service = {
  index: string
  title: string
  description: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Virtual Assistance & Operations Support',
    description: 'Keep the moving pieces visible and moving without needing constant reminders.',
    bullets: ['Trackers, spreadsheets, and follow-ups', 'Research, scheduling support, and file organization', 'Project coordination and day-to-day operational support'],
  },
  {
    index: '02',
    title: 'SOP & Process Documentation',
    description: 'Turn what your team already knows into practical steps people can actually follow.',
    bullets: ['Stakeholder walkthroughs and process discovery', 'SOPs, checklists, decision points, and handoffs', 'Process-gap and workflow-improvement recommendations'],
  },
  {
    index: '03',
    title: 'Knowledge Bases & Help Documentation',
    description: 'Build documentation around what users are trying to accomplish, not just around product features.',
    bullets: ['Help articles, user guides, FAQs, and tutorials', 'Release notes and ongoing documentation updates', 'KB structure, article organization, and content maintenance'],
  },
  {
    index: '04',
    title: 'Document Management & Workflow Support',
    description: 'Keep requests, files, approvals, and documentation libraries easier to find and maintain.',
    bullets: ['Document libraries and repositories', 'Request, review, and approval tracking', 'Version consistency and documentation status monitoring'],
  },
]

const STAGES = [
  ['01', 'Learn the real workflow', 'Walk through the process, tools, people, and exceptions instead of documenting the idealized version.'],
  ['02', 'Make the next step obvious', 'Organize ownership, handoffs, decisions, and reference material so people know what happens next.'],
  ['03', 'Leave a system behind', 'Build documentation and tracking that stays useful after the first task or project is finished.'],
]

export default function ServicesGrid() {
  return (
    <section className="pgrid sharra-page" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">Support for the work behind the work.</h1>
        <p className="pgrid__lede">
          I can help with the day-to-day details and build the documentation that makes those details easier to repeat.
        </p>
      </header>

      <div className="home__glass sharra-services">
        <section className="sharra-method" aria-labelledby="method-title">
          <div className="sharra-method__intro">
            <span className="pgrid__eyebrow">How I work</span>
            <h2 id="method-title">Simple enough to use. Structured enough to last.</h2>
            <p>I ask questions instead of guessing, validate the real workflow, and keep the final system practical.</p>
          </div>
          <ol className="sharra-method__steps">
            {STAGES.map(([n, title, body]) => (
              <li key={n}>
                <span>{n}</span>
                <div><strong>{title}</strong><p>{body}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <div className="sharra-services__grid">
          {SERVICES.map((service) => (
            <article className="sharra-service" key={service.index}>
              <span className="sharra-service__index">{service.index}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul role="list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}><CheckCircle size={16} weight="fill" aria-hidden="true" />{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
