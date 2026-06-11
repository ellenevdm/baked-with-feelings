import type { Product, ProductCategory } from "../../data/products";

type ProductIllustrationProps = {
  product: Product;
};

const CATEGORY_IMAGES: Record<
  ProductCategory,
  {
    alt: string;
    src: string;
  }
> = {
  cookies: {
    alt: "Cookie outline illustration",
    src: "/category-images/cookie.png",
  },
  "comfort-bakes": {
    alt: "Comfort bake outline illustration",
    src: "/category-images/comfort-bakes.png",
  },
  desserts: {
    alt: "Dessert outline illustration",
    src: "/category-images/dessert.png",
  },
  tarts: {
    alt: "Tart outline illustration",
    src: "/category-images/tart.png",
  },
  "pet-bakes": {
    alt: "Pet bake outline illustration",
    src: "/category-images/pet.png",
  },
  extras: {
    alt: "Extras outline illustration",
    src: "/category-images/extras.png",
  },
};

export function ProductIllustration({ product }: ProductIllustrationProps) {
  const image = CATEGORY_IMAGES[product.category];

  return (
    <div className="flex h-full w-full items-center justify-center bg-cinnamon-100/50">
      <img
        src={image.src}
        alt={image.alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="eager"
      />
    </div>
  );
}
