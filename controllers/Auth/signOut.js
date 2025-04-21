import User from "../../models/User.js"

const signOut = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user._id, { inLine: false })
        return res.status(200).json({
            success: true,
            message: "Signed out successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default signOut
