import {
  ArrowDownToLine,
  CheckCircle2,
  Clock,
  FileCheck2,
  FileX2,
  User2,
  XCircle,
} from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { InfoLabel } from '@/components/ui/info-label'

import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils/format-date'
import { ActionDropdown } from '@/components/ui/action-dropdown'
import { getBadgeColor } from '@/lib/utils/status-convertions'
import { CardNotFound } from '@/components/layout/cards/card-not-found'
import React from 'react'
import { formatCurrency } from '@/lib/utils/format-currency'
import { TimelineData } from '@/types'

export function ExampleTimeline({ data }: { data: TimelineData[] }) {
  if (data.length === 0) {
    return (
      <CardNotFound
        title="No data found"
        description="There are no data found."
        className="bg-background"
      />
    )
  }

  const actions = [
    {
      label: 'Approve',
      icon: FileCheck2,
      onClick: () => {},
    },
    {
      label: 'Reprove',
      icon: FileX2,
      onClick: () => {},
    },
    {
      label: 'Download',
      icon: ArrowDownToLine,
      onClick: () => {},
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      {data.map((item, index) => {
        const isFirst = index === 0
        const isLast = index === data.length - 1

        return (
          <div key={item.id} className="relative">
            {!isLast && (
              <div
                className={cn(
                  'absolute left-6 top-16 bottom-0 w-0.5 -translate-x-1/2',
                  item.status === 'accepted' && 'bg-success/20',
                  item.status === 'rejected' && 'bg-destructive/20',
                  item.status === 'pending' && 'bg-warning/20',
                )}
              />
            )}
            <div className="relative flex gap-6">
              <span
                className={cn(
                  'relative z-10 shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center',
                  item.status === 'accepted' && 'border-success bg-success/10',
                  item.status === 'rejected' &&
                    'border-destructive bg-destructive/10',
                  item.status === 'pending' && 'border-warning bg-warning/10',
                  isFirst && item.status === 'pending' && 'animate-pulse',
                )}
              >
                {item.status === 'accepted' && (
                  <CheckCircle2 className="h-6 w-6 text-success" />
                )}
                {item.status === 'rejected' && (
                  <XCircle className="h-6 w-6 text-destructive" />
                )}
                {item.status === 'pending' && (
                  <Clock className="h-6 w-6 text-warning" />
                )}
              </span>
              <Card className="w-[500px] bg-background">
                <CardHeader className="flex-row justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10">
                        <User2 className="icon-size text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{item.user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.user.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getBadgeColor(item.status)}>
                      {item.status}
                    </Badge>
                    <ActionDropdown items={actions} />
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-4 gap-4">
                  <InfoLabel
                    title="Price"
                    content={formatCurrency(item.price, 'USD')}
                  />
                  <InfoLabel title="Company" content={item.user.company} />
                  <InfoLabel
                    title="Create at"
                    content={formatDate(item.createdAt)}
                  />
                  <InfoLabel
                    title="Updated at"
                    content={formatDate(item.updatedAt)}
                  />
                  <InfoLabel
                    className="col-span-4"
                    title="Description"
                    content={item.description}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        )
      })}
    </div>
  )
}
