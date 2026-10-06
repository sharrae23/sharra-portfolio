import { useMemo } from 'react'

type Tool = {
  name: string
  mark: string
}

export const tools: Tool[] = [
  { name: 'Confluence', mark: 'C' },
  { name: 'Notion', mark: 'N' },
  { name: 'Help Scout', mark: 'HS' },
  { name: 'Airtable', mark: 'A' },
  { name: 'Jira', mark: 'J' },
  { name: 'Monday.com', mark: 'M' },
  { name: 'Asana', mark: 'As' },
  { name: 'Trello', mark: 'T' },
  { name: 'Google Workspace', mark: 'G' },
  { name: 'Microsoft 365', mark: '365' },
  { name: 'Canva', mark: 'Ca' },
  { name: 'ChatGPT', mark: 'AI' },
  { name: 'WordPress', mark: 'W' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="tools-marquee__item">
            <span className="tools-marquee__tile tools-marquee__tile--monogram">
              <span className="tools-marquee__monogram">{tool.mark}</span>
            </span>
            <span className="tools-marquee__label">{tool.name}</span>
          </div>
        ))}
      </div>
      <ul className="sr-only">
        {tools.map((tool) => <li key={tool.name}>{tool.name}</li>)}
      </ul>
    </section>
  )
}
