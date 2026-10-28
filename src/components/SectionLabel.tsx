import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-accent uppercase',
        className,
      )}
    >
      <span className="h-px w-6 bg-accent/70" />
      {children}
    </span>
  )
}
