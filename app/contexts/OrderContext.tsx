'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (cartItems: CartItem[]) => Promise<Order>;
  fetchOrders: () => Promise<void>;
  getOrderById: (orderId: string) => Promise<Order | null>;
  updateOrderStatus: (orderId: string, status: Order['status']) => Promise<Order>;
  loading: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
}

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  // Load orders from localStorage on mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      // Simulating a fetch by retrieving data from local storage
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getOrderById = async (orderId: string): Promise<Order | null> => {
    const order = orders.find((order) => order.id === orderId) || null;
    return order;
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']): Promise<Order> => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status, updatedAt: new Date().toISOString() }
        : order
    );
    setOrders(updatedOrders);

    const updatedOrder = updatedOrders.find((order) => order.id === orderId) as Order;
    return updatedOrder;
  };

  const addOrder = async (cartItems: CartItem[]) => {
    const newOrder: Order = {
      id: `${Date.now()}`,
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    return newOrder;
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        fetchOrders,
        getOrderById,
        updateOrderStatus,
        loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
