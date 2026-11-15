import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Odallyta Acessórios',
    description:
      'Landing page para uma marca de acessórios femininos, com identidade visual elegante e seções de produtos, história e contato.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Landing Page'],
    href: 'https://odallyta.pages.dev/',
  },
  {
    title: 'Pesca Tralhas',
    description:
      'Jogo 2D educativo sobre poluição dos rios e saneamento, alinhado aos ODS da ONU. Desenvolvido em Unity com foco em conscientização ambiental.',
    tags: ['Unity', 'C#', 'Game Design'],
    repo: 'https://github.com/Nathan-cardoso/pesca-tralhas',
  },
  {
    title: 'Análise de Arboviroses — RN',
    description:
      'Análise de séries temporais e previsão de casos de dengue, chikungunya e zika em municípios do Rio Grande do Norte.',
    tags: ['Python', 'Pandas', 'ARIMA', 'Data Science'],
    repo: 'https://github.com/Nathan-cardoso/analise-arboviroses-rn',
  },
]
