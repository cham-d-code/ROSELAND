import heroEllaMorning from '@/assets/img/hero-ella-morning.jpg'
import { Reveal } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'

export function Banner() {
  return (
    <section className="relative flex h-[46vh] min-h-[320px] items-center justify-center overflow-hidden text-center">
      <img
        src={heroEllaMorning}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="container-px relative mx-auto max-w-2xl text-primary-foreground">
        <Reveal>
          <SectionLabel className="justify-center">Roseland Experience</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-serif text-3xl leading-[1.25] font-medium text-balance italic md:text-5xl">
            Where Mountains Meet Ceylon Coffee
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
