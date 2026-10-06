import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Mary Sharra',
  firstName: 'Mary',
  handle: '@marysharra',
  role: 'Documentation + Operations Support',
  avatarSrc: '/avatar.svg',
  verifiedLabel: '5+ years in technical writing and documentation',
  email: 'bmarysharra@gmail.com',
  location: 'Philippines · UTC+8',
  stats: [
    { value: '5+ yrs', label: 'documentation', Icon: Briefcase },
    { value: 'C2', label: 'English', Icon: SealCheck },
    { value: 'UTC+8', label: 'flexible overlap', Icon: Clock },
  ],
  displayName: { line1: 'Organize the work.', line2: 'Document the process.' },
  hero: {
    body: 'VA and documentation support for growing teams that need clearer workflows, reliable follow-through, and knowledge that does not live in one person\'s head.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Mary Sharra monogram',
  },
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/sharrabrila/',
      iconPath: '/icons/linkedin.svg',
    },
    {
      label: 'Upwork profile',
      href: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20',
      iconPath: '/icons/upwork.svg',
    },
  ],
}
