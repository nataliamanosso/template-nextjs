import React from 'react'

import { PageHeader } from '@/components/layout/pages/page-header'
import { ExamplesView } from '@/components/examples/examples-view'

export default function ExamplesPage() {
  return (
    <>
      <PageHeader
        title="Examples"
        description="View some examples of components."
        breadcrumbs={[]}
        mainPageTitle="Examples"
      />
      <ExamplesView />
    </>
  )
}
