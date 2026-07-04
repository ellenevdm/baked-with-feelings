import { ORDER_FORM_URL } from "../../data/links";
import { getButtonClassName } from "../ui/Button";

type OrderCtaProps = {
  className?: string;
  onClick?: () => void;
};

export function OrderCta({ className, onClick }: OrderCtaProps) {
  return (
    <a
      href={ORDER_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label="Order online (opens in new tab)"
      className={getButtonClassName("primary", className)}
    >
      Order
    </a>
  );
}
