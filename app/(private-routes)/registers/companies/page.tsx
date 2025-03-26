import React from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompaniesTable } from '@/components/registers/companies/table/companies-table-view'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function CompaniesPage() {
  return (
    <>
      <PageHeader
        title="Companies"
        description="View and manage company registrations."
        breadcrumbs={[{ title: 'CRUDs' }]}
        mainPageTitle="Companies"
      >
        <Link
          href="/registers/companies/new"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="icon-size mr-2" />
          New Company
        </Link>
      </PageHeader>
      <CompaniesTable />
    </>
  )
}
