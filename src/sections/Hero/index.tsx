import { ArrowUpRight, Download, Mail } from 'lucide-react'
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

function Prompt({ command }: { command: string }) {
  return (
    <>
      <span className="text-[#6fbf73]">nathan@arch</span>{' '}
      <span className="text-[#777]">~</span>{' '}
      <span className="text-arch">%</span>{' '}
      <span className="text-[#e5e5e5]">{command}</span>
    </>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:26px_26px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)] dark:opacity-30"
      />

      <div className="relative mx-auto grid max-w-5xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-line bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-arch opacity-60" />
              <span className="relative inline-flex h-2 w-2 bg-arch" />
            </span>
            Disponível para novos projetos
          </div>

          <p className="mt-8 font-mono text-sm text-arch">$ whoami</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Nathan Cardoso
          </h1>
          <p className="mt-4 font-mono text-base text-muted sm:text-lg">
            back-end developer <span className="text-arch">/</span> software engineering
            student
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Desenvolvedor back-end e estudante de Engenharia de Software na UFERSA.
            Construo APIs e aplicações web com Python, Django, FastAPI e React, com
            interesse em cloud, dados e cybersegurança.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-b-2 border-[#0b6fa4] bg-arch px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-arch-strong"
            >
              Ver projetos
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/curriculo.pdf"
              download="curriculo.pdf"
              className="inline-flex items-center gap-2 border border-line bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-arch hover:text-arch"
            >
              <Download size={16} />
              Baixar CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
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
            <span className="ml-2 font-mono text-xs text-muted">// conecte-se</span>
          </div>
        </div>

        <div className="relative border border-[#3a3a3a] bg-[#1b1b1b] shadow-[6px_6px_0_0_var(--arch)]">
          <div className="flex items-center justify-between border-b border-[#3a3a3a] px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[11px] text-[#777]">nathan@arch: ~</span>
          </div>

          <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed sm:p-6">
            <div>
              <p>
                <Prompt command="cat about.txt" />
              </p>
              <p className="mt-1 pl-4 text-[#b0b0b0]">
                Desenvolvedor back-end focado em APIs, aplicações web e pesquisa em
                cybersegurança.
              </p>
            </div>

            <div>
              <p>
                <Prompt command="ls stack/" />
              </p>
              <p className="mt-1 pl-4 text-arch">python django fastapi node react</p>
            </div>

            <div>
              <p>
                <Prompt command="neofetch" />
              </p>
              <div className="mt-2 flex gap-4 pl-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center border border-arch/40 text-2xl font-bold text-arch">
                  N
                </div>
                <div className="space-y-0.5 text-[#b0b0b0]">
                  <p>
                    <span className="text-[#6fbf73]">nathan</span>@
                    <span className="text-[#6fbf73]">arch</span>
                  </p>
                  <p className="text-[#555]">-------------</p>
                  <p>
                    <span className="text-arch">OS</span>: Linux
                  </p>
                  <p>
                    <span className="text-arch">Shell</span>: bash
                  </p>
                  <p>
                    <span className="text-arch">Foco</span>: Back-end
                  </p>
                  <p>
                    <span className="text-arch">UFERSA</span>: Eng. Software
                  </p>
                </div>
              </div>
            </div>

            <p className="flex items-center gap-1">
              <span className="text-[#6fbf73]">root@arch</span>
              <span className="text-[#777]">~</span>
              <span className="text-arch">%</span>
              <span className="inline-block h-4 w-2 animate-blink bg-[#ddd]" />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
