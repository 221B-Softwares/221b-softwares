import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="from-brand-ink via-brand-fog text-brand-parchment flex flex-1 items-center justify-center bg-gradient-to-br to-black px-6 py-40">
        <div className="mx-auto w-full max-w-2xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
