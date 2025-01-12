// app/order-history/page.tsx
'use client'

import { useState } from 'react'
import { useUser } from "@clerk/nextjs"
import { format } from 'date-fns'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useOrders } from '../contexts/OrderContext'

export default function OrderHistory() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const { isSignedIn } = useUser()
  const { orders } = useOrders()

  if (!isSignedIn) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Order History</h1>
        <p>Please sign in to view your order history.</p>
      </div>
    )
  }

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Processing':
        return 'text-yellow-500'
      case 'Shipped':
        return 'text-blue-500'
      case 'Delivered':
        return 'text-green-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => toggleOrderExpansion(order.id)}
              >
                <div>
                  <h2 className="text-lg font-semibold">Order #{order.id.slice(0, 8)}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {format(new Date(order.date), 'MMMM d, yyyy')}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="font-bold">${order.total.toFixed(2)}</span>
                  {expandedOrder === order.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              {expandedOrder === order.id && (
                <div className="p-4 bg-gray-50 dark:bg-gray-800">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-600 dark:text-gray-400">
                        <th className="py-2">Item</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index} className="border-t dark:border-gray-700">
                          <td className="py-2">{item.name}</td>
                          <td className="py-2">{item.quantity}</td>
                          <td className="py-2">${item.price.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}