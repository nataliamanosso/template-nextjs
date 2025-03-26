'use client'
import { BookMarked, CirclePlus, FileText, Home } from 'lucide-react'

export const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: Home,
    items: [],
  },
  {
    title: 'Mock Card List',
    url: '/contracts',
    icon: FileText,
    items: [],
  },
  {
    title: 'CRUDs',
    url: '#',
    icon: CirclePlus,
    isActive: true,
    items: [
      {
        title: 'Mock CRUD',
        url: '/registers/products',
      },
      {
        title: 'API CRUD',
        url: '/registers/companies',
      },
    ],
  },
  {
    title: 'Examples',
    url: '/examples',
    icon: BookMarked,
    items: [],
  },
]
