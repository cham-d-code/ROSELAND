import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Cottages', href: '#cottages' },
  { label: 'Coffee Factory', href: '#factory' },
  {
    label: 'Ceylon Kahawa Café',
    href: '#cafe',
    children: ['Ceylon Kahawa — Colombo', 'Ceylon Kahawa — Ella'],
  },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 text-white transition-all duration-500',
        scrolled || open
          ? 'bg-primary/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.4)] backdrop-blur-lg'
          : 'bg-gradient-to-b from-black/40 to-transparent',
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="script text-3xl text-white">Roseland</span>
        </a>

        <ul className="hidden items-center gap-8 text-[13px] font-semibold tracking-wide uppercase lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="group relative">
              <a
                href={link.href}
                className="flex items-center gap-1 py-2 transition-colors hover:text-accent"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                )}
              </a>
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

              {link.children && (
                <div className="invisible absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-border/60 bg-card p-2 text-foreground shadow-xl">
                    {link.children.map((child) => (
                      <a
                        key={child}
                        href="#cafe"
                        className="block rounded-xl px-4 py-2.5 text-xs font-medium normal-case tracking-normal hover:bg-muted"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:+94707330950"
            className="flex items-center gap-2 text-xs font-medium tracking-wide text-white/80 transition-colors hover:text-accent"
          >
            <Phone className="size-3.5" />
            +94 70 733 0950
          </a>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/70 text-white hover:bg-white hover:text-primary"
          >
            <a href="#book">Book a Stay</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-white lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-primary lg:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4 text-sm font-semibold tracking-wide uppercase">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-white/80 hover:bg-white/10 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="px-3 pt-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/70 text-white hover:bg-white hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  <a href="#book">Book a Stay</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
