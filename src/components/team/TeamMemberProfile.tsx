'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TeamMember } from '@/types'
import { Globe } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import TechIcons from './TechIcons'
import { SiFiverr } from 'react-icons/si'

export default function TeamMemberProfile({ member }: { member: TeamMember }) {
  return (
    <section className="from-brand-ink via-brand-fog text-brand-parchment flex flex-1 items-center justify-center bg-gradient-to-br to-black px-6 py-40">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-10 shadow-lg backdrop-blur-md">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-6">
            {member.photo ? (
              <div className="border-brand-brass h-32 w-32 overflow-hidden rounded-full border-2">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="border-brand-brass bg-brand-brass/20 text-brand-brass flex h-32 w-32 items-center justify-center rounded-full border-2 text-3xl font-bold">
                {member.name[0]}
              </div>
            )}

            <div className="mt-4 md:mt-0">
              <h1 className="text-brand-brass text-3xl font-extrabold">
                {member.name}
              </h1>
              <p className="text-brand-parchment/80 mt-1 text-sm font-medium">
                {member.title}
              </p>
            </div>
          </div>

          {member.socials && member.socials.length > 0 && (
            <div className="flex items-center justify-center gap-5 md:justify-end">
              {member.socials.map((s) => {
                const icon =
                  s.type === 'fiverr' ? (
                    <SiFiverr className="h-8 w-8" />
                  ) : s.type === 'github' ? (
                    <FaGithub className="h-6 w-6" />
                  ) : s.type === 'linkedin' ? (
                    <FaLinkedin className="h-6 w-6" />
                  ) : (
                    <Globe className="h-6 w-6" />
                  )

                return (
                  <Link
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-parchment hover:text-brand-brass transition"
                  >
                    {icon}
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {member.bio && (
          <p className="text-brand-parchment/90 mt-8 text-center text-base leading-relaxed md:text-left">
            {member.bio}
          </p>
        )}

        {member.tech.length > 0 && (
          <div className="mt-12">
            <h2 className="text-brand-brass mb-6 text-xl font-semibold">
              Technical Expertise
            </h2>
            <TechIcons tech={member.tech} />
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/team"
            className="bg-brand-brass text-brand-ink rounded-lg px-6 py-3 font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            ← Back to Team
          </Link>
        </div>
      </div>
    </section>
  )
}
