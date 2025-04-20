import User from "../../models/User.js"

const updateUser = async (req, res, next) => {
    try {
        let user = req.body
        let update = await User.findOneAndUpdate(
            { name: user.name },
            { name: user.name, 
              email: user.email,
              password: user.password,
              inLine: user.inLine },
            {new: true}
        )
        return res.status(200).json({
            response: update,
            message: "Succesfully Updated"
        })
    } catch (error) {
        next(error)
    }
}

export default updateUser