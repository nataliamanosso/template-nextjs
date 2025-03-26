import React from 'react'
import { CircleAlert } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface CardErrorProps {
  title: string
  description?: string
}

export function CardError({ title, description }: CardErrorProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <Card className="max-w-md flex flex-col items-center justify-center p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-destructive/80 flex items-center justify-center mb-1">
          <CircleAlert className="w-6 h-6 text-destructive-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description ??
            'An error occurred, please try again in a few moments.'}
        </p>
      </Card>
    </div>
  )
}
