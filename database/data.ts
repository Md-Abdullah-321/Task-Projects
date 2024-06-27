export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: "electronics" | "clothing" | "books" | "food" | "other";
  inStock: boolean;
  createdAt: Date;
  tags?: string[];
  manufacturer?: {
    name: string;
    country: string;
  };
}

export const productData: Product[] = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-abcdefgh1234",
    name: "Handwoven Jamdani Sari",
    description:
      "A traditional Bangladeshi sari known for its intricate patterns and fine craftsmanship.",
    price: 299.99,
    category: "clothing",
    inStock: true,
    createdAt: new Date("2023-06-28T00:00:00.000Z"),
    tags: ["handicraft", "sari", "traditional", "clothing"],
    manufacturer: {
      name: "Craftsmen of Dhaka",
      country: "Bangladesh",
    },
  },

  {
    id: "5f4e3d2c-1b9a-8e7d-6f5c-4b3a2f1eabcd",
    name: "Bangladeshi Spice Mix - Garam Masala",
    description:
      "A blend of aromatic spices commonly used in Bangladeshi cuisine, known for its rich flavors.",
    price: 9.99,
    category: "food",
    inStock: true,
    createdAt: new Date("2023-06-28T00:00:00.000Z"),
    tags: ["spices", "food", "Bangladeshi cuisine"],
    manufacturer: {
      name: "Spice Masters Ltd.",
      country: "Bangladesh",
    },
  },
];
