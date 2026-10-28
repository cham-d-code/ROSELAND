import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import heroEllaMorning from '@/assets/img/hero-ella-morning.jpg'
import heroSunriseMist from '@/assets/img/hero-sunrise-mist.jpg'
import mountainsKnuckles from '@/assets/img/mountains-knuckles.jpg'

const SLIDES = [heroSunriseMist, mountainsKnuckles, heroEllaMorning]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-primary"
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={SLIDES[index]}
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-black/50" />

      <div className="container-px relative z-10 mx-auto flex max-w-3xl flex-col items-center pt-16 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="font-serif text-4xl leading-[1.25] font-medium text-balance italic md:text-6xl"
        >
          Your Mountain Escape,
          <br />
          Found in Bandarawela
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 max-w-md text-balance text-sm text-white/80 md:text-base"
        >
          Cottages, a working coffee factory, and the Ceylon Kahawa café — 3,500ft up
          in Sri Lanka&apos;s hill country.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-white/80 uppercase"
      >
        Scroll
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-10 w-px origin-top bg-white/70"
        />
      </motion.div>
    </section>
  )
}
