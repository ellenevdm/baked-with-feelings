import { createContext } from "react";

export type OrderItem = {
  productId: string;
  productName: string;
  optionId: string;
  optionLabel: string;
  quantityLabel: string;
  price: number;
  quantity: number;
  lineTotal: number;
};

export type OrderContextValue = {
  items: OrderItem[];
  isSidebarOpen: boolean;
  itemCount: number;
  orderTotal: number;
  addItem: (item: OrderItem) => void;
  updateQuantity: (productId: string, optionId: string, quantity: number) => void;
  removeItem: (productId: string, optionId: string) => void;
  clearOrder: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const OrderContext = createContext<OrderContextValue | null>(null);
