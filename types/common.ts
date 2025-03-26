export type PageParams = {
  params: Promise<{ id: string }>
}

export interface ResponseBody<T> {
  data: T
  statusCode: number
  success: boolean
  notifications: { message: string }[]
}

export type StatusCode = 'accepted' | 'rejected' | 'pending'
