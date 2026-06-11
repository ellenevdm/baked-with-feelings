import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/Button";
import type { OrderItem } from "../../context/orderStore";
import { useOrder } from "../../context/useOrder";
import { BUSINESS_EMAIL, buildMailtoLink, buildWhatsappLink } from "../../data/contact";

type CustomerDetails = {
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const INITIAL_DETAILS: CustomerDetails = {
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export function OrderForm() {
  const { items, orderTotal, clearOrder } = useOrder();
  const [details, setDetails] = useState<CustomerDetails>(INITIAL_DETAILS);
  const [hasPreparedOrder, setHasPreparedOrder] = useState(false);
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "fallback" | "failed"
  >("idle");
  const [whatsappStatus, setWhatsappStatus] = useState<
    "idle" | "opened" | "blocked"
  >("idle");
  const [error, setError] = useState("");

  const orderMessage = buildOrderMessage(items, details, orderTotal);
  const whatsappHref = buildWhatsappLink(orderMessage);
  const emailHref = buildMailtoLink(
    `New order request from ${details.name || "website customer"}`,
    orderMessage,
  );

  function updateField(field: keyof CustomerDetails, value: string) {
    setDetails((currentDetails) => ({
      ...currentDetails,
      [field]: value,
    }));
    setHasPreparedOrder(false);
    setEmailStatus("idle");
    setWhatsappStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (items.length === 0) {
      setError("Add at least one item before sending an order.");
      return;
    }

    if (!details.name.trim() || !details.phone.trim()) {
      setError("Please add your name and phone number.");
      return;
    }

    setError("");
    setEmailStatus("sending");
    setWhatsappStatus("idle");
    setHasPreparedOrder(true);

    const whatsappWindow = window.open(
      whatsappHref,
      "_blank",
      "noopener,noreferrer",
    );

    if (whatsappWindow) {
      setWhatsappStatus("opened");
    } else {
      setWhatsappStatus("blocked");
    }

    void sendOrderEmail({
      details,
      items,
      orderMessage,
      orderTotal,
    }).then(setEmailStatus);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="font-heading text-2xl text-text-primary">
          Your details
        </h3>
        <p className="mt-1 text-sm leading-6 text-text-secondary">
          Add the details needed to confirm your order.
        </p>
      </div>

      <div className="grid gap-3">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-text-primary">Name</span>
          <input
            type="text"
            value={details.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="min-h-11 rounded-lg border border-border-default bg-bg-elevated px-4 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
            placeholder="Your name"
            required
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-text-primary">
            Phone number
          </span>
          <input
            type="tel"
            value={details.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="min-h-11 rounded-lg border border-border-default bg-bg-elevated px-4 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
            placeholder="WhatsApp number"
            required
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-text-primary">
            Email optional
          </span>
          <input
            type="email"
            value={details.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="min-h-11 rounded-lg border border-border-default bg-bg-elevated px-4 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-text-primary">
            Notes optional
          </span>
          <textarea
            value={details.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className="min-h-24 resize-y rounded-lg border border-border-default bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
            placeholder="Collection date, special note, or question"
          />
        </label>
      </div>

      {error && (
        <p className="rounded-lg border border-border-focus bg-cinnamon-100 p-3 text-sm font-semibold text-text-primary">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full px-5 py-3">
        Send Order
      </Button>

      {hasPreparedOrder && (
        <div className="space-y-3 rounded-lg border border-border-subtle bg-bg-elevated p-4">
          <p className="font-heading text-xl text-text-primary">
            Order slip ready.
          </p>
          <p className="text-sm leading-6 text-text-secondary">
            WhatsApp opens with the order already typed out. A background email
            copy is sent to {BUSINESS_EMAIL} for the inbox record.
          </p>

          {whatsappStatus === "opened" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm font-semibold text-text-primary">
              WhatsApp opened with the order message ready to send.
            </p>
          )}

          {whatsappStatus === "blocked" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm leading-6 text-text-primary">
              Your browser blocked the WhatsApp window. Use the WhatsApp button
              below to open it.
            </p>
          )}

          {emailStatus === "sent" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm font-semibold text-text-primary">
              Background email order copy sent.
            </p>
          )}

          {emailStatus === "fallback" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm leading-6 text-text-primary">
              Background email is ready, but the email service may need one-time
              activation. Use the email copy button as a backup.
            </p>
          )}

          {emailStatus === "failed" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm leading-6 text-text-primary">
              The email service did not confirm delivery. Use the email copy
              button as a backup.
            </p>
          )}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-espresso-500 transition hover:bg-[#20BD5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
          >
            <FaWhatsapp className="size-4" aria-hidden />
            Send via WhatsApp
          </a>

          <a
            href={emailHref}
            className="inline-flex w-full items-center justify-center rounded-lg border border-border-default bg-bg-card px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-border-focus hover:text-text-brand"
          >
            Email order copy
          </a>

          <button
            type="button"
            className="w-full text-sm font-semibold text-text-brand transition hover:text-text-primary"
            onClick={() => {
              clearOrder();
              setDetails(INITIAL_DETAILS);
              setHasPreparedOrder(false);
            }}
          >
            Clear after sending
          </button>
        </div>
      )}
    </form>
  );
}

function getOrderEmailEndpoint() {
  const meta = import.meta as ImportMeta & {
    env?: Record<string, string | undefined>;
  };

  return (
    meta.env?.VITE_ORDER_EMAIL_ENDPOINT ??
    `https://formsubmit.co/ajax/${BUSINESS_EMAIL}`
  );
}

async function sendOrderEmail({
  details,
  items,
  orderMessage,
  orderTotal,
}: {
  details: CustomerDetails;
  items: OrderItem[];
  orderMessage: string;
  orderTotal: number;
}) {
  const emailEndpoint = getOrderEmailEndpoint();

  try {
    const response = await fetch(emailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New order request from ${details.name}`,
        _template: "table",
        _captcha: "false",
        to: BUSINESS_EMAIL,
        name: details.name,
        phone: details.phone,
        email: details.email || "Not provided",
        notes: details.notes || "None",
        order_total: `R${orderTotal}`,
        order_items: items
          .map(
            (item) =>
              `${item.quantity} x ${item.productName} (${item.optionLabel}, ${item.quantityLabel}) - R${item.lineTotal}`,
          )
          .join("\n"),
        message: orderMessage,
      }),
    });

    if (response.ok) {
      return "sent" as const;
    }

    return response.status === 422 ? ("fallback" as const) : ("failed" as const);
  } catch {
    return "failed" as const;
  }
}

function buildOrderMessage(
  items: OrderItem[],
  details: CustomerDetails,
  orderTotal: number,
) {
  const orderLines = items.map((item) => {
    return `- ${item.quantity} x ${item.productName} (${item.optionLabel}, ${item.quantityLabel}) - R${item.lineTotal}`;
  });

  return [
    "Hi Baked with Feelings, I would like to place an order.",
    "",
    "Customer details:",
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    details.email ? `Email: ${details.email}` : "Email: Not provided",
    "",
    "Order:",
    ...orderLines,
    "",
    `Estimated total: R${orderTotal}`,
    "",
    details.notes ? `Notes: ${details.notes}` : "Notes: None",
    "",
    "Please confirm availability, collection/delivery, and payment details.",
  ].join("\n");
}
