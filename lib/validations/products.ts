import * as z from 'zod'
import { ProductType, ProductStatus, UnitType } from '@/types'

export const createProductSchema = z.object({
  name: z
    .string({ required_error: 'Product name is required' })
    .min(3, 'Product name must be at least 3 characters long'),
  type: z.custom<ProductType>(
    (val) =>
      typeof val === 'string' && ['type-1', 'type-2', 'type-3'].includes(val),
    { message: 'Select a valid product type' },
  ),
  origin: z
    .string({ required_error: 'Origin is required' })
    .min(3, 'Origin must be at least 3 characters long'),
  composition: z
    .string({ required_error: 'Composition is required' })
    .min(3, 'Composition must be at least 3 characters long'),
  description: z.string().optional(),
  unit: z.custom<UnitType>(
    (val) =>
      typeof val === 'string' &&
      ['Liters', 'Gallons', 'Barrels', 'Tons'].includes(val),
    { message: 'Select a valid unit' },
  ),
  status: z.custom<ProductStatus>(
    (val) => typeof val === 'string' && ['active', 'inactive'].includes(val),
    { message: 'Select a valid status' },
  ),
  supplierId: z
    .string({ required_error: 'Supplier ID is required' })
    .min(1, 'Supplier ID cannot be empty'),
  createdAt: z.date({ required_error: 'Registration date is required' }),
})

export type CreateProductValues = z.infer<typeof createProductSchema>
