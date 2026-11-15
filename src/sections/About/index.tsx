import Section from '../../components/ui/Section'

const stats = [
  { value: '2025', label: 'freelancer desde' },
  { value: 'UFERSA', label: 'eng. de software' },
  { value: 'RN', label: 'Pau dos Ferros' },
]

const skills = [
  { label: 'Back-end', items: ['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'MySQL'] },
  { label: 'Front-end', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  {
    label: 'Dados & Infra',
    items: ['Pandas', 'Matplotlib', 'Prophet', 'AWS', 'Docker', 'Linux', 'Git'],
  },
]

export default function About() {
  return (
    <Section id="about" title="Sobre" index="01">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-muted">
            Sou <span className="font-semibold text-ink">Nathan Cardoso Linhares</span>,
            desenvolvedor back-end e estudante de Engenharia de Software na UFERSA. Tenho
            interesse em pesquisas voltadas à <span className="text-ink">cybersegurança</span> e
            já trabalhei com desenvolvimento de aplicações web, APIs, cloud e inteligência
            artificial.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Sou curioso por natureza e fascinado por tecnologia e livros. Gosto de entender
            como as coisas funcionam por baixo dos panos e de transformar esse aprendizado em
            soluções práticas, simples e bem construídas.
          </p>

          <div className="mt-8 border-l-2 border-arch bg-surface px-4 py-3 font-mono text-sm text-muted">
            <span className="text-arch">$</span> cat interesses.txt
            <span className="ml-2 text-muted/70">
              # cybersegurança, cloud, dados e open source
            </span>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-px border border-line bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface-2 p-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-xl font-bold text-arch sm:text-2xl">
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
          <figure className="border border-line bg-surface-2 p-2 shadow-[6px_6px_0_0_var(--arch)]">
            <img
              src="/profile.jpeg"
              alt="Foto de Nathan Cardoso"
              loading="lazy"
              className="aspect-square w-full object-cover grayscale transition duration-300 hover:grayscale-0"
            />
            <figcaption className="flex items-center justify-between px-1 pt-2 font-mono text-[11px] text-muted">
              <span>nathan-cardoso</span>
              <span className="text-arch">~/profile</span>
            </figcaption>
          </figure>

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
