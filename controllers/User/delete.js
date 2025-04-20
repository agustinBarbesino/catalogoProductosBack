import User from "../../models/User.js"

let deleteOne = async (req, res, next) =>{
    try {
        let deleteUser = await User.deleteOne({
            name: req.body.name 
        })
        return res.status(200).json({
            response: deleteUser,
            message: "Succesfully Deleted"
        })  
    } catch (error) {
        next(error)
    }
}

let deleteMany = async (req, res, next) =>{
    try {
        let deleteUser = await User.deleteMany({
            name: req.body.name 
        })
        return res.status(200).json({
            response: deleteUser,
            message: "Succesfully Deleted"
        })
    } catch (error) {
        next(error)
    }
}

export {deleteOne, deleteMany}