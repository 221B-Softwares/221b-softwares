'use client'

import { Project } from '@/types'
import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

export default function CaseFileHeader({
  project,
  open,
}: {
  project: Project
  open: boolean
}) {
  return (
    <div className="flex flex-col gap-4 px-6 pb-6 text-left">
      <h2 className="text-brand-brass text-xl font-bold tracking-wide">
        {project.title}
      </h2>
      <p className="text-brand-parchment/90 text-sm italic">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-6">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            className="text-brand-parchment hover:text-brand-brass flex items-center gap-2 text-sm transition"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="h-4 w-4" /> GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className="text-brand-parchment hover:text-brand-brass flex items-center gap-2 text-sm transition"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" /> Live Site
          </Link>
        )}
        {project.androidUrl && (
          <Link
            href={project.androidUrl}
            target="_blank"
            className="text-brand-parchment hover:text-brand-brass flex items-center gap-2 text-sm transition"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGooglePlay className="h-4 w-4" /> Android
          </Link>
        )}
        {project.iosUrl && (
          <Link
            href={project.iosUrl}
            target="_blank"
            className="text-brand-parchment hover:text-brand-brass flex items-center gap-2 text-sm transition"
            onClick={(e) => e.stopPropagation()}
          >
            <FaApple className="h-4 w-4" /> iOS
          </Link>
        )}
      </div>

      <div className="text-brand-brass mt-4 flex items-center gap-2 text-sm font-semibold">
        {open ? (
          <>
            Close File <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            Open File <ChevronDown className="h-4 w-4" />
          </>
        )}
      </div>
    </div>
  )
}
