import { z } from "zod";
import { productData } from "../../database/data.js";
import { ItemSchema } from "../models/productSchema.js";
import { errorResponse, successResponse } from "./responseController.js";
export const handleGetAllProduct = (req, res, next) => {
    try {
        successResponse(res, 200, "Products fetched successfully.", productData);
    }
    catch (error) {
        next(error);
    }
};
export const handleGetProductById = (req, res, next) => {
    try {
        const { id } = req.params;
        let product = null;
        productData.forEach((item) => {
            if (id === item.id) {
                product = item;
            }
        });
        if (!product) {
            return errorResponse(res, 404, "Product not found with this id.");
        }
        return successResponse(res, 200, "Product fetched successfully.", product);
    }
    catch (error) {
        next(error);
    }
};
export const handleCreateProduct = (req, res, next) => {
    try {
        const item = ItemSchema.parse(req.body);
        if (!item) {
            return errorResponse(res, 422, "Please, provide all the fields properly.");
        }
        productData.push(item);
        return successResponse(res, 201, "New product created successfully.", item);
    }
    catch (error) {
        next(error);
    }
};
export const handleUpdateProductById = (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedProduct = req.body;
        // Validate the updated product
        const parsedProduct = ItemSchema.parse(updatedProduct);
        let hasUpdated = false;
        productData.forEach((product) => {
            if (id === product.id) {
                // Update the properties of the existing product object
                Object.assign(product, parsedProduct);
                hasUpdated = true;
            }
        });
        if (!hasUpdated) {
            return errorResponse(res, 403, "Could not update product data.");
        }
        return successResponse(res, 200, "Product updated successfully.", parsedProduct);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            // Handle Zod validation errors
            return errorResponse(res, 400, error.errors.toString());
        }
        next(error);
    }
};
export const handleDeleteProductById = (req, res, next) => {
    try {
        const id = req.params.id;
        const productIndex = productData.findIndex((item) => item.id === id);
        if (productIndex === -1) {
            return errorResponse(res, 404, "Product not found.");
        }
        // Remove the product
        productData.splice(productIndex, 1);
        return successResponse(res, 200, "Product deleted successfully.", productData);
    }
    catch (error) {
        next(error);
    }
};
