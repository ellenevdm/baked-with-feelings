import type { Product } from "../../data/products";
import { Button } from "../ui/Button";
import { ProductIllustration } from "./ProductIllustration";

type ProductCardProps = {
  product: Product;
  onViewOptions: (product: Product) => void;
};

export function ProductCard({ product, onViewOptions }: ProductCardProps) {
  const cheapestOption = product.buyingOptions.reduce((cheapest, option) => {
    return option.price < cheapest.price ? option : cheapest;
  }, product.buyingOptions[0]);

  const categoryLabel = product.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-subtle">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductIllustration product={product} />
        )}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-bg-inverse px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-text-inverse">
            {categoryLabel}
          </span>

          {product.featured && (
            <span className="rounded-full bg-action-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-action-accent-text">
              Featured
            </span>
          )}

          {product.status === "coming-soon" && (
            <span className="rounded-full bg-cinnamon-100 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-cinnamon-700">
              Coming Soon
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4">
          <h3 className="font-heading text-2xl font-semibold leading-tight text-text-primary">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto space-y-4">
          <div className="rounded-lg border border-border-subtle bg-bg-elevated/50 p-4">
            <p className="font-body text-sm font-semibold text-text-primary">
              From R{cheapestOption.price}
            </p>

            <p className="mt-1 font-body text-sm text-text-secondary">
              {cheapestOption.quantityLabel}
            </p>
          </div>

          <Button
            type="button"
            onClick={() => onViewOptions(product)}
            disabled={product.status !== "active"}
            className="w-full px-5 py-3"
          >
            {product.status === "active" ? "View Options" : "Coming Soon"}
          </Button>
        </div>
      </div>
    </article>
  );
}
