import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="from-brand-ink via-brand-fog text-brand-parchment flex flex-1 items-center justify-center bg-gradient-to-br to-black px-6 py-40 text-center">
        <div className="max-w-lg">
          <h1 className="text-brand-brass mb-6 text-7xl font-extrabold tracking-tight drop-shadow-lg">
            404
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">Oops! Page not found</h2>
          <p className="text-brand-parchment/80 mb-8 text-sm">
            Looks like the page you were looking for doesn’t exist. Don’t worry
            — you can head back to safety.
          </p>

          <Link
            href="/"
            className="bg-brand-brass text-brand-ink inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Back to Home →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
