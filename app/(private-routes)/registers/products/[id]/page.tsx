import React from 'react'

import { ProductDetailsView } from '@/components/registers/products/details/product-details-view'
import { PageHeader } from '@/components/layout/pages/page-header'

import { PageParams } from '@/types'

export default async function ProductDetailsPage({ params }: PageParams) {
  const id = (await params).id

  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'Products',
      href: '/registers/products',
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
