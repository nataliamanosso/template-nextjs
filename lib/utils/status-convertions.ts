import { badgeVariant } from '@/components/ui/badge'

/**
 * Receives a status and returns a badge variant related.
 * @param status
 * @returns badge variant.
 */
export const getBadgeColor = (status: string): badgeVariant => {
  const statusMap: Record<string, badgeVariant> = {
    active: 'info',
    completed: 'success',
    accepted: 'success',
    pending: 'warning',
    terminated: 'neutral',
    expired: 'destructive',
    rejected: 'destructive',
  }

  return statusMap[status.toLowerCase()] || 'default'
}
