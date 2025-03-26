import { LucideIcon } from 'lucide-react'
import { StatusCode } from '@/types'

export interface DashboardStatsData {
  data: {
    title: string
    value: number
    description: string
    icon: LucideIcon
  }[]
}

export interface DashboardPriceChartData {
  data: {
    date: string
    price: number
  }[]
}

export interface DashboardStatusChartData {
  data: {
    status: StatusCode
    value: number
  }[]
}

export interface DashboardVolumeChartData {
  data: {
    data: string
    volume: number
  }[]
}

export interface DashboardPendingContractsData {
  data: {
    id: number
    productName: string
    createdAt: string
    user: {
      name: string
      email: string
      company: string
    }
  }[]
}
