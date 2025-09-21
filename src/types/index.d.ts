export type Tech =
  | 'react'
  | 'next'
  | 'node'
  | 'tailwind'
  | 'python'
  | 'react-native'
  | 'expo'

export interface Client {
  id: string
  name: string
  logo?: string
  site?: string
}

export interface Project {
  id: string
  title: string
  clientId: string
  summary: string
  tech: Tech[]
  github?: string
  liveUrl?: string
  cover?: string
}

export interface Social {
  type: 'github' | 'linkedin' | 'x' | 'website'
  url: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  photo?: string
  bio?: string
  tech: Tech[]
  socials?: Social[]
  reportsTo?: string
}

export interface Testimonial {
  id: string
  author: string
  company?: string
  quote: string
}

export interface Metrics {
  clients: number
  projects: number
  technologies: number
}
