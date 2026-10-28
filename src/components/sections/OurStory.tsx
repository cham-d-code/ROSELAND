import { motion } from 'framer-motion'

import factoryWorker from '@/assets/img/factory-worker.jpg'
import storyPath from '@/assets/img/story-path.jpg'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { scaleIn } from '@/lib/motion'

export function OurStory() {
  return (
    <section className="container-px mx-auto max-w-7xl overflow-x-clip py-24 md:py-32">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl leading-[1.15] font-semibold text-balance md:text-5xl">
              A Living Estate in the Clouds
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground md:text-lg">
              High above Ambadandegama, Roseland grew from a single family&apos;s coffee
              plot into a small estate of cottages, a working roastery, and a café
              that shares what we grow. Every cup still traces back to the same
              hillside.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We keep the pace slow on purpose — misty mornings on the balcony, a
              factory tour that smells like roasting cherries, evenings over
              something freshly brewed.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <span className="script text-3xl text-accent">The Roseland Family</span>
            <span className="text-xs leading-tight text-muted-foreground">
              10+ Years of
              <br />
              Mountain Hospitality
            </span>
          </Reveal>
        </div>

        <Reveal variants={scaleIn} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={storyPath}
              alt="Pathway through the Roseland estate"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-10 left-4 w-40 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:w-52 md:-left-10"
          >
            <img
              src={factoryWorker}
              alt="Roasting Roseland's coffee by hand"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
