import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InputSearch } from '@/components/ui/inputs/input-search'

import { operationTypes } from '@/components/cruds/api-crud/form/select-options'
import { useGetAllCompanies } from '@/hooks/use-companies'
import { FilterX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Params } from '@/hooks/use-query-params'

interface CompaniesHeaderFiltersProps {
  filters: Params
  setFilter: (key: string, value: any) => void
  resetFilters: () => void
}

export function CompaniesHeaderFilters({
  filters,
  setFilter,
  resetFilters,
}: CompaniesHeaderFiltersProps) {
  const { isLoading } = useGetAllCompanies()

  // Uncomment to see the filters change value
  // const isLoading = false

  const handleSearchChange = (e: any) => {
    setFilter('companyName', e.target.value)
  }

  const handleOperationTypeChange = (value: string) => {
    setFilter('operationType', value)
  }

  const hasActiveFilters = !!filters.companyName || !!filters.operationType

  return (
    <div className="flex items-center gap-2">
      <InputSearch
        placeholder="Search by company..."
        value={filters.companyName}
        onChange={handleSearchChange}
        disabled={isLoading}
      />
      <Select
        value={filters.operationType}
        onValueChange={handleOperationTypeChange}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Operation type" />
        </SelectTrigger>
        <SelectContent>
          {operationTypes.map((type) => (
            <SelectItem key={type.id} value={type.id.toString()}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {hasActiveFilters && (
        <Button variant="outline" onClick={() => resetFilters()}>
          <FilterX className="icon-size mr-2" /> Clear filters
        </Button>
      )}
    </div>
  )
}
