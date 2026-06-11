import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useOrder } from "../../context/useOrder";
import { OrderForm } from "./OrderForm";
import { OrderSummary } from "./OrderSummary";

export function OrderSidebar() {
  const { isSidebarOpen, closeSidebar, itemCount } = useOrder();

  useEffect(() => {
    if (!isSidebarOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSidebar();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [closeSidebar, isSidebarOpen]);

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-espresso-800/70"
        aria-label="Close shopping bag"
        onClick={closeSidebar}
      />

      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden border-l border-border-subtle bg-bg-page shadow-2xl"
        aria-label="Shopping bag"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-subtle bg-bg-card px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-brand">
              Shopping bag
            </p>
            <h2 className="mt-1 font-heading text-3xl text-text-primary">
              Order Slip
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              {itemCount} {itemCount === 1 ? "item" : "items"} selected
            </p>
          </div>

          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-bg-elevated text-text-primary transition hover:border-border-focus hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
            aria-label="Close shopping bag"
            onClick={closeSidebar}
          >
            <FaTimes className="size-4" aria-hidden />
          </button>
        </div>

        <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6">
          <OrderSummary />
          {itemCount > 0 && <OrderForm />}
        </div>
      </aside>
    </div>
  );
}
