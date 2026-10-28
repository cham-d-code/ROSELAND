import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

import { Reveal, RevealGroup } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { fadeUp } from '@/lib/motion'

const REVIEWS = [
  {
    quote:
      "Waking up to that sunrise from the balcony was a moment I'll carry for life. The coffee — grown right there on the estate — is extraordinary.",
    name: 'Amara S.',
    location: 'Colombo, Sri Lanka',
  },
  {
    quote:
      'The coffee factory tour was the highlight of our trip. Seeing the whole process from cherry to cup, then tasting it fresh — absolutely unforgettable.',
    name: 'Rajiv M.',
    location: 'Bangalore, India',
  },
  {
    quote:
      "Ceylon Kahawa's cold brew is seriously the best I've had anywhere. The setting, the mountains, the warmth of the staff — we're already planning our return.",
    name: 'Sophie L.',
    location: 'London, UK',
  },
]

export function Testimonials() {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">Guest Stories</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-2 font-serif text-4xl font-bold text-balance md:text-5xl">
              What Our Guests Say
            </h2>
          </Reveal>
        </div>

        <RevealGroup gap={0.12} className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              className="rounded-3xl bg-primary-foreground/10 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/15"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/15 font-serif font-semibold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-primary-foreground/70">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
