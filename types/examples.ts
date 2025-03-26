export interface TimelineData {
  id: number
  description: string
  price: number
  user: {
    name: string
    company: string
    email: string
  }
  status: string
  createdAt: string
  updatedAt: string
}
