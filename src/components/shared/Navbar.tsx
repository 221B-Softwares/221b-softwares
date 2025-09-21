'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Case Files' },
  { href: '/team', label: 'Detectives' },
  { href: '/contact', label: 'Consult Us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="max-w-8xl fixed top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/40 px-6 py-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="221B Softwares Logo"
            width={120}
            height={36}
            priority
            className="drop-shadow-md"
          />
        </Link>

        <div className="hidden space-x-8 text-sm font-medium tracking-wide md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition ${
                  active ? 'text-brand-brass' : 'text-brand-parchment'
                } hover:text-brand-brass`}
              >
                {label}
                <span
                  className={`bg-brand-brass absolute -bottom-1 left-0 h-[2px] w-full scale-x-0 transition-transform duration-300 ${
                    active ? 'scale-x-100' : ''
                  }`}
                />
              </Link>
            )
          })}
        </div>

        <button
          className="text-brand-parchment md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-brand-brass text-brand-ink'
                    : 'text-brand-parchment hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
