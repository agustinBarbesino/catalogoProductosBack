import User from "../models/User.js"

const accountNoExists = async (req, res, next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if(account) {
            req.user = {
                name: account.name,
                email: account.email,
                address: account.address,
                phone: account.phone,
                password: account.password
            }
            console.log(req.user)
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })
    } catch (error) {
        next(error)
    }
}

export default accountNoExists