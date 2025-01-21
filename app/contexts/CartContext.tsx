// contexts/CartContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
// import { CartProvider } from './contexts/CartContext';
import { useUser } from "@clerk/nextjs"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const { isSignedIn, user } = useUser()

  // Load cart from localStorage when component mounts and user is signed in
  useEffect(() => {
    if (isSignedIn && user) {
      const savedCart = localStorage.getItem(`cart-${user.id}`)
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } else {
      // Clear cart when user signs out
      setCart([])
    }
  }, [isSignedIn, user])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isSignedIn && user) {
      localStorage.setItem(`cart-${user.id}`, JSON.stringify(cart))
    }
  }, [cart, isSignedIn, user])

  const addToCart = (product: CartItem) => {
    if (!isSignedIn) {
      // Optional: You could throw an error or handle this differently
      return
    }

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    if (!isSignedIn) return
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (!isSignedIn) return
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    if (!isSignedIn) return
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}