import * as z from 'zod'

const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
const isValidCNPJ = (cnpj: string) => cnpjRegex.test(cnpj)

export const companySchema = z.object({
  tradeName: z
    .string({ required_error: 'Company name is required' })
    .min(3, 'Company name must be at least 3 characters long'),
  cnpj: z
    .string({ required_error: 'CNPJ is required' })
    .min(14, 'CNPJ must be at least 14 characters long')
    .refine(isValidCNPJ, 'Invalid CNPJ. Expected format: 00.000.000/0000-00'),
  operationType: z.number({ required_error: 'Operation type is required' }),
  address: z
    .string({ required_error: 'Address is required' })
    .min(5, 'Address must be at least 5 characters long'),
  contact: z
    .string({ required_error: 'Contact is required' })
    .email('Invalid email'),
})

export type CompanyValues = z.infer<typeof companySchema>
