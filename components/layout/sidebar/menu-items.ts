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
    url: '/card-list',
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
        url: '/cruds/mock-crud',
      },
      {
        title: 'API CRUD',
        url: '/cruds/api-crud',
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
