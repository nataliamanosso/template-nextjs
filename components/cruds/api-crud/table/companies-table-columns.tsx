import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

import { CompaniesTableActions } from '@/components/cruds/api-crud/table/companies-table-actions'

import { Company, OperationType } from '@/types'
import { formatDate } from '@/lib/utils/format-date'

export const companiesTableColumns: ColumnDef<Company>[] = [
  { accessorKey: 'id', header: 'ID', enableSorting: true },
  { accessorKey: 'tradeName', header: 'Name', enableSorting: true },
  { accessorKey: 'cnpj', header: 'CNPJ', enableSorting: true },
  { accessorKey: 'contact', header: 'Contact', enableSorting: true },
  {
    accessorKey: 'operationType',
    header: 'Operation Type',
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue<number>()
      return OperationType[value] ?? 'Unknown'
    },
  },
  {
    accessorKey: 'registrationDate',
    header: 'Created on',
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue<Date>()
      return formatDate(value) ?? 'Date not found'
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    enableSorting: false,
    cell: ({ row }) => <CompaniesTableActions company={row.original} />,
  },
]
