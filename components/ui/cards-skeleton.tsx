import { Skeleton } from '@/components/ui/skeleton'

export function CardsSkeleton() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
      <Skeleton className="h-72" />
      <Skeleton className="h-72" />
      <Skeleton className="h-72" />
      <Skeleton className="h-72" />
      <Skeleton className="h-72" />
      <Skeleton className="h-72" />
    </section>
  )
}
