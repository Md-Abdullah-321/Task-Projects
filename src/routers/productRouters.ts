import express, { Router } from "express";
import {
  handleCreateProduct,
  handleDeleteProductById,
  handleGetAllProduct,
  handleGetProductById,
  handleUpdateProductById,
} from "../Controllers/productController.js";
/**
 * Title: Product Router
 * Description: Handle All Product Related Routers Here.
 * Author: Md Abdullah
 * Date: 28/06/2024
 */

const router: Router = express.Router();

//Routers:
router.get("/items", handleGetAllProduct);
router.get("/items/:id", handleGetProductById);
router.post("/items", handleCreateProduct);
router.put("/items/:id", handleUpdateProductById);
router.delete("/items/:id", handleDeleteProductById);

export default router;
