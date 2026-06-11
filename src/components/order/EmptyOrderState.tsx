import { NavLink } from "react-router-dom";
import { Button } from "../ui/Button";
import { useOrder } from "../../context/useOrder";

export function EmptyOrderState() {
  const { closeSidebar } = useOrder();

  return (
    <div className="rounded-lg border border-dashed border-border-strong bg-bg-elevated/60 p-6 text-center">
      <p className="font-heading text-2xl text-text-primary">
        Your bag is empty.
      </p>
      <p className="mt-2 text-sm leading-6 text-text-secondary">
        Add treats from the menu and they will appear here.
      </p>
      <NavLink to="/menu" onClick={closeSidebar} className="mt-5 inline-block">
        <Button>Browse Menu</Button>
      </NavLink>
    </div>
  );
}
