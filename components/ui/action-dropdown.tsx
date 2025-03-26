'use client'

import { MoreVertical } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ActionDropdownProps {
  items: {
    label: string
    icon: LucideIcon
    onClick: () => void
    disabled?: boolean
    hide?: boolean
  }[]
  isMenu?: boolean
}

export function ActionDropdown({ items, isMenu = true }: ActionDropdownProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            buttonVariants(
              isMenu
                ? { variant: 'ghost', size: 'icon' }
                : { variant: 'outline' },
            ),
            'p-1',
          )}
        >
          <MoreVertical className="icon-size" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => {
          if (!item.hide) {
            return (
              <DropdownMenuItem
                key={item.label}
                onClick={item.onClick}
                disabled={item.disabled ?? false}
              >
                <item.icon className="mr-2 icon-size" />
                {item.label}
              </DropdownMenuItem>
            )
          }
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
