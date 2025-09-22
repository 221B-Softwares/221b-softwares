'use client'

import { Project } from '@/types'
import Image from 'next/image'
import { GiSherlockHolmes } from 'react-icons/gi'

export default function CaseFileCover({ project }: { project: Project }) {
  return project.cover ? (
    <div className="relative mb-4 h-60 w-full overflow-hidden rounded-t-lg">
      <Image
        src={project.cover}
        alt={`${project.title} cover`}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  ) : (
    <div className="relative mb-4 flex h-40 w-full items-center justify-center rounded-t-lg bg-black/40">
      <GiSherlockHolmes className="text-brand-brass h-20 w-20 opacity-80" />
    </div>
  )
}
