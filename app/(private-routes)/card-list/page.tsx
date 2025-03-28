import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { ContractsListView } from '@/components/cruds/card-list/list/contracts-list-view'

export default function CardListPage() {
  return (
    <>
      <PageHeader
        title="Cards List"
        description="Mock card list with request simulation. There's a 20% chance of returning an error to simulate the processing, you can refresh the page to test it."
        breadcrumbs={[]}
        mainPageTitle="Cards"
      />
      <ContractsListView />
    </>
  )
}
