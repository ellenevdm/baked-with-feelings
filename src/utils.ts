import type { BuyingOption } from "./data/products";

export function getEffectivePrice(option: BuyingOption): number {
    if (
      typeof option.salePrice === "number" &&
      option.salePrice > 0 &&
      option.salePrice < option.price
    ) {
      return option.salePrice;
    }
   
    return option.price;
  }
   
  /** True when an option currently has a valid, active sale price. */
  export function isOnSale(option: BuyingOption): boolean {
    return getEffectivePrice(option) < option.price;
  }