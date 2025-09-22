'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiExpo,
  SiAndroid,
  SiApple,
} from 'react-icons/si'
import { FaJava, FaAws, FaNode, FaGithub } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { Tech } from '@/types'

const techMap: Record<Tech, { label: string; icon: React.ElementType }> = {
  react: { label: 'React.js', icon: SiReact },
  next: { label: 'Next.js', icon: SiNextdotjs },
  tailwind: { label: 'Tailwind CSS', icon: SiTailwindcss },
  node: { label: 'Node.js', icon: FaNode },
  'react-native': { label: 'React Native', icon: TbBrandReactNative },
  expo: { label: 'Expo', icon: SiExpo },
  android: { label: 'Android', icon: SiAndroid },
  ios: { label: 'iOS', icon: SiApple },
  javascript: { label: 'JavaScript', icon: SiJavascript },
  python: { label: 'Python', icon: SiPython },
  java: { label: 'Java', icon: FaJava },
  mysql: { label: 'MySQL', icon: SiMysql },
  postgresql: { label: 'PostgreSQL', icon: SiPostgresql },
  mongodb: { label: 'MongoDB', icon: SiMongodb },
  redis: { label: 'Redis', icon: SiRedis },
  firebase: { label: 'Firebase', icon: SiFirebase },
  aws: { label: 'AWS', icon: FaAws },
  'google-cloud': { label: 'Google Cloud', icon: SiGooglecloud },
  docker: { label: 'Docker', icon: SiDocker },
  github: { label: 'GitHub', icon: FaGithub },
}

export default function TechIcons({ tech }: { tech: Tech[] }) {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
      {tech.map((t) => {
        const item = techMap[t]
        if (!item) return null
        const Icon = item.icon
        return (
          <div
            key={t}
            className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon className="text-brand-brass h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/80 text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
