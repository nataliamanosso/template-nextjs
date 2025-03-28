import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyDetailsView } from '@/components/cruds/api-crud/details/company-details-view'

import { PageParams } from '@/types'

export default async function ApiCrudDetailsPage({ params }: PageParams) {
  const id = (await params).id

  const breadcrumbs = [
    {
      title: 'CRUDs',
    },
    {
      title: 'Companies',
      href: '/cruds/api-crud',
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
