import { FormEvent, useState } from 'react'
import { ArrowUpRight } from '@/components/slab'
import { profile } from '@/data/profile'
import { FAQS } from '@/data/faqs'
import { readLead, submitLead } from '@/lib/contact'

export default function ContactGrid() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    const lead = readLead(new FormData(event.currentTarget))
    if (!lead) {
      setError('Please check the required fields and try again.')
      return
    }
    try {
      await submitLead(lead)
      setSent(true)
    } catch {
      setError('Something went wrong. You can also email me directly.')
    }
  }

  return (
    <section className="pgrid sharra-page" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Contact</span>
        <h1 className="pgrid__title" id="contact-title">Got too many moving pieces?</h1>
        <p className="pgrid__lede">
          Tell me what keeps getting lost, repeated, or stuck. I&apos;ll help you make the next step clearer.
        </p>
      </header>

      <div className="home__glass sharra-contact">
        <aside className="sharra-contact__info">
          <span className="pgrid__eyebrow">Start here</span>
          <h2>Day-to-day support or a documentation problem. Both are welcome.</h2>
          <p>
            I work with growing teams, founders, and software businesses that need reliable follow-through, clearer processes, or documentation people can actually use.
          </p>

          <div className="sharra-contact__links">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
            <a href="https://www.upwork.com/freelancers/~018cf61028a8af7c20" target="_blank" rel="noopener noreferrer">
              View my Upwork profile
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <span className="sharra-contact__availability">Philippines · UTC+8 · Flexible overlap for international clients</span>
        </aside>

        <div className="sharra-contact__form-wrap">
          {sent ? (
            <div className="sharra-contact__sent">
              <span className="pgrid__eyebrow">Ready to send</span>
              <h2>Your mail app has the message.</h2>
              <p>Press send there and I&apos;ll get back to you as soon as I can.</p>
              <button type="button" onClick={() => setSent(false)}>Write another</button>
            </div>
          ) : (
            <form className="sharra-form" onSubmit={onSubmit}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
              <div className="sharra-form__row">
                <label>
                  <span>First name</span>
                  <input type="text" name="firstName" required placeholder="First name" />
                </label>
                <label>
                  <span>Last name</span>
                  <input type="text" name="lastName" required placeholder="Last name" />
                </label>
              </div>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@yourbusiness.com" />
              </label>
              <label>
                <span>What do you need help with?</span>
                <textarea name="message" required placeholder="A process, a pile of admin, a knowledge base, an SOP project..." />
              </label>
              <button type="submit">
                Send message
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
              </button>
              {error && <p className="sharra-form__error" role="alert">{error}</p>}
            </form>
          )}
        </div>

        <section className="sharra-faq" aria-labelledby="faq-title">
          <div>
            <span className="pgrid__eyebrow">FAQ</span>
            <h2 id="faq-title">A few things clients usually want to know.</h2>
          </div>
          <div className="sharra-faq__list">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
