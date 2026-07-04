// import type { Product } from "../../data/products";
// import { Button } from "../ui/Button";
// import { ProductIllustration } from "./ProductIllustration";

// type ProductCardProps = {
//   product: Product;
//   onViewOptions: (product: Product) => void;
// };

// export function ProductCard({ product, onViewOptions }: ProductCardProps) {
//   const cheapestOption = product.buyingOptions.reduce((cheapest, option) => {
//     return option.price < cheapest.price ? option : cheapest;
//   }, product.buyingOptions[0]);

//   const categoryLabel = product.category
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");

//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border-subtle bg-bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
//       <div className="relative aspect-[4/3] overflow-hidden bg-bg-subtle">
//         {product.image ? (
//           <img
//             src={product.image}
//             alt={product.name}
//             className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <ProductIllustration product={product} />
//         )}

//         <div className="absolute left-4 top-4 flex flex-wrap gap-2">
//           <span className="rounded-full bg-bg-inverse px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-text-inverse">
//             {categoryLabel}
//           </span>

//           {product.featured && (
//             <span className="rounded-full bg-action-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-action-accent-text">
//               Featured
//             </span>
//           )}

//         </div>
//       </div>

//       <div className="flex flex-1 flex-col p-5">
//         <div className="mb-4">
//           <h3 className="font-heading text-2xl font-semibold leading-tight text-text-primary">
//             {product.name}
//           </h3>

//           <p className="mt-2 line-clamp-3 font-body text-sm leading-6 text-text-secondary">
//             {product.shortDescription}
//           </p>
//         </div>

//         <div className="mt-auto space-y-4">
//           <div className="rounded-lg border border-border-subtle bg-bg-elevated/50 p-4">
//             <p className="font-body text-sm font-semibold text-text-primary">
//               From R{cheapestOption.price}
//             </p>

//             <p className="mt-1 font-body text-sm text-text-secondary">
//               {cheapestOption.quantityLabel}
//             </p>
//           </div>

//           <Button
//             type="button"
//             onClick={() => onViewOptions(product)}
//             className="w-full px-5 py-3"
//           >
//             View Options
//           </Button>
//         </div>
//       </div>
//     </article>
//   );
// }


import { type Product } from "../../data/products";
import { getPrice } from "../../utils";

import { ProductIllustration } from "./ProductIllustration";

function getPricingOptions(product: Product) {
  return (product.pricingOptions ?? []).map((option) => {
    return {
      id: option.id,
      label: option.label,
      price: getPrice(option, "launch") ?? 0,
      quantity: option.quantity,
      quantityLabel: option.type,
    };
  });
}

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {

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

          {product.favourite && (
            <span className="rounded-full bg-action-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-action-accent-text">
              Favourite
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

          <div className="mt-6 space-y-4 border-t border-border-subtle pt-5">
              <ProductDetailBlock title="Ingredients">
                {product.ingredients}
              </ProductDetailBlock>

              <ProductDetailBlock title="Allergens">
                {product.allergens.join(", ")}
              </ProductDetailBlock>

              <ProductDetailBlock title="Storage">
                {product.storage}
              </ProductDetailBlock>

              <ProductDetailBlock title="Pricing">
                <div className="flex flex-col gap-2">
                {getPricingOptions(product).map((option) => (
                  <div key={option.id} className="flex items-center justify-between gap-4 px-4 py-2 bg-bg-page rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-body text-sm font-semibold text-text-primary">
                        {option.label}
                      </span>
                      <span className="font-body text-sm text-text-secondary">
                        {option.quantity} {option.quantityLabel}
                      </span>
                    </div>
                    <span className="font-body text-sm font-semibold text-text-secondary">
                      R{option.price.toFixed(2)}
                    </span>
                  </div>
                ))}
                </div>
              </ProductDetailBlock>

            </div>
        </div>
      </div>
    </article>
  );
}

type ProductDetailBlockProps = {
  title: string;
  children: React.ReactNode;
};

function ProductDetailBlock({ title, children }: ProductDetailBlockProps) {
  return (
    <div>
      <h4 className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-text-brand">
        {title}
      </h4>

      <p className="mt-1 font-body text-sm leading-6 text-text-secondary">
        {children}
      </p>
    </div>
  );
}

