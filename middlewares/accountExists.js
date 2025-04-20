import User from "../models/User.js"

const accountExists = async (req, res, next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if(account) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}

export default accountExists