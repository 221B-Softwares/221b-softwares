'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Heart, Lock, Sparkles, Check } from 'lucide-react'

export interface Promise {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const promises: Promise[] = [
  {
    id: '1',
    title: 'My Love',
    description:
      'I promise that my love for you will never fade. It will grow stronger with each passing day.',
    icon: <Heart className="h-8 w-8" />,
  },
  {
    id: '2',
    title: 'To Make You Smile',
    description: 'I promise to find ways to make you smile every single day.',
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    id: '3',
    title: 'To Support You',
    description:
      'I promise to support you in all your dreams and aspirations, always standing by your side.',
    icon: <Heart className="h-8 w-8" />,
  },
  {
    id: '4',
    title: 'To Notice You',
    description:
      'I promise to always notice the little things that make you unique and special.',
    icon: <Sparkles className="h-8 w-8" />,
  },
  {
    id: '5',
    title: 'To Fulfill Your Dreams',
    description:
      'I promise that I will do everything in my power to help you achieve your dreams and make them a reality.',
    icon: <Heart className="h-8 w-8" />,
  },
  {
    id: '6',
    title: 'To Resolve Our Conflicts',
    description:
      'I promise to always work through our conflicts with patience, understanding, and love.',
    icon: <Sparkles className="h-8 w-8" />,
  },
]

export default function PromisesPage() {
  const [sealedPromises, setSealedPromises] = useState<Set<string>>(new Set())
  const totalPromises = promises.length
  const sealedCount = sealedPromises.size
  const progress = (sealedCount / totalPromises) * 100

  const handleSealPromise = (id: string) => {
    if (sealedPromises.has(id)) return

    setSealedPromises((prev) => new Set(prev).add(id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-amber-950/30">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/shaheera"
            className="inline-flex items-center gap-2 text-rose-700 transition hover:text-rose-900 dark:text-rose-300 dark:hover:text-rose-100"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Birthday</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text pb-2 text-5xl leading-normal font-bold text-transparent md:text-6xl">
            My Promises to You
          </h1>
          <p className="mb-8 text-lg text-rose-700/80 md:text-xl dark:text-rose-300/80">
            Click on each promise to seal it with my heart
          </p>

          {/* Progress indicator */}
          <div className="mx-auto max-w-md">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold text-rose-700 dark:text-rose-300">
              <span>Promises Sealed</span>
              <span>
                {sealedCount} / {totalPromises}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-rose-200/50 dark:bg-rose-900/50">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Promises Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {promises.map((promise, index) => {
              const isSealed = sealedPromises.has(promise.id)

              return (
                <motion.div
                  key={promise.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => handleSealPromise(promise.id)}
                    disabled={isSealed}
                    className={`relative w-full overflow-hidden rounded-2xl border-2 p-8 text-left shadow-lg transition-all ${
                      isSealed
                        ? 'cursor-default border-rose-400 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50'
                        : 'cursor-pointer border-rose-200/50 bg-white/90 backdrop-blur-sm hover:border-rose-300/70 hover:shadow-2xl hover:shadow-rose-200/30 dark:border-rose-800/50 dark:bg-rose-950/50 dark:hover:border-rose-700/70 dark:hover:shadow-rose-900/30'
                    }`}
                  >
                    {/* Sealed overlay */}
                    {isSealed && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-400/20 to-pink-400/20"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 15,
                            delay: 0.2,
                          }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="rounded-full bg-gradient-to-br from-rose-500 to-pink-500 p-3 shadow-lg">
                            <Check className="h-8 w-8 text-white" />
                          </div>
                          <span className="font-semibold text-rose-700 dark:text-rose-300">
                            Sealed
                          </span>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Content */}
                    <div
                      className={`relative z-10 ${isSealed ? 'opacity-50' : ''}`}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-400 text-white shadow-lg">
                          {promise.icon}
                        </div>
                        {!isSealed && (
                          <Lock className="h-5 w-5 text-rose-400 dark:text-rose-500" />
                        )}
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-rose-900 dark:text-rose-100">
                        {promise.title}
                      </h3>
                      <p className="leading-relaxed text-rose-700/90 dark:text-rose-300/90">
                        {promise.description}
                      </p>
                    </div>

                    {/* Click effect particles */}
                    {isSealed && (
                      <div className="pointer-events-none absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-rose-400"
                            initial={{
                              x: 0,
                              y: 0,
                              opacity: 1,
                              scale: 1,
                            }}
                            animate={{
                              x: Math.cos((i * Math.PI * 2) / 12) * 100,
                              y: Math.sin((i * Math.PI * 2) / 12) * 100,
                              opacity: 0,
                              scale: 0,
                            }}
                            transition={{
                              duration: 0.6,
                              delay: i * 0.05,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.button>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Completion message */}
        {sealedCount === totalPromises && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="mt-12 text-center"
          >
            <div className="mx-auto max-w-md rounded-2xl border-2 border-rose-400 bg-gradient-to-br from-rose-100 to-pink-100 p-8 shadow-xl dark:from-rose-900/50 dark:to-pink-900/50">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="mb-4 flex justify-center"
              >
                <div className="rounded-full bg-gradient-to-br from-rose-500 to-pink-500 p-4 shadow-lg">
                  <Heart className="h-10 w-10 fill-white text-white" />
                </div>
              </motion.div>
              <h2 className="mb-2 text-2xl font-bold text-rose-900 dark:text-rose-100">
                All Promises Sealed!
              </h2>
              <p className="text-rose-700/90 dark:text-rose-300/90">
                Every promise made with love, sealed with my heart forever.
              </p>
            </div>
          </motion.div>
        )}

        {/* Thank you button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/shaheera/thank-you"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-rose-500/40 active:scale-95"
          >
            Continue <Heart className="h-5 w-5 fill-white text-white" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
