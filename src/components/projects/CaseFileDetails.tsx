'use client'

import { Project } from '@/types'
import { teamMembers } from '@/data/teamMembers'
import TechIcons from '../shared/TechIcons'
import DetectiveAvatar from './DetectiveAvatar'

export default function CaseFileDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-6 border-t border-white/10 px-6 pt-6 pb-6">
      <div>
        <h3 className="text-brand-parchment/80 pb-2 text-sm font-semibold">
          Evidence (Technologies Used)
        </h3>
        <TechIcons tech={project.tech} />
      </div>

      {project.detectives && (
        <div className="mt-8">
          <h3 className="text-brand-parchment/80 pb-2 text-sm font-semibold">
            Detectives Assigned
          </h3>
          <div className="mt-4 flex flex-wrap gap-6">
            {project.detectives.map((id) => {
              const detective = teamMembers.find((m) => m.id === id)
              return detective ? (
                <DetectiveAvatar key={id} detective={detective} />
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}
