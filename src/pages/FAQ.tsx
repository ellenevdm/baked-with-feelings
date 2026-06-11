import { PageHeader } from "../components/layout/PageHeader";

export default function FAQPage() {
  return (
    <div>
      <PageHeader eyebrow="Helpful details" title="Frequently Asked Questions">
        <p>
          The short version of what people usually need to know before ordering.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <FaqItem
            question="How much notice do orders need?"
            answer="Most items need 24-72 hours, depending on what you order and how full the baking schedule is."
          />
          <FaqItem
            question="Can recipes be customised?"
            answer="Items are made as listed on the menu. We do not remove allergens, reduce sugar, or change recipes for dietary preferences."
          />
          <FaqItem
            question="How are orders confirmed?"
            answer="After you submit an order request, we confirm the final details with you via WhatsApp."
          />
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <section className="rounded-lg border border-border-subtle bg-bg-card p-5 shadow-sm">
      <h2 className="font-heading text-xl text-text-primary">{question}</h2>
      <p className="mt-2 text-sm leading-6 text-text-secondary">{answer}</p>
    </section>
  );
}
