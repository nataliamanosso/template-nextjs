import React from 'react'

import { ProductDetailsView } from '@/components/cruds/mock-crud/details/product-details-view'
import { PageHeader } from '@/components/layout/pages/page-header'

import { PageParams } from '@/types'

export default async function MockCrudDetailsPage({ params }: PageParams) {
  const id = (await params).id

  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'Mock CRUD',
      href: '/cruds/mock-crud',
    },
  ]

  return (
    <>
      <PageHeader
        title="Product Details"
        description="View and manage product information."
        breadcrumbs={breadcrumbs}
        mainPageTitle={`Product #${id}`}
      />
      <ProductDetailsView />
    </>
  )
}
