import { Router } from "express";
import { allProducts, productsByName } from "../controllers/Product/read.js"
import { createProduct, createManyProducts } from "../controllers/Product/create.js"
import { deleteProduct, deleteManyProducts } from "../controllers/Product/delete.js"
import { updateProduct, updateManyProducts } from "../controllers/Product/update.js"

const productRouter = Router()

productRouter.get("/all", allProducts)
productRouter.post("/new", createProduct)
productRouter.put("/update", updateProduct)
productRouter.delete("/delete", deleteProduct)

export default productRouter