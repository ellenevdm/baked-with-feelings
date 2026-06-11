import { useOrder } from "../../context/useOrder";
import { EmptyOrderState } from "./EmptyOrderState";
import { OrderItemRow } from "./OrderItemRow";

export function OrderSummary() {
  const { items, orderTotal, clearOrder } = useOrder();

  if (items.length === 0) {
    return <EmptyOrderState />;
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-heading text-2xl text-text-primary">
          Your order
        </h3>
        <button
          type="button"
          className="text-sm font-semibold text-text-brand transition hover:text-text-primary"
          onClick={clearOrder}
        >
          Clear bag
        </button>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <OrderItemRow
            key={`${item.productId}-${item.optionId}`}
            item={item}
          />
        ))}
      </ul>

      <div className="mt-4 rounded-lg border border-border-subtle bg-bg-elevated p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-text-brand">
            Estimated total
          </p>
          <p className="font-heading text-2xl text-text-primary">
            R{orderTotal}
          </p>
        </div>
        <p className="mt-2 text-xs leading-5 text-text-secondary">
          Final pricing, collection, delivery, and payment are confirmed via
          WhatsApp.
        </p>
      </div>
    </div>
  );
}
