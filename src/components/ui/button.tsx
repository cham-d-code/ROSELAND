import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:bg-primary/90',
        outline:
          'border-2 border-current bg-transparent hover:bg-foreground hover:text-background',
        ghost: 'hover:bg-foreground/5',
        link: 'underline-offset-4 hover:underline normal-case tracking-normal font-medium',
      },
      size: {
        default: 'h-12 px-7 text-xs',
        sm: 'h-10 px-5 text-[11px]',
        lg: 'h-14 px-9 text-sm',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
