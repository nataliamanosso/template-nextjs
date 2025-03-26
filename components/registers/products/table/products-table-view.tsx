'use client'
import React, { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { FileX2, X } from 'lucide-react'
import { TableBase } from '@/components/ui/table/table-base'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductsHeaderFilters } from './filters/products-header-filters'
import { ProductTableActions } from './products-table-actions'

import { useProducts } from '@/contexts/Products'
import { productStatusOptions, productTypeOptions } from '@/lib/mocks/products'
import { Product, ProductStatus, ProductType } from '@/types'

export function ProductsTable() {
  const { filteredProducts, hasActiveFilters, handleClearFilters } =
    useProducts()

  const data = useMemo(() => {
    return filteredProducts.map((product: Product) => ({
      ...product,
      createdAt: new Date(product.createdAt).toLocaleDateString('pt-BR'),
    }))
  }, [filteredProducts])

  const getProductTypeLabel = (type: ProductType) => {
    return productTypeOptions.find((opt) => opt.value === type)?.label || type
  }

  const getStatusLabel = (status: ProductStatus) => {
    return (
      productStatusOptions.find((opt) => opt.value === status)?.label || status
    )
  }

  const columns = useMemo<ColumnDef<any>[]>(() => {
    return [
      {
        accessorKey: 'id',
        header: 'ID',
        enableSorting: true,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        enableSorting: true,
      },
      {
        accessorKey: 'type',
        header: 'Type',
        enableSorting: true,
        cell: ({ row }) => getProductTypeLabel(row.original.type),
      },
      {
        accessorKey: 'origin',
        header: 'Origin',
        enableSorting: true,
      },
      {
        accessorKey: 'unit',
        header: 'Unit',
        enableSorting: true,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        enableSorting: true,
        cell: ({ row }) => (
          <Badge
            variant={
              row.original.status === 'active' ? 'success' : 'destructive'
            }
          >
            {getStatusLabel(row.original.status)}
          </Badge>
        ),
      },

      {
        id: 'actions',
        header: 'Actions',
        enableSorting: false,
        cell: ({ row }) => <ProductTableActions product={row.original} />,
      },
    ]
  }, [])

  return (
    <div className="space-y-4">
      <ProductsHeaderFilters />

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <FileX2 className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          {hasActiveFilters ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground max-w-sm">
                We did not find any products with the selected filters. Try
                adjusting your search criteria to see more results.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearFilters}
                className="gap-2"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              There are no products registered in the system.
            </p>
          )}
        </div>
      ) : (
        <TableBase data={data} columns={columns} showPagination />
      )}
    </div>
  )
}
