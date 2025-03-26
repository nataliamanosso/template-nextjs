'use client'
import React from 'react'

import { TableBase } from '@/components/ui/table/table-base'
import { Skeleton } from '@/components/ui/skeleton'
import { CardError } from '@/components/layout/cards/card-error'
import { CompaniesHeaderFilters } from './filters/companies-header-filters'

import { useGetAllCompanies } from '@/hooks/use-companies'
import { companiesTableColumns } from '@/components/registers/companies/table/companies-table-columns'
import { useQueryParams } from '@/hooks/use-query-params'

export function CompaniesTable() {
  const { params, setParam, resetParams } = useQueryParams({
    companyName: '',
    operationType: '',
  })
  const { data: companies, isLoading, error } = useGetAllCompanies(params)

  // Uncomment this part if you want to see the view
  // const isLoading = false
  // const error = false
  // const companies: Company[] = [
  //   {
  //     id: 1,
  //     tradeName: 'Tech Solutions Ltd',
  //     cnpj: '12.345.678/0001-90',
  //     operationType: 1,
  //     address: '123 Tech Street, Tech City, TC 12345',
  //     contact: 'contact@techsolutions.com',
  //     registrationDate: new Date('2020-01-15'),
  //   },
  //   {
  //     id: 2,
  //     tradeName: 'Global Distributors Inc',
  //     cnpj: '23.456.789/0001-01',
  //     operationType: 2,
  //     address: '456 Global Ave, Business Park, BP 67890',
  //     contact: 'info@globaldistributors.com',
  //     registrationDate: new Date('2018-06-23'),
  //   },
  //   {
  //     id: 3,
  //     tradeName: 'Fast Logistics Co',
  //     cnpj: '34.567.890/0001-12',
  //     operationType: 3,
  //     address: '789 Fast Lane, Transport Hub, TH 11223',
  //     contact: 'support@fastlogistics.com',
  //     registrationDate: new Date('2019-11-05'),
  //   },
  // ]

  if (error) {
    return <CardError title="Error fetching companies." />
  }

  return (
    <section className="space-y-4">
      <CompaniesHeaderFilters
        filters={params}
        setFilter={setParam}
        resetFilters={resetParams}
      />
      {companies && (
        <TableBase
          data={companies}
          columns={companiesTableColumns}
          showPagination
        />
      )}
      {isLoading && <Skeleton className="w-full h-80" />}
    </section>
  )
}
