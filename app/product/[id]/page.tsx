'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../../contexts/CartContext'
import { products } from '../../data/products'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))
  const [selectedSubcategory, setSelectedSubcategory] = useState(product?.subcategories[0])
  const { addToCart } = useCart()

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    if (selectedSubcategory) {
      addToCart({
        id: selectedSubcategory.id,
        name: `${product.name} - ${selectedSubcategory.name}`,
        price: selectedSubcategory.price,
        quantity: 1,
      })
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={selectedSubcategory?.image || product.image}
            alt={selectedSubcategory?.name || product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">{selectedSubcategory?.description || product.description}</p>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Options</h2>
            {product.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(sub)}
                className={`block w-full text-left p-2 rounded ${
                  selectedSubcategory?.id === sub.id
                    ? 'bg-blue-100 dark:bg-blue-900'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {sub.name} - ${sub.price.toFixed(2)}
              </button>
            ))}
          </div>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

