'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { teamTree } from '@/data/teamHierarchy'
import TeamNodeCard from './TeamNodeCard'
import { TeamNode } from '@/types'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function TeamTree() {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null)
  const [pendingTeam, setPendingTeam] = useState<string | null>(null)

  const ceo = teamTree.find((n) => n.designation === 'ceo')!
  const cto = teamTree.find((n) => n.designation === 'cto')!
  const leads = cto.children || []

  const toggleTeam = (designation: string) => {
    if (expandedTeam === designation) {
      setExpandedTeam(null)
      setPendingTeam(null)
    } else {
      if (expandedTeam) {
        setPendingTeam(designation)
        setExpandedTeam(null)
      } else {
        setExpandedTeam(designation)
      }
    }
  }

  return (
    <section className="from-brand-ink via-brand-fog text-brand-parchment flex flex-1 flex-col items-center bg-gradient-to-br to-black px-4 py-20 md:px-6 md:py-40">
      <div className="mx-auto w-full max-w-7xl text-center">
        <h1 className="text-brand-brass mb-6 text-4xl font-extrabold md:text-5xl">
          Meet Our Detectives
        </h1>
        <p className="text-brand-parchment/80 mx-auto mb-12 max-w-2xl text-base md:mb-20 md:text-lg">
          The brilliant minds investigating digital mysteries at{' '}
          <span className="text-brand-brass font-semibold">221B Softwares</span>
          .
        </p>

        <div className="hidden md:block">
          <div className="mb-20 flex justify-center gap-24">
            <TeamNodeCard member={ceo} />
            <TeamNodeCard member={cto} />
          </div>

          <div className="flex flex-wrap justify-center gap-16">
            {leads.map((lead, idx) => {
              const isExpanded = expandedTeam === lead.designation
              return (
                <div
                  key={idx}
                  className="group flex cursor-pointer flex-col items-center"
                  onClick={() => toggleTeam(lead.designation)}
                >
                  <div className="relative flex flex-col items-center">
                    <TeamNodeCard member={lead} />

                    <div className="text-brand-brass absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-80 transition group-hover:opacity-100">
                      {!isExpanded && <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="bg-brand-brass/40 h-6 w-0.5" />
                  )}

                  <AnimatePresence
                    mode="wait"
                    onExitComplete={() => {
                      if (pendingTeam) {
                        setExpandedTeam(pendingTeam)
                        setPendingTeam(null)
                      }
                    }}
                  >
                    {isExpanded && lead.children && (
                      <motion.div
                        key={lead.designation}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="relative mt-6 flex flex-wrap justify-center gap-12">
                          {lead.children.map((member, idx) => (
                            <div
                              key={idx}
                              className="relative flex flex-col items-center"
                            >
                              <TeamNodeCard member={member as TeamNode} />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        <div className="block space-y-8 md:hidden">
          <TeamNodeCard member={ceo} />
          <TeamNodeCard member={cto} />

          {leads.map((lead, idx) => (
            <div key={idx} className="w-full">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleTeam(lead.designation)}
              >
                <TeamNodeCard member={lead} />
                {expandedTeam === lead.designation ? (
                  <ChevronDown className="text-brand-brass ml-2 h-6 w-6" />
                ) : (
                  <ChevronRight className="text-brand-brass ml-2 h-6 w-6" />
                )}
              </div>

              <AnimatePresence>
                {expandedTeam === lead.designation && lead.children && (
                  <motion.div
                    key={lead.designation}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    {lead.children.map((member, idx) => (
                      <TeamNodeCard key={idx} member={member as TeamNode} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
