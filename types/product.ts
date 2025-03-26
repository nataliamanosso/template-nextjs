export interface Product {
  id: string
  name: string
  type: ProductType
  origin: string
  composition: string
  description?: string
  unit: UnitType
  createdAt: Date
  status: ProductStatus
  supplierId: string
}

export interface ProductsFilters {
  search: string
  type: ProductType[]
  priceRange: [number, number]
  stockRange: [number, number]
  status: ProductStatus[]
}

export interface ProductsContextProps {
  products: Product[]
  createProduct: (data: CreateProductPayload) => Product
  updateProduct: (productId: string, data: Partial<Product>) => Product
  deleteProduct: (productId: string) => void
  filters: ProductsFilters
  setFilters: (filters: ProductsFilters) => void
  filteredProducts: Product[]
  hasActiveFilters: string | boolean
  activeFiltersCount: number
  handleClearFilters: () => void
}

export interface CreateProductPayload {
  name: string
  type: ProductType
  origin: string
  composition: string
  description?: string
  unit: UnitType
  status: ProductStatus
  supplierId: string
}

export type ProductType = 'type-1' | 'type-2' | 'type-3'

export type UnitType = 'Liters' | 'Gallons' | 'Barrels' | 'Tons'

export type ProductStatus = 'active' | 'inactive'
