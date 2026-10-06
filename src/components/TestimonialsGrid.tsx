const ROLES = [
  {
    years: '2024 — Present',
    company: 'Yempo Solutions',
    title: 'Technical Writer',
    summary: 'Confluence knowledge base, ISO-aligned document control, QMS support, and Jira-based documentation request tracking.',
    tags: ['Confluence', 'ISO 9001', 'Jira', 'Document control'],
  },
  {
    years: '2026',
    company: 'SaaS Platform · Freelance',
    title: 'Technical Writer',
    summary: 'Internal and client-facing SaaS documentation, Help Scout and Notion KB maintenance, Airtable document tracking, and monthly release notes.',
    tags: ['Help Scout', 'Notion', 'Airtable', 'Release notes'],
  },
  {
    years: '2023 — 2024',
    company: 'Concentrix · Google Account',
    title: 'Technical Writer',
    summary: 'Managed technical documentation across four teams, authored 100+ KB articles, coordinated reviews, and helped establish a documentation request process.',
    tags: ['Knowledge base', 'Stakeholders', 'Process documentation'],
  },
  {
    years: '2021 — 2023',
    company: 'RT Lawrence',
    title: 'Technical Writer',
    summary: 'Installation guides, technical manuals, documentation style guidance, training materials, and coordination with developers, QAs, and stakeholders.',
    tags: ['Manuals', 'Training', 'Developers', 'QA'],
  },
  {
    years: '2017 — 2021',
    company: 'Freelance',
    title: 'Content Writer / Editor',
    summary: 'Long-form and short-form content across multiple niches, plus proofreading, editing, research, formatting, and basic SEO.',
    tags: ['Writing', 'Editing', 'Research', 'SEO'],
  },
]

const CREDENTIALS = [
  ['B.S. Computer Engineering', 'Bulacan State University'],
  ['C2 English Proficiency', 'EF SET'],
  ['ISO 9001:2015 Internal Audit Training', 'Quality management systems'],
  ['Certified Learning & Development Associate', 'CredEx Technology'],
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid sharra-page" aria-labelledby="experience-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="experience-title">Documentation is the through-line.</h1>
        <p className="pgrid__lede">
          My work has moved from content into technical writing, knowledge management, process documentation, and operations support.
        </p>
      </header>

      <div className="home__glass sharra-experience">
        <div className="sharra-timeline">
          {ROLES.map((role) => (
            <article className="sharra-role" key={role.company + role.years}>
              <span className="sharra-role__years">{role.years}</span>
              <div className="sharra-role__body">
                <span className="sharra-role__company">{role.company}</span>
                <h2>{role.title}</h2>
                <p>{role.summary}</p>
                <ul className="sharra-tags" role="list">
                  {role.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="sharra-credentials" aria-label="Credentials">
          <span className="pgrid__eyebrow">Credentials</span>
          <h2>Technical foundation. Clear communication.</h2>
          {CREDENTIALS.map(([title, note]) => (
            <div className="sharra-credential-row" key={title}>
              <strong>{title}</strong>
              <span>{note}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  )
}
