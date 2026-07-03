// // import { useEffect, useMemo, useState } from "react";
// // import type { Product } from "../../data/products";
// // import { Button } from "../ui/Button";
// // import { ProductIllustration } from "./ProductIllustration";

// // export type AddToCartItem = {
// //   productId: string;
// //   productName: string;
// //   optionId: string;
// //   optionLabel: string;
// //   quantityLabel: string;
// //   price: number;
// //   quantity: number;
// //   lineTotal: number;
// // };

// // type ProductModalProps = {
// //   product: Product | null;
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onAddToCart: (item: AddToCartItem) => void;
// // };

// // export function ProductModal({
// //   product,
// //   isOpen,
// //   onClose,
// //   onAddToCart,
// // }: ProductModalProps) {
// //   if (!isOpen || !product) {
// //     return null;
// //   }

// //   return (
// //     <ProductModalContent
// //       key={product.id}
// //       product={product}
// //       onClose={onClose}
// //       onAddToCart={onAddToCart}
// //     />
// //   );
// // }

// // type ProductModalContentProps = {
// //   product: Product;
// //   onClose: () => void;
// //   onAddToCart: (item: AddToCartItem) => void;
// // };

// // function ProductModalContent({
// //   product,
// //   onClose,
// //   onAddToCart,
// // }: ProductModalContentProps) {
// //   const [selectedOptionId, setSelectedOptionId] = useState(
// //     product.buyingOptions[0]?.id ?? "",
// //   );
// //   const [quantity, setQuantity] = useState(1);

// //   useEffect(() => {
// //     function handleEscape(event: KeyboardEvent) {
// //       if (event.key === "Escape") {
// //         onClose();
// //       }
// //     }

// //     document.addEventListener("keydown", handleEscape);
// //     document.body.style.overflow = "hidden";

// //     return () => {
// //       document.removeEventListener("keydown", handleEscape);
// //       document.body.style.overflow = "";
// //     };
// //   }, [onClose]);

// //   const selectedOption = useMemo(() => {
// //     return (
// //       product.buyingOptions.find((option) => option.id === selectedOptionId) ??
// //       product.buyingOptions[0] ??
// //       null
// //     );
// //   }, [product, selectedOptionId]);

// //   const lineTotal = selectedOption ? selectedOption.price * quantity : 0;

// //   if (!selectedOption) {
// //     return null;
// //   }

// //   function handleAddToCart() {
// //     onAddToCart({
// //       productId: product.id,
// //       productName: product.name,
// //       optionId: selectedOption.id,
// //       optionLabel: selectedOption.label,
// //       quantityLabel: selectedOption.quantityLabel,
// //       price: selectedOption.price,
// //       quantity,
// //       lineTotal,
// //     });

// //     onClose();
// //   }

// //   return (
// //     <div
// //       className="fixed inset-0 z-50 flex items-end justify-center bg-espresso-800/70 px-4 py-4 sm:items-center"
// //       role="dialog"
// //       aria-modal="true"
// //       aria-labelledby="product-modal-title"
// //       onMouseDown={onClose}
// //     >
// //       <div
// //         className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-border-subtle bg-bg-card shadow-2xl sm:rounded-lg"
// //         onMouseDown={(event) => event.stopPropagation()}
// //       >
// //         <div className="flex flex-col">
// //           <div className="relative aspect-[16/9] max-h-[420px] min-h-[240px] overflow-hidden bg-bg-subtle">
// //             {product.image ? (
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 className="h-full w-full object-cover"
// //               />
// //             ) : (
// //               <ProductIllustration product={product} />
// //             )}

// //             {product.featured && (
// //               <span className="absolute left-5 top-5 rounded-full bg-action-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-action-accent-text">
// //                 Featured
// //               </span>
// //             )}
// //           </div>

// //           <div className="p-5 sm:p-7">
// //             <div className="mb-5 flex items-start justify-between gap-4">
// //               <div>
// //                 <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-brand">
// //                   {formatCategoryLabel(product.category)}
// //                 </p>

// //                 <h2
// //                   id="product-modal-title"
// //                   className="font-heading text-3xl font-semibold leading-tight text-text-primary"
// //                 >
// //                   {product.name}
// //                 </h2>
// //               </div>

// //               <button
// //                 type="button"
// //                 onClick={onClose}
// //                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated text-xl leading-none text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
// //                 aria-label="Close product modal"
// //               >
// //                 ×
// //               </button>
// //             </div>

