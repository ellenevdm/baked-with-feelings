import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { FaPaw } from "react-icons/fa";
import { BsCheck2Circle, BsHeart, BsSend } from "react-icons/bs";
import { ORDER_FORM_URL } from "../data/links";

const PET_TREATS = [
  "Peanut butter Carrot Dog biscuits",
  "Training treats",
] as const;

const HERO_IMAGES = [
  {
    alt: "Cookie outline",
    className: "left-4 top-10 w-28 rotate-[-10deg] opacity-25 sm:w-36 lg:w-44",
    src: "/category-images/cookie.png",
  },
  {
    alt: "Dessert outline",
    className: "right-3 top-16 w-28 rotate-[9deg] opacity-25 sm:w-36 lg:w-44",
    src: "/category-images/dessert.png",
  },
  {
    alt: "Tart outline",
    className:
      "bottom-8 left-1/2 hidden w-32 -translate-x-1/2 opacity-20 md:block lg:w-44",
    src: "/category-images/tart.png",
  },
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border-subtle bg-bg-card px-4 py-20 sm:py-24 lg:py-28">
        {HERO_IMAGES.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            aria-hidden
            className={`pointer-events-none absolute select-none ${image.className}`}
          />
        ))}

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full border border-border-default bg-bg-elevated px-4 py-2 text-xs font-semibold uppercase tracking-widest text-text-brand shadow-sm">
              Freshly baked comfort treats
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] text-text-primary sm:text-6xl md:text-7xl">
              Baked with Feelings
            </h1>

            <p className="mt-4 font-script text-3xl leading-tight text-text-brand md:text-5xl">
              Homemade just hits different.
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg md:text-xl">
              A small home bakery baking homemade cookies, brownies, cinnamon rolls and comfort bakes made
              fresh to order in Cape Town Northern Suburbs. We also make wholesome homemade dog
              treats because pets deserve homemade too.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order online (opens in new tab)"
              >
                <Button className="w-full px-7 py-3 text-base sm:w-auto">
                  Make an Order
                </Button>
              </a>
              <NavLink to="/menu">
                <Button
                  variant="secondary"
                  className="w-full px-7 py-3 text-base sm:w-auto"
                >
                  View the Menu
                </Button>
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
              Some days need cookies. Some days need cinnamon rolls or brownies.
              Some days need something sweet because being a person is frankly a
              lot.
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
                1. View Product Info
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                Explore our menu and check ingredients and allergen info for
                each product.
              </p>
              <NavLink to="/menu">
                <span className="font-bold underline">Visit Menu</span>
              </NavLink>
            </div>

            <div className="rounded-lg border border-border-subtle bg-bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-bg-inverse">
                <BsSend className="size-7 text-text-inverse" />
              </div>
              <h3 className="mb-2 font-heading text-xl text-text-primary">
                2. Send Your Order
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                Once you're ready click the order button which will redirect you
                to a form link. Here you can select your products. Complete your
                order and form and submit.
              </p>

              <a
                href={ORDER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order form link. Opens in new tab"
              >
                <span className="font-bold underline">Order Form</span>
              </a>
            </div>

            <div className="rounded-lg border border-border-subtle bg-bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-bg-inverse">
                <BsCheck2Circle className="size-7 text-text-inverse" />
              </div>
              <h3 className="mb-2 font-heading text-xl text-text-primary">
                3. Confirm & Collect
              </h3>
              <p className="text-sm leading-6 text-text-secondary">
                We'll confirm your order, collection/delivery, and payment via
                WhatsApp once we receive your completed form. Once confirmed,
                we'll bake everything fresh for you!
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border-l-4 border-border-focus bg-bg-card p-6 shadow-sm">
            <p className="leading-7 text-text-primary">
              <strong>Important:</strong> Orders are only confirmed once we've
              spoken to you. Please allow 24-72 hours lead time. Our recipes are
              made as intended; we do not customise to remove allergens, reduce
              sugar, or emotionally betray the butter. All ingredient info and
              allergens can be found on{" "}
              <NavLink to="/menu" className="font-bold underline">
                our menu
              </NavLink>
              .
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
              {/* <div className="shrink-0 md:border-l md:border-border-subtle md:pl-8">
                <NavLink to="/menu" className="block">
                  <Button className="w-full px-8 py-3 text-base md:w-auto">
                    See Pet Bakes
                  </Button>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
