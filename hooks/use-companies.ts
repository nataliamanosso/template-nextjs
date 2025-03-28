import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getAllCompanies,
  getCompanyById,
  postCompany,
  putCompany,
} from '@/services/companies-services'
import { toast } from '@/hooks/use-toast'
import { Company, CompanyPayload } from '@/types'

/**
 * Custom React hook to fetch all api-crud with optional filter parameters.
 *
 * @param {Record<string, any>} [filterParams] - Optional filter parameters to refine the query.
 * @returns - The result of the query containing an array of api-crud or an error.
 */
export function useGetAllCompanies(filterParams?: Record<string, any>) {
  return useQuery<Company[], Error>({
    queryKey: ['api-crud', filterParams],
    queryFn: () => getAllCompanies(filterParams),
  })
}

/**
 * Custom React hook to fetch a single company by its ID.
 *
 * @param {number} companyId - The ID of the company to fetch.
 * @returns - The result of the query containing the company data or an error.
 */
export function useCompanyById(companyId: number) {
  return useQuery<Company, Error>({
    queryKey: ['company', companyId],
    queryFn: () => getCompanyById(companyId),
    enabled: !!companyId,
  })
}

/**
 * Custom React hook to create a new company.
 *
 * @returns - The result of the mutation, including success and error handlers.
 */
export function useCreateCompany() {
  return useMutation<Company, Error, CompanyPayload>({
    mutationFn: (payload) => postCompany(payload),
    onSuccess: () => {
      toast({
        title: 'Registration successful',
        variant: 'success',
        description: 'The company was created successfully.',
      })
    },
    onError: () => {
      toast({
        title: 'Registration error',
        variant: 'destructive',
        description: 'An error occurred while registering the company.',
      })
    },
  })
}

/**
 * Custom React hook to update an existing company.
 *
 * @returns - The result of the mutation, including success and error handlers.
 */
export function useUpdateCompany() {
  return useMutation<
    Company,
    Error,
    { companyId: number; data: CompanyPayload }
  >({
    mutationFn: ({ companyId, data }) => putCompany(companyId, data),
    onSuccess: () => {
      toast({
        title: 'Update successful',
        description: 'The company was updated successfully.',
      })
    },
    onError: () => {
      toast({
        title: 'Update error',
        description: 'An error occurred while updating the company.',
      })
    },
  })
}
