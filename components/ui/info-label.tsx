'use client'

import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Info, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface InfoLabelProps {
  title: string
  content: string
  Icon?: LucideIcon
  info?: React.ReactNode
  description?: string
  className?: string
}

export function InfoLabel({
  title,
  content,
  Icon,
  info,
  description,
  className,
}: InfoLabelProps) {
  return (
    <div className={cn('space-y-0.5', className)}>
      <div className="flex items-center gap-1">
        <span className="flex gap-1.5 items-center">
          {Icon && <Icon className="w-3 h-4 text-muted-foreground" />}
          <p className="text-sm text-muted-foreground">{title}</p>
        </span>
        {info && (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                className="icon-size h-3 w-3 p-0 text-muted-foreground hover:text-foreground"
              >
                <Info className="h-3 w-3" />
                <span className="sr-only">Mais informações sobre {title}</span>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">{info}</HoverCardContent>
          </HoverCard>
        )}
      </div>
      <p className="font-medium">{content}</p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
