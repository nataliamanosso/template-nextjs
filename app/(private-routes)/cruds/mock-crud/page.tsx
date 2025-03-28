import React from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/pages/page-header'
import { ProductsTable } from '@/components/cruds/mock-crud/table/products-table-view'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function MockCrudPage() {
  return (
    <>
      <PageHeader
        title="Mock CRUD"
        description="Complete CRUD with mocked data, feel free to test and experiment."
        breadcrumbs={[{ title: 'CRUDs' }]}
        mainPageTitle="Mock CRUD"
      >
        <Link
          href="/app/(private-routes)/cruds/mock-crud/new"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Product
        </Link>
      </PageHeader>
      <ProductsTable />
    </>
  )
}
