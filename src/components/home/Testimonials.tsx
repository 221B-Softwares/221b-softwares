'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    text: 'I had a fantastic experience working with Kashif Khan on my mobile app development project. His delivery not only met but exceeded my expectations, and his cooperative attitude and quick responsiveness made the collaboration smooth and efficient. I highly recommend Kashif for his exceptional skills and professionalism in app development. Looking forward to working with him in the future.',
    author: 'tomdicamillo',
  },
  {
    text: `Outstanding experience. I had 5 other freelancers working on this challenging project and noone was able to deliver, while Kashif did it within few days. High attention to detail and very fast. I could only recommend him; you just better hope that he will have time to take your project. I'm working with freelancers for over 12 years and never had just a great experience. He's in his own league. Thumb up!`,
    author: 'm20233',
  },
  {
    text: 'I had the pleasure of working with Kashif Khan, and I must say he is a highly skilled backend developer. He delivered excellent results for our project. Kashif developed a mobile APP that exceeded our expectations. He is professional, reliable, and communicates effectively throughout the process. I highly recommend him for any backend development projects. Great job, Kashif!',
    author: 'bytekbiz',
  },
  {
    text: 'Kashif was an absolute pleasure to work with—POLITE, cooperative, and always willing to go the extra mile! His professionalism in delivering top-notch software development work was truly impressive. 🙌',
    author: 'bhworksagency',
  },
  {
    text: 'Kashif Khan truly exceeded my expectations with his code expertise and professionalism. Working with him was a breeze thanks to his prompt delivery, language fluency, and deep understanding. Highly recommend! 👍',
    author: 'liker1231',
  },
  {
    text: `He’s highly professional and takes the time to confirm every detail before starting the work, ensuring we get exactly what we need. I really appreciate his excellent communication skills and the thoughtful suggestions he offers from his own perspective. He even exceeded our expectations by designing solutions that were better than what we initially planned. Outstanding work—looking forward to collaborating with him again in the future!`,
    author: 'sebastiankreen',
  },
  {
    text: 'Went above and beyond in helping me create an API integration.',
    author: 'theloganwoods',
  },
  {
    text: 'Kashif did a wonderful job with the task at hand, doing it quickly and efficiently',
    author: 'jaykhemchandani',
  },
  {
    text: `Great work again 👏 couldn't find any fault in the end. as always collaboration and coming together allows for success, if there are sometimes bugs we can work through them until it's completely correct which I like`,
    author: 'lewisstrawbr929',
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
