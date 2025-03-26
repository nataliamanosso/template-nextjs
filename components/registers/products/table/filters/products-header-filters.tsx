import React from 'react'
import { Filter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InputSearch } from '@/components/ui/inputs/input-search'
import { ProductsSheetFilters } from './products-sheet-filters'

import { useProducts } from '@/contexts/Products'
import { productTypeOptions, productStatusOptions } from '@/lib/mocks/products'
import { ProductType, ProductStatus } from '@/types'

export function ProductsHeaderFilters() {
  const { filters, setFilters, activeFiltersCount } = useProducts()

  return (
    <div className="flex items-center gap-2">
      <InputSearch
        placeholder="Search by product..."
        value={filters.search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <Select
        value={filters.type.length > 0 ? filters.type[0] : 'all'}
        onValueChange={(value) =>
          setFilters({
            ...filters,
            type: value === 'all' ? [] : [value as ProductType],
          })
        }
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All types</SelectItem>
          {productTypeOptions.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.status.length > 0 ? filters.status[0] : 'all'}
        onValueChange={(value) =>
          setFilters({
            ...filters,
            status: value === 'all' ? [] : [value as ProductStatus],
          })
        }
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All status</SelectItem>
          {productStatusOptions.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <Filter className="h-4 w-4" />
            <p className="sr-only">Open sheet filters</p>
            {activeFiltersCount > 0 && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center"
              >
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Advanced filters</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <ProductsSheetFilters />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
