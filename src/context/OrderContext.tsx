import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { OrderContext, type OrderContextValue, type OrderItem } from "./orderStore";
const STORAGE_KEY = "baked-with-feelings-order";

function loadInitialItems() {
  if (typeof window === "undefined") return [];

  try {
    const savedItems = window.sessionStorage.getItem(STORAGE_KEY);
    return savedItems ? (JSON.parse(savedItems) as OrderItem[]) : [];
  } catch {
    return [];
  }
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>(loadInitialItems);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const orderTotal = items.reduce((total, item) => total + item.lineTotal, 0);

  const value = useMemo<OrderContextValue>(
    () => ({
      items,
      isSidebarOpen,
      itemCount,
      orderTotal,
      addItem: (newItem) => {
        setItems((currentItems) => {
          const existingItem = currentItems.find(
            (item) =>
              item.productId === newItem.productId &&
              item.optionId === newItem.optionId,
          );

          if (!existingItem) {
            return [...currentItems, newItem];
          }

          return currentItems.map((item) => {
            if (
              item.productId !== newItem.productId ||
              item.optionId !== newItem.optionId
            ) {
              return item;
            }

            const quantity = item.quantity + newItem.quantity;

            return {
              ...item,
              quantity,
              lineTotal: quantity * item.price,
            };
          });
        });
      },
      updateQuantity: (productId, optionId, quantity) => {
        if (quantity < 1) return;

        setItems((currentItems) =>
          currentItems.map((item) =>
            item.productId === productId && item.optionId === optionId
              ? { ...item, quantity, lineTotal: quantity * item.price }
              : item,
          ),
        );
      },
      removeItem: (productId, optionId) => {
        setItems((currentItems) =>
          currentItems.filter(
            (item) =>
              item.productId !== productId || item.optionId !== optionId,
          ),
        );
      },
      clearOrder: () => setItems([]),
      openSidebar: () => setIsSidebarOpen(true),
      closeSidebar: () => setIsSidebarOpen(false),
    }),
    [isSidebarOpen, itemCount, items, orderTotal],
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
