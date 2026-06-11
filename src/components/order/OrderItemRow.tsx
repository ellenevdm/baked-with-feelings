import { FaTrash } from "react-icons/fa";
import type { OrderItem } from "../../context/orderStore";
import { useOrder } from "../../context/useOrder";

type OrderItemRowProps = {
  item: OrderItem;
};

export function OrderItemRow({ item }: OrderItemRowProps) {
  const { updateQuantity, removeItem } = useOrder();

  return (
    <li className="rounded-lg border border-border-subtle bg-bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-heading text-lg leading-tight text-text-primary">
            {item.productName}
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            {item.optionLabel} · {item.quantityLabel}
          </p>
          <p className="mt-2 text-sm font-semibold text-text-primary">
            R{item.price} each
          </p>
        </div>

        <button
          type="button"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-subtle text-text-muted transition hover:border-border-focus hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
          aria-label={`Remove ${item.productName}`}
          onClick={() => removeItem(item.productId, item.optionId)}
        >
          <FaTrash className="size-3.5" aria-hidden />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center overflow-hidden rounded-lg border border-border-default bg-bg-elevated">
          <button
            type="button"
            className="flex size-9 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus-visible:outline-2 focus-visible:outline-border-focus"
            aria-label={`Decrease ${item.productName} quantity`}
            onClick={() =>
              updateQuantity(item.productId, item.optionId, item.quantity - 1)
            }
          >
            −
          </button>
          <span className="min-w-9 text-center text-sm font-semibold text-text-primary">
            {item.quantity}
          </span>
          <button
            type="button"
            className="flex size-9 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus-visible:outline-2 focus-visible:outline-border-focus"
            aria-label={`Increase ${item.productName} quantity`}
            onClick={() =>
              updateQuantity(item.productId, item.optionId, item.quantity + 1)
            }
          >
            +
          </button>
        </div>

        <p className="font-heading text-xl text-text-primary">
          R{item.lineTotal}
        </p>
      </div>
    </li>
  );
}
