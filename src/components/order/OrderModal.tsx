import { useEffect } from "react";

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function OrderModal({ isOpen, onClose }: OrderModalProps) {

    if(!isOpen) {
        return null
    }
    return (
      <OrderModalContent isOpen={isOpen} onClose={onClose} />

    )

}


type OrderModalContentProps = {
  isOpen: boolean;
  onClose: () => void;
};

function OrderModalContent({ isOpen, onClose }: OrderModalContentProps) {

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-espresso-800/70 px-4 py-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-border-subtle bg-bg-card shadow-2xl sm:rounded-lg"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="order-modal-title">Order</h2>
      </div>
    </div>
  );
}