'use client'

import { TeamMember } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

export default function DetectiveAvatar({
  detective,
}: {
  detective: TeamMember
}) {
  return (
    <Link
      href={`/team/${detective.id}`}
      onClick={(e) => e.stopPropagation()}
      className="group relative"
    >
      <div className="h-20 w-20 overflow-hidden rounded-full">
        {detective.photo ? (
          <Image
            src={detective.photo}
            alt={detective.name}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="bg-brand-brass/20 text-brand-brass flex h-full w-full items-center justify-center font-bold">
            {detective.name[0]}
          </div>
        )}
      </div>

      <div className="absolute bottom-full left-1/2 mb-2 hidden w-44 -translate-x-1/2 flex-col items-center rounded-md bg-black px-3 py-2 text-center shadow-lg group-hover:flex">
        <p className="text-brand-brass text-sm font-bold">{detective.name}</p>
        <p className="text-brand-parchment/80 mt-1 text-xs">
          {detective.title}
        </p>
      </div>
    </Link>
  )
}
