// components/CheckoutButton.tsx
'use client'

import { useCart } from '../contexts/CartContext'
import { useOrders } from '../contexts/OrderContext'
import { useRouter } from 'next/navigation'

export default function CheckoutButton() {
  const { cart } = useCart()
  const { addOrder } = useOrders()
  const router = useRouter()

  const handleCheckout = () => {
    addOrder(cart)
    router.push('/order-history')
  }

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      disabled={cart.length === 0}
    >
      Checkout
    </button>
  )
}