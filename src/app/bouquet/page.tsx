'use client'

import Script from 'next/script'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export default function ShaheeraBouquetPage() {
  const reduceMotion = useReducedMotion()

  const bouquetSpeed = 0.75
  const fallingSpeed = 0.65

  const topLineFull = useMemo(
    () =>
      "I love you, deeply and endlessly — and I'd choose you in every lifetime.",
    [],
  )
  const topLineWords = useMemo(() => topLineFull.split(' '), [topLineFull])

  // Keep these in sync with the Framer Motion variants below.
  const lineDelayChildren = 0.15
  const lineStaggerChildren = 0.2
  const wordAnimDuration = 0.45
  const lineTotalMs = useMemo(() => {
    const words = Math.max(1, topLineWords.length)
    const totalSec =
      lineDelayChildren + (words - 1) * lineStaggerChildren + wordAnimDuration
    return Math.round((totalSec + 0.15) * 1000) // small buffer
  }, [topLineWords.length])

  type LottiePlayerEl = HTMLElement & { play?: () => void }
  const bouquetRef = useRef<LottiePlayerEl | null>(null)
  const [bouquetStarted, setBouquetStarted] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setBouquetStarted(true)
      return
    }

    setBouquetStarted(false)
    const id = window.setTimeout(() => setBouquetStarted(true), lineTotalMs)
    return () => window.clearTimeout(id)
  }, [lineTotalMs, reduceMotion])

  useEffect(() => {
    if (!bouquetStarted) return
    const el = bouquetRef.current
    // lottie-player exposes play() when the script has loaded
    if (el?.play) el.play()
  }, [bouquetStarted])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(236,72,153,0.22),transparent_55%),radial-gradient(1000px_circle_at_80%_20%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(900px_circle_at_45%_95%,rgba(14,165,233,0.14),transparent_55%),linear-gradient(to_br,rgba(255,255,255,1),rgba(253,242,248,1),rgba(250,245,255,1))] dark:bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(236,72,153,0.18),transparent_55%),radial-gradient(1000px_circle_at_80%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(900px_circle_at_45%_95%,rgba(14,165,233,0.12),transparent_55%),linear-gradient(to_br,rgba(11,19,43,1),rgba(17,24,39,1),rgba(10,7,20,1))]">
      {/* Lottie web component (no npm dependency) */}
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="afterInteractive"
      />

      {/* Full-screen falling flowers (background layer) */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-50 dark:opacity-25">
        {/* @ts-expect-error - custom element provided by lottie-player script */}
        <lottie-player
          src="/lottie/flowers.json"
          background="transparent"
          speed={fallingSpeed}
          loop={!reduceMotion}
          autoplay
          style={{
            width: '100%',
            height: '100%',
            transform: 'scale(1.08)',
            filter: 'drop-shadow(0 16px 28px rgba(236,72,153,0.18))',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20">
        {/* Top line only */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="absolute top-10 left-1/2 z-20 w-[min(720px,92vw)] -translate-x-1/2 text-center"
        >
          <p className="inline-block rounded-full border border-white/30 bg-white/40 px-5 py-3 font-serif text-[15px] leading-relaxed font-medium tracking-wide text-rose-700/80 shadow-sm backdrop-blur-md md:text-xl dark:border-white/10 dark:bg-black/20 dark:text-rose-100/80">
            <span className="sr-only">{topLineFull}</span>
            {reduceMotion ? (
              <span aria-hidden>{topLineFull}</span>
            ) : (
              <motion.span
                aria-hidden
                className="inline"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: lineDelayChildren,
                      staggerChildren: lineStaggerChildren,
                    },
                  },
                }}
              >
                {topLineWords.map((w, idx) => (
                  <motion.span
                    key={`${w}-${idx}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 3, filter: 'blur(2px)' },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        transition: {
                          duration: wordAnimDuration,
                          ease: 'easeOut',
                        },
                      },
                    }}
                  >
                    {w}
                    {idx < topLineWords.length - 1 ? '\u00A0' : ''}
                  </motion.span>
                ))}
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Center bouquet (bloom) */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-[560px]"
        >
          <div className="absolute -inset-10 rounded-[40px] bg-white/25 blur-3xl dark:bg-white/10" />
          <motion.div
            className="relative aspect-[7/8] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: bouquetStarted ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* @ts-expect-error - custom element provided by lottie-player script */}
            <lottie-player
              ref={bouquetRef}
              src="/lottie/bouquet.json"
              background="transparent"
              speed={bouquetSpeed}
              loop={!reduceMotion}
              autoplay={false}
              style={{
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0 22px 34px rgba(0,0,0,0.2))',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// (SVG helper functions removed — we now render Lottie full-screen + centered.)
