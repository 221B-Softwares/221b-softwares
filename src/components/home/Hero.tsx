'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="from-brand-ink via-brand-fog text-brand-parchment relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br to-black px-6 py-40 text-center">
      <div className="bg-brand-brass/20 absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full blur-[120px]" />

      <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl">
        Solving{' '}
        <span className="from-brand-brass to-brand-parchment bg-gradient-to-r bg-clip-text text-transparent">
          Digital Mysteries
        </span>{' '}
        with Precision
      </h1>

      <p className="text-brand-brass max-w-2xl text-lg leading-relaxed tracking-wide sm:text-xl">
        At{' '}
        <span className="text-brand-parchment font-semibold">
          221B Softwares
        </span>
        , we provide tailored solutions in Web Development, Mobile Apps, AI
        Integrations, and more. Our mission is to approach every project like a
        case — with curiosity, logic, and flawless execution.
      </p>

      <Link
        href="/contact"
        className="group border-brand-brass bg-brand-fog text-brand-brass hover:bg-brand-brass hover:text-brand-ink relative mt-10 flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg border px-8 py-4 font-semibold shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        <span>Consult Us</span>
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

        <span className="bg-brand-brass/20 absolute inset-0 -z-10 animate-pulse rounded-lg blur-xl"></span>

        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 transition-transform duration-1000 group-hover:translate-x-full"></span>
      </Link>
    </section>
  )
}