// //             <p className="font-body text-sm leading-6 text-text-secondary">
// //               {product.description}
// //             </p>

// //             <div className="mt-6">
// //               <h3 className="font-heading text-xl font-semibold text-text-primary">
// //                 Choose your option
// //               </h3>

// //               <div className="mt-3 grid gap-3">
// //                 {product.buyingOptions.map((option) => {
// //                   const isSelected = option.id === selectedOption.id;

// //                   return (
// //                     <label
// //                       key={option.id}
// //                       className={`cursor-pointer rounded-lg border p-4 transition ${
// //                         isSelected
// //                           ? "border-border-focus bg-cinnamon-100"
// //                           : "border-border-subtle bg-bg-elevated/50 hover:border-border-strong"
// //                       }`}
// //                     >
// //                       <input
// //                         type="radio"
// //                         name={`product-option-${product.id}`}
// //                         value={option.id}
// //                         checked={isSelected}
// //                         onChange={() => setSelectedOptionId(option.id)}
// //                         className="sr-only"
// //                       />

// //                       <div className="flex items-start justify-between gap-4">
// //                         <div>
// //                           <p className="font-body text-sm font-semibold text-text-primary">
// //                             {option.label}
// //                           </p>

// //                           <p className="mt-1 font-body text-sm text-text-secondary">
// //                             {option.quantityLabel}
// //                           </p>
// //                         </div>

// //                         <p className="font-body text-sm font-bold text-text-primary">
// //                           R{option.price}
// //                         </p>
// //                       </div>
// //                     </label>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             <div className="mt-6 rounded-lg border border-border-subtle bg-bg-elevated/50 p-4">
// //               <div className="flex items-center justify-between gap-4">
// //                 <div>
// //                   <p className="font-body text-sm font-semibold text-text-primary">
// //                     Quantity
// //                   </p>

// //                   <p className="mt-1 font-body text-xs text-text-secondary">
// //                     Quantity means number of selected boxes/bags.
// //                   </p>
// //                 </div>

// //                 <div className="flex items-center overflow-hidden rounded-lg border border-border-default bg-bg-card">
// //                   <button
// //                     type="button"
// //                     onClick={() => setQuantity((current) => Math.max(1, current - 1))}
// //                     className="flex h-10 w-10 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
// //                     aria-label="Decrease quantity"
// //                   >
// //                     −
// //                   </button>

// //                   <span className="min-w-10 text-center font-body text-sm font-semibold text-text-primary">
// //                     {quantity}
// //                   </span>

// //                   <button
// //                     type="button"
// //                     onClick={() => setQuantity((current) => current + 1)}
// //                     className="flex h-10 w-10 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
// //                     aria-label="Increase quantity"
// //                   >
// //                     +
// //                   </button>
// //                 </div>
// //               </div>

// //               <Button
// //                 type="button"
// //                 onClick={handleAddToCart}
// //                 className="mt-4 w-full px-5 py-3"
// //               >
// //                 Add to Order — R{lineTotal}
// //               </Button>
// //             </div>

// //             <div className="mt-6 space-y-4 border-t border-border-subtle pt-5">
// //               <ProductDetailBlock title="Ingredients">
// //                 {product.ingredients}
// //               </ProductDetailBlock>

// //               <ProductDetailBlock title="Allergens">
// //                 {product.allergens.join(", ")}
// //               </ProductDetailBlock>

// //               <ProductDetailBlock title="Storage">
// //                 {product.storage}
// //               </ProductDetailBlock>

// //               <ProductDetailBlock title="Lead time">
// //                 {product.leadTime}
// //               </ProductDetailBlock>

// //               <div className="rounded-lg bg-cinnamon-100 p-4">
// //                 <p className="font-body text-sm leading-6 text-text-secondary">
// //                   Baked in small homemade batches, so sizes may vary slightly.
// //                   That is part of the charm, not a bug.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // type ProductDetailBlockProps = {
// //   title: string;
// //   children: React.ReactNode;
// // };

// // function ProductDetailBlock({ title, children }: ProductDetailBlockProps) {
// //   return (
// //     <div>
// //       <h4 className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-text-brand">
// //         {title}
// //       </h4>

// //       <p className="mt-1 font-body text-sm leading-6 text-text-secondary">
// //         {children}
// //       </p>
// //     </div>
// //   );
// // }

