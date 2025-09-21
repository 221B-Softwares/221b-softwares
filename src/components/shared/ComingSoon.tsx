'use client'

import { Hourglass, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="from-brand-ink via-brand-fog text-brand-parchment flex min-h-[80vh] flex-col items-center justify-center bg-gradient-to-br to-black px-6 py-40 text-center">
      <div className="bg-brand-brass/20 absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <Hourglass className="text-brand-brass mb-6 h-16 w-16 animate-pulse" />

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title} — Coming Soon
      </h1>

      <p className="text-brand-parchment/80 max-w-xl text-sm sm:text-base">
        We’re working behind the scenes to prepare this section. Stay tuned for
        updates!
      </p>

      <Link
        href="/"
        className="bg-brand-brass text-brand-ink mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <ArrowLeft className="h-5 w-5" />

        <span>Back to Home</span>
      </Link>
    </section>
  )
}
