import { useState } from "react";
import { products, type Product, type ProductCategory } from "../data/products";
import { ProductCard } from "../components/products/ProductCard";
import { PageHeader } from "../components/layout/PageHeader";
import { FaChevronDown } from "react-icons/fa";

type CategoryFilter = "all" | ProductCategory;

const CATEGORY_SECTIONS: {
  id: ProductCategory;
  title: string;
  description: string;
}[] = [
  {
    id: "cookies",
    title: "Cookies",
    description: "Small-batch comfort cookies, made properly and without apology.",
  },
  {
    id: "comfort-bakes",
    title: "Comfort Bakes",
    description: "Brownies, rolls, scones, and other mood-improving baked things.",
  },
  // {
  //   id: "desserts",
  //   title: "Desserts",
  //   description: "Sweet, nostalgic desserts for when subtlety is not the brief.",
  // },
  // {
  //   id: "tarts",
  //   title: "Tarts",
  //   description: "Classic tart-style bakes for proper table moments.",
  // },
  {
    id: "pet-bakes",
    title: "Pet Bakes",
    description:
      "Homemade pet-safe treats and celebration bakes for the pets who clearly run the house.",
  },
  // {
  //   id: "extras",
  //   title: "Extras",
  //   description: "Helpful add-ons for making dessert feel complete.",
  // },
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const activeProductsByCategory = CATEGORY_SECTIONS.map((section) => ({
    ...section,
    products: products.filter(
      (product) =>
        product.status === "active" && product.category === section.id,
    ),
  })).filter((section) => section.products.length > 0);

  const visibleProductsByCategory =
    selectedCategory === "all"
      ? activeProductsByCategory
      : activeProductsByCategory.filter(
          (section) => section.id === selectedCategory,
        );

  const filterOptions: {
    id: CategoryFilter;
    label: string;
    count: number;
  }[] = [
    {
      id: "all",
      label: "All",
      count: activeProductsByCategory.reduce(
        (total, section) => total + section.products.length,
        0,
      ),
    },
    ...activeProductsByCategory.map((section) => ({
      id: section.id,
      label: section.title,
      count: section.products.length,
    })),
  ];


  return (
    <div>
      <PageHeader eyebrow="Everything we make" title="Menu & Product Info">
        <p>
          Browse everything we bake. View all information regarding ingredients, allergens and storage instructions. Then click Order when you are ready
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <CategoryNav
          options={filterOptions}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="mt-12 space-y-16">
          {visibleProductsByCategory.map((section) => (
            <MenuSection
              key={section.id}
              description={section.description}
              products={section.products}
              title={section.title}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

function CategoryNav({
  onSelectCategory,
  options,
  selectedCategory,
}: {
  onSelectCategory: (category: CategoryFilter) => void;
  options: {
    id: CategoryFilter;
    label: string;
    count: number;
  }[];
  selectedCategory: CategoryFilter;
}) {
  const selectedOption =
    options.find((option) => option.id === selectedCategory) ?? options[0];

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[69px] z-30 -mx-4 border-y border-border-default bg-cinnamon-100/95 px-4 py-4 shadow-sm backdrop-blur sm:-mx-6 sm:top-[77px] sm:px-6"
    >
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-text-brand">
            Filter menu
          </p>
          <p className="text-sm leading-6 text-text-secondary">
            Choose a category to narrow the menu.
          </p>
        </div>
        <p className="text-sm font-semibold text-text-primary">
          Showing {selectedOption.count}{" "}
          {selectedOption.count === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="relative sm:hidden">
        <label
          htmlFor="menu-category-filter"
          className="sr-only"
        >
          Filter menu
        </label>
        <select
          id="menu-category-filter"
          value={selectedCategory}
          onChange={(event) =>
            onSelectCategory(event.target.value as CategoryFilter)
          }
          className="min-h-12 w-full appearance-none rounded-lg border border-border-default bg-bg-card py-3 pl-4 pr-12 text-base font-semibold text-text-primary shadow-sm outline-none transition focus:border-border-focus focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label} ({option.count})
            </option>
          ))}
        </select>
        <FaChevronDown
          className="pointer-events-none absolute right-4 top-1/2 size-3.5 -translate-y-1/2 text-text-primary"
          aria-hidden
        />
      </div>

      <div className="hidden gap-2 sm:flex sm:flex-wrap" role="list">
        {options.map((option) => {
          const isSelected = option.id === selectedCategory;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelectCategory(option.id)}
              className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ${
                isSelected
                  ? "border-action-primary bg-action-primary text-action-primary-text shadow-sm"
                  : "border-border-default bg-bg-elevated text-text-primary hover:border-border-focus hover:text-text-brand"
              }`}
            >
              <span>{option.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  isSelected
                    ? "bg-bg-page/20 text-action-primary-text"
                    : "bg-bg-elevated text-text-secondary"
                }`}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function MenuSection({
  description,
  products,
  title,
}: {
  description: string;
  products: Product[];
  title: string;
}) {
  return (
    <section>
      <div className="mb-6">
        <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
