import bcryptjs from "bcryptjs"

const isPasswordOk = (req, res, next) => {
    let password = req.body.password
    let passwordDB = req.user.password
    console.log(password)
    console.log(passwordDB)
    let compare = bcryptjs.compareSync(password, passwordDB)
    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Incorrect Password"
    })
}

export default isPasswordOk