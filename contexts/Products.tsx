'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import {
  Product,
  ProductsContextProps,
  ProductsFilters,
  CreateProductPayload,
} from '@/types'
import { productsData } from '@/lib/mocks/products'

let lastProductId = 3
const generateId = () => {
  lastProductId += 1
  return lastProductId.toString()
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined,
)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(productsData.productsList)
  const [filters, setFilters] = useState<ProductsFilters>({
    search: '',
    type: [],
    priceRange: [0, 0],
    stockRange: [0, 0],
    status: [],
  })

  const createProduct = (data: CreateProductPayload): Product => {
    const newProduct: Product = {
      id: generateId(),
      createdAt: new Date(),
      ...data,
    }
    setProducts((prevProducts) => [...prevProducts, newProduct])
    return newProduct
  }

  const updateProduct = (
    productId: string,
    data: Partial<Product>,
  ): Product => {
    const productToUpdate = products.find((product) => product.id === productId)
    if (!productToUpdate) {
      throw new Error('Product not found')
    }
    const updatedProduct = { ...productToUpdate, ...data }
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? updatedProduct : product,
      ),
    )
    return updatedProduct
  }

  const deleteProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    )
  }

  const activeFiltersCount =
    (filters.search.trim() !== '' ? 1 : 0) + (filters.type.length > 0 ? 1 : 0)

  const hasActiveFilters = activeFiltersCount > 0

  const filteredProducts = products.filter((product) => {
    if (
      filters.search &&
      !product.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false
    }
    return !(filters.type.length > 0 && !filters.type.includes(product.type))
  })

  const handleClearFilters = () => {
    setFilters({
      search: '',
      type: [],
      priceRange: [0, 0],
      stockRange: [0, 0],
      status: [],
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        createProduct,
        updateProduct,
        deleteProduct,
        filters,
        setFilters,
        filteredProducts,
        hasActiveFilters,
        activeFiltersCount,
        handleClearFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}
