import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { projects } from '@/data/projects'
import CaseFileCard from '@/components/projects/CaseFileCard'

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="from-brand-ink via-brand-fog text-brand-parchment flex flex-1 bg-gradient-to-br to-black px-6 py-40">
        <div className="mx-auto w-full max-w-6xl text-center">
          <h1 className="text-brand-brass mb-6 text-4xl font-extrabold md:text-5xl">
            Our Case Files
          </h1>
          <p className="text-brand-parchment/80 mx-auto mb-12 max-w-2xl text-base md:mb-20 md:text-lg">
            A collection of{' '}
            <span className="text-brand-brass font-semibold">
              digital mysteries
            </span>{' '}
            we&apos;ve solved — from sleek apps to powerful platforms, each
            project is a story of its own.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <CaseFileCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