// // function formatCategoryLabel(category: string) {
// //   return category
// //     .split("-")
// //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// //     .join(" ");
// // }

// import { useEffect, useMemo, useState } from "react";
// import { type Product } from "../../data/products";
// import { Button } from "../ui/Button";
// import { ProductIllustration } from "./ProductIllustration";


// export type AddToCartItem = {
//   productId: string;
//   productName: string;
//   optionId: string;
//   optionLabel: string;
//   quantityLabel: string;
//   price: number;
//   quantity: number;
//   lineTotal: number;
// };

// type ProductModalProps = {
//   product: Product | null;
//   isOpen: boolean;
//   onClose: () => void;
//   onAddToCart: (item: AddToCartItem) => void;
// };

// export function ProductModal({
//   product,
//   isOpen,
//   onClose,
//   onAddToCart,
// }: ProductModalProps) {
//   if (!isOpen || !product) {
//     return null;
//   }

//   return (
//     <ProductModalContent
//       key={product.id}
//       product={product}
//       onClose={onClose}
//       onAddToCart={onAddToCart}
//     />
//   );
// }

// type ProductModalContentProps = {
//   product: Product;
//   onClose: () => void;
//   onAddToCart: (item: AddToCartItem) => void;
// };

// function ProductModalContent({
//   product,
//   onClose,
//   onAddToCart,
// }: ProductModalContentProps) {

//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     function handleEscape(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     }

//     document.addEventListener("keydown", handleEscape);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//       document.body.style.overflow = "";
//     };
//   }, [onClose]);

//   const selectedOption = useMemo(() => {
//     return (
//       product.buyingOptions.find((option) => option.id === selectedOptionId) ??
//       product.buyingOptions[0] ??
//       null
//     );
//   }, [product, selectedOptionId]);


//   if (!selectedOption) {
//     return null;
//   }



//     onClose();
//   }

//   return (
//     // <div
//     //   className="fixed inset-0 z-50 flex items-end justify-center bg-espresso-800/70 px-4 py-4 sm:items-center"
//     //   role="dialog"
//     //   aria-modal="true"
//     //   aria-labelledby="product-modal-title"
//     //   onMouseDown={onClose}
//     // >
//     //   <div
//     //     className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-lg border border-border-subtle bg-bg-card shadow-2xl sm:rounded-lg"
//     //     onMouseDown={(event) => event.stopPropagation()}
//     //   >
//     //     <div className="flex flex-col">
//     //       <div className="relative aspect-[16/9] max-h-[420px] min-h-[240px] overflow-hidden bg-bg-subtle">
//     //         {product.image ? (
//     //           <img
//     //             src={product.image}
//     //             alt={product.name}
//     //             className="h-full w-full object-cover"
//     //           />
//     //         ) : (
//     //           <ProductIllustration product={product} />
//     //         )}

//     //         {product.featured && (
//     //           <span className="absolute left-5 top-5 rounded-full bg-action-accent px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide text-action-accent-text">
//     //             Featured
//     //           </span>
//     //         )}
//     //       </div>

//     //       <div className="p-5 sm:p-7">
//     //         <div className="mb-5 flex items-start justify-between gap-4">
//     //           <div>
//     //             <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-text-brand">
//     //               {formatCategoryLabel(product.category)}
//     //             </p>

//     //             <h2
//     //               id="product-modal-title"
//     //               className="font-heading text-3xl font-semibold leading-tight text-text-primary"
//     //             >
//     //               {product.name}
//     //             </h2>
//     //           </div>

//     //           <button
//     //             type="button"
//     //             onClick={onClose}
//     //             className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated text-xl leading-none text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
//     //             aria-label="Close product modal"
//     //           >
//     //             ×
//     //           </button>
//     //         </div>

//     //         <p className="font-body text-sm leading-6 text-text-secondary">
//     //           {product.description}
//     //         </p>

//     //         <div className="mt-6">
//     //           <h3 className="font-heading text-xl font-semibold text-text-primary">
//     //             Choose your option
//     //           </h3>

//     //           <div className="mt-3 grid gap-3">
//     //             {product.buyingOptions.map((option) => {
//     //               const isSelected = option.id === selectedOption.id;
//     //               const optionOnSale = isOnSale(option);

