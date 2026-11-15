import Section from '../../components/ui/Section'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <Section id="experience" title="Experiência" index="03">
      <ol className="relative space-y-10 border-l border-line pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 border-2 border-page bg-arch"
            />
            <p className="font-mono text-xs uppercase tracking-wider text-arch">
              {item.period}
            </p>
            <h3 className="mt-2 text-lg font-bold">
              {item.role} <span className="font-normal text-muted">· {item.company}</span>
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            {item.tags && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
