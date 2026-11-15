import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { GithubIcon, LinkedinIcon } from '../../components/ui/BrandIcons'

const socials = [
  { href: 'https://github.com/Nathan-cardoso', label: 'GitHub', Icon: GithubIcon },
  {
    href: 'https://www.linkedin.com/in/nathanlinhares/',
    label: 'LinkedIn',
    Icon: LinkedinIcon,
  },
  { href: 'mailto:nathancar.linhares77@gmail.com', label: 'E-mail', Icon: Mail },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-5xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Nathan Cardoso
          </h1>

          <p className="mt-5 font-mono text-base text-ink sm:text-lg md:text-xl">
            <span className="text-arch">/</span>{' '}
            <TypeAnimation
              sequence={[
                'Desenvolvedor Back-end',
                2200,
                'Engenheiro de Software',
                2200,
                'Entusiasta de Cybersegurança',
                2200,
              ]}
              wrapper="span"
              speed={45}
              deletionSpeed={70}
              repeat={Infinity}
              preRenderFirstString={false}
              aria-label="Desenvolvedor Back-end, Engenheiro de Software e entusiasta de Cybersegurança"
            />
          </p>

          <p className="mt-8 max-w-xl leading-relaxed text-muted">
            Construo APIs e aplicações web com Java, Spring Boot, Node.js, NestJS e React,
            com interesse em cloud e cybersegurança.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-line bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-arch hover:text-arch"
            >
              Ver projetos
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/curriculo.pdf"
              download="curriculo.pdf"
              className="inline-flex items-center gap-2 border-b-2 border-[#0b6fa4] bg-arch px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-arch-strong"
            >
              <Download size={16} />
              Baixar CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center border border-line text-muted transition-colors hover:border-arch hover:text-arch"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <span className="font-mono text-xs text-muted">Pau dos Ferros, RN — Brasil</span>
          </div>
        </div>
      </div>
    </section>
  )
}
