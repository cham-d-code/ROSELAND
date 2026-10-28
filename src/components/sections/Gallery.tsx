import { motion } from 'framer-motion'

import beansMacro from '@/assets/img/beans-macro.jpg'
import cafeBright from '@/assets/img/cafe-bright.jpg'
import factoryWorker from '@/assets/img/factory-worker.jpg'
import heroBandarawela from '@/assets/img/hero-bandarawela.jpg'
import roomCabin from '@/assets/img/room-cabin.jpg'
import roseCloseup from '@/assets/img/rose-closeup.jpg'
import { Reveal, RevealGroup } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { fadeUp } from '@/lib/motion'

const SHOTS = [
  { src: heroBandarawela, alt: 'View over Bandarawela', span: 'row-span-2' },
  { src: factoryWorker, alt: 'Roseland coffee factory at work' },
  { src: cafeBright, alt: 'Ceylon Kahawa café' },
  { src: roomCabin, alt: 'A Roseland cottage' },
  { src: beansMacro, alt: 'Freshly roasted coffee beans' },
  { src: roseCloseup, alt: 'Roseland rose', span: 'row-span-2' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted/50 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>A Closer Look</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 font-serif text-4xl font-bold text-balance md:text-5xl">
              Gallery
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          gap={0.08}
          className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]"
        >
          {SHOTS.map((shot) => (
            <motion.div
              key={shot.alt}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${shot.span ?? ''}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
