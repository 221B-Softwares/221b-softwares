'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Heart, X, Play } from 'lucide-react'

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  images: string[]
  videos?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'October 9, 2025',
    title: 'Your Profile',
    description: `First time I saw your picture and your profile, I was literally like bhaiii way out of my league.. idhar sai to haan nahi honi kabhi bhi but chalo let's see maybe.. 🥺`,
    images: [
      '/shaheera/memory_1.PNG',
      '/shaheera/memory_2.PNG',
      '/shaheera/memory_3.JPG',
    ],
  },
  {
    id: '2',
    date: 'October 16, 2025',
    title: `My Parent's First Visit`,
    description: `Is din ki I don't have pictures.. but waapis aa k parents nai mja btaya sab kya baat hui.. although tab mai ghusse mai tha so I didn't pay sahi waali attention but trust me jitna suna tha sab acha laga tha ♥️`,
    images: [
      '/shaheera/memory_4.JPG',
      '/shaheera/memory_5.JPG',
      '/shaheera/memory_6.JPG',
    ],
  },
  {
    id: '3',
    date: 'November 3, 2025',
    title: `Your Parent's First Visit`,
    description: `Is din ki bhi I don't have pictures.. but is din mai tnsion mai tha because aap k parents nai poochna tha mere sai job related and baaqi bhi sab.. aur bas I wanted to satisfy them har tarah sai.. and at the end everything went so well.. also tab tak mai na aap ki snapchat profile dekh li thi and these were my favorite pictures us tym ♥️`,
    images: [
      '/shaheera/memory_7.PNG',
      '/shaheera/memory_8.PNG',
      '/shaheera/memory_9.PNG',
    ],
  },
  {
    id: '4',
    date: 'November 9, 2025',
    title: `Our First Meeting`,
    description: `Aap jab aye thi na room mai literally bhai heavy waala crush.. aur phir aap nai itni pyaari pyaari baatein ki.. apni ambitions k baare mai btaya.. and jab chai aap nai khud apne haatho sai di na mja.. 🫠♥️`,
    images: ['/shaheera/memory_10.MOV', '/shaheera/memory_11.JPG'],
  },
  {
    id: '5',
    date: 'November 10, 2025',
    title: `THE CALL and bichaare wings`,
    description: `This day was special for me apne dil mai I was yours usi din sai.. bas aap is din khush nahi thi.. 🥲`,
    images: ['/shaheera/memory_12.png'],
  },
  {
    id: '6',
    date: 'November 11, 2025',
    title: `Baat Pakki`,
    description: `I know aap khush nahi thi is decision sai.. I hope I will be able to prove you wrong 1st Feb k baad ♥️`,
    images: ['/shaheera/memory_13.JPG', '/shaheera/memory_14.JPG'],
  },
  {
    id: '7',
    date: 'November 13, 2025',
    title: 'Date Fix',
    description:
      'Aap k parents aur aap k relatives aye tha date fix karne.. and I was so happy is din waqai feel aane lag gaye thi k aap meri ho jaye gi soon ♥️',
    images: ['/shaheera/memory_15.png'],
  },
  {
    id: '8',
    date: 'November 17, 2025',
    title: 'My First Message',
    description:
      'Literally 2 din mai nai socha tha k kya likhu mai aur phir bohat himmat jama kar k I sent you that message ♥️',
    images: ['/shaheera/memory_16.JPG'],
  },
  {
    id: '9',
    date: 'November 18, 2025',
    title: 'Our First Call',
    description: `I admit hamaari first call was not a great experience (Mama's boy) but still it was special ♥️`,
    images: ['/shaheera/memory_17.PNG'],
  },
  {
    id: '10',
    date: 'November 28, 2025',
    title: 'First Real Conversation',
    description: `This was my most special birthday ever.. sab sai pehle to exactly 12 pa aap na mja msg kya.. literally aaj tak kisi na bhi nahi kya aise ever.. aur phir hamaari itni lambi baat hui for the first time ♥️`,
    images: [
      '/shaheera/memory_18.png',
      '/shaheera/memory_19.png',
      '/shaheera/memory_20.png',
    ],
  },
  {
    id: '11',
    date: 'December 2, 2025',
    title: 'First Bouquet',
    description: `Aap ki smile k lye I can do anything ♥️`,
    images: [
      '/shaheera/memory_21.JPG',
      '/shaheera/memory_22.JPG',
      '/shaheera/memory_23.JPG',
    ],
  },
  {
    id: '12',
    date: 'December 5, 2025',
    title: 'Our First Fight',
    description: `Is din aap ko first time mai nai itna hurt kya tha.. I had to do something about it 🥺♥️`,
    images: [
      '/shaheera/memory_24.JPG',
      '/shaheera/memory_25.JPG',
      '/shaheera/memory_26.JPG',
    ],
  },
  {
    id: '13',
    date: 'December 6, 2025',
    title: 'Our Cake',
    description: `Hum nai saath cake cut kya is din.. aur hamaara first eye contact bhi 🫠♥️`,
    images: [
      '/shaheera/memory_27.JPG',
      '/shaheera/memory_28.JPG',
      '/shaheera/memory_29.JPG',
    ],
  },
  {
    id: '14',
    date: 'December 9, 2025',
    title: 'Our First Date',
    description: `Most special day everrrr.. aap ko itne close sai dekha mai nai first time ♥️`,
    images: ['/shaheera/memory_30.jpg', '/shaheera/memory_31.MP4'],
  },
  {
    id: '15',
    date: 'December 13, 2025',
    title: 'Our Second Date',
    description: `Itni unexpected si sweet si date thi.. I loved every moment of it ♥️`,
    images: [
      '/shaheera/memory_32.JPG',
      '/shaheera/memory_33.JPG',
      '/shaheera/memory_34.MOV',
    ],
  },
  {
    id: '16',
    date: 'December 15, 2025',
    title: 'My First Trial',
    description: `Aap nai first time mere sai kuch maanga tha.. Is ko to mai mana kar hi nahi sakta tha ♥️`,
    images: ['/shaheera/memory_35.MOV', '/shaheera/memory_36.PNG'],
  },
  {
    id: '17',
    date: 'December 21, 2025',
    title: 'For your understanding',
    description: `This was my thank you for being sooo understanding ♥️`,
    images: ['/shaheera/memory_37.JPG', '/shaheera/memory_38.JPG'],
  },
]

