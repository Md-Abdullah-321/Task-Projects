import { z } from "zod";

const ItemSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  price: z.number().positive(),
  category: z.enum(["electronics", "clothing", "books", "food", "other"]),
  inStock: z.boolean(),
  createdAt: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  tags: z.array(z.string()).max(5).optional(),
  manufacturer: z
    .object({
      name: z.string(),
      country: z.string(),
    })
    .optional(),
});

type Item = z.infer<typeof ItemSchema>;

export { Item, ItemSchema };
