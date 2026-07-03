
import type { PricingOption } from "./data/products";



export function getPrice(option: PricingOption, type: string){
  if(type = "launch"){
    return option.launchPrice
  }
  if(type = "sale"){
    return option.salePrice
  }
  return null
}


