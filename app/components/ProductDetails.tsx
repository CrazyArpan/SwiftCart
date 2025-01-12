'use client'

import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

interface Subcategory {
  id: number
  name: string
  price: number
}

interface ProductDetailsProps {
  product: {
    id: number
    name: string
    subcategories: Subcategory[]
  }
  onClose: () => void
}

export default function ProductDetails({ product, onClose }: ProductDetailsProps) {
  const { addToCart } = useCart()
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null)

  const handleAddToCart = () => {
    if (selectedSubcategory) {
      addToCart({
        id: selectedSubcategory.id,
        name: `${product.name} - ${selectedSubcategory.name}`,
        price: selectedSubcategory.price,
        quantity: 1,
      })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">{product.name}</h2>
        <div className="space-y-4 mb-6">
          {product.subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedSubcategory?.id === subcategory.id
                  ? 'bg-blue-100 dark:bg-blue-900 border-blue-500'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600'
              }`}
              onClick={() => setSelectedSubcategory(subcategory)}
            >
              <h3 className="font-semibold dark:text-white">{subcategory.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">${subcategory.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!selectedSubcategory}
            className={`px-4 py-2 rounded-lg text-white transition-colors ${
              selectedSubcategory
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

