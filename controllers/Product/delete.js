import Product from "../../models/Product.js";

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json({ success: true });
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
