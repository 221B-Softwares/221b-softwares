'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, FolderKanban, Cpu } from 'lucide-react'

const stats = [
  { number: 12, suffix: '+', label: 'Clients', icon: Users },
  { number: 20, suffix: '+', label: 'Projects', icon: FolderKanban },
  { number: 20, suffix: '+', label: 'Technologies', icon: Cpu },
]

function useInView(
  ref: React.RefObject<HTMLElement | null>,
  rootMargin = '0px',
) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const element = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, rootMargin])

  return isIntersecting
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const isVisible = useInView(sectionRef, '-100px')

  return (
    <section
      ref={sectionRef}
      className="bg-brand-parchment text-brand-ink relative px-6 py-20"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            target={stat.number}
            suffix={stat.suffix}
            label={stat.label}
            icon={stat.icon}
            animate={isVisible}
            easing="sine"
          />
        ))}
      </div>
    </section>
  )
}

function easeOutSine(progress: number) {
  return Math.sin((progress * Math.PI) / 2)
}
function easeOutQuad(progress: number) {
  return progress * (2 - progress)
}
function easeOutExpo(progress: number) {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
}
function linear(progress: number) {
  return progress
}

function StatCard({
  target,
  suffix,
  label,
  icon: Icon,
  animate,
  easing = 'quad',
}: {
  target: number
  suffix: string
  label: string
  icon: React.ElementType
  animate: boolean
  easing?: 'sine' | 'quad' | 'expo' | 'linear'
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate) return

    let start: number | null = null
    const duration = 1500

    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)

      let easedProgress: number
      switch (easing) {
        case 'expo':
          easedProgress = easeOutExpo(progress)
          break
        case 'linear':
          easedProgress = linear(progress)
          break
        case 'sine':
          easedProgress = easeOutSine(progress)
          break
        default:
          easedProgress = easeOutQuad(progress)
      }

      setCount(Math.floor(easedProgress * target))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [animate, target, easing])

  return (
    <div className="group border-brand-brass/30 relative overflow-hidden rounded-2xl border bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-brand-brass/10 absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="bg-brand-ink/90 text-brand-brass group-hover:bg-brand-brass group-hover:text-brand-ink mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-colors">
        <Icon className="h-7 w-7" />
      </div>

      <h2 className="text-5xl font-extrabold tracking-tight">
        {count}
        {suffix}
      </h2>

      <p className="text-brand-brass mt-3 text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  )
}
