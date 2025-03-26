import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyForm } from '@/components/registers/companies/form/company-form'

import { PageParams } from '@/types'

export default async function EditCompanyPage({ params }: PageParams) {
  const id = (await params).id

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
        title="Edit Company"
        description="Change company data and save the changes."
        breadcrumbs={breadcrumbs}
        mainPageTitle={`Company #${id}`}
      />
      <CompanyForm mode="update" />
    </>
  )
}
