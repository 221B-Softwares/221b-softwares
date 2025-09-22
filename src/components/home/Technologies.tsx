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
  SiStripe,
  SiPaypal,
  SiOpenai,
  SiGooglegemini,
} from 'react-icons/si'
import {
  FaJava,
  FaAws,
  FaNode,
  FaGithub,
  FaCat,
  FaSpider,
} from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'

const techStack = [
  { name: 'React.js', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNode },
  { name: 'React Native', icon: TbBrandReactNative },
  { name: 'Expo', icon: SiExpo },
  { name: 'Android', icon: SiAndroid },
  { name: 'iOS', icon: SiApple },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'AWS', icon: FaAws },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'Docker', icon: SiDocker },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Web Scraping', icon: FaSpider },
]

const integrations = [
  { name: 'Stripe', icon: SiStripe },
  { name: 'PayPal', icon: SiPaypal },
  { name: 'RevenueCat', icon: FaCat },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'Gemini', icon: SiGooglegemini },
]

export default function Technologies() {
  return (
    <section className="from-brand-ink to-brand-fog text-brand-parchment relative bg-gradient-to-br via-black px-6 py-20 text-center">
      <h2 className="mb-12 text-4xl font-extrabold">
        Technologies We Excel In
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech) => {
          const Icon = tech.icon
          return (
            <div
              key={tech.name}
              className="group border-brand-brass/20 bg-brand-fog/10 relative flex items-center justify-center rounded-xl border p-10 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <Icon className="text-brand-brass h-12 w-12 transition-transform duration-300 group-hover:scale-110" />

              {/* Name overlay */}
              <span className="text-brand-parchment absolute inset-0 flex items-center justify-center rounded-xl bg-black/80 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>

      <h2 className="mt-20 mb-12 text-4xl font-extrabold">
        Integrations We Excel In
      </h2>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {integrations.map((integration) => {
          const Icon = integration.icon
          return (
            <div
              key={integration.name}
              className="group border-brand-brass/20 bg-brand-fog/10 relative flex items-center justify-center rounded-xl border p-10 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="text-brand-brass h-12 w-12 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-brand-parchment absolute inset-0 flex items-center justify-center rounded-xl bg-black/80 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {integration.name}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
