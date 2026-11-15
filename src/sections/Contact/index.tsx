import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../../components/ui/BrandIcons'
import Section from '../../components/ui/Section'

const channels = [
  {
    href: 'mailto:nathancar.linhares77@gmail.com',
    label: 'nathancar.linhares77@gmail.com',
    Icon: Mail,
  },
  {
    href: 'https://github.com/Nathan-cardoso',
    label: 'github.com/Nathan-cardoso',
    Icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/nathanlinhares/',
    label: 'linkedin.com/in/nathanlinhares',
    Icon: LinkedinIcon,
  },
]

export default function Contact() {
  return (
    <Section id="contact" title="Contato" index="04">
      <div className="border border-[#0b6fa4] bg-arch p-8 text-white sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
          $ ./say-hello
        </p>
        <h3 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Vamos construir algo juntos?
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-white/80">
          Estou aberto a oportunidades, colaborações e trocas sobre desenvolvimento
          back-end, cloud, dados e cybersegurança. Baseado em Pau dos Ferros, RN.
        </p>

        <a
          href="mailto:nathancar.linhares77@gmail.com"
          className="mt-8 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-arch transition-colors hover:bg-[#e8f3fa]"
        >
          <Mail size={16} />
          Enviar e-mail
          <ArrowUpRight size={16} />
        </a>

        <ul className="mt-10 grid gap-3 border-t border-white/20 pt-6 sm:grid-cols-3">
          {channels.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-2 font-mono text-xs text-white/80 transition-colors hover:text-white"
              >
                <Icon size={14} className="shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
