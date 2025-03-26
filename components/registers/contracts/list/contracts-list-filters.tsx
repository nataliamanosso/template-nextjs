import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InputSearch } from '@/components/ui/inputs/input-search'

const customers = [
  { id: '1', name: 'ABC Corp', cnpj: '12.345.678/0001-90' },
  { id: '2', name: 'DEF Enterprises', cnpj: '23.456.789/0001-01' },
  { id: '3', name: 'GHI Industries', cnpj: '34.567.890/0001-12' },
  { id: '4', name: 'JKL Media', cnpj: '45.678.901/0001-23' },
  { id: '5', name: 'MNO Tech', cnpj: '56.789.012/0001-34' },
]

export function ContractsListFilters() {
  return (
    <div className="flex items-center gap-2">
      <InputSearch placeholder="Search by contract name..." />
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All clients" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All clients</SelectItem>
          {customers.map((customer) => (
            <SelectItem key={customer.id} value={customer.name}>
              {customer.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
