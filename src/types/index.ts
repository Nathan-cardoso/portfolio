export interface Project {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tags?: string[]
}
