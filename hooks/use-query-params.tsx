import { useState } from 'react'

export type Params = Record<string, any>

type UseParamsReturn = {
  params: Params
  setParam: (key: string, value: any) => void
  resetParams: () => void
}

export function useQueryParams(initialParams: Params): UseParamsReturn {
  const [params, setParams] = useState<Params>(initialParams)

  const setParam = (key: string, value: any) => {
    setParams((prevParams) => ({
      ...prevParams,
      [key]: value,
    }))
  }

  const resetParams = () => {
    setParams(initialParams)
  }

  return {
    params,
    setParam,
    resetParams,
  }
}
