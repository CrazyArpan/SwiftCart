// app/providers.tsx
'use client';

import { CartProvider } from './contexts/CartContext';
import { OrderProvider } from './contexts/OrderContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <OrderProvider>
        {children}
      </OrderProvider>
    </CartProvider>
  );
}