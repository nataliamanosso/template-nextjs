import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { CompanyForm } from '@/components/cruds/api-crud/form/company-form'

import { PageParams } from '@/types'

export default async function ApiCrudUpdatePage({ params }: PageParams) {
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
        title="Edit Company"
        description="Change company data and save the changes."
        breadcrumbs={breadcrumbs}
        mainPageTitle={`Company #${id}`}
      />
      <CompanyForm mode="update" />
    </>
  )
}
