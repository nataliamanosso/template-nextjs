import React from 'react'

import { EditProductForm } from '@/components/cruds/mock-crud/form/edit-product-form'
import { PageHeader } from '@/components/layout/pages/page-header'

import { PageParams } from '@/types'

export default async function MockCrudUpdatePage({ params }: PageParams) {
  const id = (await params).id

  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'Products',
      href: '/cruds/mock-crud',
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
