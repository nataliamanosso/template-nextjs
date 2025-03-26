'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ProductsProvider } from '@/contexts/Products'

export function PrivateRoutesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>{children}</ProductsProvider>
    </QueryClientProvider>
  )
}
