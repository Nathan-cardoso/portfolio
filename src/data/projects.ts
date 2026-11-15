import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Painel de métricas',
    description:
      'Dashboard em tempo real com gráficos, filtros e exportação de relatórios para times de produto.',
    tags: ['React', 'TypeScript', 'Recharts', 'Tailwind'],
    href: '#',
    repo: '#',
  },
  {
    title: 'CLI de deploy',
    description:
      'Ferramenta de linha de comando para automatizar builds e publicações em múltiplos ambientes.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Design system',
    description:
      'Biblioteca de componentes acessíveis, documentada e focada em consistência entre produtos.',
    tags: ['React', 'Storybook', 'A11y'],
    href: '#',
    repo: '#',
  },
]
