import { useState } from "react";
import { products, type Product, type ProductCategory } from "../data/products";
import { ProductModal, type AddToCartItem } from "../components/products/ProductModal";
import { ProductCard } from "../components/products/ProductCard";
import { useOrder } from "../context/useOrder";
import { PageHeader } from "../components/layout/PageHeader";

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
  {
    id: "desserts",
    title: "Desserts",
    description: "Sweet, nostalgic desserts for when subtlety is not the brief.",
  },
  {
    id: "tarts",
    title: "Tarts",
    description: "Classic tart-style bakes for proper table moments.",
  },
  {
    id: "pet-treats",
    title: "Pet Treats",
    description: "Homemade treats for the pets who clearly run the house.",
  },
  {
    id: "pet-cakes",
    title: "Pet Cakes",
    description: "Celebration bakes for four-legged family members.",
  },
  {
    id: "extras",
    title: "Extras",
    description: "Helpful add-ons for making dessert feel complete.",
  },
];

export default function MenuPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem, openSidebar } = useOrder();

  const activeProductsByCategory = CATEGORY_SECTIONS.map((section) => ({
    ...section,
    products: products.filter(
      (product) =>
        product.status === "active" && product.category === section.id,
    ),
  })).filter((section) => section.products.length > 0);

  const comingSoonProducts = products.filter(
    (product) => product.status === "coming-soon",
  );

  function handleAddToCart(item: AddToCartItem) {
    addItem(item);
    openSidebar();
  }

  return (
    <div>
      <PageHeader eyebrow="Everything we make" title="Menu & Shop">
        <p>
          Browse everything we bake. Add what you want to your order. We'll sort
          the rest via WhatsApp.
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 sm:px-6">
        {activeProductsByCategory.map((section) => (
          <MenuSection
            key={section.id}
            description={section.description}
            products={section.products}
            title={section.title}
            onViewOptions={setSelectedProduct}
          />
        ))}

        {comingSoonProducts.length > 0 && (
          <MenuSection
            description="Recipes currently being tested, priced, or emotionally negotiated with the oven."
            products={comingSoonProducts}
            title="Coming Soon"
            onViewOptions={setSelectedProduct}
          />
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

function MenuSection({
  description,
  onViewOptions,
  products,
  title,
}: {
  description: string;
  onViewOptions: (product: Product) => void;
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewOptions={onViewOptions}
          />
        ))}
      </div>
    </section>
  );
}
