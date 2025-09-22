import { notFound } from 'next/navigation'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { teamMembers } from '@/data/teamMembers'
import TeamMemberProfile from '@/components/team/TeamMemberProfile'

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === params.id)
  if (!member) notFound()

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <TeamMemberProfile member={member} />
      <Footer />
    </main>
  )
}
