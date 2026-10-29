import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import cafeWicker from '@/assets/img/cafe-wicker.jpg'
import factoryMain from '@/assets/img/factory-main.jpg'
import { Reveal, RevealGroup } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Button } from '@/components/ui/button'
import { fadeUp } from '@/lib/motion'

const EXPERIENCES = [
  {
    id: 'factory',
    title: 'Coffee Factory',
    desc: 'Tour our working factory — from ripe hand-picked cherries to expertly roasted Ceylon coffee. A journey from mountain to mug.',
    cta: 'Explore the Factory',
    image: factoryMain,
  },
  {
    id: 'cafe',
    title: 'Ceylon Kahawa',
    desc: "Our artisan coffee shop celebrates the finest Ceylon brews — espressos, cold brews, and signature drinks inspired by the island's heritage.",
    cta: 'Visit the Café',
    image: cafeWicker,
  },
]

export function Experiences() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionLabel>Also at Roseland</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-2 font-serif text-4xl font-bold text-balance md:text-5xl">
            More Than Just a Stay
          </h2>
        </Reveal>
      </div>

      <RevealGroup gap={0.15} className="mt-14 grid gap-7 md:grid-cols-2">
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.id}
            id={exp.id}
            variants={fadeUp}
            className="group relative aspect-[4/5] scroll-mt-24 overflow-hidden rounded-[2rem] shadow-xl sm:aspect-[16/11]"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-10">
              <h3 className="font-serif text-3xl font-bold">{exp.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-white/85 md:text-base">{exp.desc}</p>
              <Button
                variant="outline"
                className="mt-6 w-fit border-white text-white hover:bg-white hover:text-primary"
              >
                {exp.cta}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  )
}
