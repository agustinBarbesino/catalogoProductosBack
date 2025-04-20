import Product from "../../models/Product.js"

const allProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

const productsByName = async (req, res, next) => {
    try {
        const { nameId } = req.params
        const products = await Product.find({ name: nameId });
        return res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export { allProducts, productsByName }