import React, { useState } from 'react'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ActionDropdown } from '@/components/ui/action-dropdown'
import { ModalConfirmation } from '@/components/ui/modals/modal-confirmation'
import { useProducts } from '@/contexts/Products'
import { useToast } from '@/hooks/use-toast'
import { Product } from '@/types'

interface ProductTableActionsProps {
  product: Product
}

export function ProductTableActions({ product }: ProductTableActionsProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { deleteProduct } = useProducts()
  const { toast } = useToast()
  const router = useRouter()

  const actions = [
    {
      label: 'View product',
      icon: Eye,
      onClick: () => router.push(`/registers/products/${product.id}`),
    },
    {
      label: 'Edit product',
      icon: Pencil,
      onClick: () => router.push(`/registers/products/edit/${product.id}`),
    },
    {
      label: 'Delete product',
      icon: Trash2,
      onClick: () => setShowDeleteModal(true),
    },
  ]

  const handleConfirmDelete = () => {
    deleteProduct(product.id)
    setShowDeleteModal(false)
    toast({
      title: 'Product deleted successfully',
      description: 'The product was deleted successfully.',
    })
  }

  return (
    <>
      {actions.length > 3 ? (
        <ActionDropdown items={actions} />
      ) : (
        <div className="flex items-center gap-2">
          {actions.map(({ label, icon: Icon, onClick }) => (
            <Button
              key={label}
              size="sm"
              variant="ghost"
              onClick={onClick}
              title={label}
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
            </Button>
          ))}
        </div>
      )}

      <ModalConfirmation
        title="Delete product"
        description="Are you sure you want to delete it? This action cannot be undone."
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  )
}
