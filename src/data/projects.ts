import type { Project } from '../types'

export const projects: Project[] = [
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
  {
    title: 'Tiro ao Alvo com Merry',
    description:
      'Jogo 3D de tiro ao alvo com Three.js, com modos canhão e telespectador em um cenário de navio pirata.',
    tags: ['JavaScript', 'Three.js', 'WebGL'],
    href: 'https://nathan-cardoso.github.io/Tiro-ao-alvo/system/',
    repo: 'https://github.com/Nathan-cardoso/Tiro-ao-alvo',
  },
  {
    title: 'Gerenciador de Horários',
    description:
      'Aplicação em Java para organização de horários acadêmicos, desenvolvida para a disciplina de Programação Orientada a Objetos.',
    tags: ['Java', 'POO'],
    repo: 'https://github.com/Nathan-cardoso/Gerenciador-de-horarios',
  },
]
