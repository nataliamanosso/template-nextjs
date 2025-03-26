import React from 'react'

import { AppSidebar } from '@/components/layout/sidebar/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { PrivateRoutesProvider } from '@/providers/PrivateRoutesProvider'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <PrivateRoutesProvider>
        <main className="w-full min-h-screen p-4 space-y-6">{children}</main>
      </PrivateRoutesProvider>
    </SidebarProvider>
  )
}
