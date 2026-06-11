import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { FaPaw } from "react-icons/fa";
import { BsCheck2Circle, BsHeart, BsSend } from "react-icons/bs";

const PET_TREATS = [
  "Dog biscuits",
  "Pupcakes",
  "Birthday cakes",
  "Training treats",
  "Cat treats",
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-brand">
                FRESHLY BAKED TREATS
              </span>
              <h1 className="font-heading text-5xl font-bold leading-tight text-text-primary md:text-7xl">
                Baked with Feelings
              </h1>

              <p className="font-script text-2xl text-text-brand md:text-4xl">
                Homemade Just Hits Different
              </p>

              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                Comfort baked goods made from scratch with real butter, real
                sugar, and real love. No fancy cakes. No trendy health desserts.
                Just homemade treats that feel like a warm hug.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <NavLink to="/menu">
                <Button>See the Menu</Button>
              </NavLink>
              <NavLink to="/about">
                <Button variant="outline">Our Story</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-inverse px-4 py-16 text-text-inverse sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 font-script text-4xl text-text-inverse md:text-5xl">
            Because food is emotional.
          </p>
          <div className="flex flex-col gap-4 text-lg leading-relaxed opacity-90 md:text-xl">
            <p>
              Some days need cookies. Some days need lemon meringue. Some days
              need something sweet because being a person is frankly a lot.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center font-heading text-4xl text-text-primary md:text-5xl">
            The Ordering Process
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border-subtle bg-bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-bg-inverse">
                <BsHeart className="size-7 text-text-inverse" />
              </div>
              <h3 className="mb-2 font-heading text-xl text-text-primary">
                1. Browse & Choose
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                Explore our menu and add your favorite treats to your cart.
                Check ingredients and allergen info for each product.
              </p>
            </div>

            <div className="rounded-lg border border-border-subtle bg-bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-bg-inverse">
                <BsSend className="size-7 text-text-inverse" />
              </div>
              <h3 className="mb-2 font-heading text-xl text-text-primary">
                2. Send Your Order
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                Submit your order through the website. We'll receive it and
                contact you via WhatsApp to confirm details.
              </p>
            </div>

            <div className="rounded-lg border border-border-subtle bg-bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-bg-inverse">
                <BsCheck2Circle className="size-7 text-text-inverse" />
              </div>
              <h3 className="mb-2 font-heading text-xl text-text-primary">
                3. Confirm & Collect
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                We'll confirm pricing, collection/delivery, and payment. Once
                confirmed, we'll bake everything fresh for you!
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border-l-4 border-border-focus bg-bg-card p-6 shadow-sm">
            <p className="leading-7 text-text-primary">
              <strong>Important:</strong> Orders are only confirmed once we've
              spoken to you. Please allow 24-72 hours lead time. Our recipes are
              made as intended; we do not customise to remove allergens, reduce
              sugar, or emotionally betray the butter.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg border border-border-focus bg-bg-elevated p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-brand">
                  <FaPaw className="size-3.5" aria-hidden />
                  We bake for pets too
                </span>
                <h2 className="mb-3 font-heading text-3xl text-text-primary md:text-4xl">
                  Your Pets Deserve It Too
                </h2>
                <p className="mb-3 leading-relaxed text-text-secondary">
                  Homemade dog biscuits, pupcakes, birthday cakes for dogs,
                  training treats, and cat treats. All made with pet-safe
                  ingredients.
                </p>
                <p className="mb-5 font-script text-xl text-text-brand">
                  Because they also have feelings.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {PET_TREATS.map((treat) => (
                    <li
                      key={treat}
                      className="rounded-full bg-cinnamon-100 px-3 py-1 text-sm text-cinnamon-700"
                    >
                      {treat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 md:border-l md:border-border-subtle md:pl-8">
                <NavLink to="/menu" className="block">
                  <Button className="w-full px-8 py-3 text-base md:w-auto">
                    See Pet Bakes
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
