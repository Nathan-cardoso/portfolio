import { useEffect, useState } from 'react'
import Section from '../../components/ui/Section'

const skills = [
  {
    label: 'Back-end',
    items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Linux', 'Docker', 'CI/CD'],
  },
  { label: 'Front-end', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
]

export default function About() {
  const [showPixelArt, setShowPixelArt] = useState(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShowPixelArt((value) => !value)
    }, 20000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <Section id="about" title="Sobre" index="01">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-justify text-lg leading-relaxed text-muted">
            Sou <span className="font-semibold text-ink">Nathan Cardoso Linhares</span>,
            desenvolvedor back-end e estudante de Engenharia de Software na UFERSA. Tenho
            interesse em pesquisas voltadas à <span className="text-ink">cybersegurança</span> e
            já trabalhei com desenvolvimento de aplicações web, APIs, cloud e inteligência
            artificial.
          </p>
          <p className="mt-4 text-justify leading-relaxed text-muted">
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

        </div>

        <div className="space-y-6">
          <figure className="border border-line bg-surface-2 p-2 shadow-[6px_6px_0_0_var(--arch)]">
            <div className="relative aspect-square w-full overflow-hidden bg-surface">
              <img
                src="/profile.jpeg"
                alt="Foto de Nathan Cardoso"
                loading="lazy"
                aria-hidden={showPixelArt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  showPixelArt ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                }`}
              />
              <img
                src="/my-profile-pixel-art.png"
                alt="Versão em pixel art de Nathan Cardoso"
                loading="lazy"
                aria-hidden={!showPixelArt}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  showPixelArt ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
              />
            </div>
            <figcaption className="flex items-center justify-between px-1 pt-2 font-mono text-[11px] text-muted">
              <span>nathan-cardoso</span>
              <span className="text-arch">
                {showPixelArt ? '~/pixel-art' : '~/profile'}
              </span>
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
                    className="cursor-pointer border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-arch hover:text-arch"
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
