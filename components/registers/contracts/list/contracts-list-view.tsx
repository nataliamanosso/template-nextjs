'use client'

import React from 'react'

import { ContractCard } from '@/components/registers/contracts/list/card/contract-card'
import { CardsSkeleton } from '@/components/ui/cards-skeleton'
import { CardError } from '@/components/layout/cards/card-error'
import { ContainerCardList } from '@/components/ui/containers/container-card-list'
import { ContractsListFilters } from '@/components/registers/contracts/list/contracts-list-filters'

import { useSimulateRequest } from '@/hooks/use-simulate-request'
import { contractsData } from '@/lib/mocks/contracts'

export function ContractsListView() {
  const { data, isLoading, error } = useSimulateRequest({
    mockData: contractsData.contractsList,
  })

  if (error) {
    return <CardError title="Error fetching contracts." />
  }

  return (
    <section className="space-y-6">
      <ContractsListFilters />
      {data && (
        <ContainerCardList data={data}>
          {data.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))}
        </ContainerCardList>
      )}
      {isLoading && <CardsSkeleton />}
    </section>
  )
}
