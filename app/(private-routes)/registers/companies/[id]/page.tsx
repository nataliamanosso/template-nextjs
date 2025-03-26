import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyDetailsView } from '@/components/registers/companies/details/company-details-view'

import { PageParams } from '@/types'

export default async function CompanyDetailsPage({ params }: PageParams) {
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
        title="Company Details"
        description="View and manage company information."
        breadcrumbs={breadcrumbs}
        mainPageTitle={`Company #${id}`}
      />
      <CompanyDetailsView />
    </>
  )
}
