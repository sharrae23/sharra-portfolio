import { Link } from 'react-router-dom'
import { CaretRight, Stack, Coffee, Play } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt={profile.name} width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">{profile.name}</span>
        <span className="hprofile__handle">{profile.role}</span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Work that makes the next step clearer.', desc: 'SOPs, KBs, workflows, and documentation systems.', Icon: Coffee },
  { n: '02', label: 'Services', to: '/services', title: 'Support for the work behind the work.', desc: 'VA support, SOPs, KBs, and document management.', Icon: Stack },
  { n: '03', label: 'Showcase', to: '/showcase', title: 'From scattered to structured.', desc: 'See the method I use to learn and improve a workflow.', Icon: Coffee, accent: true },
  { n: '04', label: 'Experience', to: '/experience', title: '5+ years in documentation.', desc: 'SaaS, technical teams, process owners, and operations.', Icon: Stack },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'I like leaving things more organized than I found them.', Icon: Coffee },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/contact" className="hsec__link">
            Need help bringing order to the chaos?
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link to="/contact" className="hproof" aria-label="Start a conversation with Mary">
        <span className="hproof__stage sharra-mobile-cta" aria-hidden="true">
          <Play size={26} weight="fill" />
        </span>
        <span className="hproof__copy">
          <span className="hproof__title">Tell me what keeps getting lost, repeated, or stuck.</span>
          <span className="hproof__meta">I&apos;ll help you make the next step clearer.</span>
        </span>
      </Link>
    </>
  )
}
