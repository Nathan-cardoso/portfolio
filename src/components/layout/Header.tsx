import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useTheme } from '../../hooks/useTheme'

const links = [
  { href: 'about', label: 'Sobre' },
  { href: 'projects', label: 'Projetos' },
  { href: 'experience', label: 'Experiência' },
  { href: 'contact', label: 'Contato' },
]

const sectionIds = ['hero', ...links.map((link) => link.href)]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b-[5px] border-arch bg-nav">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a href="#hero" className="group flex items-center gap-2.5" aria-label="Ir para o início">
          <span className="grid h-7 w-7 place-items-center bg-arch font-mono text-[11px] font-bold text-white">
            ZN
          </span>
          <span className="font-mono text-sm font-bold text-[#999] transition-colors group-hover:text-white">
            zen<span className="text-arch">@</span>portfolio
          </span>
        </a>

        <nav className="hidden items-center md:flex" aria-label="Seções do portfólio">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              aria-current={active === link.href ? 'location' : undefined}
              className={`relative px-3 py-2 text-sm font-semibold transition-colors hover:text-white ${
                active === link.href ? 'text-white' : 'text-[#999]'
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute inset-x-3 -bottom-3 h-0.5 bg-arch" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="grid h-9 w-9 place-items-center border border-white/10 text-[#999] transition-colors hover:border-arch hover:text-white"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border border-white/10 text-[#999] transition-colors hover:border-arch hover:text-white md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Seções do portfólio"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-2.5 font-mono text-sm transition-colors hover:text-white ${
                    active === link.href ? 'text-white' : 'text-[#999]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-arch">#{link.href}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
