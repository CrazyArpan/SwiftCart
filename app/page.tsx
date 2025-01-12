import Link from 'next/link'
import Image from 'next/image'
import { products } from './data/products'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border dark:border-gray-700 rounded-lg p-4 flex flex-col">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {product.description}
            </p>
            <Link
              href={`/product/${product.id}`}
              className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center"
            >
              View Options
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

