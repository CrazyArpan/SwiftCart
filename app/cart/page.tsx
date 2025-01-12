'use client'

import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link'
import CheckoutButton from '../components/CheckoutButton'


export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    // Here you would typically integrate with a payment gateway
    // For this example, we'll just simulate a successful checkout
    setTimeout(() => {
      clearCart()
      setIsCheckoutComplete(true)
    }, 1500)
  }

  if (isCheckoutComplete) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
        <p className="mb-4">Your order has been placed successfully.</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Continue Shopping
        </Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        
      </div>
      <CheckoutButton />
    </div>
  )
}

