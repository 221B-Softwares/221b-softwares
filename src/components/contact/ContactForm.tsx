'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowLeft, CheckCircle, Send } from 'lucide-react'
import Link from 'next/link'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setSubmitted(true)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }

  if (submitted) {
    return (
      <div className="border-brand-brass/30 flex flex-col items-center justify-center rounded-xl border bg-white/5 px-6 py-12 text-center shadow-lg backdrop-blur-md">
        <CheckCircle
          className="text-brand-brass mb-6 h-16 w-16"
          strokeWidth={2.5}
        />

        <h2 className="text-brand-brass text-3xl font-extrabold tracking-tight">
          Thank you!
        </h2>

        <p className="text-brand-parchment/80 mt-3 max-w-sm text-sm sm:text-base">
          Your message has been received. Our team will get back to you shortly.
        </p>

        <Link
          href="/"
          className="bg-brand-brass text-brand-ink mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <ArrowLeft className="h-5 w-5" />

          <span>Back to Home</span>
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md"
    >
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight">
        Get in Touch
      </h2>

      <div className="mb-4">
        <label className="text-brand-parchment mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="focus:border-brand-brass focus:ring-brand-brass/50 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2"
          placeholder="Your full name"
        />
      </div>

      <div className="mb-4">
        <label className="text-brand-parchment mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="focus:border-brand-brass focus:ring-brand-brass/50 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2"
          placeholder="you@example.com"
        />
      </div>

      <div className="mb-6">
        <label className="text-brand-parchment mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="focus:border-brand-brass focus:ring-brand-brass/50 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:ring-2"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group bg-brand-brass text-brand-ink relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        {loading ? 'Sending...' : 'Send Message'}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}
