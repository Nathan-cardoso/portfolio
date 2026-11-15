import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  index: string
  children: ReactNode
}

export default function Section({ id, title, index, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-arch">{index}</span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <span className="hidden h-px flex-1 bg-line sm:block" />
          <span className="hidden font-mono text-xs text-muted sm:block">// {id}</span>
        </div>
        {children}
      </div>
    </section>
  )
}
