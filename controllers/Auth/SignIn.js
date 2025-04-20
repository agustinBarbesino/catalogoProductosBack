import { token } from "morgan"
import User from "../../models/User.js"

const signIn = async (req, res) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email || req.user.email},
            {inLine: true}
        )
        return res.status(200).json({
            success: true,
            message: "Signed in successfully",
            user:{
                email: req.body.email
            },
            token: req.token
        })
            } catch (error) {
                next(error)
            }
    }

export default signIn