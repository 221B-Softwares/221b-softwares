'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ShaheeraBirthdayPage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const birthday = new Date(currentYear, 11, 29, 0, 0, 0) // December 29, 12 AM

      // If birthday has passed this year, set it for next year
      if (now > birthday) {
        birthday.setFullYear(currentYear + 1)
      }

      const difference = birthday.getTime() - now.getTime()

      if (difference <= 0) {
        setIsBirthday(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text pb-2 text-5xl leading-normal font-bold text-transparent md:text-6xl"
          >
            {isBirthday ? '🎉 Happy Birthday! 🎉' : "Shaheera's Birthday ❤️"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-12 text-lg md:text-xl"
          >
            {isBirthday
              ? 'The special day is here!'
              : 'Counting down to December 29th'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mb-10 flex items-center justify-center"
          >
            <Link
              href="/bouquet"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:brightness-110 active:brightness-95"
            >
              Open bouquet ✨
            </Link>
          </motion.div>

          {!isBirthday && (
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="rounded-2xl border border-pink-200/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm md:p-8 dark:border-purple-500/30 dark:bg-gray-800/80">
                    <motion.div
                      key={unit.value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-muted-foreground text-sm font-medium tracking-wider uppercase md:text-base">
                      {unit.label}
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-pink-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {isBirthday && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mb-8 text-6xl md:text-8xl"
            >
              🎂✨🎈
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
