import User from "../../models/User.js"

const signUp = async (req, res) => {
    try {
        let user = req.body
        user.onLine = false

        let create = await User.create(user)
        return res.status(201).json({
            response: create,
            message: "Registered Succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

export default signUp