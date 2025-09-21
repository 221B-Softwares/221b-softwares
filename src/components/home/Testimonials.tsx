'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'The detectives at 221B solved our tech case in no time!',
    author: 'Client A',
  },
  {
    text: 'Brilliant problem solvers with modern execution.',
    author: 'Client B',
  },
  {
    text: 'They brought clarity to our most complex challenges.',
    author: 'Client C',
  },
  {
    text: '221B turned our messy system into a masterpiece.',
    author: 'Client D',
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000 })],
  )

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )

  return (
    <section className="via-brand-ink text-brand-parchment relative bg-gradient-to-br from-blue-950 to-black px-6 py-20 text-center">
      <h2 className="mb-12 text-4xl font-extrabold tracking-tight">
        What Our Clients Say
        <span className="bg-brand-brass mx-auto mt-2 block h-1 w-16 rounded" />
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="group border-brand-brass/20 relative flex h-full flex-col justify-between rounded-2xl border bg-white/5 p-8 text-left shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Quote className="text-brand-brass/25 absolute top-6 right-6 h-10 w-10 transition-transform duration-500 group-hover:scale-110" />
                <p className="relative z-10 text-lg leading-relaxed text-slate-100 italic">
                  “{t.text}”
                </p>
                <span className="text-brand-brass mt-6 block text-sm font-semibold">
                  — {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <button
          onClick={scrollPrev}
          className="text-brand-parchment hover:bg-brand-brass hover:text-brand-ink rounded-full bg-black/40 p-2 shadow-md backdrop-blur"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <button
          onClick={scrollNext}
          className="text-brand-parchment hover:bg-brand-brass hover:text-brand-ink rounded-full bg-black/40 p-2 shadow-md backdrop-blur"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