const isVideoFile = (src: string): boolean => {
  const videoExtensions = ['.mov', '.mp4', '.webm', '.ogg', '.avi', '.mkv']
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext))
}

export default function MemoryLaneTimeline() {
  const [selectedMedia, setSelectedMedia] = useState<{
    src: string
    type: 'image' | 'video'
  } | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-20 dark:from-rose-950/30 dark:via-pink-950/30 dark:to-amber-950/30">
      <div className="mx-auto max-w-4xl px-6">
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
          className="mb-16 text-center"
        >
          <h1 className="mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            Our Memory Lane
          </h1>
          <p className="text-lg text-rose-700/80 md:text-xl dark:text-rose-300/80">
            A journey through the moments that define us
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline events */}
          <div className="space-y-16 pb-8">
            {timelineEvents.map((event, index) => {
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start justify-center"
                >
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="w-full max-w-2xl overflow-hidden rounded-2xl border border-rose-200/50 bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:border-rose-300/70 hover:shadow-2xl hover:shadow-rose-200/30 dark:border-rose-800/50 dark:bg-rose-950/50 dark:hover:border-rose-700/70 dark:hover:shadow-rose-900/30"
                  >
                    {/* Media Grid */}
                    <div
                      className={`grid gap-2 p-3 ${
                        event.images.length === 1
                          ? 'grid-cols-1'
                          : event.images.length === 2
                            ? 'grid-cols-2'
                            : 'grid-cols-3'
                      }`}
                    >
                      {event.images.map((media, mediaIndex) => {
                        const isVideo = isVideoFile(media)
                        return (
                          <button
                            key={mediaIndex}
                            onClick={() =>
                              setSelectedMedia({
                                src: media,
                                type: isVideo ? 'video' : 'image',
                              })
                            }
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-xl focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:outline-none"
                          >
                            {isVideo ? (
                              <>
                                <video
                                  src={media}
                                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                                  muted
                                  playsInline
                                  preload="metadata"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all hover:bg-black/30">
                                  <div className="rounded-full bg-white/90 p-4 shadow-lg backdrop-blur-sm transition-transform hover:scale-110">
                                    <Play className="h-8 w-8 fill-rose-600 text-rose-600" />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <Image
                                  src={media}
                                  alt={`${event.title} - Image ${mediaIndex + 1}`}
                                  fill
                                  className="object-cover transition-transform duration-300 hover:scale-110"
                                  sizes={
                                    event.images.length === 1
                                      ? '(max-width: 768px) 100vw, 100vw'
                                      : event.images.length === 2
                                        ? '(max-width: 768px) 50vw, 50vw'
                                        : '(max-width: 768px) 33vw, 33vw'
                                  }
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                              </>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-rose-900 dark:text-rose-100">
                        {event.title}
                      </h3>
                      <p className="leading-relaxed text-rose-700/90 dark:text-rose-300/90">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* View My Promises Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/shaheera/promises"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-rose-500/40 active:scale-95"
          >
            View My Promises <Heart className="h-5 w-5 fill-white text-white" />
          </Link>
        </motion.div>
      </div>

      {/* Media Preview Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedMedia(null)
              }}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              aria-label="Close preview"
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw]"
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-h-[90vh] max-w-full rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedMedia.src}
                  alt="Preview"
                  width={1200}
                  height={800}
                  className="max-h-[90vh] max-w-full rounded-lg object-contain"
                  priority
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
