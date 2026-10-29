import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import heroEllaMorning from '@/assets/img/hero-ella-morning.jpg'
import heroSunriseMist from '@/assets/img/hero-sunrise-mist.jpg'
import mountainsKnuckles from '@/assets/img/mountains-knuckles.jpg'

const SLIDES = [heroSunriseMist, mountainsKnuckles, heroEllaMorning]

// One crossfade "window" per slide along the scroll track, evenly spaced.
const WINDOWS = [
  { in: [0, 0.28, 0.36], out: [1, 1, 0] },
  { in: [0.3, 0.38, 0.62, 0.7], out: [0, 1, 1, 0] },
  { in: [0.64, 0.72, 1], out: [0, 1, 1] },
]

function SequenceImage({
  src,
  progress,
  input,
  output,
}: {
  src: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  input: number[]
  output: number[]
}) {
  const opacity = useTransform(progress, input, output)
  return (
    <motion.img
      src={src}
      alt=""
      style={{ opacity }}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}

export function Hero() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])

  return (
    <section id="home" ref={trackRef} className="relative h-[280vh] bg-primary">
      <div className="sticky top-0 flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[112%] w-full">
          {SLIDES.map((src, i) => (
            <SequenceImage
              key={src}
              src={src}
              progress={scrollYProgress}
              input={WINDOWS[i].in}
              output={WINDOWS[i].out}
            />
          ))}
        </motion.div>
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
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-white/80 uppercase"
        >
          Scroll
          <motion.span
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-10 w-px origin-top bg-white/70"
          />
        </motion.div>
      </div>
    </section>
  )
}
