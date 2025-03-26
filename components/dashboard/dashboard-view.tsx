'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

import { DashboardStats } from '@/components/dashboard/dashboard-stats'
import { DashboardPriceChart } from '@/components/dashboard/charts/dashboard-price-chart'
import { DashboardVolumeChart } from '@/components/dashboard/charts/dashboard-volume-chart'
import { DashboardContractsChart } from '@/components/dashboard/charts/dashboard-contracts-chart'
import { DashboardPendingContracts } from '@/components/dashboard/dashboard-pending-contracts'
import { dashboardData } from '@/lib/mocks/dashboard'
import { PageHeader } from '@/components/layout/pages/page-header'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Github } from 'lucide-react'

export function DashboardView() {
  const { data: session } = useSession()
  const userName = session?.user?.name || 'User'

  const currentHour = new Date().getHours()
  const greeting =
    currentHour < 12
      ? 'Good morning'
      : currentHour < 18
        ? 'Good afternoon'
        : 'Good night'

  return (
    <>
      <PageHeader
        title={`${greeting}, ${userName}`}
        description="Welcome to my template made with Nextjs, Tailwind, TypeScript and Shadcn UI."
        breadcrumbs={[]}
        mainPageTitle="Dashboard"
      >
        <Link
          href={'https://github.com/nataliamanosso/template-nextjs'}
          target="_blank"
          className={cn(buttonVariants({ variant: 'secondary' }), 'self-start')}
        >
          <Github className="icon-size mr-2" />
          Github repository
        </Link>
      </PageHeader>
      <DashboardStats data={dashboardData.statsCards} />
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <DashboardPriceChart data={dashboardData.priceChart} />
        <DashboardPendingContracts data={dashboardData.pendingDisputes} />
      </section>
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <DashboardContractsChart data={dashboardData.statusChart} />
        <DashboardVolumeChart data={dashboardData.volumeChart} />
      </section>
    </>
  )
}
