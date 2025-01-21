'use client';

import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { format } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useOrders } from '../contexts/OrderContext';

type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export default function OrderHistory() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const { isSignedIn } = useUser();
  const { orders } = useOrders();

  if (!isSignedIn) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order History</h1>
        <p className="text-gray-600 dark:text-gray-400">Please sign in to view your order history.</p>
      </div>
    );
  }

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'text-yellow-500 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded';
      case 'processing':
        return 'text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded';
      case 'completed':
        return 'text-green-500 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded';
      case 'cancelled':
        return 'text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded';
      default:
        return 'text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 px-2 py-1 rounded';
    }
  };

  const getDisplayStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'Processing';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const displayStatus = getDisplayStatus(order.status);
            const orderDate = new Date(order.createdAt);

            return (
              <div key={order.id} className="border dark:border-gray-700 rounded-lg overflow-hidden">
                <div
                  className="bg-gray-50 dark:bg-gray-800 p-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleOrderExpansion(order.id)}
                >
                  <div className="space-y-1">
                    <h2 className="font-semibold">
                      Order #{order.id.slice(0, 8)}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {format(orderDate, 'MMMM d, yyyy')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`font-medium ${getStatusColor(order.status)}`}>
                      {displayStatus}
                    </span>
                    <span className="font-semibold">
                      ${order.total.toFixed(2)}
                    </span>
                    {expandedOrder === order.id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </div>
                {expandedOrder === order.id && (
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b dark:border-gray-700">
                          <th className="py-2 font-semibold">Item</th>
                          <th className="py-2 font-semibold">Quantity</th>
                          <th className="py-2 font-semibold text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.items.map((item, index) => (
                          <tr key={index} className="border-b dark:border-gray-700 last:border-0">
                            <td className="py-3">{item.name}</td>
                            <td className="py-3">{item.quantity}</td>
                            <td className="py-3 text-right">${item.price.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}