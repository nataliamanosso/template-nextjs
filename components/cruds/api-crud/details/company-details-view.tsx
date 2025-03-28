'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Pencil } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CardError } from '@/components/layout/cards/card-error'
import { InfoLabel } from '@/components/ui/info-label'

import { formatDate } from '@/lib/utils/format-date'
import { OperationType } from '@/types'
import { useCompanyById } from '@/hooks/use-companies'

export function CompanyDetailsView() {
  const router = useRouter()
  const { id } = useParams()
  const companyId = Number(id) ?? undefined

  const { data: company, isLoading, error } = useCompanyById(companyId)

  if (isLoading) {
    return <Skeleton className="w-full h-80" />
  }

  if (error) {
    return <CardError title="Error fetching company." />
  }

  return (
    <section className="space-y-6">
      {company && (
        <div className="flex gap-2 justify-end mt-[-4rem]">
          <Button
            onClick={() => router.push(`/cruds/companies/edit/${company.id}`)}
          >
            <Pencil className="icon-size mr-2" /> Edit Company
          </Button>
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent>
          {company && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoLabel title="Trade Name" content={company.tradeName} />
              <InfoLabel title="CNPJ" content={company.cnpj} />
              <InfoLabel
                title="Operation Type"
                content={OperationType[company.operationType] ?? 'Unknown'}
              />
              <InfoLabel title="Address" content={company.address} />
              <InfoLabel title="Contact" content={company.contact} />
              <InfoLabel
                title="Created on"
                content={formatDate(company.registrationDate)}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
