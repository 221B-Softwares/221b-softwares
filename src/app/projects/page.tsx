import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ComingSoon from '@/components/shared/ComingSoon'

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <ComingSoon title="Case Files" />
      <Footer />
    </main>
  )
}
