import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import Technologies from '@/components/home/Technologies'
import Testimonials from '@/components/home/Testimonials'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Technologies />
      <Testimonials />
      <Footer />
    </main>
  )
}
