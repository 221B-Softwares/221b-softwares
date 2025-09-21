import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ComingSoon from '@/components/shared/ComingSoon'

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ComingSoon title="Our Detectives" />
      <Footer />
    </main>
  )
}
