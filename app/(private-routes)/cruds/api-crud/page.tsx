import React from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompaniesTable } from '@/components/cruds/api-crud/table/companies-table-view'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export default function ApiCrudPage() {
  return (
    <>
      <PageHeader
        title="API CRUD"
        description="Complete CRUD integrated with API services. Note that, in a production environment, this will return an error since the endpoint is mocked.
        However, you can clone the repository and test it locally."
        breadcrumbs={[{ title: 'CRUDs' }]}
        mainPageTitle="API CRUD"
      >
        <Link
          href="/app/(private-routes)/cruds/api-crud/new"
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
