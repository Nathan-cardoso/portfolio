import Section from '../../components/ui/Section'

const stats = [
  { value: '4+', label: 'anos de experiência' },
  { value: '20+', label: 'projetos entregues' },
  { value: '10+', label: 'tecnologias' },
]

const skills = [
  { label: 'Front-end', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
  { label: 'Back-end', items: ['Node.js', 'PostgreSQL', 'Prisma'] },
  { label: 'Ferramentas', items: ['Git', 'Linux', 'Figma', 'Docker'] },
]

export default function About() {
  return (
    <Section id="about" title="Sobre" index="01">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-muted">
            Sou <span className="font-semibold text-ink">Seu Nome</span>, desenvolvedor
            front-end apaixonado por interfaces bem construídas. Trabalho na interseção
            entre código e design, sempre buscando soluções simples para problemas
            complexos.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Ao longo dos últimos anos participei da criação de design systems,
            dashboards e aplicações web de ponta a ponta — do protótipo à entrega em
            produção, com foco em performance e acessibilidade.
          </p>

          <div className="mt-8 border-l-2 border-arch bg-surface px-4 py-3 font-mono text-sm text-muted">
            <span className="text-arch">$</span> keep it simple
            <span className="ml-2 text-muted/70"># princípio que guia meu trabalho</span>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-px border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface-2 p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl font-bold text-arch">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
