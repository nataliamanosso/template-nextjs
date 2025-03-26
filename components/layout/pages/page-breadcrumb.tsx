import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export interface BreadcrumbItem {
  title: string
  href?: string
}

interface PageBreadcrumbProps {
  links: BreadcrumbItem[] | []
  mainPage: string
}

export function PageBreadcrumb({ links, mainPage }: PageBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.length > 0 &&
          links.map(({ href, title }) => (
            <React.Fragment key={title}>
              {href ? (
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>{title}</BreadcrumbItem>
              )}
              <BreadcrumbSeparator />
            </React.Fragment>
          ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{mainPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
