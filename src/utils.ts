
import type { PricingOption } from "./data/products";



export type PriceType = "launch" | "sale" | "normal";

export function getPrice(option: PricingOption, priceType: PriceType) {
  if (priceType === "launch") {
    return option.launchPrice;
  }
  if (priceType === "sale") {
    return option.salePrice;
  }
  return option.normalPrice;
}


