import Navbar from '@/components/shared/Navbar'
import TeamTree from '@/components/team/TeamTree'
import Footer from '@/components/shared/Footer'

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <TeamTree />
      <Footer />
    </main>
  )
}
