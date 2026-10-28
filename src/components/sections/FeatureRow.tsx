import { motion } from 'framer-motion'
import { Coffee, Leaf, Mountain, TreePine } from 'lucide-react'

import { CountUp } from '@/components/CountUp'
import { RevealGroup } from '@/components/Reveal'
import { fadeUp } from '@/lib/motion'

const FEATURES = [
  { icon: Mountain, value: 4, suffix: '', label: 'Cottage Rooms' },
  { icon: TreePine, value: 3500, suffix: '+', label: 'Ft Above Sea Level' },
  { icon: Coffee, value: 100, suffix: '%', label: 'Hand-Picked Coffee' },
  { icon: Leaf, literal: 'Ceylon', label: 'Finest Arabica' },
]

export function FeatureRow() {
  return (
    <section className="border-t border-border/70">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <RevealGroup
          gap={0.1}
          className="grid grid-cols-2 gap-y-10 text-center md:grid-cols-4 md:gap-y-0"
        >
          {FEATURES.map((f) => (
            <motion.div key={f.label} variants={fadeUp} className="flex flex-col items-center px-3">
              <span className="mb-4 flex size-16 items-center justify-center rounded-full border border-accent/50 text-accent">
                <f.icon className="size-6" strokeWidth={1.5} />
              </span>
              <div className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
                {f.literal ?? <CountUp value={f.value ?? 0} suffix={f.suffix} />}
              </div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground uppercase">
                {f.label}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
