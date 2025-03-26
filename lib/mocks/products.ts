import { Product, ProductStatus, ProductType, UnitType } from '@/types'

export const productsData: { productsList: Product[] } = {
  productsList: [
    {
      id: '1',
      name: 'Product 1',
      type: 'type-1',
      origin: 'Brazil',
      composition: 'Anhydrous ethanol, water',
      description: 'Widely used renewable fuel in the country',
      unit: 'Liters',
      createdAt: new Date('2023-01-01'),
      status: 'active',
      supplierId: 'supplier_1',
    },
    {
      id: '2',
      name: 'Product 2',
      type: 'type-2',
      origin: 'Argentina',
      composition: 'Vegetable oil, methanol',
      description: 'Alternative fuel with high performance',
      unit: 'Tons',
      createdAt: new Date('2023-02-15'),
      status: 'active',
      supplierId: 'supplier_2',
    },
    {
      id: '3',
      name: 'Product 3',
      type: 'type-3',
      origin: 'United States',
      composition: 'Diesel with special additives',
      description: 'Diesel with lower sulfur content for better performance',
      unit: 'Gallons',
      createdAt: new Date('2023-03-10'),
      status: 'inactive',
      supplierId: 'supplier_3',
    },
  ],
}

export const productStatusOptions: { label: string; value: ProductStatus }[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
]

export const productTypeOptions: { label: string; value: ProductType }[] = [
  { label: 'Type 1', value: 'type-1' },
  { label: 'Type 2', value: 'type-2' },
  { label: 'Type 3', value: 'type-3' },
]

export const unitOptions: { label: string; value: UnitType }[] = [
  { label: 'Liters', value: 'Liters' },
  { label: 'Gallons', value: 'Gallons' },
  { label: 'Barrels', value: 'Barrels' },
  { label: 'Tons', value: 'Tons' },
]
