'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link'
import CheckoutButton from '../components/CheckoutButton'

export default function Cart() {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const { cart, removeFromCart } = useCart()

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/')
    }
  }, [isSignedIn, router])

  if (!isSignedIn) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold mb-4">Please Sign In</h1>
        <p>You need to be signed in to view your cart.</p>
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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-2xl mx-auto p-4">
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
        <CheckoutButton />
      </div>
    </div>
  )
}