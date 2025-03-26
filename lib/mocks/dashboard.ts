import { Activity, Bot, Package, User } from 'lucide-react'
import { StatusCode } from '@/types'

export const dashboardData = {
  statsCards: [
    {
      title: 'Total Users',
      value: 1024,
      description: 'Users registered in the system',
      icon: User,
    },
    {
      title: 'Total Products',
      value: 256,
      description: 'Products registered in the system',
      icon: Package,
    },
    {
      title: 'Total Contracts',
      value: 128,
      description: 'Contracts registered in the system',
      icon: Bot,
    },
    {
      title: 'Example Metric',
      value: 75,
      description: 'Example metric',
      icon: Activity,
    },
  ],
  priceChart: [
    { date: '01/01/2025', price: 600 },
    { date: '02/01/2025', price: 600 },
    { date: '03/01/2025', price: 650 },
    { date: '04/01/2025', price: 620 },
    { date: '05/01/2025', price: 650 },
    { date: '06/01/2025', price: 630 },
    { date: '07/01/2025', price: 620 },
    { date: '08/01/2025', price: 600 },
    { date: '09/01/2025', price: 600 },
    { date: '10/01/2025', price: 650 },
    { date: '11/01/2025', price: 620 },
    { date: '12/01/2025', price: 650 },
    { date: '13/01/2025', price: 630 },
    { date: '14/01/2025', price: 620 },
  ],
  statusChart: [
    {
      status: 'accepted' as StatusCode,
      value: 8,
    },
    {
      status: 'rejected' as StatusCode,
      value: 12,
    },
    {
      status: 'pending' as StatusCode,
      value: 5,
    },
  ],
  volumeChart: [
    {
      data: 'Example 1',
      volume: 100,
    },
    {
      data: 'Example 2',
      volume: 220,
    },
    {
      data: 'Example 3',
      volume: 153,
    },
    {
      data: 'Example 4',
      volume: 200,
    },
    {
      data: 'Example 5',
      volume: 150,
    },
  ],
  pendingDisputes: [
    {
      id: 337834,
      productName: 'Example 1',
      createdAt: '2024-01-01T03:00:00.000Z',
      user: {
        name: 'Peter Smith',
        email: 'peter.smith@company.com',
        company: 'Company C',
      },
    },
    {
      id: 332934,
      productName: 'Example 2',
      createdAt: '2024-01-01T03:00:00.000Z',
      user: {
        name: 'Anna Johnson',
        email: 'anna.johnson@company.com',
        company: 'Company A',
      },
    },
    {
      id: 337987,
      productName: 'Example 3',
      createdAt: '2024-01-01T03:00:00.000Z',
      user: {
        name: 'John Doe',
        email: 'john.doe@company.com',
        company: 'Company A',
      },
    },
    {
      id: 345854,
      productName: 'Example 4',
      createdAt: '2024-01-01T03:00:00.000Z',
      user: {
        name: 'John Doe',
        email: 'john.doe@company.com',
        company: 'Company A',
      },
    },
  ],
}
