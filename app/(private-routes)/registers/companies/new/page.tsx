import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyForm } from '@/components/registers/companies/form/company-form'

export default function NewCompanyPage() {
  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'Companies',
      href: '/registers/companies',
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
