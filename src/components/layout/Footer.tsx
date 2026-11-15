const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t-[5px] border-arch bg-nav">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-xs text-[#999] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">© {year} Seu Nome</p>

        <p className="font-mono">
          Design inspirado no <span className="text-white">Arch Linux</span> · feito com{' '}
          <span className="text-arch">React</span>,{' '}
          <span className="text-arch">TypeScript</span> e{' '}
          <span className="text-arch">Tailwind CSS</span>
        </p>

        <a href="#hero" className="font-mono transition-colors hover:text-white">
          voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
