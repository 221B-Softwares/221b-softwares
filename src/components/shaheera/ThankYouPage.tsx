'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Sparkles } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-amber-950/30">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-start"
        >
          <Link
            href="/shaheera/promises"
            className="inline-flex items-center gap-2 text-rose-700 transition hover:text-rose-900 dark:text-rose-300 dark:hover:text-rose-100"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -100],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: 'easeOut',
                }}
              >
                <Heart className="h-16 w-16 fill-rose-300/30 text-rose-300/30" />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="mb-8 flex justify-center"
            >
              <div className="rounded-full bg-gradient-to-br from-rose-400 to-pink-400 p-6 shadow-2xl">
                <Heart className="h-20 w-20 fill-white text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-4xl leading-normal font-bold text-transparent md:text-5xl"
            >
              Thank you for choosing me, Shaheera!!!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mx-auto max-w-2xl text-xl leading-relaxed text-rose-700/90 md:text-2xl dark:text-rose-300/90"
            >
              Every moment with you is a gift, and I&apos;m grateful beyond
              words that you chose to share your life with me. Thank you for
              being you, for being mine, and for making my every day brighter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex justify-center gap-4"
            >
              <Sparkles className="h-8 w-8 text-rose-400 dark:text-rose-500" />
              <Sparkles className="h-6 w-6 text-pink-400 dark:text-pink-500" />
              <Sparkles className="h-8 w-8 text-amber-400 dark:text-amber-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
