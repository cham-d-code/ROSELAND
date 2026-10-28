import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Banner } from '@/components/sections/Banner'
import { Cottages } from '@/components/sections/Cottages'
import { CTA } from '@/components/sections/CTA'
import { Experiences } from '@/components/sections/Experiences'
import { FeatureRow } from '@/components/sections/FeatureRow'
import { Gallery } from '@/components/sections/Gallery'
import { Hero } from '@/components/sections/Hero'
import { OurStory } from '@/components/sections/OurStory'
import { Testimonials } from '@/components/sections/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <FeatureRow />
        <Banner />
        <Cottages />
        <Experiences />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
