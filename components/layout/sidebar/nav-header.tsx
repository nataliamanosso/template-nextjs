'use client'

import * as React from 'react'
import { PanelsLeftBottom } from 'lucide-react'

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { ThemeToggle } from '@/components/layout/theme-toggle'

export function NavHeader() {
  const { open } = useSidebar()

  return (
    <div className="flex gap-2 justify-between items-center w-full">
      {open ? (
        <>
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <PanelsLeftBottom className="icon-size text-primary" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Template</span>
            <span className="truncate text-xs text-muted-foreground">
              Nextjs
            </span>
          </div>
          <div className="flex items-center justify-between">
            <SidebarTrigger />
            <ThemeToggle />
          </div>
        </>
      ) : (
        <SidebarTrigger />
      )}
    </div>
  )
}
