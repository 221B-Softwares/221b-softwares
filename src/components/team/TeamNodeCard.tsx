'use client'

import Image from 'next/image'
import { TeamNode } from '@/types'
import Link from 'next/link'

export default function TeamNodeCard({ member }: { member: TeamNode }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-52 flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-6 shadow-md backdrop-blur-md transition hover:-translate-y-1">
        <Link href={`/team/${member.id}`} className="mb-3 block">
          {member.photo ? (
            <div className="border-brand-brass mb-3 h-20 w-20 overflow-hidden rounded-full border">
              <Image
                src={member.photo}
                alt={member.name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="border-brand-brass bg-brand-brass/20 text-brand-brass mb-3 flex h-20 w-20 items-center justify-center rounded-full border font-bold">
              {member.name[0]}
            </div>
          )}
        </Link>
        <p className="text-brand-brass text-sm font-bold">{member.name}</p>
        <p className="text-brand-parchment/80 text-xs">{member.title}</p>
      </div>
    </div>
  )
}
