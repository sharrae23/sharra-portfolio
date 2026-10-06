import { ArrowUpRight } from '@/components/slab'

type Project = {
  index: string
  title: string
  eyebrow: string
  problem: string
  work: string
  result: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Construction SOP System',
    eyebrow: 'SOPs · Process Documentation',
    problem: 'A construction business owner was the bottleneck because recurring processes largely lived in his head.',
    work: 'Turned owner walkthroughs and working knowledge into practical SOPs and checklists the team could follow without going back to him for every step.',
    result: 'A clearer operating reference for repeatable construction workflows.',
    tags: ['SOPs', 'Checklists', 'Owner knowledge transfer'],
  },
  {
    index: '02',
    title: 'SaaS Knowledge Base & Document Library',
    eyebrow: 'SaaS · Help Content',
    problem: 'A growing software product needed client-facing and internal documentation kept accurate as the product changed.',
    work: 'Created and updated help content in Notion and Help Scout, built an Airtable document library, and produced monthly release notes.',
    result: 'Documentation stayed easier to find, track, and update alongside product releases.',
    tags: ['Notion', 'Help Scout', 'Airtable'],
  },
  {
    index: '03',
    title: 'Documentation Request Workflow',
    eyebrow: 'Workflow Improvement',
    problem: 'Document requests were coming through different channels and approvals were easy to lose track of.',
    work: 'Helped establish a clearer request and status-tracking process, centralized visibility, and reduced the need for manual chasing.',
    result: 'Better visibility into what was pending, who owned the next action, and where requests were stuck.',
    tags: ['Monday.com', 'Tracking', 'Approvals'],
  },
  {
    index: '04',
    title: 'Enterprise Knowledge Base Management',
    eyebrow: 'Knowledge Base · Cross-functional',
    problem: 'Multiple teams were changing processes while documentation still needed to stay accurate and useful.',
    work: 'Managed documentation across four teams, authored 100+ KB articles in one role, coordinated reviews, and helped establish a KB request process.',
    result: 'A more consistent, maintainable body of internal knowledge across changing workflows.',
    tags: ['KBs', 'Stakeholders', 'Process changes'],
  },
  {
    index: '05',
    title: 'Technical Manuals & Training Materials',
    eyebrow: 'Technical Writing',
    problem: 'New software tools and features needed documentation that both technical and customer-facing teams could actually use.',
    work: 'Built installation guides and manuals, created a documentation style guide, translated development releases into training materials, and worked with developers and QAs.',
    result: 'Clearer technical documentation across support, solutions, and customer audiences.',
    tags: ['Manuals', 'Style guide', 'Developers & QA'],
  },
  {
    index: '06',
    title: 'Confluence Documentation Redesign',
    eyebrow: 'Documentation Design',
    problem: 'Existing technical pages needed a cleaner, more consistent layout without changing the underlying content.',
    work: 'Improved hierarchy, spacing, tables, long-list layouts, navigation, and visual consistency inside Confluence.',
    result: 'A cleaner baseline that can be applied across a larger documentation library.',
    tags: ['Confluence', 'Formatting', 'Information design'],
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid sharra-page" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Work that makes the next step clearer.</h1>
        <p className="pgrid__lede">
          A mix of documentation, operations, and process work. Client-sensitive details are intentionally generalized.
        </p>
      </header>

      <div className="home__glass sharra-projects">
        {PROJECTS.map((project) => (
          <article className="sharra-project" key={project.index}>
            <div className="sharra-project__top">
              <span className="sharra-project__index">{project.index}</span>
              <span className="sharra-project__eyebrow">{project.eyebrow}</span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </div>
            <h2>{project.title}</h2>
            <div className="sharra-project__body">
              <p><strong>The problem.</strong> {project.problem}</p>
              <p><strong>What I did.</strong> {project.work}</p>
              <p><strong>The result.</strong> {project.result}</p>
            </div>
            <ul className="sharra-tags" role="list">
              {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
