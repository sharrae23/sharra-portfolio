import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, User, Medal, Stack, Quotes } from '@/components/slab'
import { profile } from '@/data/profile'

type CardHeadProps = {
  Icon: typeof FolderOpen
  title: string
  desc: string
}

function CardHead({ Icon, title, desc }: CardHeadProps) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento sharra-bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects sharra-bento__projects">
        <CardHead
          Icon={FolderOpen}
          title="Projects"
          desc="SOPs, knowledge bases, documentation systems, and operations work."
        />
        <div className="sharra-mini-list" aria-hidden="true">
          <span>Construction SOPs</span>
          <span>SaaS knowledge base</span>
          <span>Documentation workflow</span>
          <span>Technical manuals</span>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead
          Icon={User}
          title="About"
          desc="Technical writer turned documentation-focused operations partner."
        />
        <div className="sharra-signature" aria-hidden="true">
          <span>Hi, I&apos;m</span>
          <strong>{profile.firstName}.</strong>
        </div>
      </Link>

      <Link to="/showcase" className="bento__card bento__card--ai">
        <CardHead
          Icon={Quotes}
          title="How I work"
          desc="I learn the real workflow, find the gaps, then make it easier to repeat."
        />
        <div className="sharra-flow" aria-hidden="true">
          <span>Learn</span><i />
          <span>Organize</span><i />
          <span>Document</span><i />
          <span>Improve</span>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead
          Icon={Medal}
          title="Credentials"
          desc="Computer Engineering · C2 English · ISO 9001 training."
        />
        <div className="sharra-credential" aria-hidden="true">
          <strong>5+</strong>
          <span>years in technical writing</span>
        </div>
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead
          Icon={Stack}
          title="Services"
          desc="Operations support with a documentation brain."
        />
        <ul className="bento__media bento__offers" role="list">
          {[
            ['01', 'Virtual Assistance', 'Keep the moving pieces visible.'],
            ['02', 'SOPs & Processes', 'Turn know-how into repeatable steps.'],
            ['03', 'Knowledge Bases', 'Help users find answers faster.'],
            ['04', 'Document Management', 'Keep files, requests, and updates in order.'],
          ].map(([n, title, note]) => (
            <li key={n} className="bento__offer">
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">{n}</span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/experience" className="bento__card bento__card--quotes">
        <CardHead
          Icon={Quotes}
          title="Experience"
          desc="5+ years across SaaS, technical documentation, knowledge bases, and operations."
        />
        <div className="sharra-mini-list sharra-mini-list--compact" aria-hidden="true">
          <span>SaaS documentation</span>
          <span>Cross-functional coordination</span>
          <span>ISO-aligned document control</span>
        </div>
      </Link>
    </nav>
  )
}
