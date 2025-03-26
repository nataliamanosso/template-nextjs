'use client'
import React from 'react'
import { Table as TanstackTable } from '@tanstack/react-table'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface TablePaginationProps<TData> {
  table: TanstackTable<TData>
  pageSizeOptions?: number[]
}

export function TablePagination<TData>({
  table,
  pageSizeOptions = [10, 30, 50, 70, 100],
}: TablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-end gap-2 pt-2">
      <span className="flex items-center text-sm gap-1">
        Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronsLeft className="icon-size" />
        <p className="sr-only">Back to first page</p>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronLeft className="icon-size" />
        <p className="sr-only">Back to previous page</p>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRight className="icon-size" />
        <p className="sr-only">Go to next page</p>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        <ChevronsRight className="icon-size" />
        <p className="sr-only">Go to last page</p>
      </Button>
      <div className="flex items-center space-x-2">
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="h-8 w-[70px] outline-none">
            <SelectValue
              placeholder={String(table.getState().pagination.pageSize)}
            />
          </SelectTrigger>
          <SelectContent side="top">
            {pageSizeOptions.map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
