# Product Management API

This project is a simple API for managing products using Express, TypeScript, and Zod for validation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Get All Products](#get-all-products)
  - [Get Product By ID](#get-product-by-id)
  - [Create Product](#create-product)
  - [Update Product By ID](#update-product-by-id)
  - [Delete Product By ID](#delete-product-by-id)
- [Data Schema](#data-schema)
- [Examples](#examples)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/product-management-api.git
   cd product-management-api

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Compile TypeScript:

   ```bash
   npm run build

   ```

4. Start the server:
   ```bash
   npm start or
   npm run dev for both compiling and running the node server.
   ```

## Usage

Send HTTP requests to the endpoints using a tool like Postman or curl.

## API Endpoints:

- Get All Products

  ```bash
  <ROOT_SERVER>/api/v1/items (GET)

  ```

- Get Product By ID

  ```bash
  <ROOT_SERVER>/api/v1/items/id  (GET)

  ```

- Create Product

  ```bash
  <ROOT_SERVER>/api/v1/items/  (POST)

  ```

- Update Product By ID

  ```bash
  <ROOT_SERVER>/api/v1/items/id  (PUT)

  ```

- Delete Product By ID
  ```bash
  <ROOT_SERVER>/api/v1/items/id  (DELETE)
  ```

## Data Schema

The Product schema is defined using Zod and TypeScript interfaces:

```bash
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
```

## Examples

Here are examples of product data:

```bash
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
 }
```
