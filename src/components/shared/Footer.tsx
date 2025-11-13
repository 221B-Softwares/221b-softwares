'use client'

import { Globe, Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { SiFiverr } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-brand-brass text-brand-ink relative border-t border-black/20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-4">
        <div className="flex h-full flex-col items-start">
          <h3 className="mb-4 text-lg font-semibold">221B Softwares</h3>
          <p className="text-brand-ink/80 max-w-xs text-sm leading-relaxed">
            Solving digital mysteries with precision — inspired by Sherlock
            Holmes. Web, Mobile, AI & DevOps solutions tailored for you.
          </p>
        </div>

        <div className="flex h-full flex-col items-start">
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="text-brand-ink/80 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-brand-parchment transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-brand-parchment transition"
              >
                Case Files
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-brand-parchment transition"
              >
                Detectives
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-parchment transition"
              >
                Consult Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex h-full flex-col items-start">
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="text-brand-ink/80 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="text-brand-ink h-4 w-4" />
              <a
                href="mailto:221bsoftwares@gmail.com"
                className="hover:text-brand-parchment transition"
              >
                221bsoftwares@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-brand-ink h-4 w-4" />
              <a
                href="tel:+923004171382"
                className="hover:text-brand-parchment transition"
              >
                +92 300 4171382
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-brand-ink h-4 w-4" />
              <a
                href="tel:+923368005598"
                className="hover:text-brand-parchment transition"
              >
                +92 336 8005598
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-brand-ink h-4 w-4" />
              Pakistan
            </li>
          </ul>
        </div>

        <div className="flex h-full flex-col items-start">
          <h3 className="mb-4 text-lg font-semibold">Connect</h3>
          <div className="flex items-center">
            {/* <a
              href="https://www.fiverr.com/linskashif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink hover:text-brand-parchment rounded-full p-2 transition hover:scale-110"
            >
              <SiFiverr className="h-8 w-8" />
            </a>
            <a
              href="https://www.fiverr.com/huzaifahtariq08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink hover:text-brand-parchment rounded-full p-2 transition hover:scale-110"
            >
              <SiFiverr className="h-8 w-8" />
            </a> */}
            <a
              href="https://github.com/221B-Softwares"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink hover:text-brand-parchment rounded-full p-2 transition hover:scale-110"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://221bsoftwares.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-ink hover:text-brand-parchment rounded-full p-2 transition hover:scale-110"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-brand-ink/70 border-t border-black/20 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} 221B Softwares — All Rights Reserved
      </div>
    </footer>
  )
}
