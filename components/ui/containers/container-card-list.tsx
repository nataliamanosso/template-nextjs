import React from 'react'
import { cn } from '@/lib/utils'
import { CardNotFound } from '@/components/layout/cards/card-not-found'

export function ContainerCardList({
  data,
  children,
  className,
}: {
  data: any[] | undefined
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      {data && data.length === 0 ? (
        <div className="w-full flex items-center justify-center">
          <CardNotFound
            title="Nenhum resultado encontrado"
            description="Não encontramos nenhum resultado com os filtros selecionados. Tente ajustar os critérios de busca para ver mais resultados."
          />
        </div>
      ) : (
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6',
            className,
          )}
        >
          {children}
        </div>
      )}
    </>
  )
}
