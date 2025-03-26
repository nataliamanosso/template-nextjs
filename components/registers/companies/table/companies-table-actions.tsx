import React from 'react'
import { Eye, Pencil } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ActionDropdown } from '@/components/ui/action-dropdown'
import { Company } from '@/types'

export function CompaniesTableActions({ company }: { company: Company }) {
  const router = useRouter()

  const actions = [
    {
      label: 'View Company',
      icon: Eye,
      onClick: () => router.push(`/registers/companies/${company.id}`),
    },
    {
      label: 'Edit Company',
      icon: Pencil,
      onClick: () => router.push(`/registers/companies/edit/${company.id}`),
    },
  ]

  return (
    <>
      {actions.length > 3 ? (
        <ActionDropdown items={actions} />
      ) : (
        <div className="flex items-center gap-2">
          {actions.map(({ label, icon: Icon, onClick }) => (
            <Button
              key={label}
              size="sm"
              variant="ghost"
              onClick={onClick}
              title={label}
            >
              <Icon className="icon-size text-muted-foreground" />
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
