'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cake, Sparkles, PartyPopper, Heart } from 'lucide-react'

export default function BirthdayCelebration() {
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{
      id: number
      left: number
      size: number
      shape: string
      horizontalDrift: number
      rotation: number
      animationDelay: number
      animationDuration: number
      color: string
    }>
  >([])

  useEffect(() => {
    // Generate more varied confetti pieces
    const pieces = Array.from({ length: 100 }, (_, i) => {
      const shapes = ['circle', 'square', 'rectangle']
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const size = 4 + Math.random() * 8
      const left = Math.random() * 100
      const animationDelay = Math.random() * 5
      const animationDuration = 4 + Math.random() * 3
      const horizontalDrift = (Math.random() - 0.5) * 200
      const rotation = Math.random() * 360

      return {
        id: i,
        left,
        size,
        shape,
        horizontalDrift,
        rotation,
        animationDelay,
        animationDuration,
        color: [
          '#FF6B9D',
          '#C44569',
          '#F8B500',
          '#FFC93C',
          '#9B59B6',
          '#3498DB',
          '#2ECC71',
          '#E74C3C',
          '#FF9FF3',
          '#54A0FF',
        ][Math.floor(Math.random() * 10)],
      }
    })
    setConfettiPieces(pieces)
  }, [])

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confettiPieces.map((piece) => {
          const borderRadius =
            piece.shape === 'circle'
              ? '50%'
              : piece.shape === 'rectangle'
                ? '1px'
                : '2px'
          const height =
            piece.shape === 'rectangle' ? piece.size * 2 : piece.size

          return (
            <motion.div
              key={piece.id}
              className="absolute"
              style={{
                left: `${piece.left}%`,
                top: '-10px',
                backgroundColor: piece.color,
                width: `${piece.size}px`,
                height: `${height}px`,
                borderRadius,
              }}
              initial={{
                y: 0,
                x: 0,
                rotate: piece.rotation,
                opacity: 1,
              }}
              animate={{
                y: '100vh',
                x: piece.horizontalDrift,
                rotate: piece.rotation + 720,
                opacity: 0,
              }}
              transition={{
                duration: piece.animationDuration,
                delay: piece.animationDelay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text pb-2 text-6xl leading-tight font-bold text-transparent md:text-7xl lg:text-8xl"
          >
            Happy Birthday My Love!!!
          </motion.h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <Cake className="h-16 w-16 text-pink-500 md:h-20 md:w-20" />
            <Sparkles className="h-12 w-12 text-purple-500 md:h-16 md:w-16" />
            <PartyPopper className="h-16 w-16 text-indigo-500 md:h-20 md:w-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              href="/shaheera/memory-lane"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40 active:scale-95"
            >
              A Trip down Memory Lane?{' '}
              <Heart className="h-5 w-5 fill-white text-white" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
