import Product from "../../models/Product.js";
const createProduct = async (req, res, next) => {
    try {
        await Product.create(req.body);
        return res.status(201).json({ success: true });
    } catch (error) {
        next(error);
    }
}

const createManyProducts = async (req, res, next) => {
    try {
        await Product.insertMany(req.body.products);
        return res.status(201).json({ response: true });
    } catch (error) {
        next(error);
    }
}

export { createProduct, createManyProducts }