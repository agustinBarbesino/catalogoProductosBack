import jwt from "jsonwebtoken"

const generateToken = (req, res, next) => {
    const token = jwt.sign(
        {email: req.body.email || req.user.email},
        process.env.SECRET,
        {expiresIn: 60 * 60 * 24}
    )
    req.token = token
    console.log(token);
    
    return next()
}

export default generateToken