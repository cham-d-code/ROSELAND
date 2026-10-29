import mountainsKnuckles from '@/assets/img/mountains-knuckles.jpg'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="book" className="relative overflow-hidden py-20 text-center md:py-24">
      <img
        src={mountainsKnuckles}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="container-px relative mx-auto max-w-2xl text-primary-foreground">
        <Reveal>
          <SectionLabel className="justify-center">Your Escape Awaits</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif text-4xl leading-[1.2] font-medium text-balance italic md:text-5xl">
            Ready for the Roseland Experience?
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <Button
            size="lg"
            className="mt-9 bg-background text-primary hover:bg-background/90"
          >
            Book Your Stay Today
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
