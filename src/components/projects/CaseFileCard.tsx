'use client'

import { useState } from 'react'
import { Project } from '@/types'
import CaseFileCover from './CaseFileCover'
import CaseFileHeader from './CaseFileHeader'
import CaseFileDetails from './CaseFileDetails'

export default function CaseFileCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-brand-brass/30 relative cursor-pointer rounded-lg border bg-cover bg-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.7)]"
      onClick={() => setOpen((prev) => !prev)}
    >
      {/* Tab */}
      <div className="bg-brand-brass text-brand-ink absolute -top-3 left-4 z-10 rounded-t-md px-3 py-1 text-xs font-bold shadow">
        Case File
      </div>

      {/* Cover */}
      <CaseFileCover project={project} />

      {/* Header (title, summary, links, toggle) */}
      <CaseFileHeader project={project} open={open} />

      {/* Expanded details */}
      {open && <CaseFileDetails project={project} />}
    </div>
  )
}
