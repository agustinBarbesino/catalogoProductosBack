import Product from "../../models/Product.js";

const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.updateOne(
            { name: req.params.name },
            { $set: req.body }
        );
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const updateManyProducts = async (req, res, next) => {
    try {
        const product = await Product.updateMany(
            { name: req.params.name },
            { $set: req.body }
        );
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

export { updateProduct, updateManyProducts}