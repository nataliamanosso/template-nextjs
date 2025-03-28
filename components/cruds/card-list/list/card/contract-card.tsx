import React from 'react'
import { Building2, Eye, FileX2, Plus, User } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { InfoLabel } from '@/components/ui/info-label'
import { ActionDropdown } from '@/components/ui/action-dropdown'

import { formatDate } from '@/lib/utils/format-date'
import { getBadgeColor } from '@/lib/utils/status-convertions'

interface ContractCardProps {
  contract: {
    id: number
    contract_name: string
    start_date: string
    end_date: string
    status: 'active' | 'pending' | 'expired' | 'terminated'
    total_value: number
    currency: string
    client_name: string
    provider_name: string
    last_modified_date: string
    description: string
  }
}

export function ContractCard({ contract }: ContractCardProps) {
  const actions = [
    {
      label: 'View contract',
      icon: Eye,
      onClick: () => {},
    },
    {
      label: 'Add description',
      icon: Plus,
      onClick: () => {},
    },
    {
      label: 'Cancel contract',
      icon: FileX2,
      onClick: () => {},
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge variant={getBadgeColor(contract.status)}>
            {contract.status}
          </Badge>
          <ActionDropdown items={actions} />
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-semibold mb-2">
              {contract.contract_name}
            </h3>
            <p className="text-sm text-muted-foreground">#{contract.id}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <h4 className="text-3xl font-bold text-primary">
              {contract.total_value.toLocaleString()}
            </h4>
            <p className="text-sm text-muted-foreground">{contract.currency}</p>
          </div>
        </div>
        <Separator className="col-span-2" />
        <InfoLabel
          title="Client"
          Icon={Building2}
          content={contract.client_name}
        />
        <InfoLabel
          title="Provider"
          Icon={User}
          content={contract.provider_name}
        />
        <Separator className="col-span-2" />
        {contract.last_modified_date && (
          <InfoLabel
            title="Last Modified"
            content={formatDate(contract.last_modified_date)}
          />
        )}
        <InfoLabel
          title="Contract Period"
          content={`${formatDate(contract.start_date)} - ${formatDate(contract.end_date)}`}
        />
      </CardContent>
    </Card>
  )
}
