import { ArrowUpRight } from '@/components/slab'

const SIGNALS = [
  {
    n: '01',
    title: 'The work is scattered.',
    body: 'Requests live in different channels, updates require chasing, or the same questions keep coming back to one person.',
  },
  {
    n: '02',
    title: 'I follow the real workflow.',
    body: 'I review the tools, source material, screenshots, conversations, and actual steps instead of relying only on how the process is supposed to work.',
  },
  {
    n: '03',
    title: 'I make the gaps visible.',
    body: 'Missing steps, unclear ownership, approval bottlenecks, exceptions, and handoffs get surfaced instead of quietly documented around.',
  },
  {
    n: '04',
    title: 'The process becomes usable.',
    body: 'The result might be an SOP, tracker, KB, checklist, workflow, or a combination of them, built around what the team actually needs next.',
  },
]

const EXAMPLES = [
  ['Scattered document requests', 'Central request and status tracking'],
  ['Owner-dependent process', 'SOP + checklist the team can follow'],
  ['Growing SaaS product', 'KB + release-note maintenance'],
  ['Dense technical documentation', 'Cleaner hierarchy and page system'],
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid sharra-page" aria-labelledby="showcase-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Showcase</span>
        <h1 className="pgrid__title" id="showcase-title">From scattered to structured.</h1>
        <p className="pgrid__lede">
          The deliverable changes. The way I approach the problem stays consistent.
        </p>
      </header>

      <div className="home__glass sharra-showcase">
        <section className="sharra-showcase__hero">
          <span className="pgrid__eyebrow">The working principle</span>
          <h2>I do not just make the document look finished. I make the next action easier to understand.</h2>
          <p>
            That means learning the workflow first, validating what really happens, and building only the amount of structure the process actually needs.
          </p>
        </section>

        <ol className="sharra-signal" role="list">
          {SIGNALS.map((item) => (
            <li key={item.n}>
              <span className="sharra-signal__n">{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="sharra-before-after" aria-labelledby="patterns-title">
          <div className="sharra-before-after__head">
            <span className="pgrid__eyebrow">Common patterns</span>
            <h2 id="patterns-title">What the work often looks like before and after.</h2>
          </div>
          <div className="sharra-before-after__grid">
            {EXAMPLES.map(([before, after]) => (
              <div className="sharra-pair" key={before}>
                <span>{before}</span>
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                <strong>{after}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
