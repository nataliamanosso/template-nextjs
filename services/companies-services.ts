import { Company, CompanyPayload, ResponseBody } from '@/types'
import { api } from '@/lib/http/api-instance'
import { removeEmptyParams } from '@/lib/utils/convert-query-params'

const endpoint = 'your-endpoint'

export const getAllCompanies = async (
  params: Record<string, any> = {},
): Promise<Company[]> => {
  const response = await api.get<ResponseBody<Company[]>>(`/${endpoint}`, {
    params: removeEmptyParams(params),
  })
  return response.data?.data
}

export const getCompanyById = async (id: number): Promise<Company> => {
  const response = await api.get<ResponseBody<Company>>(`/${endpoint}/${id}`)
  return response.data?.data
}

export const postCompany = async (
  payload: CompanyPayload,
): Promise<Company> => {
  const response = await api.post<Company>(`/${endpoint}`, payload)
  return response.data
}

export const putCompany = async (
  id: number,
  payload: CompanyPayload,
): Promise<Company> => {
  const response = await api.put<Company>(`/${endpoint}/${id}`, payload)
  return response.data
}
