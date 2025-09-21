'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // later integrate with backend/email API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-brand-brass text-2xl font-bold">Thank you!</h2>
        <p className="text-brand-parchment/80 mt-2 text-sm">
          Your message has been received. We’ll get back to you shortly.
        </p>
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
        className="group bg-brand-brass text-brand-ink relative flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  )
}
