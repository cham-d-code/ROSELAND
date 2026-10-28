import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

import { fadeUp, stagger } from '@/lib/motion'

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  gap = 0.12,
}: {
  children: ReactNode
  className?: string
  gap?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger(gap)}
    >
      {children}
    </motion.div>
  )
}
