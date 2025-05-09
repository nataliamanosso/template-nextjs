'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Pencil, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { InfoLabel } from '@/components/ui/info-label'
import { ModalConfirmation } from '@/components/ui/modals/modal-confirmation'
import { CardError } from '@/components/layout/cards/card-error'

import { useProducts } from '@/contexts/Products'
import { toast } from '@/hooks/use-toast'
import { formatDate } from '@/lib/utils/format-date'
import { Product } from '@/types'

export function ProductDetailsView() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { deleteProduct, products } = useProducts()
  const router = useRouter()
  const params = useParams()
  const product = products.find((p: Product) => p.id === params.id)

  const handleDeleteProduct = () => {
    if (product?.id) {
      deleteProduct(product.id)
      setShowDeleteModal(false)
      toast({
        title: 'Product deleted',
        description: 'The product was successfully removed',
      })
      router.push('/cruds/mock-crud')
    }
  }

  if (!product) {
    return <CardError title="Error fetching product" />
  }

  return (
    <section className="space-y-6">
      {product && (
        <div className="flex gap-2 justify-end mt-[-4rem]">
          <Button variant="outline" onClick={() => setShowDeleteModal(true)}>
            <Trash2 className="w-4 h-4 mr-2 text-red-500" /> Delete Product
          </Button>
          <Button
            onClick={() => router.push(`/cruds/products/edit/${product.id}`)}
          >
            <Pencil className="w-4 h-4 mr-2" /> Edit Product
          </Button>
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent>
          {product && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoLabel title="Name" content={product.name} />
              <InfoLabel title="Type" content={product.type} />
              <InfoLabel title="Origin" content={product.origin} />
              <InfoLabel title="Composition" content={product.composition} />
              {product.description && (
                <InfoLabel title="Description" content={product.description} />
              )}
              <InfoLabel title="Unit" content={product.unit} />
              <InfoLabel title="Status" content={product.status} />
              <InfoLabel
                title="Created on"
                content={formatDate(product.createdAt)}
              />
              <InfoLabel title="Supplier" content={product.supplierId} />
            </div>
          )}
        </CardContent>
      </Card>
      <ModalConfirmation
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={handleDeleteProduct}
        title="Delete product"
        description="Are you sure you want to delete this product? This action cannot be undone."
      />
    </section>
  )
}
