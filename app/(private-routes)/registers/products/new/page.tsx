'use client'
import React from 'react'

import { CreateProductForm } from '@/components/registers/products/form/create-product-form'
import { PageHeader } from '@/components/layout/pages/page-header'

export default function NewProductPage() {
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
        title="New Product"
        description="Register a new product in the system."
        breadcrumbs={breadcrumbs}
        mainPageTitle="New Product"
      />
      <CreateProductForm />
    </>
  )
}
