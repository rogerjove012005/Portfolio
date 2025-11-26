export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image: string
}

export interface Skill {
  name: string
  level: number
}

export interface SocialLink {
  icon: React.ComponentType
  href: string
  label: string
}

