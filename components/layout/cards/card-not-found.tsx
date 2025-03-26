import React from 'react'
import { FileX2 } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

interface CardNotFoundProps {
  title: string
  description: string
  href?: string
  linkLabel?: string
  children?: React.ReactNode
  className?: string
}

export function CardNotFound({
  title,
  description,
  href,
  linkLabel,
  children,
  className,
}: CardNotFoundProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <Card
        className={cn(
          className,
          'max-w-lg flex flex-col items-center justify-center p-10 gap-3 text-center',
        )}
      >
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-1">
          <FileX2 className="w-6 h-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        {href && (
          <Link href={href} className={cn(buttonVariants({ variant: 'link' }))}>
            {linkLabel ?? 'Back'}
          </Link>
        )}
        {children}
      </Card>
    </div>
  )
}
