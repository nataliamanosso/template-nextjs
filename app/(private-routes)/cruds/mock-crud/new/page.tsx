'use client'
import React from 'react'

import { CreateProductForm } from '@/components/cruds/mock-crud/form/create-product-form'
import { PageHeader } from '@/components/layout/pages/page-header'

export default function MockCrudCreatePage() {
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
        title="New Product"
        description="Register a new product in the system."
        breadcrumbs={breadcrumbs}
        mainPageTitle="New Product"
      />
      <CreateProductForm />
    </>
  )
}
