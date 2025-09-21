'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Case Files' },
  { href: '/team', label: 'Detectives' },
  { href: '/contact', label: 'Consult Us' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="max-w-8xl fixed top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/40 px-8 py-4 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="221B Softwares Logo"
            width={140}
            height={40}
            priority
            className="drop-shadow-md"
          />
        </Link>

        <div className="flex space-x-8 text-sm font-medium tracking-wide">
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
                    active ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
