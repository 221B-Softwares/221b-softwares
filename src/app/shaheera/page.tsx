'use client'

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20">
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
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-normal pb-2"
          >
            {isBirthday ? '🎉 Happy Birthday! 🎉' : "Shaheera's Birthday ❤️"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12"
          >
            {isBirthday
              ? 'The special day is here!'
              : 'Counting down to December 29th'}
          </motion.p>

          {!isBirthday && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
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
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-pink-200/50 dark:border-purple-500/30">
                    <motion.div
                      key={unit.value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text mb-2"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full"
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
              className="text-6xl md:text-8xl mb-8"
            >
              🎂✨🎈
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

