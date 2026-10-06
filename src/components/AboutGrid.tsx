import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'

const PRINCIPLES = [
  ['Ask before assuming', 'If a step, rule, or system behavior cannot be verified, I flag it instead of filling in the gap myself.'],
  ['Make ownership visible', 'A task is easier to finish when the owner, next action, deadline, and approval point are clear.'],
  ['Keep it usable', 'The goal is not the longest SOP or the fanciest tracker. It is something the team will actually use.'],
  ['Learn the system', 'New tools do not scare me. I am used to exploring unfamiliar software and learning the workflow behind it.'],
]

export default function AboutGrid() {
  return (
    <section className="pgrid sharra-page" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I&apos;m {profile.firstName}.</h1>
        <p className="pgrid__lede">I like leaving things more organized than I found them.</p>
      </header>

      <div className="home__glass sharra-about">
        <section className="sharra-about__story">
          <span className="pgrid__eyebrow">The short version</span>
          <h2>I started with writing. I stayed for the process behind it.</h2>
          <p>
            I began in content writing, moved into technical writing, and eventually realized that the part I enjoyed most was not just writing the document. It was figuring out how the work actually happened.
          </p>
          <p>
            What needs to happen next? Who owns it? Where does the information live? Why does this step keep getting missed?
          </p>
          <p>
            That naturally pulled me toward operations support. Today I bring both sides together: I can help with the trackers, follow-ups, files, research, coordination, and day-to-day details that keep work moving, while also building the SOPs, knowledge bases, and documentation that make those processes easier to repeat.
          </p>
          <p>
            I have spent more than five years working with technical teams, stakeholders, SaaS products, documentation systems, and changing processes. I learn new tools quickly, ask questions instead of guessing, and care about making information useful to the person who needs it next.
          </p>
          <Link className="sharra-text-link" to="/contact">
            Tell me what needs organizing
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
          </Link>
        </section>

        <section className="sharra-principles" aria-labelledby="principles-title">
          <span className="pgrid__eyebrow">How I think about the work</span>
          <h2 id="principles-title">Useful beats impressive.</h2>
          <div className="sharra-principles__grid">
            {PRINCIPLES.map(([title, body], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
