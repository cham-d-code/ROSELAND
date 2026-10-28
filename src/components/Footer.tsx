import { Mail, MapPin, Phone } from 'lucide-react'

import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/SocialIcons'

const CURRENT_YEAR = new Date().getFullYear()

const QUICK_LINKS = [
  'Home',
  'Roseland Cottages',
  'Coffee Factory',
  'Ceylon Kahawa — Colombo',
  'Ceylon Kahawa — Ella',
  'Gallery',
  'Sustainability & Policies',
  'Contact & Bookings',
]

const EXPERIENCES = [
  'Cottage Stay',
  'Coffee Factory Tour',
  'Artisan Coffee — Colombo',
  'Artisan Coffee — Ella',
  'Hiking Trails',
  'Mountain Sunrise',
  'Local Cuisine',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary pt-16 pb-8 text-primary-foreground">
      <div className="container-px mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <span className="script text-3xl text-white">Roseland</span>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            Escape to the picturesque hills of Ambadandegama, Bandarawela. Traditional
            Sri Lankan cottages, artisan coffee, and warm hospitality — all in one
            breathtaking setting.
          </p>
          <div className="mt-5 flex gap-3">
            {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/15"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-olive-200">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Experiences</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
            {EXPERIENCES.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-olive-200">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-semibold">Find Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 translate-y-0.5" />
              Ambadandegama, Bandarawela, Sri Lanka
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0" />
              +94 70 733 0950
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0" />
              +94 57 358 8700
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0" />
              ceylonroseland@gmail.com
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0" />
              info@roseland.lk
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
        © {CURRENT_YEAR} Roseland Bandarawela. All rights reserved.
      </div>
    </footer>
  )
}
