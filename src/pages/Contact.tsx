import { useState, type FormEvent } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_WHATSAPP_DISPLAY,
  buildMailtoLink,
  buildWhatsappLink,
} from "../data/contact";
import { SOCIAL_LINKS } from "../data/links";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/layout/PageHeader";

const ICONS: Record<string, IconType> = {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
};

type ContactFormDetails = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const INITIAL_FORM: ContactFormDetails = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const FAQS = [
  {
    category: "Ordering Policies",
    questions: [
      {
        question: "Can I buy treats immediately?",
        answer:
          "Baked with Feelings works bake-to-order. That means items are made fresh after your order is confirmed, not pulled from a shop shelf.",
      },
      {
        question: "How much notice do you need?",
        answer:
          "Most orders need 24-72 hours. Bigger or more specific orders may need more time, because butter cannot be bullied into a schedule.",
      },
    ],
  },
  {
    category: "Allergens",
    questions: [
      {
        question: "Do you handle common allergens?",
        answer:
          "Yes. The kitchen handles gluten, dairy, eggs, peanuts, oats, chocolate, and other ingredients. Please read product details carefully before ordering.",
      },
      {
        question: "Can recipes be changed for allergies or diets?",
        answer:
          "No recipe removals or health swaps are offered unless a product clearly says so. No sugar-free versions. No butter betrayal.",
      },
    ],
  },
  {
    category: "Collection & Payments",
    questions: [
      {
        question: "Do you deliver?",
        answer:
          "Orders are collection only from Brackenfell, Cape Town, unless something different is confirmed directly with you.",
      },
      {
        question: "How do payments work?",
        answer:
          "Payment details are shared once your order is confirmed. Your order is only secured once the agreed payment or deposit is received.",
      },
    ],
  },
];

