import { ArrowUpRight, Globe } from 'lucide-react'
import { GithubIcon } from '../../components/ui/BrandIcons'
import Section from '../../components/ui/Section'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <Section id="projects" title="Projetos" index="02">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const href = project.href ?? project.repo
          const isSite = Boolean(project.href)

          if (!href) return null

          return (
            <a
              key={project.title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${isSite ? 'Visitar site' : 'Ver código'} de ${project.title} em uma nova aba`}
              className="group flex cursor-pointer flex-col border border-line bg-surface-2 transition-all hover:-translate-y-1 hover:border-arch hover:shadow-[4px_4px_0_0_var(--arch)]"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {isSite ? (
                    <Globe size={14} className="text-arch" />
                  ) : (
                    <GithubIcon size={14} className="text-arch" />
                  )}
                  {isSite ? 'Site' : 'Código'}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-colors group-hover:text-arch"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold transition-colors group-hover:text-arch">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          )
        })}
      </div>
    </Section>
  )
}
