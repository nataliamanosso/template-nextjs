import { useEffect, useState } from 'react'

export function useSimulateRequest({ mockData }: { mockData: any[] }) {
  const [data, setData] = useState<any[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Math.random() < 0.2) {
        setError(true)
      } else {
        setData(mockData)
      }
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [mockData])

  return { data, isLoading, error }
}