export default function ContactPage() {
  const [formDetails, setFormDetails] =
    useState<ContactFormDetails>(INITIAL_FORM);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "fallback" | "failed"
  >("idle");
  const [error, setError] = useState("");

  const emailBody = buildContactMessage(formDetails);
  const fallbackEmailHref = buildMailtoLink(
    formDetails.topic || "Website enquiry from Baked with Feelings",
    emailBody,
  );

  function updateField(field: keyof ContactFormDetails, value: string) {
    setFormDetails((currentDetails) => ({
      ...currentDetails,
      [field]: value,
    }));
    setFormStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formDetails.name.trim() ||
      !formDetails.email.trim() ||
      !formDetails.message.trim()
    ) {
      setError("Please add your name, email, and message.");
      return;
    }

    setError("");
    setFormStatus("sending");

    const status = await sendContactEmail(formDetails, emailBody);
    setFormStatus(status);

    if (status === "sent") {
      setFormDetails(INITIAL_FORM);
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="Get in touch"
        title="Questions, orders, and butter-related admin."
      >
        <p>
          Choose the route that matches the urgency. Quick question? WhatsApp.
          More details, bulk orders, or feedback? Send a message from here.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href={buildWhatsappLink(
              "Hi Baked with Feelings, I have a quick question.",
            )}
            className="rounded-lg border border-border-subtle bg-bg-card p-6 shadow-sm transition hover:border-border-focus"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-cinnamon-100 text-text-brand">
              <FaWhatsapp className="size-5" aria-hidden />
            </div>
            <p className="font-heading text-2xl text-text-primary">
              WhatsApp
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              The fast route for simple questions and order confirmation chats.
            </p>
            <p className="mt-4 text-sm font-semibold text-text-brand">
              {BUSINESS_WHATSAPP_DISPLAY}
            </p>
          </a>

          <a
            href={`#contact-form`}
            className="rounded-lg border border-border-subtle bg-bg-card p-6 shadow-sm transition hover:border-border-focus"
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-cinnamon-100 text-text-brand">
              <FaEnvelope className="size-5" aria-hidden />
            </div>
            <p className="font-heading text-2xl text-text-primary">
              Email Form
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Best for bulk requests, detailed questions, and feedback that
              deserves more than a tiny chat bubble.
            </p>
            <p className="mt-4 text-sm font-semibold text-text-brand">
              {BUSINESS_EMAIL}
            </p>
          </a>
        </div>
      </section>

      <section
        id="contact-form"
        className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-border-subtle bg-bg-card p-6 shadow-sm md:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-brand">
              Send a message
            </p>
            <h2 className="mt-2 font-heading text-3xl text-text-primary">
              Email Form
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContactInput
              label="Name"
              value={formDetails.name}
              onChange={(value) => updateField("name", value)}
              placeholder="Your name"
              required
            />
            <ContactInput
              label="Email"
              type="email"
              value={formDetails.email}
              onChange={(value) => updateField("email", value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContactInput
              label="Phone optional"
              type="tel"
              value={formDetails.phone}
              onChange={(value) => updateField("phone", value)}
              placeholder="WhatsApp number"
            />
            <ContactInput
              label="Topic optional"
              value={formDetails.topic}
              onChange={(value) => updateField("topic", value)}
              placeholder="Bulk order, feedback, question"
            />
          </div>

          <label className="grid gap-1.5">
            <span className="text-sm font-semibold text-text-primary">
              Message
            </span>
            <textarea
              value={formDetails.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="min-h-36 resize-y rounded-lg border border-border-default bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
              placeholder="Tell me what you need."
              required
            />
          </label>

          {error && (
            <p className="rounded-lg border border-border-focus bg-cinnamon-100 p-3 text-sm font-semibold text-text-primary">
              {error}
            </p>
          )}

          {formStatus === "sent" && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm font-semibold text-text-primary">
              Message sent. I will get back to you as soon as possible.
            </p>
          )}

          {(formStatus === "fallback" || formStatus === "failed") && (
            <p className="rounded-lg bg-cinnamon-100 p-3 text-sm leading-6 text-text-primary">
              The email service did not confirm delivery. Use the backup email
              link below.
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="px-5 py-3">
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </Button>
            <a
              href={fallbackEmailHref}
              className="inline-flex items-center justify-center rounded-lg border border-border-default bg-bg-elevated px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-border-focus hover:text-text-brand"
            >
              Email Backup
            </a>
          </div>
        </form>

        <aside className="space-y-4">
          <InfoCard title="Operating Hours">
            <p>Monday to Friday: 09:00-17:00</p>
            <p>Saturday: 09:00-13:00</p>
            <p>Sunday: Closed for kitchen recovery.</p>
          </InfoCard>

          <InfoCard title="Collection Only">
            <p>
              Orders are collected from {BUSINESS_LOCATION}. Delivery is not
              part of the standard setup, so please wait for confirmation before
              planning the handover.
            </p>
          </InfoCard>

          <InfoCard title="Follow Along">
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map(({ href, icon, label, handle }) => {
                const Icon = ICONS[icon];

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-brand transition hover:text-text-primary"
                  >
                    {Icon && <Icon aria-hidden />}
                    <span>{label}</span>
                    <span className="font-normal text-text-secondary">
                      {handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </InfoCard>

          <InfoCard title="Location">
            <p className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-text-brand" aria-hidden />
              {BUSINESS_LOCATION}
            </p>
          </InfoCard>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-brand">
            Before you message
          </p>
          <h2 className="mt-2 font-heading text-3xl text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {FAQS.map((group) => (
            <section
              key={group.category}
              className="rounded-lg border border-border-subtle bg-bg-card p-5 shadow-sm"
            >
              <h3 className="font-heading text-2xl text-text-primary">
                {group.category}
              </h3>
              <div className="mt-4 space-y-3">
                {group.questions.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-lg border border-border-subtle bg-bg-elevated p-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-text-primary">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactInput({
  label,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-text-primary">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-lg border border-border-default bg-bg-elevated px-4 py-2 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-border-focus"
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-border-subtle bg-bg-card p-5 text-sm leading-6 text-text-secondary shadow-sm">
      <h3 className="mb-3 font-heading text-2xl text-text-primary">{title}</h3>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

async function sendContactEmail(
  details: ContactFormDetails,
  emailBody: string,
) {
  try {
    const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: details.topic || "Website enquiry from Baked with Feelings",
        _template: "table",
        _captcha: "false",
        name: details.name,
        email: details.email,
        phone: details.phone || "Not provided",
        topic: details.topic || "General enquiry",
        message: emailBody,
      }),
    });

    if (response.ok) return "sent" as const;

    return response.status === 422 ? ("fallback" as const) : ("failed" as const);
  } catch {
    return "failed" as const;
  }
}

function buildContactMessage(details: ContactFormDetails) {
  return [
    "Website enquiry from Baked with Feelings",
    "",
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone || "Not provided"}`,
    `Topic: ${details.topic || "General enquiry"}`,
    "",
    details.message,
  ].join("\n");
}
