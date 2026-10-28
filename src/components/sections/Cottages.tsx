import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

import heroEllaMorning from '@/assets/img/hero-ella-morning.jpg'
import heroSunriseMist from '@/assets/img/hero-sunrise-mist.jpg'
import roomCabin from '@/assets/img/room-cabin.jpg'
import roomSiena from '@/assets/img/room-siena.jpg'
import { Reveal, RevealGroup } from '@/components/Reveal'
import { SectionLabel } from '@/components/SectionLabel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { fadeUp } from '@/lib/motion'

const ROOMS = [
  {
    name: 'First Blush',
    type: 'Deluxe Double',
    desc: 'Spacious deluxe room for up to 4 adults with breathtaking sunrise mountain views.',
    image: roomSiena,
    amenities: ['Private Balcony', 'Mountain View', 'Refrigerator', 'Smart TV'],
  },
  {
    name: 'Day Break',
    type: 'Deluxe Double',
    desc: 'A warm and spacious retreat with all modern amenities and stunning valley panoramas right from bed.',
    image: heroEllaMorning,
    amenities: ['Private Balcony', 'Mountain View', 'Refrigerator', 'Smart TV'],
  },
  {
    name: 'Sun Up',
    type: 'Standard',
    desc: 'A cosy standard room with all essentials and the iconic Roseland mountain backdrop.',
    image: roomCabin,
    amenities: ['Mountain View', 'Refrigerator', 'Smart TV'],
  },
  {
    name: 'First Light',
    type: 'Standard',
    desc: 'Bright and comfortable room welcoming you with the very first light of dawn.',
    image: heroSunriseMist,
    amenities: ['Mountain View', 'Refrigerator', 'Smart TV'],
  },
]

export function Cottages() {
  return (
    <section id="cottages" className="bg-muted/50 py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel>Rest &amp; Recharge</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-4xl font-semibold text-balance md:text-5xl">
                Our Cottage Rooms
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Four beautifully appointed rooms with mountain views, private
                balconies, and all modern comforts
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Rooms
            </Button>
          </Reveal>
        </div>

        <RevealGroup
          gap={0.1}
          className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ROOMS.map((room) => (
            <motion.div key={room.name} variants={fadeUp}>
              <Card className="group h-full gap-0 py-0 transition-shadow duration-300 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <Badge
                    variant={room.type === 'Deluxe Double' ? 'default' : 'outline'}
                    className="absolute top-4 left-4"
                  >
                    {room.type}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-bold">{room.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{room.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-1.5">
                    {room.amenities.map((a) => (
                      <li
                        key={a}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <Button size="sm" className="mt-5 w-full">
                    Enquire
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
