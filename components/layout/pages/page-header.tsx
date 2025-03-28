import React, { ReactNode } from 'react'
import {
  BreadcrumbItem,
  PageBreadcrumb,
} from '@/components/layout/pages/page-breadcrumb'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs: BreadcrumbItem[]
  mainPageTitle: string
  children?: ReactNode
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  mainPageTitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="space-y-4">
      <PageBreadcrumb links={breadcrumbs} mainPage={mainPageTitle} />
      <header className="flex items-center justify-between">
        <div className="w-2/3 space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </header>
    </section>
  )
}
