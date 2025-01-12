// contexts/OrderContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCart } from './CartContext'
import { v4 as uuidv4 } from 'uuid'

type OrderItem = {
  name: string
  quantity: number
  price: number
}

type Order = {
  id: string
  date: string
  total: number
  items: OrderItem[]
  status: 'Processing' | 'Shipped' | 'Delivered'
}

type OrderContextType = {
  orders: Order[]
  addOrder: (cartItems: any[]) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([])
  const { clearCart } = useCart()

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orders')
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [orders])

  const addOrder = (cartItems: any[]) => {
    const newOrder: Order = {
      id: uuidv4(),
      date: new Date().toISOString(),
      total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      status: 'Processing'
    }

    setOrders(prevOrders => [newOrder, ...prevOrders])
    clearCart() // Clear the cart after creating order
  }

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrders = () => {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider')
  }
  return context
}