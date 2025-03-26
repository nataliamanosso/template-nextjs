import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { useProducts } from '@/contexts/Products'
import { productStatusOptions, productTypeOptions } from '@/lib/mocks/products'
import { ProductStatus, ProductType } from '@/types'

export function ProductsSheetFilters() {
  const { filters, setFilters, hasActiveFilters, handleClearFilters } =
    useProducts()

  const handleStatusToggle = (status: ProductStatus) => {
    const newStatus =
      filters.status && filters.status.includes(status)
        ? filters.status.filter((s: ProductStatus) => s !== status)
        : [...(filters.status || []), status]

    setFilters({ ...filters, status: newStatus })
  }

  const handleTypeToggle = (type: ProductType) => {
    const newTypes = filters.type.includes(type)
      ? filters.type.filter((t: ProductType) => t !== type)
      : [...filters.type, type]

    setFilters({ ...filters, type: newTypes })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label>Status</Label>
          <div className="flex flex-wrap gap-2">
            {productStatusOptions.map((status) => (
              <Badge
                key={status.value}
                variant={
                  filters.status && filters.status.includes(status.value)
                    ? 'default'
                    : 'outline'
                }
                className="cursor-pointer hover:bg-primary/90"
                onClick={() => handleStatusToggle(status.value)}
              >
                {status.label}
              </Badge>
            ))}
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Type</Label>
          <div className="flex flex-wrap gap-2">
            {productTypeOptions.map((type) => (
              <Badge
                key={type.value}
                variant={
                  filters.type.includes(type.value) ? 'default' : 'outline'
                }
                className="cursor-pointer hover:bg-primary/90"
                onClick={() => handleTypeToggle(type.value)}
              >
                {type.label}
              </Badge>
            ))}
          </div>
        </div>
        {hasActiveFilters && (
          <div className="pt-4">
            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="w-full"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
