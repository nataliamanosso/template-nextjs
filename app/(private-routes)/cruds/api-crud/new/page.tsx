import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyForm } from '@/components/cruds/api-crud/form/company-form'

export default function ApiCrudCreatePage() {
  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'API CRUD',
      href: '/cruds/api-crud',
    },
  ]

  return (
    <>
      <PageHeader
        title="New Company"
        description="Register a new company in the system."
        breadcrumbs={breadcrumbs}
        mainPageTitle="New Company"
      />
      <CompanyForm mode="create" />
    </>
  )
}
