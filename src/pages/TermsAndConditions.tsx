import {
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
  BUSINESS_WHATSAPP_DISPLAY,
} from "../data/contact";
import { PageHeader } from "../components/layout/PageHeader";

export default function TermsAndConditions() {
  return (
    <div>
      <PageHeader eyebrow="Baked with Feelings" title="Terms & Conditions">
        <p>
          Please read these Terms & Conditions before placing an order with
          Baked with Feelings. By ordering from us, you agree to the terms
          below.
        </p>

        <p className="mt-4 text-sm text-text-muted">Last updated: 9 June 2026</p>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="space-y-10 rounded-lg border border-border-subtle bg-bg-card p-6 shadow-sm md:p-10">
          <TermsSection title="1. Orders">
            <p>
              Orders can be placed through our website, order form, WhatsApp, or
              any other ordering method we make available.
            </p>
            <p>
              Your order is only confirmed once we have accepted it and
              confirmed the details with you. Submitting an order request does
              not automatically guarantee availability.
            </p>
            <p>
              We may decline or adjust an order if we are fully booked,
              ingredients are unavailable, or the requested date is not possible.
            </p>
          </TermsSection>

          <TermsSection title="2. Menu Items & Customisation">
            <p>Our products are sold as listed on our menu.</p>
            <p>
              We do not customise recipes for dietary preferences, health goals,
              or ingredient removals unless clearly stated otherwise for a
              specific product.
            </p>
            <ul>
              <li>No gluten-free swaps.</li>
              <li>No sugar-free swaps.</li>
              <li>No dairy-free swaps.</li>
              <li>No egg-free swaps.</li>
              <li>No low-calorie or “healthy” versions.</li>
              <li>No removing allergens from an existing recipe.</li>
            </ul>
            <p>
              If a product does not suit your dietary needs, please choose a
              different item.
            </p>
          </TermsSection>

          <TermsSection title="3. Allergens">
            <p>
              Our products may contain or come into contact with common
              allergens, including wheat/gluten, dairy, eggs, peanuts, tree
              nuts, soya, oats, chocolate, food colourants, and flavourings.
            </p>
            <p>
              Our products are made in a kitchen where multiple ingredients are
              used. We cannot guarantee that any product is completely free from
              cross-contamination.
            </p>
            <p>
              Customers are responsible for checking allergen information before
              placing an order. If you or the person receiving the order has a
              serious allergy, please do not order unless you are comfortable
              with the risk.
            </p>
          </TermsSection>

          <TermsSection title="4. Pet Products">
            <p>
              Where we offer pet-friendly baked goods or treats, these are
              intended as occasional treats and should not replace a balanced
              diet.
            </p>
            <p>
              Customers are responsible for making sure the product is suitable
              for their pet’s age, size, breed, allergies, health conditions,
              and chewing habits.
            </p>
            <p>Pets should always be supervised when eating treats.</p>
            <p>
              Baked with Feelings is not responsible for reactions, choking
              incidents, digestive upset, or misuse of pet products after
              collection or delivery.
            </p>
          </TermsSection>

          <TermsSection title="5. Pricing">
            <p>All prices are listed in South African Rand/ZAR.</p>
            <p>
              Prices may change without notice due to ingredient costs,
              packaging costs, availability, or other business costs.
            </p>
            <p>
              The price confirmed at the time of your accepted order will apply
              to that order.
            </p>
          </TermsSection>

          <TermsSection title="6. Payment">
            <p>Payment details will be provided when your order is confirmed.</p>
            <p>
              Orders may require full payment upfront or a deposit before the
              order is secured.
            </p>
            <p>
              If payment is not received by the agreed deadline, your order may
              be cancelled.
            </p>
          </TermsSection>

          <TermsSection title="7. Cancellations">
            <p>
              Because our products are made to order and ingredients may be
              purchased in advance, cancellations must be made as early as
              possible.
            </p>
            <ul>
              <li>
                More than 48 hours before collection/delivery: we may offer a
                refund, credit, or reschedule, depending on the order.
              </li>
              <li>
                Less than 48 hours before collection/delivery: refunds are not
                guaranteed.
              </li>
              <li>Same-day cancellations: no refund will usually be given.</li>
              <li>No-shows: no refund will be given.</li>
            </ul>
          </TermsSection>

          <TermsSection title="8. Collection & Delivery">
            <p>
              Collection or delivery details will be confirmed with your order.
            </p>
            <p>
              Once an order has been collected or delivered, responsibility for
              storage, handling, transport, and freshness passes to the customer.
            </p>
            <p>
              We are not responsible for damage caused after collection or
              delivery, including products being dropped, left in a hot car,
              stored incorrectly, or damaged during transport.
            </p>
          </TermsSection>

          <TermsSection title="9. Storage & Shelf Life">
            <p>Storage instructions may be provided with your order.</p>
            <p>
              For best quality, products should be stored as instructed and
              consumed within the recommended time.
            </p>
            <p>
              Baked goods are fresh products and may change in texture or taste
              over time. We are not responsible for quality issues caused by
              incorrect storage after collection or delivery.
            </p>
          </TermsSection>

          <TermsSection title="10. Refunds & Complaints">
            <p>
              If there is a problem with your order, please contact us as soon
              as possible, preferably on the same day you receive it.
            </p>
            <p>
              Please include your name, order details, a clear description of
              the issue, and photos where possible.
            </p>
            <p>
              Refunds, replacements, or credits are handled at our discretion and
              depend on the nature of the issue.
            </p>
            <p>
              We do not offer refunds for change of mind, dislike of flavour or
              texture when the item was made as described, incorrect storage,
              damage after collection or delivery, or failure to read
              product/allergen information.
            </p>
          </TermsSection>

          <TermsSection title="11. Personal Information">
            <p>
              When you place an order, we may collect personal information such
              as your name, phone number, email address, delivery or collection
              details, order information, and payment confirmation.
            </p>
            <p>
              We use this information to process your order, contact you about
              your order, arrange collection or delivery, keep basic business
              records, and improve our service.
            </p>
            <p>We will not sell your personal information.</p>
          </TermsSection>

          <TermsSection title="12. Website & Menu Information">
            <p>
              We try to keep all website, menu, pricing, and product information
              accurate and up to date.
            </p>
            <p>
              However, mistakes may happen. We reserve the right to correct
              errors, update information, change products, or adjust
              availability without prior notice.
            </p>
          </TermsSection>

          <TermsSection title="13. Contact">
            <p>For questions about these Terms & Conditions, please contact us:</p>
            <p>
              <strong>Baked with Feelings</strong>
              <br />
              Email: {BUSINESS_EMAIL}
              <br />
              WhatsApp: {BUSINESS_WHATSAPP_DISPLAY}
              <br />
              Location: {BUSINESS_LOCATION}
            </p>
          </TermsSection>
        </div>
      </section>
    </div>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-2xl font-bold text-text-primary">
        {title}
      </h2>

      <div className="space-y-4 text-base leading-7 text-text-secondary [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
