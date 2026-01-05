'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CurrencyNote {
  id: number
  x: number
  y: number
  rotation: number
  delay: number
  duration: number
}

interface CountableNote {
  id: number
  counted: boolean
  position: { x: number; y: number }
}

export default function WareeshaPage() {
  const [notes, setNotes] = useState<CurrencyNote[]>([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [countableNotes, setCountableNotes] = useState<CountableNote[]>([])
  const [countedNotes, setCountedNotes] = useState(0)
  const [countedAmount, setCountedAmount] = useState(0)
  const [isCountingMode, setIsCountingMode] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [clickParticles, setClickParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([])

  useEffect(() => {
    // Create 10 notes of 5000 PKR = 50,000 PKR
    const noteCount = 10
    const noteValue = 5000
    const newNotes: CurrencyNote[] = []

    for (let i = 0; i < noteCount; i++) {
      newNotes.push({
        id: i,
        x: Math.random() * 100,
        y: -20 - Math.random() * 20,
        rotation: -15 + Math.random() * 30,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      })
    }

    setNotes(newNotes)

    // Initialize countable notes for counting feature
    const newCountableNotes: CountableNote[] = []
    for (let i = 0; i < noteCount; i++) {
      newCountableNotes.push({
        id: i,
        counted: false,
        position: {
          x: 20 + (i % 5) * 18,
          y: 30 + Math.floor(i / 5) * 25,
        },
      })
    }
    setCountableNotes(newCountableNotes)

    // Animate total amount counter
    const targetAmount = noteCount * noteValue
    const duration = 2000
    const steps = 60
    const increment = targetAmount / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetAmount) {
        setTotalAmount(targetAmount)
        clearInterval(timer)
      } else {
        setTotalAmount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const handleNoteClick = (noteId: number) => {
    if (!isCountingMode) return

    const note = countableNotes.find((n) => n.id === noteId)
    if (!note || note.counted) return

    // Mark note as counted
    setCountableNotes((prev) =>
      prev.map((n) => (n.id === noteId ? { ...n, counted: true } : n))
    )

    setCountedNotes((prev) => prev + 1)
    setCountedAmount((prev) => prev + 5000)

    // Add click particles
    const noteElement = document.getElementById(`countable-note-${noteId}`)
    if (noteElement) {
      const rect = noteElement.getBoundingClientRect()
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      }))
      setClickParticles((prev) => [...prev, ...newParticles])

      // Remove particles after animation
      setTimeout(() => {
        setClickParticles((prev) =>
          prev.filter((p) => !newParticles.some((np) => np.id === p.id))
        )
      }, 1000)
    }

    // Check if all notes are counted will be handled by useEffect
  }

  // Check if all notes are counted
  useEffect(() => {
    if (
      isCountingMode &&
      countedNotes === countableNotes.length &&
      countableNotes.length > 0 &&
      !showCelebration
    ) {
      setTimeout(() => {
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 3000)
      }, 300)
    }
  }, [countedNotes, countableNotes.length, isCountingMode, showCelebration])

  const resetCounting = () => {
    setCountableNotes((prev) =>
      prev.map((n) => ({ ...n, counted: false }))
    )
    setCountedNotes(0)
    setCountedAmount(0)
    setShowCelebration(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-emerald-500"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 50) % 100}%`],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:mb-4 md:text-5xl lg:text-7xl"
          >
            💰 50,000 PKR 💰
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-base text-muted-foreground sm:mb-6 sm:text-lg md:mb-8 md:text-xl"
          >
            For Wareesha
          </motion.p>

          {/* Counting Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 md:mb-8"
          >
            <button
              onClick={() => {
                setIsCountingMode(!isCountingMode)
                if (isCountingMode) {
                  resetCounting()
                }
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-95 md:px-6 md:py-3 md:text-base ${
                isCountingMode
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/50'
                  : 'bg-white text-emerald-600 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-emerald-400'
              }`}
            >
              {isCountingMode ? '✋ Stop Counting' : '💰 Count Cash'}
            </button>
          </motion.div>

          {/* Total amount display */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-4 md:mb-8"
          >
            <div className="inline-block rounded-xl border-2 border-emerald-200 bg-white/90 p-4 shadow-2xl backdrop-blur-sm dark:border-emerald-500/30 dark:bg-gray-800/90 md:rounded-2xl md:p-8">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                Total Amount
              </div>
              <motion.div
                key={totalAmount}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-1 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:mt-2 md:text-4xl lg:text-5xl"
              >
                ₨ {totalAmount.toLocaleString()}
              </motion.div>
            </div>
          </motion.div>

          {/* Counting Display */}
          {isCountingMode && countableNotes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="mb-4 w-full max-w-2xl grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
            >
              <div className="rounded-xl border-2 border-emerald-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:border-emerald-500/30 dark:bg-gray-800/90 md:p-4">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Notes Counted
                </div>
                <motion.div
                  key={countedNotes}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-1 text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400"
                >
                  {countedNotes} / {countableNotes.length}
                </motion.div>
              </div>
              <div className="rounded-xl border-2 border-emerald-200 bg-white/90 p-3 shadow-lg backdrop-blur-sm dark:border-emerald-500/30 dark:bg-gray-800/90 md:p-4">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Counted Amount
                </div>
                <motion.div
                  key={countedAmount}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-1 text-lg md:text-2xl font-bold text-emerald-600 dark:text-emerald-400"
                >
                  ₨ {countedAmount.toLocaleString()}
                </motion.div>
              </div>
              <div className="col-span-2 rounded-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-3 shadow-lg backdrop-blur-sm dark:border-emerald-500/30 dark:from-emerald-900/20 dark:to-teal-900/20 md:col-span-1 md:p-4">
                <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Progress
                </div>
                <div className="mt-2 h-2 md:h-3 w-full overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        countableNotes.length > 0
                          ? (countedNotes / countableNotes.length) * 100
                          : 0
                      }%`,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  />
                </div>
                <div className="mt-1 text-xs md:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {countableNotes.length > 0
                    ? Math.round((countedNotes / countableNotes.length) * 100)
                    : 0}
                  %
                </div>
              </div>
            </motion.div>
          )}

          {/* Currency notes container */}
          {!isCountingMode && (
            <div className="relative mx-auto h-[300px] w-full max-w-4xl md:h-[500px]">
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  initial={{
                    x: `${note.x}%`,
                    y: `${note.y}%`,
                    rotate: note.rotation,
                    opacity: 0,
                  }}
                  animate={{
                    y: ['100vh', '-10vh'],
                    x: [
                      `${note.x}%`,
                      `${note.x + (Math.random() - 0.5) * 20}%`,
                      `${note.x}%`,
                    ],
                    rotate: [
                      note.rotation,
                      note.rotation + (Math.random() - 0.5) * 30,
                      note.rotation,
                    ],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: note.duration,
                    delay: note.delay,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute"
                >
                  <CurrencyNoteComponent value={5000} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Counting Area */}
          {isCountingMode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative mx-auto w-full max-w-5xl px-2"
            >
              <div className="mb-3 text-center md:mb-4">
                <p className="text-muted-foreground text-xs md:text-sm">
                  Tap on each note to count it! 💵
                </p>
              </div>
              <div className="relative mx-auto min-h-[300px] rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 p-3 dark:border-emerald-500/30 dark:bg-emerald-900/10 md:min-h-[400px] md:rounded-2xl md:p-6 lg:p-8">
                <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
                  {countableNotes.map((note) => (
                    <motion.div
                      key={note.id}
                      id={`countable-note-${note.id}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{
                        scale: note.counted ? 0.8 : 1,
                        rotate: note.counted ? 180 : 0,
                        opacity: note.counted ? 0.5 : 1,
                      }}
                      whileHover={!note.counted ? { scale: 1.05, y: -3 } : {}}
                      whileTap={!note.counted ? { scale: 0.9 } : {}}
                      onClick={() => handleNoteClick(note.id)}
                      className={`relative cursor-pointer transition-all touch-manipulation ${
                        note.counted
                          ? 'pointer-events-none'
                          : 'active:scale-95 hover:z-10 hover:drop-shadow-xl'
                      }`}
                    >
                      <CurrencyNoteComponent
                        value={5000}
                        isCountable
                        isCounted={note.counted}
                      />
                      {note.counted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="rounded-full bg-emerald-500 p-1.5 text-lg text-white shadow-lg md:p-2 md:text-2xl">
                            ✓
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Click Particles */}
          <AnimatePresence>
            {clickParticles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{
                  x: particle.x,
                  y: particle.y,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: particle.x + (Math.random() - 0.5) * 100,
                  y: particle.y - 50 + (Math.random() - 0.5) * 50,
                  scale: [0, 1.5, 0],
                  opacity: [1, 1, 0],
                  rotate: [0, 360],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none fixed z-50"
              >
                <div className="text-2xl">💰</div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Celebration Effect */}
          <AnimatePresence>
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="mb-2 text-5xl sm:mb-4 sm:text-6xl md:text-8xl"
                  >
                    🎉
                  </motion.div>
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
                  >
                    All Counted!
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 text-base text-muted-foreground sm:text-lg md:text-xl"
                  >
                    Perfect! ₨ 50,000 counted! 💰
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Stack of notes at the bottom */}
          {!isCountingMode && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 100 }}
              className="mt-6 flex items-end justify-center gap-1 overflow-x-auto pb-4 md:mt-12 md:gap-2"
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1.2 + i * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  className="relative shrink-0"
                  style={{
                    zIndex: 10 - i,
                    transform: `translateX(${(i - 4.5) * 1}px) rotate(${
                      (i - 4.5) * 1.5
                    }deg)`,
                  }}
                >
                  <CurrencyNoteComponent value={5000} isStacked />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

function CurrencyNoteComponent({
  value,
  isStacked = false,
  isCountable = false,
  isCounted = false,
}: {
  value: number
  isStacked?: boolean
  isCountable?: boolean
  isCounted?: boolean
}) {
  return (
    <motion.div
      className={`relative ${
        isStacked
          ? 'h-20 w-32 md:h-32 md:w-48'
          : isCountable
            ? 'h-20 w-32 sm:h-24 sm:w-36 md:h-28 md:w-44'
            : 'h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40'
      } ${isCountable && !isCounted ? 'cursor-pointer' : 'cursor-default'} select-none transition-all`}
      whileHover={
        isStacked || (isCountable && !isCounted)
          ? { scale: 1.05, zIndex: 20 }
          : {}
      }
    >
      <div
        className={`absolute inset-0 rounded-lg border-2 ${
          isCounted
            ? 'border-emerald-400 bg-gradient-to-br from-emerald-200 via-green-100 to-teal-200 opacity-60 dark:border-emerald-600 dark:from-emerald-800/40 dark:via-green-800/30 dark:to-teal-800/40'
            : isCountable
              ? 'border-emerald-400 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 shadow-xl ring-2 ring-emerald-300/50 dark:border-emerald-500 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30 dark:ring-emerald-500/30'
              : 'border-emerald-300 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 shadow-lg dark:border-emerald-500/50 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30'
        } transition-all`}
      >
        {/* Note design */}
        <div className="flex h-full flex-col p-1 md:p-2">
          {/* Header */}
          <div className="mb-0.5 flex items-center justify-between border-b border-emerald-200 pb-0.5 dark:border-emerald-500/30 md:mb-1 md:pb-1">
            <div className="text-[8px] font-bold text-emerald-700 dark:text-emerald-300 md:text-xs">
              STATE BANK
            </div>
            <div className="text-[8px] font-bold text-emerald-700 dark:text-emerald-300 md:text-xs">
              PKR
            </div>
          </div>

          {/* Value */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm font-bold text-emerald-800 dark:text-emerald-200 md:text-lg">
                {value.toLocaleString()}
              </div>
              <div className="text-[8px] text-emerald-600 dark:text-emerald-400 md:text-xs">
                FIVE THOUSAND
              </div>
            </div>
          </div>

          {/* Watermark effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-xl font-bold text-emerald-500 md:text-4xl">
              {value.toLocaleString()}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0.5 left-0.5 h-1 w-1 rounded-full bg-emerald-400 md:top-1 md:left-1 md:h-2 md:w-2"></div>
          <div className="absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full bg-teal-400 md:bottom-1 md:right-1 md:h-2 md:w-2"></div>
        </div>
      </div>
    </motion.div>
  )
}

