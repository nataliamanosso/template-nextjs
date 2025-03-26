import React from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/pages/page-header'
import { ProductsTable } from '@/components/registers/products/table/products-table-view'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        description="View and manage product registrations."
        breadcrumbs={[{ title: 'CRUDs' }]}
        mainPageTitle="Products"
      >
        <Link
          href="/registers/products/new"
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