//     //               return (
//     //                 <label
//     //                   key={option.id}
//     //                   className={`cursor-pointer rounded-lg border p-4 transition ${
//     //                     isSelected
//     //                       ? "border-border-focus bg-cinnamon-100"
//     //                       : "border-border-subtle bg-bg-elevated/50 hover:border-border-strong"
//     //                   }`}
//     //                 >
//     //                   <input
//     //                     type="radio"
//     //                     name={`product-option-${product.id}`}
//     //                     value={option.id}
//     //                     checked={isSelected}
//     //                     onChange={() => setSelectedOptionId(option.id)}
//     //                     className="sr-only"
//     //                   />

//     //                   <div className="flex items-start justify-between gap-4">
//     //                     <div>
//     //                       <div className="flex items-center gap-2">
//     //                         <p className="font-body text-sm font-semibold text-text-primary">
//     //                           {option.label}
//     //                         </p>

//     //                         {optionOnSale && (
//     //                           <span className="rounded-full bg-rose-900 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-white">
//     //                             Sale
//     //                           </span>
//     //                         )}
//     //                       </div>

//     //                       <p className="mt-1 font-body text-sm text-text-secondary">
//     //                         {option.quantityLabel}
//     //                       </p>
//     //                     </div>

//     //                     {optionOnSale ? (
//     //                       <p className="text-right font-body text-sm font-bold text-text-primary">
//     //                         <span className="mr-1.5 font-normal text-text-secondary line-through">
//     //                           R{option.price}
//     //                         </span>
//     //                         <span className="text-rose-800">
//     //                           R{getEffectivePrice(option)}
//     //                         </span>
//     //                       </p>
//     //                     ) : (
//     //                       <p className="font-body text-sm font-bold text-text-primary">
//     //                         R{option.price}
//     //                       </p>
//     //                     )}
//     //                   </div>
//     //                 </label>
//     //               );
//     //             })}
//     //           </div>
//     //         </div>

//     //         <div className="mt-6 rounded-lg border border-border-subtle bg-bg-elevated/50 p-4">
//     //           <div className="flex items-center justify-between gap-4">
//     //             <div>
//     //               <p className="font-body text-sm font-semibold text-text-primary">
//     //                 Quantity
//     //               </p>

//     //               <p className="mt-1 font-body text-xs text-text-secondary">
//     //                 Quantity means number of selected boxes/bags.
//     //               </p>
//     //             </div>

//     //             <div className="flex items-center overflow-hidden rounded-lg border border-border-default bg-bg-card">
//     //               <button
//     //                 type="button"
//     //                 onClick={() => setQuantity((current) => Math.max(1, current - 1))}
//     //                 className="flex h-10 w-10 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
//     //                 aria-label="Decrease quantity"
//     //               >
//     //                 −
//     //               </button>

//     //               <span className="min-w-10 text-center font-body text-sm font-semibold text-text-primary">
//     //                 {quantity}
//     //               </span>

//     //               <button
//     //                 type="button"
//     //                 onClick={() => setQuantity((current) => current + 1)}
//     //                 className="flex h-10 w-10 items-center justify-center text-lg text-text-primary transition hover:bg-bg-subtle focus:outline-none focus:ring-2 focus:ring-border-focus"
//     //                 aria-label="Increase quantity"
//     //               >
//     //                 +
//     //               </button>
//     //             </div>
//     //           </div>

//     //           <Button
//     //             type="button"
//     //             onClick={handleAddToCart}
//     //             className="mt-4 w-full px-5 py-3"
//     //           >
//     //             Add to Order — R{lineTotal}
//     //           </Button>
//     //         </div>


//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

// type ProductDetailBlockProps = {
//   title: string;
//   children: React.ReactNode;
// };

// function ProductDetailBlock({ title, children }: ProductDetailBlockProps) {
//   return (
//     <div>
//       <h4 className="font-body text-sm font-semibold uppercase tracking-[0.12em] text-text-brand">
//         {title}
//       </h4>

//       <p className="mt-1 font-body text-sm leading-6 text-text-secondary">
//         {children}
//       </p>
//     </div>
//   );
// }

// function formatCategoryLabel(category: string) {
//   return category
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }



// export type PricingOption = {
//   id: string;
//   label: string;
//   option: string;
//   quantity: number;
//   type: string;
//   normalPrice: number;
//   launchPrice: number;
//   salePrice: number;
// };






