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
  salePrice?: number | null;
  batchPortion?: number | null;
};

export type PricingOption = {
  id: string;
  label: string;
  quantity: number;
  type: string;
  normalPrice: number;
  launchPrice: number;
  salePrice: number;
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
  pricingOptions: PricingOption[] | null;
  storage: string;
  status: ProductStatus;
  favourite: boolean;
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
      "Soft, chewy cookies rolled in cinnamon sugar before baking. Warm, spiced, comforting.",
    ingredients:
      "Butter, white sugar, eggs, cake flour, baking soda, cream of tartar, salt, cinnamon.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    pricingOptions: [
      {
        id: "small",
        label: "Small Pack",
        quantity: 8,
        type: "cookies",
        normalPrice: 40,
        launchPrice: 35,
        salePrice: 30,
      },
      
      {
        id: "standard",
        label:  "Standard Pack",
        quantity: 12,
        type: "cookies",
        normalPrice: 55,
        launchPrice: 50,
        salePrice: 45,
      },
      
      {
        id:  "sharing",
        label: "Sharing Pack",
        quantity: 24,
        type: "cookies",
        normalPrice: 100,
        launchPrice: 90,
        salePrice: 85,
      },
    ],
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    status: "active",
    favourite: false,
    image: "/product-images/snickerdoodle-cookies.jpeg",
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
    pricingOptions: [
      {
        id: "small",
        label: "Small Pack",
        quantity: 8,
        type: "cookies",
        normalPrice: 40,
        launchPrice: 35,
        salePrice: 30,
      },
      
      {
        id: "standard",
        label:  "Standard Pack",
        quantity: 12,
        type: "cookies",
        normalPrice: 55,
        launchPrice: 50,
        salePrice: 45,
      },
      
      {
        id:  "sharing",
        label: "Sharing Pack",
        quantity: 24,
        type: "cookies",
        normalPrice: 100,
        launchPrice: 90,
        salePrice: 85,
      },
    ],
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    status: "hidden",
    favourite: false,
    image: "/product-images/choc-chip-cookies.jpeg",
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
    pricingOptions: [
      {
        id: "small",
        label: "Small Pack",
        quantity: 8,
        type: "cookies",
        normalPrice: 40,
        launchPrice: 35,
        salePrice: 30,
      },
      
      {
        id: "standard",
        label:  "Standard Pack",
        quantity: 12,
        type: "cookies",
        normalPrice: 55,
        launchPrice: 50,
        salePrice: 45,
      },
      
      {
        id:  "sharing",
        label: "Sharing Pack",
        quantity: 24,
        type: "cookies",
        normalPrice: 100,
        launchPrice: 90,
        salePrice: 85,
      },
    ],
    storage:
      "Store in an airtight container at room temperature for up to 5 days.",
    status: "active",
    favourite: false,
    image: "/product-images/peanutbutter-oatmeal-cookies.jpeg",
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
    pricingOptions: [
      {
        id: "small",
        label: "Small Pack",
        quantity: 8,
        type: "cookies",
        normalPrice: 40,
        launchPrice: 35,
        salePrice: 30,
      },
      
      {
        id: "standard",
        label:  "Standard Pack",
        quantity: 12,
        type: "cookies",
        normalPrice: 55,
        launchPrice: 50,
        salePrice: 45,
      },
      
      {
        id:  "sharing",
        label: "Sharing Pack",
        quantity: 24,
        type: "cookies",
        normalPrice: 100,
        launchPrice: 90,
        salePrice: 85,
      },
    ],
    storage:
      "Store in an airtight container at room temperature for up to 10 days.",
    status: "active",
    favourite: false,
    image: "/product-images/shortbread-cookies.jpeg",
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
    pricingOptions: [
      {
        id: "small",
        label: "Small Pack",
        quantity: 8,
        type: "cookies",
        normalPrice: 40,
        launchPrice: 35,
        salePrice: 30,
      },
      
      {
        id: "standard",
        label:  "Standard Pack",
        quantity: 12,
        type: "cookies",
        normalPrice: 55,
        launchPrice: 50,
        salePrice: 45,
      },
      
      {
        id:  "sharing",
        label: "Sharing Pack",
        quantity: 24,
        type: "cookies",
        normalPrice: 100,
        launchPrice: 90,
        salePrice: 85,
      },
    ],
    storage:
      "Store in an airtight container at room temperature for up to 7 days.",
    status: "active",
    favourite: false,
    image: "/product-images/crunchie-cookie.jpeg",
  },
  {
    id: "classic-brownies",
    recipeId: "BROWNIE-CLASSIC",
    name: "Classic Brownies",
    audience: "human",
    category: "comfort-bakes",
    shortDescription: "Dense, fudgy brownies that do not want to be healthy.",
    description:
      "Rich homemade brownies with a soft chocolatey middle. Real comfort food, no diet-culture nonsense.",
    ingredients:
      "Dark chocolate, butter, white sugar, eggs, cake flour, cocoa powder, vanilla, salt.",
    allergens: ["Gluten", "Dairy", "Eggs"],
    pricingOptions: [
      {
        id: "small",
        label: "Small Box",
        quantity: 4,
        type: "Brownies",
        normalPrice: 40,
        launchPrice: 45,
        salePrice: 55,
      },
      
      {
        id: "standard",
        label:  "Standard Box",
        quantity: 8,
        type: "brownies",
        normalPrice: 95,
        launchPrice: 85,
        salePrice: 80,
      },
      
      {
        id:  "large",
        label: "Large Box",
        quantity: 12,
        type: "brownies",
        normalPrice: 135,
        launchPrice: 125,
        salePrice: 120,
      },
      
    ],
    storage:
      "Store in an airtight container at room temperature for up to 4 days.",
    status: "active",
    favourite: false,
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
    pricingOptions: [
      {
        id: "small",
        label: "Small Box",
        quantity: 4,
        type: "rolls",
        normalPrice: 80,
        launchPrice: 70,
        salePrice: 65,
      },
      
      {
        id: "standard",
        label:  "Standard Box",
        quantity: 8,
        type: "rolls",
        normalPrice: 140,
        launchPrice: 125,
        salePrice: 115,
      },
      
      {
        id:  "large",
        label: "Large Box",
        quantity: 12,
        type: "rolls",
        normalPrice: 200,
        launchPrice: 180,
        salePrice: 170,
      },
    ],
    storage:
      "Room temperature in an airtight container for 2 days. Warm slightly before eating.",
    status: "active",
    favourite: false,
    image: null,
  },
  {
    id: "liver-training-treats",
    recipeId: "LIVER-BITES",
    name: "Liver Training Treats",
    audience: "pet",
    category: "pet-bakes",
    shortDescription:
      "Homemade liver training bites for dogs who know exactly how cute they are.",
    description:
      "Small homemade chicken liver bites made for training, bribery, emotional manipulation, and dogs who deserve snacks.",
    ingredients: "Oats, cake flour, eggs, olive oil, chicken livers.",
    allergens: ["Gluten", "Eggs", "Oats"],
    pricingOptions: [
      {
        id: "small",
        label: "Small Bag",
        quantity: 100,
        type: "gram bag",
        normalPrice: 20,
        launchPrice: 15,
        salePrice: 10,
      },
      
      {
        id: "medium",
        label:  "Medium Bag",
        quantity: 200,
        type: "gram bag",
        normalPrice: 30,
        launchPrice: 25,
        salePrice: 20,
      },
      
      {
        id:  "large",
        label: "Large Bag",
        quantity: 500,
        type: "gram bag",
        normalPrice: 60,
        launchPrice: 50,
        salePrice: 45,
      },
    ],
    storage: "Best stored frozen but Keep refrigerated for 4 days or freeze for up to 6 months. You CAN refreeze after thawed",
    status: "active",
    favourite: false,
    image: "/product-images/liver-training-treats.png",
  },
  {
    id: "pb-carrot-dog-treats",
    recipeId: "DOG-PB-CARROT-BISCUITS",
    name: "Peanut Butter Carrot Dog Biscuits",
    audience: "pet",
    category: "pet-bakes",
    shortDescription: "Homemade healthy dog biscuits for your pup",
    description:
      "Shaped biscuits made with peanutbutter and carrots that even the pickiest eaters cannot resist",
    ingredients:
      "Oats, cake flour, eggs, skim milk, dog-safe peanutbutter, carrots.",
    allergens: ["Gluten", "Eggs", "Oats"],
    pricingOptions: [
      {
        id: "small",
        label: "Small Bag",
        quantity: 100,
        type: "gram bag",
        normalPrice: 25,
        launchPrice: 20,
        salePrice: 15,
      },
      
      {
        id: "medium",
        label:  "Medium Bag",
        quantity: 200,
        type: "gram bag",
        normalPrice: 35,
        launchPrice: 30,
        salePrice: 25,
      },
      
      {
        id:  "large",
        label: "Large Bag",
        quantity: 500,
        type: "gram bag",
        normalPrice: 70,
        launchPrice: 60,
        salePrice: 55,
      },
    ],

    storage: "Keep refrigerated for 4 days or freeze for up to 6 months. Best kept frozen.",
    status: "active",
    favourite: false,
    image: "/product-images/pb-carrot-biscuits.jpeg",
  },

  // {
  //   id: "fresh-fried-donuts",
  //   recipeId: "DONUTS",
  //   name: "Fresh Fried Donuts",
  //   audience: "human",
  //   category: "comfort-bakes",
  //   shortDescription:
  //     "Fresh fried donuts. Soft, sweet, and not pretending to be healthy.",
  //   description:
  //     "Yeast-risen donuts fried fresh and rolled in sugar. Best eaten warm on the same day.",
  //   ingredients:
  //     "Bread flour, yeast, butter, eggs, milk, sugar, salt, oil for frying.",
  //   allergens: ["Gluten", "Dairy", "Eggs"],
  //   pricingOptions: [],
  //   storage: "Same-day only. Best eaten warm.",
  //   status: "active",
  //   favourite: false,
  //   image: null,
  // },
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
