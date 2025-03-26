'use client'

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TablePagination } from '@/components/ui/table/table-pagination'
import { CardNotFound } from '@/components/layout/cards/card-not-found'

import { cn } from '@/lib/utils'

interface TableBaseProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  className?: string
  showPagination?: boolean
}

export function TableBase<T>({
  data,
  columns,
  className,
  showPagination = true,
}: TableBaseProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable<T>({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="w-full space-y-2">
      {table.getRowModel().rows.length === 0 ? (
        <CardNotFound
          title="No results found"
          description="We didn't find any results with the selected filters. Try adjusting your search criteria to see more results."
        />
      ) : (
        <>
          <div className={cn('border rounded-md', className)}>
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      const canSort = header.column.getCanSort()
                      const isSorted = header.column.getIsSorted()
                      return (
                        <TableHead
                          key={header.id}
                          onClick={
                            canSort
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                          className={
                            canSort ? 'cursor-pointer select-none' : ''
                          }
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                          {isSorted === 'asc' && ' ↑'}
                          {isSorted === 'desc' && ' ↓'}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {showPagination && (
            <TablePagination table={table} pageSizeOptions={[5, 10, 20, 50]} />
          )}
        </>
      )}
    </div>
  )
}
