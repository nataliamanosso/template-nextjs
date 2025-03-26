import React from 'react'

import { EditProductForm } from '@/components/registers/products/form/edit-product-form'
import { PageHeader } from '@/components/layout/pages/page-header'

import { PageParams } from '@/types'

export default async function EditProductPage({ params }: PageParams) {
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
        title="Edit Product"
        description="Change the product data and save the changes."
        breadcrumbs={breadcrumbs}
        mainPageTitle={`Product #${id}`}
      />
      <EditProductForm />
    </>
  )
}
