'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, PanelsLeftBottom } from 'lucide-react'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    await signIn('google', { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 flex flex-col items-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <PanelsLeftBottom className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">
              Template Nextjs
            </CardTitle>
            <CardDescription className="text-lg">
              Made by Natalia Manosso
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <Link
            href={'/dashboard'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <ArrowRight className="icon-size mr-2" />
            Go to dashboard
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
