'use client'

import { ThemeToggle } from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-6 gap-4">
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => signOut()}
            className="rounded-full"
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
