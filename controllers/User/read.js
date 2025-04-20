import User from "../../models/User.js"

const allUsers = async (req,res,next) => {
    try {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }
        let all = await User.find(query)

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

const userByEmail = async (req,res,next) => {
    try {
        let { email } = req.query
        
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        let user = await User.find(email);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            response: user
        })

    } catch (error){
        next(error)
    }
}

export { allUsers, userByEmail }