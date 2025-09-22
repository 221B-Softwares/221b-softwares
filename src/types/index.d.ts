export type Tech =
  | 'react'
  | 'next'
  | 'tailwind'
  | 'node'
  | 'react-native'
  | 'expo'
  | 'android'
  | 'ios'
  | 'javascript'
  | 'python'
  | 'java'
  | 'mysql'
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'firebase'
  | 'aws'
  | 'google-cloud'
  | 'docker'
  | 'github'
  | 'web-scraping'

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
  androidUrl?: string
  iosUrl?: string
  cover?: string
  detectives?: string[]
}

export interface Social {
  type: 'fiverr' | 'github' | 'linkedin' | 'website'
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

export interface TeamNode {
  id: string
  designation: string
  name: string
  title: string
  photo?: string
  children?: TeamNode[]
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
