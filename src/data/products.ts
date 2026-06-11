export type ProductAudience = "human" | "pet";

export type ProductCategory =
  | "cookies"
  | "comfort-bakes"
  | "desserts"
  | "tarts"
  | "pet-bakes"
  | "extras";

export type ProductStatus = "active" | "coming-soon" | "hidden";

export type BuyingOption = {
  id: string;
  label: string;
  quantityLabel: string;
  price: number;
  batchPortion?: number | null;
};

export type Product = {
  id: string;
  recipeId: string;
  name: string;
  audience: ProductAudience;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  ingredients: string;
  allergens: string[];
  buyingOptions: BuyingOption[];
  recipeCost: number;
  pricingNotes?: string;
  storage: string;
  leadTime: string;
  status: ProductStatus;
  featured: boolean;
  image: string | null;
};

export const products: Product[] = [
  {
    id: "snickerdoodle-cookies",
    recipeId: "CINNAMON-COOKIES",
    name: "Snickerdoodle Cookies",
    audience: "human",
    category: "cookies",
    shortDescription:
      "Soft cinnamon-sugar cookies with proper homemade comfort.",
    description:
      "Soft, chewy cookies rolled in cinnamon sugar before baking. Warm, spiced, comforting, and very much not trying to be healthy.",
    ingredients:
      "Butter, white sugar, eggs, cake flour, baking soda, cream of tartar, salt, cinnamon.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Box",
        quantityLabel: "Approx. 6 medium cookies",
        price: 50,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Box",
        quantityLabel: "Approx. 12 medium cookies",
        price: 90,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 88.96,
    pricingNotes: "Recipe cost is for one full batch. Final yield still needs confirming.",
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    leadTime: "1–2 days notice",
    status: "active",
    featured: true,
    image: null,
  },
  {
    id: "chocolate-chip-cookies",
    recipeId: "CHOC-CHIP",
    name: "Chocolate Chip Cookies",
    audience: "human",
    category: "cookies",
    shortDescription:
      "Classic homemade chocolate chip cookies with chewy centres and golden edges.",
    description:
      "Butter-heavy chocolate chip cookies with a soft centre, golden edges, and proper homemade bakery energy.",
    ingredients:
      "Cake flour, baking soda, corn flour, salt, butter, brown sugar, white sugar, eggs, vanilla, chocolate chips.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Box",
        quantityLabel: "Approx. 6 medium cookies",
        price: 55,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Box",
        quantityLabel: "Approx. 12 medium cookies",
        price: 100,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 90.11,
    pricingNotes: "Chocolate chips make this slightly more expensive than basic cookies.",
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    leadTime: "1–2 days notice",
    status: "active",
    featured: true,
    image: null,
  },
  {
    id: "peanut-butter-oatmeal-cookies",
    recipeId: "PEANUT-BUTTER",
    name: "Peanut Butter Oatmeal Cookies",
    audience: "human",
    category: "cookies",
    shortDescription:
      "Chewy peanut butter oat cookies. No chocolate chips. No nonsense.",
    description:
      "Sturdy, chewy cookies made with peanut butter and oats. Slightly salty, slightly sweet, deeply comforting.",
    ingredients:
      "Oats, cake flour, baking soda, salt, cinnamon, butter, peanut butter, white sugar, brown sugar, eggs, vanilla.",
    allergens: ["Gluten", "Dairy", "Eggs", "Peanuts", "Oats"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Box",
        quantityLabel: "Approx. 6 medium cookies",
        price: 60,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Box",
        quantityLabel: "Approx. 12 medium cookies",
        price: 110,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 109.72,
    pricingNotes:
      "Higher recipe cost because of peanut butter and oats. Final yield still needs confirming.",
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    leadTime: "2 days notice",
    status: "active",
    featured: true,
    image: null,
  },
  {
    id: "shortbread-cookies",
    recipeId: "SHORT-BREAD",
    name: "Shortbread Cookies",
    audience: "human",
    category: "cookies",
    shortDescription:
      "Buttery, crumbly shortbread. Simple, rich, and very snackable.",
    description:
      "Classic buttery shortbread cookies. Simple ingredients, rich flavour, and dangerously easy to keep eating.",
    ingredients: "Cake flour, butter, castor sugar, salt.",
    allergens: ["Gluten", "Dairy"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Box",
        quantityLabel: "Approx. 6 medium cookies",
        price: 45,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Box",
        quantityLabel: "Approx. 12 medium cookies",
        price: 80,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 66.15,
    pricingNotes:
      "Lower recipe cost than the other cookies, so this can stay more affordable.",
    storage:
      "Store in an airtight container at room temperature for up to 10 days.",
    leadTime: "2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "oatmeal-crunchies",
    recipeId: "CRUNCHIES",
    name: "Oatmeal Crunchies",
    audience: "human",
    category: "cookies",
    shortDescription:
      "Golden oat crunchies with that proper South African ouma-biscuit energy.",
    description:
      "Old-school oatmeal crunchies made with oats, coconut, syrup and butter. Crispy, golden, nostalgic, and not a health food.",
    ingredients:
      "Cake flour, oats, coconut, butter, brown sugar, golden syrup, baking soda.",
    allergens: ["Gluten", "Dairy", "Oats", "Coconut"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Box",
        quantityLabel: "Approx. 6 crunchies",
        price: 45,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Box",
        quantityLabel: "Approx. 12 crunchies",
        price: 80,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 79.34,
    pricingNotes:
      "Recipe cost is reasonable, but final yield and piece size still need confirming.",
    storage:
      "Store in an airtight container at room temperature for up to 7 days.",
    leadTime: "1–2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "classic-brownies",
    recipeId: "BROWNIE-CLASSIC",
    name: "Classic Brownies",
    audience: "human",
    category: "comfort-bakes",
    shortDescription:
      "Dense, fudgy brownies that do not want to be healthy.",
    description:
      "Rich homemade brownies with a soft chocolatey middle. Real comfort food, no diet-culture nonsense.",
    ingredients:
      "Dark chocolate, butter, white sugar, eggs, cake flour, cocoa powder, vanilla, salt.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "small-box",
        label: "Small Brownie Box",
        quantityLabel: "Approx. 4 brownie squares",
        price: 55,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Brownie Box",
        quantityLabel: "Approx. 8 brownie squares",
        price: 100,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 76.14,
    pricingNotes:
      "Priced for small-batch homemade brownie boxes. Final piece sizes may vary slightly.",
    storage:
      "Store in an airtight container at room temperature for up to 4 days.",
    leadTime: "2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "classic-fudge",
    recipeId: "FUDGE-CLASSIC",
    name: "Classic Fudge",
    audience: "human",
    category: "desserts",
    shortDescription:
      "Sweet, buttery classic fudge. The kind that disappears suspiciously fast.",
    description:
      "Traditional homemade fudge made with condensed milk, butter and sugar. Sweet, rich, and absolutely not subtle.",
    ingredients: "Condensed milk, butter, white sugar, vanilla.",
    allergens: ["Dairy"],
    buyingOptions: [
      {
        id: "small-box",
        label: "Small Fudge Box",
        quantityLabel: "Approx. 10 pieces",
        price: 50,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Fudge Box",
        quantityLabel: "Approx. 20 pieces",
        price: 90,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 74.67,
    pricingNotes:
      "Priced for small-batch fudge boxes. Piece sizes may vary slightly.",
    storage:
      "Store in an airtight container at room temperature for up to 2 weeks.",
    leadTime: "2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "scones",
    recipeId: "SCONES",
    name: "Scones",
    audience: "human",
    category: "comfort-bakes",
    shortDescription:
      "Soft homemade scones. Best with butter, jam, cream, and zero self-control.",
    description:
      "Classic homemade scones with a soft inside and golden top. Simple, comforting, and best eaten fresh.",
    ingredients:
      "Cake flour, butter, cream, eggs, sugar, baking powder, salt.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "small-box",
        label: "Small Scone Box",
        quantityLabel: "Approx. 4 scones",
        price: 45,
        batchPortion: 0.25,
      },
      {
        id: "sharing-box",
        label: "Sharing Scone Box",
        quantityLabel: "Approx. 8 scones",
        price: 80,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 43.31,
    pricingNotes:
      "Priced for fresh small-batch scones, including bake time and packaging.",
    storage:
      "Best eaten the same day. Store in an airtight container and refresh in the oven if needed.",
    leadTime: "1–2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "malva-pudding",
    recipeId: "MALVA-PUDDING",
    name: "Malva Pudding",
    audience: "human",
    category: "desserts",
    shortDescription:
      "Sticky, saucy South African pudding. Basically a warm emotional support dessert.",
    description:
      "Classic malva pudding soaked in a warm cream-and-butter sauce. Sweet, soft, sticky, and properly comforting.",
    ingredients:
      "Apricot jam, eggs, butter, sugar, flour, baking soda, vinegar, cream, vanilla.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "small-tray",
        label: "Small Tray",
        quantityLabel: "Serves approx. 4",
        price: 95,
        batchPortion: 0.5,
      },
      {
        id: "large-tray",
        label: "Large Tray",
        quantityLabel: "Serves approx. 8",
        price: 170,
        batchPortion: 1,
      },
    ],
    recipeCost: 66.7,
    pricingNotes:
      "Priced for small-batch pudding trays. Tray portions may vary slightly.",
    storage:
      "Refrigerate. Reheat gently. Best within 3 days.",
    leadTime: "2–3 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "milk-tart",
    recipeId: "MILK-TART",
    name: "Milk Tart",
    audience: "human",
    category: "tarts",
    shortDescription:
      "Creamy cinnamon-dusted milk tart. South African comfort in tart form.",
    description:
      "A classic homemade milk tart with a creamy cinnamon custard filling and a simple base.",
    ingredients:
      "Cake flour, butter, eggs, sugar, milk, cream, cornstarch, cinnamon, vanilla.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "whole-tart",
        label: "Whole Tart",
        quantityLabel: "Serves approx. 8",
        price: 150,
        batchPortion: 1,
      },
    ],
    recipeCost: 129.55,
    pricingNotes:
      "Priced as a whole tart because the recipe uses a full homemade base and filling.",
    storage:
      "Refrigerate. Best within 3 days.",
    leadTime: "2–3 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "cinnamon-rolls",
    recipeId: "CINNAMON-ROLLS",
    name: "Cinnamon Rolls",
    audience: "human",
    category: "comfort-bakes",
    shortDescription:
      "Soft cinnamon rolls with buttery filling and cozy bakery energy.",
    description:
      "Soft homemade cinnamon rolls filled with cinnamon sugar and finished with a sweet glaze.",
    ingredients:
      "Bread flour, yeast, butter, milk, eggs, sugar, salt, brown sugar, cinnamon, cream cheese, icing sugar, vanilla.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "small-box",
        label: "Small Cinnamon Roll Box",
        quantityLabel: "Approx. 4 rolls",
        price: 90,
        batchPortion: 0.5,
      },
      {
        id: "sharing-box",
        label: "Sharing Cinnamon Roll Box",
        quantityLabel: "Approx. 8 rolls",
        price: 165,
        batchPortion: 1,
      },
    ],
    recipeCost: 119.24,
    pricingNotes:
      "Priced to account for the extra rising time, filling, glaze, and hands-on work.",
    storage:
      "Room temperature in an airtight container for 2 days. Warm slightly before eating.",
    leadTime: "3 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "liver-training-treats",
    recipeId: "LIVER-BITES",
    name: "Liver Training Treats",
    audience: "pet",
    category: "pet-bakes",
    shortDescription:
      "Homemade liver training treats for dogs who know exactly how cute they are.",
    description:
      "Small homemade liver treats made for training, bribery, emotional manipulation, and dogs who deserve snacks.",
    ingredients: "Oats, cake flour, eggs, olive oil, chicken livers.",
    allergens: ["Gluten", "Eggs", "Oats"],
    buyingOptions: [
      {
        id: "100g-bag",
        label: "Treat Bag",
        quantityLabel: "100g bag",
        price: 20,
        batchPortion: null,
      },
      {
        id: "2x-100g-bags",
        label: "Double Treat Bag",
        quantityLabel: "2 × 100g bags",
        price: 38,
        batchPortion: null,
      },
    ],
    recipeCost: 66.64,
    pricingNotes:
      "You previously estimated around 9 × 100g bags plus one smaller leftover bag from a batch.",
    storage:
      "Store sealed. Refrigerate for longer freshness.",
    leadTime: "2 days notice",
    status: "active",
    featured: true,
    image: null,
  },
  {
    id: "pup-cake-classic",
    recipeId: "PUP-CAKE",
    name: "Pup Cake Classic",
    audience: "pet",
    category: "pet-bakes",
    shortDescription:
      "A dog-friendly celebration cake for very important dogs.",
    description:
      "A homemade dog-friendly pup cake for birthdays, gotcha days, or general spoiled-child behaviour.",
    ingredients:
      "Dog-safe ingredients based on the final tested recipe.",
    allergens: ["Peanuts", "Eggs", "Gluten"],
    buyingOptions: [
      {
        id: "single-pup-cake",
        label: "Single Pup Cake",
        quantityLabel: "1 small pup cake",
        price: 85,
        batchPortion: null,
      },
    ],
    recipeCost: 77.22,
    pricingNotes:
      "Priced as a small dog-friendly celebration cake made to order.",
    storage:
      "Refrigerate. Use within 2 days.",
    leadTime: "3 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "pup-cake-savoury",
    recipeId: "PUP-CAKE-SAV",
    name: "Pup Cake Savoury",
    audience: "pet",
    category: "pet-bakes",
    shortDescription:
      "A savoury dog-friendly celebration cake.",
    description:
      "A savoury pup cake option for dogs who prefer meat-and-veggie energy over sweet snacks.",
    ingredients:
      "Dog-safe savoury ingredients based on the final tested recipe.",
    allergens: ["Eggs", "Oats", "Soya"],
    buyingOptions: [
      {
        id: "single-pup-cake",
        label: "Single Pup Cake",
        quantityLabel: "1 small pup cake",
        price: 120,
        batchPortion: null,
      },
    ],
    recipeCost: 241.24,
    pricingNotes:
      "Priced as a savoury dog-friendly celebration cake with higher ingredient costs.",
    storage:
      "Refrigerate. Use within 2 days.",
    leadTime: "3 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "lemon-meringue-tart",
    recipeId: "LEMON-MERINGUE",
    name: "Lemon Meringue Tart",
    audience: "human",
    category: "tarts",
    shortDescription:
      "Sharp lemon, sweet meringue, full emotional drama.",
    description:
      "A lemon tart with a sweet meringue topping. Tart, sweet, and absolutely not subtle.",
    ingredients:
      "Cake flour, butter, sugar, eggs, lemon juice, lemon zest, cornstarch, cream of tartar.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "whole-tart",
        label: "Whole Tart",
        quantityLabel: "Serves approx. 8–10",
        price: 260,
        batchPortion: 1,
      },
    ],
    recipeCost: 298.84,
    pricingNotes:
      "Priced as a whole tart with a higher-cost lemon filling and meringue topping.",
    storage:
      "Refrigerate. Best within 2 days.",
    leadTime: "3–4 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "fresh-fried-donuts",
    recipeId: "DONUTS",
    name: "Fresh Fried Donuts",
    audience: "human",
    category: "comfort-bakes",
    shortDescription:
      "Fresh fried donuts. Soft, sweet, and not pretending to be healthy.",
    description:
      "Yeast-risen donuts fried fresh and rolled in sugar. Best eaten warm on the same day.",
    ingredients:
      "Bread flour, yeast, butter, eggs, milk, sugar, salt, oil for frying.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "standard-box",
        label: "Standard Donut Box",
        quantityLabel: "Approx. 6 donuts",
        price: 80,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 94.7,
    pricingNotes:
      "Priced for fresh-fried, same-day donut boxes.",
    storage:
      "Same-day only. Best eaten warm.",
    leadTime: "24h pre-order required",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "baked-mini-donuts",
    recipeId: "MINI-DONUTS",
    name: "Baked Mini Donuts",
    audience: "human",
    category: "comfort-bakes",
    shortDescription:
      "Cute baked mini donuts with warm bakery-box happiness.",
    description:
      "Small baked donuts, perfect for a treat box or party-style snack.",
    ingredients:
      "Cake flour, butter, eggs, milk, sugar, baking powder, flavouring.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "mini-box",
        label: "Mini Donut Box",
        quantityLabel: "Approx. 12 mini donuts",
        price: 65,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 65.89,
    pricingNotes:
      "Priced for baked mini donut boxes with small-batch finishing time included.",
    storage:
      "Best eaten fresh. Store airtight at room temperature.",
    leadTime: "2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
  {
    id: "homemade-custard",
    recipeId: "CUSTARD",
    name: "Homemade Custard",
    audience: "human",
    category: "extras",
    shortDescription:
      "Homemade custard add-on for selected comfort bakes.",
    description:
      "A rich custard add-on for puddings and comfort bakes.",
    ingredients:
      "Milk, sugar, eggs, cornstarch, vanilla.",
    allergens: ["Dairy", "Eggs"],
    buyingOptions: [
      {
        id: "small-jar",
        label: "Small Jar",
        quantityLabel: "Approx. 250ml",
        price: 35,
        batchPortion: 0.5,
      },
    ],
    recipeCost: 13.31,
    pricingNotes:
      "Priced as an add-on for selected puddings and comfort bakes.",
    storage:
      "Refrigerate immediately. Use within 4 days.",
    leadTime: "2 days notice",
    status: "active",
    featured: false,
    image: null,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "cookies", label: "Cookies" },
  { id: "comfort-bakes", label: "Comfort Bakes" },
  { id: "desserts", label: "Desserts" },
  { id: "tarts", label: "Tarts" },
  { id: "pet-bakes", label: "Pet Bakes" },
  { id: "extras", label: "Extras" },
];
