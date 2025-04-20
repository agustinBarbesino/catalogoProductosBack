import Product from "../../models/Product.js";

const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.deleteOne(
            { id: req.params.id });
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const deleteManyProducts = async (req, res, next) => {
    try {
        const product = await Product.deleteMany(
            { id: req.params.id });
        return res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

export { deleteProduct, deleteManyProducts }