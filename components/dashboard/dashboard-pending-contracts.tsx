'use client'

import React from 'react'
import { User2, Eye } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { buttonVariants } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { DashboardPendingContractsData } from '@/types'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'

export function DashboardPendingContracts({
  data,
}: DashboardPendingContractsData) {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Pending Contracts</CardTitle>
        <CardDescription>Contracts awaiting analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72 2xl:h-96">
          {data.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              There are no pending contracts at this time.
            </div>
          ) : (
            data.map((contract) => (
              <Card key={contract.id} className="bg-background mb-3">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10">
                        <User2 className="h-5 w-5 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      <p className="font-medium leading-none">
                        {contract.user.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contract.user.company}
                      </p>
                    </span>
                  </div>
                  <Link
                    href={'#'}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                    )}
                  >
                    <Eye className="icon-size" />
                    <span className="sr-only">View contract</span>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      Contract #{contract.id}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {contract.productName}
                    </span>
                  </div>
                  <Separator />
                  <p className="text-xs text-muted-foreground">
                    {format(contract.createdAt, "dd/MM/yyyy 'at' HH:mm", {
                      locale: ptBR,
                    })}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
