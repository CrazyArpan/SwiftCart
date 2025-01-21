// components/CheckoutButton.tsx
'use client';

import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useOrders } from '../contexts/OrderContext';
import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    setIsProcessing(true);
    setError(null);

    try {
      // Create order from cart items
      const orderItems = cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }));

      // Add order to order history
      await addOrder(orderItems);
      
      // Clear the cart after successful order creation
      clearCart();
      
      // Redirect to order history page
      router.push('/order-history');
    } catch (err) {
      console.error('Checkout failed:', err);
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-8">
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 
                 transition-colors disabled:bg-blue-300"
        disabled={cart.length === 0 || isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Checkout'}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}